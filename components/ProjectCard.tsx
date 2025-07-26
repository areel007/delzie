type TProjectCardProps = {
    name: string;
    description: string;
    link: string;
    hoverBgClass?: string;
}

export const ProjectCard = ({ name, description, link, hoverBgClass }: TProjectCardProps) => {
    return <div className={`p-[20px] bg-black/[.1] dark:bg-white/[.09] text-[#000]/[.7] dark:text-[#fff]/[.7] hover:text-white rounded transition duration-[.5s] ${hoverBgClass}`}>
        <div className="flex justify-between items-center mb-[10px]">
            <div className="">{name}</div>

            <a href={link} target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link cursor-pointer transition-colors"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
            </a>
        </div>

        <div className="">
            <p>
                {description}
            </p>
        </div>
    </div>
}