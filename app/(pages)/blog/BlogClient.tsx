"use client";

import Image from "next/image";
import { useBlogPosts } from "@/contexts/blogPosts";
import Link from "next/link";


export default function BlogClient() {

    const { blogPosts: blogs } = useBlogPosts();

    return <div className="max-w-[800px] w-[90%] mx-auto mb-[40px] min-h-[50vh] text-[#fff]">
        {blogs && blogs.length > 0 ? <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[40px]">
            {blogs.map((blog, i) => <Link href={`/blog/${blog._id}`} key={i} className="relative">
                <div key={i} className="relative">
                    <div className="w-full relative h-[200px] flex justify-center items-center before:absolute before:inset-0 before:bg-black/50 before:z-10 mb-[10px]">
                        <Image
                            src={blog.image}
                            alt={blog.title}
                            width={500}
                            height={300}
                            className="w-full h-full object-cover absolute inset-0"
                        />
                        <div className="relative w-[80%] mx-auto z-[11]">
                            <p className="text-center text-[12px]">{blog.title}</p>
                        </div>
                    </div>

                    <p className="text-black/[.7] dark:text-white/[.7]">{blog.title}</p>
                </div>
            </Link>)}





        </div> : <p>No blog posts yet. Check back later</p>}
    </div>
}