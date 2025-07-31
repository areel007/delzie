"use client";

import Image from "next/image";
import { BlogPost } from "@/types/blogs";

type TMobileClientProps = {
    blogs: BlogPost[];
    category: string;
}

export default function InnerBlogLayout({ blogs, category }: TMobileClientProps) {



    return (
        <div className="max-w-[800px] w-[90%] mx-auto mb-[40px] min-h-[50vh] text-[#000]/[.7] dark:text-[#fff]/[.7]">
            {blogs && blogs.length > 0 ? (
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[40px]">
                    {blogs.map((blog, i) => (
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

                            <p>{blog.title}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No blog posts yet for {category}. Check back later.</p>
            )}
        </div>
    );
}
