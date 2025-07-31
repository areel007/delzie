import { BlogSkeleton } from "@/components/layouts/BlogSkeleton";
import { BlogPost } from "@/types/blogs";
import { formatDate } from "@/utils/date";
import { HandThumbUpIcon } from "@heroicons/react/24/solid";

type TSingleBlogProps = {
    blogPost: BlogPost | undefined;
    increaseClap: () => void;
    clapActive: boolean;
}

export default function SingleBlogLayout({ blogPost, increaseClap, clapActive }: TSingleBlogProps) {

    if (!blogPost) return (
        <div className="max-w-[800px] w-[90%] mx-auto mb-[40px] flex flex-col gap-[20px]">
            <BlogSkeleton />
        </div>
    );

    return (
        <div className="min-h-[60vh] text-black/[.7] dark:text-white/[.7]">
            <div className="max-w-[800px] w-[90%] mx-auto mb-[40px] flex flex-col gap-[20px]">
                <h1 className="capitalize font-[600] text-[24px] md:text-[40px]">{blogPost?.title}</h1>

                <div className="flex items-center gap-[10px]">
                    <div className="flex gap-[10px] items-center">
                        <div className="w-[30px] h-[30px] bg-[#00ff00] flex justify-center items-center">
                            <span className="text-[20px] font-[600]">{blogPost?.author[0].toUpperCase()}</span>
                        </div>

                        <span className="text-[14px] md:text-[16px] capitalize">{blogPost?.author}</span>
                    </div>

                    <span>&bull;</span>

                    <span className="text-[14px] md:text-[16px]">{formatDate(blogPost?.createdAt)}</span>
                </div>

                <div className="flex items-center gap-[10px]" onClick={increaseClap}>
                    <HandThumbUpIcon className={`size-5 cursor-pointer animate-bounce hover:animate-none ${clapActive && "text-[#00ff00]"}`} />
                    <span>{blogPost?.clap}</span>
                </div>

                <img src={blogPost?.image} alt={blogPost?.title} className="w-full h-[150px] md:h-[300px] object-cover" />

                <div dangerouslySetInnerHTML={{ __html: blogPost?.markdown || "" }} className="text-[14px] md:text-[16px]" />

            </div>
        </div>
    )
}