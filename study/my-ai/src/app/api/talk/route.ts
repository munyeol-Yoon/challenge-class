import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openAIsecretKey = process.env.OPEN_AI_SECRET_KEY;

export async function POST(request: NextRequest) {
  const { content } = await request.json();

  const openai = new OpenAI({
    apiKey: openAIsecretKey,
  });

  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "너는 20년지기 친구야. 친근하게 반말을 쓰는 편이야.",
      },
      { role: "user", content },
    ],
    model: "gpt-3.5-turbo",
  });

  const response = chatCompletion.choices[0].message.content;

  const a = await openai.images.generate({
    prompt: content,
    model: "dall-e-3",
  });

  // const audio = await openai.audio.speech.create({
  //   input: response!,
  //   model: "tts-1-hd",
  //   voice: "alloy",
  //   response_format: "wav",
  // });

  // const arrayBuffer = await audio.arrayBuffer();
  // await writeFileSync("./audio.wav", Buffer.from(arrayBuffer));

  // return NextResponse.json(response);
  return NextResponse.json({ url: a.data[0].url });
}
