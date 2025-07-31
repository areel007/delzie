"use client";

import { Button } from "@/components/Button";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        if (res?.ok) router.push("/blog/write");
        else alert("Login failed");
    };

    return (
        <div className="h-[100vh] w-[100vw] flex justify-center pt-[20%] md:pt-[10%]">
            <form onSubmit={handleLogin} className="w-[90%] max-w-[350px] mx-auto">
                <div className="mb-[20px]">
                    <div className="flex items-center gap-[10px]">
                        <ArrowLongLeftIcon className="size-5 hover:text-[#00ff00] cursor-pointer" onClick={() => router.push("/blog")} />
                        <h1 className="text-[20px] md:text-[28px]">Sign In</h1>
                    </div>
                    <p className="text-[14px] md:text-[16px] text-zinc-400">Only admin can write blog.</p>
                </div>

                <div className="flex flex-col gap-[10px]">
                    <input type="email" placeholder="email..." value={email} onChange={(e) => setEmail(e.target.value)} className="p-[5px] border border-black/[.7] dark:border-white/[.2]" />
                    <input type="password" placeholder="password..." value={password} onChange={(e) => setPassword(e.target.value)} className="p-[5px] border border-black/[.7] dark:border-white/[.2]" />
                    <Button type="submit" text="Sign In" className="bg-[#00ff00] px-[20px] py-[5px] text-black" />
                </div>
            </form>
        </div>
    );
}