import { NextResponse } from "next/server";
import { Resend } from "resend";
import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";
import { z } from "zod";
import jwt from "jsonwebtoken";

// Ensure that critical environment variables are provided.
if (process.env.NODE_ENV === "production" && !process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET must be defined in production.");
}
if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY must be defined.");
}

// Instead of using a global `var`, use a custom property on globalThis via type assertion.
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };
const prisma = globalForPrisma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// Initialize the Resend email service.
const resend = new Resend(process.env.RESEND_API_KEY);

// Configure JWT – in production always provide a dedicated secret.
const JWT_SECRET = process.env.JWT_SECRET || "default_secret";

// Define the contact form input schema with Zod.
const ContactSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().email({ message: "A valid email is required." }),
  message: z.string().min(1, { message: "Message is required." }),
  website: z.string().optional(), // Honeypot field intended to trap bots.
});

// POST: Handle the contact form submission.
export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = ContactSchema.safeParse(json);

    if (!parsed.success) {
      // Provide validation error details (avoid exposing these in production).
      const errors = parsed.error.flatten();
      return NextResponse.json(
        { error: "Invalid input", details: errors },
        { status: 400 }
      );
    }

    const { name, email, message, website } = parsed.data;

    // Honeypot check: if the hidden field is filled, flag as bot.
    if (website && website.trim().length > 0) {
      return NextResponse.json({ error: "Bot detected" }, { status: 400 });
    }

    if (process.env.NODE_ENV !== "production") {
      console.log("📩 Contact received:", { name, email });
    }

    // Save the contact message to the database.
    await prisma.contactMessage.create({
      data: { name, email, message },
    });

    // Send a notification email via Resend.
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["mosusmoss@gmail.com"],
      subject: "New Contact Form Message",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}

// GET: Fetch contact messages (Admin-only)
export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_auth")?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
      jwt.verify(token, JWT_SECRET);
    } catch {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(messages);
  } catch (error) {
    console.error("❌ Error fetching messages:", error);
    return NextResponse.json(
      { error: "Failed to fetch messages" },
      { status: 500 }
    );
  }
}
