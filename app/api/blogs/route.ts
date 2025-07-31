import { NextResponse, NextRequest } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Blogs from "@/models/blogs";

import {
  v2 as cloudinary,
  UploadApiResponse,
  UploadApiErrorResponse,
} from "cloudinary";
import { Readable } from "stream";
import { readableWebStreamToNode } from "@/utils/readableWebStreamToNode";
import { BlogPost } from "@/types/blogs";

// Types
interface BlogFilter {
  category?: string;
}

interface BlogsApiResponse {
  data: BlogPost[]; // Replace with your Blog type from @/types/blogs
  page: number;
  totalPages: number;
  total: number;
}

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function streamToBuffer(stream: Readable): Promise<Buffer> {
  return new Promise<Buffer>((resolve, reject) => {
    const chunks: Buffer[] = [];
    stream.on("data", (chunk: Buffer) => chunks.push(chunk));
    stream.on("end", () => resolve(Buffer.concat(chunks)));
    stream.on("error", reject);
  });
}

// get all blog posts
export async function GET(
  req: NextRequest
): Promise<NextResponse<BlogsApiResponse | { error: string }>> {
  await connectToDatabase();

  const { searchParams } = new URL(req.url);

  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const category = searchParams.get("category");

  const filter: BlogFilter = {};
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
export async function POST(req: NextRequest): Promise<NextResponse> {
  await connectToDatabase();

  try {
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

    // Validate required fields
    if (!title || !markdown || !author || !category) {
      return NextResponse.json(
        { error: "Missing required fields: title, markdown, author, category" },
        { status: 400 }
      );
    }

    const nodeStream = readableWebStreamToNode(file.stream());

    const uploadedImage: UploadApiResponse =
      await new Promise<UploadApiResponse>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: "blogs" },
          (
            error: UploadApiErrorResponse | undefined,
            result: UploadApiResponse | undefined
          ) => {
            if (error) return reject(error);
            if (!result) return reject(new Error("Upload failed - no result"));
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
      clap: parseInt(clap) || 0, // Convert to number with fallback
      category,
    });

    return NextResponse.json(blog, { status: 201 });
  } catch (error) {
    console.error("Error creating blog post:", error);
    return NextResponse.json(
      { error: "Failed to create blog post" },
      { status: 500 }
    );
  }
}
