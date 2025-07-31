"use client";

import { useEffect, useState } from "react";
import { DownloadResume } from "../DownloadResume";
import { NavLink } from "../NavLink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MENU } from "@/utils/data";
import { useTheme } from "next-themes";



export const Header = () => {
    const [isMobileMenuOut, setIsMobileMenuOut] = useState<boolean>(false);
    const pathname = usePathname();

    // dark/light mode
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // to avoid mismatch between server and client
    useEffect(() => {
        setMounted(true);
    }, []);

    const handleToggleMobileMenu = () => {
        setIsMobileMenuOut(prev => !prev)
    }

    const handleCloseMobileMenuOut = () => {
        if (isMobileMenuOut) {
            setIsMobileMenuOut(false)
        }
    }

    if (!mounted) return null;

    return <>
        <header className="fixed top-0 left-0 w-full bg-white text-black/[.8] dark:bg-[#212121] dark:text-white/[.7] py-[10px] z-[20] border-b border-[#000]/[.1] dark:border-[#fff]/[.05]">
            <div className="max-w-[1300px] w-[95%] mx-auto">
                <div className="flex justify-between items-center">
                    <Link href="/" className="font-[700]">Dev&bull;Delz</Link>

                    <div className="flex items-center gap-[15px] md:gap-[30px]">
                        <nav className="items-center gap-[30px] hidden md:flex mr-[40px]">
                            {MENU.map(({ href, text }) => {
                                const isActive =
                                    href === "/"
                                        ? pathname === "/"
                                        : pathname.startsWith(href);

                                return (
                                    <NavLink
                                        key={href}
                                        href={href}
                                        text={text}
                                        type="next-link"
                                        className={`hover:text-[#00FF00] ${isActive ? "text-[#00FF00]" : ""}`}
                                    />
                                );
                            })}


                        </nav>

                        <DownloadResume />

                        <div className="text-[var(--background)] dark:text-[var(--white)] hover:text-[#00FF00] cursor-pointer" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                            {theme === "dark" ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                            </svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                                </svg>
                            }
                        </div>

                        <div className="block md:hidden text-[#000]/[.7] dark:text-white/[.7]" onClick={handleToggleMobileMenu}>
                            {isMobileMenuOut ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                </svg>}
                        </div>

                    </div>

                </div>
            </div>

        </header>

        {isMobileMenuOut && <>
            <div className="h-[44px]"></div>

            <div className="fixed top-[44px] left-0 w-full z-[12] h-[calc(100vh_-_44px)] bg-white/30 backdrop-blur-md">
                <div className="bg-black/[.09] dark:bg-black/[.7] w-full p-[20px]">
                    <p className="text-[#000]/[.7] dark:text-[#fff]/[.7] text-[14px]">
                        <strong>Main Navigation</strong> <br />
                        Interested in doing a project together? Feel free to reach out to me.
                    </p>
                </div>
                <div className="w-full p-[30px_20px] bg-black/[.8] dark:bg-black/[.8] flex flex-col gap-[10px]">
                    {MENU.map((item, i) => <Link key={i} href={item.href} className={`flex items-center justify-between ${pathname === item.href ? "text-[#00FF00]" : "text-white/[.7]"}`} onClick={handleCloseMobileMenuOut}>
                        {item.text}

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </Link>)}
                    <a href="/file.svg" className="flex items-center gap-[5px] text-white/[.7]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                        Resume
                    </a>
                </div>
            </div>
        </>}

    </>
};