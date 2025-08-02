"use client";

import { Button } from "@/components/Button";
import { GitLogo, JSLogo, NextJSLogo, NodeJSLogo, ReactJSLogo, TailwindCSSLogo, TypescriptLogo, VueJSLogo } from "@/components/StackLogo";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AboutPage() {

    const navigation = useRouter();

    const handleGoToProjects = () => {
        navigation.push("/projects")
    }

    return (
        <main>
            <div className="h-[44px]"></div>
            <div className="">
                <div className="h-full max-w-[1300px] w-[90%] mx-auto py-[40px] md:py-[60px]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] mb-[40px] md:mb-[100px]">
                        <div className="text-[#000]/[.7] dark:text-[#fff]/[.7] w-full p-[20px] bg-[#000]/[.03] dark:bg-[#fff]/[.09] rounded hover:bg-[#fff]/[.2] transition duration-[.5s]">
                            <h2 className="font-[700] text-[#00ff00] text-[16px] md:text-[18px] mb-[0px]">Backend: Express.js & Node.js</h2>
                            <p className="">
                                Proficient in functional and OOP with TypeScript, JavaScript, and Python.
                            </p>
                        </div>

                        <div className="text-[#000]/[.7] dark:text-[#fff]/[.7] w-full p-[20px] bg-[#000]/[.03] dark:bg-[#fff]/[.09] rounded hover:bg-[#fff]/[.2] transition duration-[.5s]">
                            <h2 className="font-[700] text-[#00ff00] text-[16px] md:text-[18px] mb-[0px]">Frontend: React, Next.js, Vue</h2>
                            <p>
                                4+ years crafting responsive interfaces with a strong focus on UI/UX.
                            </p>
                        </div>

                        <div className="text-[#000]/[.7] dark:text-[#fff]/[.7] w-full p-[20px] bg-[#000]/[.03] dark:bg-[#fff]/[.09] rounded hover:bg-[#fff]/[.2] transition duration-[.5s]">
                            <h2 className="font-[700] text-[#00ff00] text-[16px] md:text-[18px] mb-[0px]">Mobile: Beginner in Flutter / Dart</h2>
                            <p>
                                Exploring hybrid and cross‑platform app development.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[100px] items-center mb-[40px] md:mb-[100px]">
                        <div className="flex justify-center items-center">
                            <div className="w-[250px] md:w-[350px] h-[250px]md:h-[350px] rounded-full bg-black">
                                <Image src="/images/sunday_linkedin.jpeg" alt="sunday morenikeji profile picture" width={100} height={100} className="w-full h-full object-cover rounded-full grayscale" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <h1 className="text-[20px] md:text-[24px] text-[#00ff00]">About Me</h1>
                            <p className="text-[16px] text-[#000]/[.8] dark:text-white/[.7] leading-[1.6]">
                                I&apos;m a Full‑Stack Web Developer with 4+ years of experience building and deploying scalable, secure web applications. I&apos;m also growing my skills in mobile development. Let&apos;s connect and see how I can add value to your team or project!


                            </p>

                            <Button text="my projects" className="bg-[#000]/[.8] text-white dark:text-[#fff]/[.7] dark:bg-white/[.1] px-[20px] py-2 rounded-full hover:bg-[#000]/[.5] dark:hover:bg-white/[.2]" href="/projects" type="button" onClick={handleGoToProjects} />
                        </div>
                    </div>

                    <div className="pt-[40px] md:pt-[60px]">
                        <p className="text-[20px] md:text-[24px] text-center text-[#00ff00] mb-[20px] md:mb-[40px]">Stack</p>

                        <div className="logos">
                            <div className="logos-slide">
                                <NextJSLogo />
                                <NodeJSLogo />
                                <ReactJSLogo />
                                <TypescriptLogo />
                                <GitLogo />
                                <JSLogo />
                                <VueJSLogo />
                                <TailwindCSSLogo />
                                {/* 2 */}
                                <NextJSLogo />
                                <NodeJSLogo />
                                <ReactJSLogo />
                                <TypescriptLogo />
                                <GitLogo />
                                <JSLogo />
                                <VueJSLogo />
                                <TailwindCSSLogo />
                            </div>

                            <div className="logos-slide">
                                <NextJSLogo />
                                <NodeJSLogo />
                                <ReactJSLogo />
                                <TypescriptLogo />
                                <GitLogo />
                                <JSLogo />
                                <VueJSLogo />
                                <TailwindCSSLogo />
                                {/* 2 */}
                                <NextJSLogo />
                                <NodeJSLogo />
                                <ReactJSLogo />
                                <TypescriptLogo />
                                <GitLogo />
                                <JSLogo />
                                <VueJSLogo />
                                <TailwindCSSLogo />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </main>
    )
}