"use client";

import { Button } from "@/components/Button";
import { TypeWriter } from "@/components/TypeWriter";
import Image from "next/image";
import { useRouter } from "next/navigation"

export default function Home() {
  const navigate = useRouter();

  const handleHireMe = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined, href?: string) => {
    navigate.push(href as string);
  }
  return (
    <main>
      <div className="h-[44px]"></div>
      <div className="">
        <div className="h-full max-w-[1300px] w-[90%] mx-auto py-[40px] md:py-[60px] grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[100px]">
          <div className="h-full flex flex-col justify-center gap-[15px] md:gap-[20px]">
            <h1 className="text-[26px] md:text-[46px] lg:text-[50px] leading-[1.2] md:leading-[1] text-[#000]/[.8] dark:text-[#fff] capitalize">
              <code className="lowercase"><span className="text-[#00ff00]">let</span> ideas:<span className="text-[#00ff00]">string;</span> <br /> ideas=&quot;ace designs&quot; <br />console.log(ideas);</code>
            </h1>
            <div className="text-[#000]/[.7] dark:text-[#fff]/[.7]">
              <TypeWriter />
            </div>
            <p className="dark:text-white/[.7] text-[14px] md:text-[16px] leading-[1.6]">
              Need a developer? I build software that solves practical problems and creates seamless, impactful digital experiences.
            </p>
            <div className="flex flex-col md:flex-row gap-[10px] md:gap-[20px]">
              <Button href="/contact" onClick={(e) => handleHireMe(e, "/contact")} text="hire me" type="button" className="bg-[#000]/[.6] dark:bg-white/[.1] text-white px-[40px] py-2 rounded-full hover:bg-[#000]/[.4] dark:hover:bg-white/[.2] transition duration-[.5s]" />

              <a href="https://wa.me/2348028943665?text=Hello%20I%20am%20interested%20in%20your%20services" className="px-4 py-2 rounded-full bordercursor-pointer text-center w-full md:w-[min-content] text-[14px] md:text-[16px] whitespace-nowrap font-[500] transition ease-in duration-[.3s] border border-[#000]/[.6] text-[#000]/[.6] dark:text-[#fff]/[.7] dark:border-white/[.1] cursor-pointer hover:bg-white/[.08]" target="_blank" rel="noopener noreferrer">chat with me</a>
            </div>
          </div>

          <div className="group">
            <Image src="/images/delz2.png" alt="profile" width={400} height={400} className="w-full h-full object-cover group-hover:animate-pulse" />
          </div>
        </div>
      </div>
    </main>
  );
}
