"use client";
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { BlogPost } from "@/types/blogs";

type BlogPostsContextType = {
    blogPosts: BlogPost[];
    setBlogPosts: Dispatch<SetStateAction<BlogPost[]>>;
};


const BlogPostsContext = createContext<BlogPostsContextType | undefined>(undefined);

export const BlogPostsProvider = ({
    children,
    initialPosts = [],
}: {
    children: React.ReactNode;
    initialPosts?: BlogPost[];
}) => {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>(initialPosts);

    return (
        <BlogPostsContext.Provider value={{ blogPosts, setBlogPosts }}>
            {children}
        </BlogPostsContext.Provider>
    );
};

export const useBlogPosts = () => {
    const context = useContext(BlogPostsContext);
    if (!context) {
        throw new Error("useBlogPosts must be used within a BlogPostsProvider");
    }
    return context;
};
