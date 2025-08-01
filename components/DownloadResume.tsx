import Image from "next/image"

export const DownloadResume = () => {
    return <a
        className="items-center gap-1 hover:underline hover:underline-offset-4 text-[var(--black)] dark:text-[var(--white)] hidden md:flex"
        href="/Sunday_Morenikeji_cv.docx"
        download={true}
    >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>

        resume
    </a>
}