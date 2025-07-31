import type { Metadata } from "next";
import "../globals.css";
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import { Providers } from "../providers"
import AuthProvider from "@/components/AuthProvider";

export const metadata: Metadata = {
  title: "Sunday Morenikeji - DevDelz",
  description: "A fullstack MERN, MEVN Stack Developer",
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
        <AuthProvider>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
