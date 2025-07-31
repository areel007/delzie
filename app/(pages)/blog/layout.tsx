import { BlogPostsProvider } from "@/contexts/blogPosts";
import BlogLayoutContent from "./BlogLayoutContent";
import { BlogPost } from "@/types/blogs";

type Props = {
    children: React.ReactNode;
};

type BlogApiResponse = {
    data: BlogPost[];
    page: number;
    totalPages: number;
    total: number;
};

async function getInitialBlogs(): Promise<BlogPost[]> {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs`, {
        cache: "no-store",
    });

    if (!res.ok) {
        return []; // fallback if fetch fails
    }

    const result: BlogApiResponse = await res.json();
    return result.data;
}

export default async function BlogRootLayout({ children }: Props) {
    const initialBlogs = await getInitialBlogs();

    return (
        <BlogPostsProvider initialPosts={initialBlogs}>
            <BlogLayoutContent>{children}</BlogLayoutContent>
        </BlogPostsProvider>
    );
}
