// app/api/blogs/[id]/route.ts

import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Blogs from "@/models/blogs";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectToDatabase();

  try {
    // Await params before accessing its properties
    const { id } = await params;
    const blog = await Blogs.findById(id);

    if (!blog) {
      return NextResponse.json({ error: "Blog not found." }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog." },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectToDatabase();

  try {
    // Await params before accessing its properties
    const { id } = await params;
    await Blogs.findByIdAndUpdate(id, { $inc: { clap: 1 } });

    return NextResponse.json({ message: "Blog updated successfully." });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { error: "Failed to update blog." },
      { status: 500 }
    );
  }
}
