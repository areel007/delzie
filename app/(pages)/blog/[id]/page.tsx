"use client";

import { useParams } from "next/navigation";
import SingleBlogLayout from "./BlogLayout";
import { useEffect, useState } from "react";
import { BlogPost } from "@/types/blogs";
import { API } from "@/lib/axios";



export default function BlogPage() {
    const { id } = useParams();
    const [blogPost, setBlogPost] = useState<BlogPost | undefined>(undefined);
    const [clapActive, setClapActive] = useState<boolean>(false);

    const fetchBlogPost = async () => {
        try {
            const res = await API.get(`/api/blogs/${id}`);
            setBlogPost(res.data);

        } catch (error) {
            console.log(error);
        }
    }

    const handleIncreaseClap = async () => {
        try {
            await API.patch(`/api/blogs/${id}`);
            fetchBlogPost();

            setClapActive(true);
            localStorage.setItem(`clap-${blogPost?._id}`, (blogPost?.clap as number + 1).toString() || "0");

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchBlogPost();
    }, []);

    useEffect(() => {
        // This should run after blogPost is loaded or when id changes
        if (id) {
            const saved = localStorage.getItem(`clap-${id}`);
            console.log(saved);

            if (saved) {
                setClapActive(JSON.parse(saved));
            }
        }
    }, [id]);


    return (
        <SingleBlogLayout blogPost={blogPost} increaseClap={handleIncreaseClap} clapActive={clapActive} />
    )
}