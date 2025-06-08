import OpenAI from 'openai';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { z } from 'zod';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

// Define the input schema using Zod
const SuggestionInputSchema = z.object({
  data: z.any(), // You can later replace this with a more specific shape if needed
});

export async function POST(req: Request) {
  try {
    // Check if the request is coming from an admin
    const cookieStore = await cookies();
    const isAdmin = cookieStore.get("admin_auth")?.value === "true";
    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Parse and validate the request body
    const body = await req.json();
    const parseResult = SuggestionInputSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json({ error: "Invalid request payload" }, { status: 400 });
    }

    const { data } = parseResult.data;

    // Construct the prompt for the AI
    const prompt = `Based on the following project details, provide AI-powered suggestions to enhance the project:\n\n${JSON.stringify(data, null, 2)}`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are an expert web development strategist.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: 300,
    });

    const suggestionText = completion.choices[0]?.message?.content;

    return NextResponse.json({
      suggestions: suggestionText ?? 'No suggestions available.',
    });
  } catch (error) {
    console.error('AI Suggestion Error:', error);
    return NextResponse.json({ error: 'Failed to fetch AI suggestions.' }, { status: 500 });
  }
}
