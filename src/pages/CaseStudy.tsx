import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ShowreelVideo from "../assets/videos/Showreel-Grid-Mobile-[remix] (1).mp4";
import DribbbleShot from "../assets/videos/Dribbble-shot.mp4";
import Navbar from "../components/navbar";
import FooterDark from "../components/FooterDark";
import CustomCursor from "../components/CustomCursor";
import WanderContent from "../components/case-studies/WanderContent";
import Wander from "../assets/images/header.png";
import TumbleDry from "../assets/images/alwin.png";

// Dummy content for now based on the project id
const getCaseStudyData = (id: string | undefined) => {
    if (id === "tumbledry") {
        return {
            title: "TumbleDry",
            subtitle: "Redesigned TumbleDry - A laundry service platform",
            description: "improving booking clarity, service selection, and the overall user experience.",
            tags: ["User Flows", "Wireframes", "UX Research", "Prototyping", "UI Design"],
            mediaUrl: ShowreelVideo,
            content: "This is the placeholder content for the TumbleDry case study. It will detail the process of redesigning the laundry service platform.",
            image: TumbleDry,
        };
    } else if (id === "wander") {
        return {
            title: "Wander",
            subtitle: "Outdoor adventure planning platform",
            description: "Built a platform to help people plan outdoor adventures with personalized suggestions and simple trip management.",
            tags: ["User Flows", "Wireframes", "UX Research", "Prototyping", "UI Design"],
            mediaUrl: DribbbleShot,
            content: "This is the placeholder content for the Wander case study. It describes the platform built to help people plan outdoor adventures.",
            image: Wander,
        };
    }
    return null;
};

export default function CaseStudy() {
    const { id } = useParams();
    const navigate = useNavigate();
    const data = getCaseStudyData(id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!data) {
        return (
            <div className="w-full min-h-screen flex flex-col pt-32 px-4 items-center gap-10 bg-[#0E0E0E] text-white">
                <CustomCursor />
                <Navbar />
                <h1 className="text-4xl font-bold font-['Bitcount_Prop_Single'] mt-20">Case Study Not Found</h1>
                <button
                    onClick={() => navigate("/")}
                    className="px-6 py-3 border border-zinc-700 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors"
                >
                    Back to Home
                </button>
            </div>
        );
    }

    return (
        <div>

            <CustomCursor />
            <div className="w-full min-h-screen flex flex-col bg-[#0E0E0E] text-white relative">
                <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 mt-10 flex flex-col gap-10 grow">
                    <Navbar />
                    {/* Header */}
                    <div className="flex flex-col gap-6 max-w-4xl">
                        <button
                            onClick={() => navigate(-1)}
                            className="self-start px-4 py-2 border border-zinc-700 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors flex items-center gap-2 text-sm font-medium"
                        >
                            &larr; Back
                        </button>
                        <div className="flex flex-col">
                            <h1 className="text-[48px] md:text-[64px] font-['Bitcount_Prop_Single'] leading-tight tracking-tight">
                                {data.title}
                            </h1>
                            {/* Tags */}
                            <div className="flex flex-wrap gap-3 mt-4">
                                {data.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-4 py-2 bg-zinc-800 text-zinc-200 text-sm font-medium rounded-full tracking-wide"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Media Hero */}
                    <div className="w-full mt-10 rounded-3xl overflow-hidden aspect-video relative bg-zinc-900 border border-zinc-800/50">
                        <img
                            src={data.image}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content Section */}
                    {id === "wander" ? (
                        <div className="mt-16 mb-24 w-full">
                            <WanderContent />
                        </div>
                    ) : (
                        <div className="mt-16 mb-24 flex flex-col gap-8 w-full max-w-3xl">
                            <h2 className="text-3xl font-['Bitcount_Prop_Single']">Overview</h2>
                            <p className="text-lg text-zinc-300 leading-relaxed">
                                {data.content}
                            </p>

                        </div>
                    )}
                </div>

                <FooterDark />
            </div>
        </div>
    );
}
