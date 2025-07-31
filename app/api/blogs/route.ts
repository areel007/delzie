import { NextResponse, NextRequest } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Blogs from "@/models/blogs";

import { v2 as cloudinary } from "cloudinary";
import { Readable } from "stream";
import { readableWebStreamToNode } from "@/utils/readableWebStreamToNode";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function streamToBuffer(stream: Readable) {
  return new Promise<Buffer>((resolve, reject) => {
    const chunks: Buffer[] = [];
    stream.on("data", (chunk) => chunks.push(chunk));
    stream.on("end", () => resolve(Buffer.concat(chunks)));
    stream.on("error", reject);
  });
}

// get all blog posts
export async function GET(req: NextRequest) {
  await connectToDatabase();

  const { searchParams } = new URL(req.url);

  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const category = searchParams.get("category");

  const filter: any = {};
  if (category) {
    filter.category = category;
  }

  const skip = (page - 1) * limit;

  try {
    const blogs = await Blogs.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Blogs.countDocuments(filter);
    const totalPages = Math.ceil(total / limit);

    return NextResponse.json({
      data: blogs,
      page,
      totalPages,
      total,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}

// create blog post
export async function POST(req: NextRequest) {
  await connectToDatabase();

  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "No file" }, { status: 400 });
  }

  const title = formData.get("title") as string;
  const markdown = formData.get("markdown") as string;
  const author = formData.get("author") as string;
  const clap = formData.get("clap") as string;
  const category = formData.get("category") as string;

  const nodeStream = readableWebStreamToNode(file.stream());

  const uploadedImage: any = await new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: "blogs" },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );

    nodeStream.pipe(uploadStream);
  });

  const blog = await Blogs.create({
    title,
    markdown,
    image: uploadedImage.secure_url,
    author,
    clap,
    category,
  });

  return NextResponse.json(blog, { status: 201 });
}
