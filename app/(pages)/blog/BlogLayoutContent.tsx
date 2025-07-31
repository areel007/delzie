"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useBlogPosts } from "@/contexts/blogPosts";
import { ArrowLeftStartOnRectangleIcon, PencilIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

type Props = {
    children: React.ReactNode;
};

const NAV = [
    { name: "all", link: "/blog" },
    { name: "fe", link: "/blog/fe" },
    { name: "be", link: "/blog/be" },
    { name: "mobile", link: "/blog/mobile" },
    { name: "write", link: "/blog/write" },
];

export default function BlogLayoutContent({ children }: Props) {
    const pathname = usePathname();
    const { blogPosts: blogs } = useBlogPosts();
    const router = useRouter();
    const { data: session, status } = useSession();

    const handleWriteBlog = () => {
        if (!session) {
            router.push("/signin");
        } else {
            router.push("/blog/write");
        }
    };

    const handleSignOut = async () => {
        await signOut();
        window.location.href = "/blog";
    }

    return (
        <main>
            <div className="h-[44px]" />
            <div>
                <div className="relative max-w-[800px] w-[90%] mx-auto h-full py-[15px] md:py-[30px] text-[#000]/[.7] dark:text-[#fff]/[.7]">
                    <div className="mb-[40px] md:mb-[60px]">
                        <h1 className="text-[24px] md:text-[30px] text-[#00ff00]">Blog</h1>
                        <p className="text-[14px] md:text-[16px]">
                            The latest Tech news, tutorials, and resources.
                        </p>
                    </div>

                    <div>
                        <nav className="h-[50px] flex items-center gap-[15px] border-b border-black/[.1] dark:border-white/[.1]">
                            {(blogs?.length ?? 0) > 0
                                ? NAV.map((item, i) => (
                                    <Link
                                        key={i}
                                        href={item.link}
                                        className={`text-[14px] font-[500] cursor-pointer h-full flex items-center capitalize ${item.link === pathname ? "border-b border-[#00ff00]" : ""
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                ))
                                : (
                                    <>
                                        <Link
                                            href="/blog"
                                            className={`text-[14px] font-[500] cursor-pointer h-full flex items-center capitalize ${"/blog" === pathname ? "border-b border-[#00ff00]" : ""
                                                }`}
                                        >
                                            All
                                        </Link>

                                        <Link
                                            href="/blog/write"
                                            className={`text-[14px] font-[500] cursor-pointer h-full flex items-center capitalize ${pathname.startsWith("/blog/write") ? "border-b border-[#00ff00]" : ""
                                                }`}
                                        >
                                            Write
                                        </Link>
                                    </>
                                )}


                        </nav>
                    </div>

                    <div
                        className="fixed top-[80vh] right-[40px] md:right-[200px] z-[20] w-[40px] h-[40px] rounded-full bg-[#00ff00] flex justify-center items-center cursor-pointer"
                        onClick={session ? handleSignOut : handleWriteBlog}
                    >
                        {session ? <ArrowLeftStartOnRectangleIcon className="size-5 text-black/[.7] shadow-lg" /> : <PencilIcon className="size-5 text-black/[.7] shadow-lg" />}
                    </div>
                </div>
            </div>
            {children}
        </main>
    );
}