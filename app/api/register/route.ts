import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/user";
import { hash } from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  await connectToDatabase();

  const existingUser = await User.findOne({ email });
  if (existingUser) return new Response("User already exists", { status: 400 });

  const hashedPassword = await hash(password, 10);

  await User.create({ email, password: hashedPassword });

  return NextResponse.json("User registered successfully", { status: 201 });
}
