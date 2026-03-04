import ProjectCard from "./ProjectCard";
import ExperienceHistory from "./ExperienceHistory";
import ShowreelVideo from "../assets/videos/Showreel-Grid-Mobile-[remix] (1).mp4";
import DribbbleShot from "../assets/videos/Dribbble-shot.mp4";

const PROJECTS = [
    {
        title: "TumbleDry",
        description: "Redesigned TumbleDry - A laundry service platform, improving booking clarity, service selection, and the overall user experience.",
        tags: ["User Flows", "Wireframes", "UX Research", "Prototyping", "UI Design"],
        mediaUrl: ShowreelVideo,
        isVideo: true,
    },
    {
        title: "Wander",
        description: "Built a platform to help people plan outdoor adventures with personalized suggestions and simple trip management.",
        tags: ["User Flows", "Wireframes", "UX Research", "Prototyping", "UI Design"],
        mediaUrl: DribbbleShot,
        isVideo: true,
    },
];

export default function ProjectsSection() {
    return (
        <div className="w-full max-w-[1400px] mx-auto px-4">
            <ExperienceHistory />
            <div className="mt-[100px] mb-[60px]">
                <span className="text-sm font-bold text-[#8A8A8A] font-['Bitcount_Prop_Single']  text-[64px] tracking-[1px]">
                    Selected Works
                </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                {PROJECTS.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>

        </div>
    );
}
