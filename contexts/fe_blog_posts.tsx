"use client";
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { BlogPost } from "@/types/blogs";

type FeBlogPostsContextType = {
    feBlogPosts: BlogPost[];
    setfeBlogPosts: Dispatch<SetStateAction<BlogPost[]>>;
};


const FeBlogPostsContext = createContext<FeBlogPostsContextType | undefined>(undefined);

export const BlogPostsProvider = ({
    children,
    initialPosts = [],
}: {
    children: React.ReactNode;
    initialPosts?: BlogPost[];
}) => {
    const [feBlogPosts, setfeBlogPosts] = useState<BlogPost[]>(initialPosts);

    return (
        <FeBlogPostsContext.Provider value={{ feBlogPosts, setfeBlogPosts }}>
            {children}
        </FeBlogPostsContext.Provider>
    );
};

export const useBlogPosts = () => {
    const context = useContext(FeBlogPostsContext);
    if (!context) {
        throw new Error("useBlogPosts must be used within a BlogPostsProvider");
    }
    return context;
};
