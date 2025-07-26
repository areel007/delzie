import { ProjectCard } from "@/components/ProjectCard"
import { PROJECTS } from "@/utils/data"

export default function ProjectsPage() {
    return <main>
        <div className="h-[44px]"></div>
        <div className="">
            <div className="max-w-[1300px] w-[90%] mx-auto h-full py-[40px] md:py-[60px]">
                <div className="mb-[40px] md:mb-[60px]">
                    <p className="text-center text-white/[.7]">
                        <span className="uppercase text-[14px] text-[#00FF00]">View the archive</span> <br />
                        <span className="text-[18px] md:text-[20px] text-[#000]/[.7] dark:text-[#fff]/[.7]">Recent Projects</span>
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[20px]">

                    {PROJECTS.map((project, i) => <ProjectCard
                        key={i}
                        name={project.name}
                        description={project.description}
                        link={project.link}
                        hoverBgClass={project.bg}
                    />)}

                </div>
            </div>
        </div>
    </main>
}