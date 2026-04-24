interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    mediaUrl?: string;
    isVideo?: boolean;
    id?: string;
}

import { Link } from "react-router-dom";

export default function ProjectCard({
    title,
    description,
    tags,
    mediaUrl,
    isVideo = false,
    id
}: ProjectCardProps) {
    const CardContent = (
        <>
            {/* 1. Media Container */}
            <div className="aspect-video w-full bg-[#141414] rounded-[20px] overflow-hidden relative border border-white/5 shadow-2xl">
                {mediaUrl ? (
                    isVideo ? (
                        <video
                            src={mediaUrl}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <img
                            src={mediaUrl}
                            alt={title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 "
                        />
                    )
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-600">
                        <span className="text-sm font-medium uppercase tracking-widest">Preview Coming Soon</span>
                    </div>
                )}
            </div>

            {/* 2. Content Container */}
            <div className="flex flex-col gap-3 px-2">
                <div className="flex flex-col gap-1">
                    <h3 className="text-2xl font-bold text-white font-['Inter'] tracking-tight">
                        {title}
                    </h3>
                </div>

                <p className="text-base text-white/70 font-['Inter'] leading-relaxed max-w-[90%]">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-white/10 text-white/60 text-xs font-bold rounded-full font-['Inter'] uppercase tracking-tight"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </>
    );

    if (id) {
        return (
            <Link to={`/case-study/${id}`} className="flex flex-col gap-6 group cursor-pointer">
                {CardContent}
            </Link>
        );
    }

    return (
        <div className="flex flex-col gap-6 group">
            {CardContent}
        </div>
    );
}
