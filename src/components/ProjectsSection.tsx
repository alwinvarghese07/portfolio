import ProjectCard from "./ProjectCard";

const PROJECTS = [
    {
        title: "ITProfound Inc.",
        role: "UI/UX Designer",
        description: "Worked on multiple initiatives across travel and hospitality, improving products for route-based food ordering, transit-hub service bookings and no-code website creation for hoteliers.",
        tags: ["Product Design", "Mobile App", "iOS"],
    },
    {
        title: "Malayala Manorama",
        role: "UI/UX Design Intern",
        description: "Designed the official AKBS website for Malayala Manorama, delivering a refreshed digital presence tailored for a young audience and improving overall usability and engagement.",
        tags: ["Web App", "Dashboard", "Data Viz"],
    },
    {
        title: "TumbleDry",
        description: "Redesigned TumbleDry - A laundry service platform, improving booking clarity, service selection, and the overall user experience.",
        tags: ["IoT", "Hardware", "UX Research"],
    },
    {
        title: "Wander",
        description: "Built a platform to help people plan outdoor adventures with personalized suggestions and simple trip management.",
        tags: ["Fintech", "App Design", "Branding"],
    }
];

export default function ProjectsSection() {
    return (
        <div className="w-full max-w-[1400px] mx-auto py-20 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                {PROJECTS.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
}
