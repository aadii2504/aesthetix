import { url } from "inspector";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    const {prompt} = await request.json();
    function generateRandomSeed(): number {
        return Math.floor(Math.random() * 100000000) + 1
    }
    const randomSeed = generateRandomSeed();
    const imageURL = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}&seed=${randomSeed}`;
    await fetch(imageURL);
    return NextResponse.json({url: imageURL});
}