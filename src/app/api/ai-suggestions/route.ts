import OpenAI from "openai";
import { NextResponse } from "next/server";
import { z } from "zod";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

// Define the input schema using Zod
const SuggestionInputSchema = z.object({
  data: z.any(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parseResult = SuggestionInputSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        { error: "Invalid request payload" },
        { status: 400 }
      );
    }

    const { data } = parseResult.data;

    // Construct the prompt for the AI
    const prompt = `Based on the following project details, provide AI-powered suggestions to enhance the project:\n\n${JSON.stringify(data, null, 2)}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are an expert web development strategist.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 350,
    });

    const suggestionText = completion.choices[0]?.message?.content;

    return NextResponse.json({
      suggestions: suggestionText ?? "No suggestions available.",
    });
  } catch (error) {
    console.error("AI Suggestion Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch AI suggestions." },
      { status: 500 }
    );
  }
}
