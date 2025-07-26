"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
    {
        name: "all",
        link: "/blog",
    },
    {
        name: "tutorials",
        link: "/blog/tutorial",
    }
]

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();

    const blogPosts = [];


    return (
        <main>
            <div className="h-[44px]"></div>
            <div className="">
                <div className="max-w-[800px] w-[90%] mx-auto h-full py-[15px] md:py-[30px] text-[#000]/[.7] dark:text-[#fff]/[.7]">
                    <div className="mb-[40px] md:mb-[60px]">
                        <h1 className="text-[24px] md:text-[30px] text-[#00ff00]">Blog</h1>
                        <p className="text-[14px] md:text-[16px]">The latest Tech news, tutorials, and resources.</p>
                    </div>

                    <div className="">
                        <nav className="h-[50px] flex items-center gap-[15px] border-b border-black/[.1] dark:border-white/[.1]">
                            {blogPosts.length > 0 ? NAV.map((item, i) => <Link key={i} href={item.link} className={`text-[14px] font-[500] cursor-pointer h-full flex items-center capitalize text- ${item.link === pathname ? "border-b border-[#00ff00]" : ""}`}>{item.name}</Link>) : <Link href="/blog" className={`text-[14px] font-[500] cursor-pointer h-full flex items-center capitalize text- ${"/blog" === pathname ? "border-b border-[#00ff00]" : ""}`}>All</Link>}

                        </nav>
                    </div>
                </div>
            </div>
            {children}
        </main>
    );
}
