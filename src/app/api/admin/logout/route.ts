import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = NextResponse.json({ success: true });
    response.cookies.set("admin_auth", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 0, // Clear the cookie immediately
    });
    return response;
  } catch (error) {
    console.error("Error in admin logout:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
