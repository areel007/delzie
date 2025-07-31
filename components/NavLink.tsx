"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type TNavLinkProps = {
    href: string;
    text?: string;
    type?: "a-tag" | "next-link";
    icon?: React.ReactNode;
    className?: string;
};

export const NavLink = ({
    href,
    text,
    type = "next-link", // default type
    icon,
    className
}: TNavLinkProps) => {
    const pathname = usePathname();

    const baseClasses = "text-[14px] font-[500]";

    // Highlight if current route matches href
    const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

    if (type === "a-tag") {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-[10px] group ${className} ${baseClasses}`}
            >
                {icon && icon}
                <span className="group-hover:underline">
                    {text}
                </span>
            </a>
        );
    }

    return (
        <Link
            href={href}
            className={`flex items-center justify-center gap-[2px] ${className} ${baseClasses}`}
        >
            {isActive && (
                <span className="text-[#00FF00] animate-pulse">_</span>
            )}
            <span className={`${isActive} ? "animate-pulse" : ""`}>
                {text || "Link Text"}
            </span>
        </Link>
    );
};
