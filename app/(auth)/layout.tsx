import type { Metadata } from "next";
import "../globals.css";
import { Providers } from "../providers"

export const metadata: Metadata = {
    title: "Sunday Morenikeji - DevDelz",
    description: "Sign in to write blog",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`antialiased`}
            >
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
