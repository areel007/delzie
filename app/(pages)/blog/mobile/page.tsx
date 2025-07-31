"use client";

import { useEffect, useState } from "react";
import { BlogPost } from "@/types/blogs";
import { API } from "@/lib/axios";
import InnerBlogLayout from "@/components/layouts/InnerBlogLayout";

export default function Mobile() {

    const [limit, setLimit] = useState<number>(10);
    const [page, setPage] = useState<number>(1);

    const handleLimit = (limit: number) => {
        setLimit(limit);
        setPage(1);
    }

    const handleNextPage = () => {
        setPage(prev => prev + 1);
    }

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(prev => prev - 1);
        }
    }

    const [blogs, setBlogs] = useState<BlogPost[]>([]);

    const fetchMobileBlogs = async () => {
        try {
            const res = await API.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs?category=mobile&page=${page}&limit=${limit}`);
            setBlogs(res.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchMobileBlogs();
    }, [page, limit]);



    return (
        <>
            <InnerBlogLayout blogs={blogs} category="mobile" />
            <div className="max-w-[800px] w-[90%] mx-auto mb-[40px] flex items-center gap-[10px]">
                {page > 1 && <div className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer bg-black/[.7] text-white/[.7] dark:bg-black/[.7] dark:text-white/[.7] select-none" onClick={handlePrevPage}>
                    &lt;
                </div>}

                {blogs.length > 0 && Array.from({ length: Math.ceil(blogs.length / limit) }, (_, index) => (
                    <div key={index} className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer bg-black/[.7] text-white/[.7] dark:bg-black/[.7] dark:text-white/[.7] select-none" onClick={() => handleLimit(limit * (index + 1))}>
                        {index + 1}
                    </div>
                ))}

                {page < blogs.length / limit && <div className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer bg-black/[.7] text-white/[.7] dark:bg-black/[.7] dark:text-white/[.7] select-none" onClick={handleNextPage}>
                    &gt;
                </div>}
            </div>


        </>

    );
}
