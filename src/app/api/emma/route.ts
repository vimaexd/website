import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    emma: true,
    image: "https://cdn.mae.wtf/landing/emma.png",
    meow: "meow"
  })
}