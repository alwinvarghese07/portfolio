interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    mediaUrl?: string;
    isVideo?: boolean;
}

export default function ProjectCard({
    title,
    description,
    tags,
    mediaUrl,
    isVideo = false
}: ProjectCardProps) {
    return (
        <div className="flex flex-col gap-6 group">
            {/* 1. Media Container */}
            <div className="aspect-video w-full bg-zinc-100 rounded-[32px] overflow-hidden relative">
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
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    )
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-400">
                        <span className="text-sm font-medium uppercase tracking-widest">Preview Coming Soon</span>
                    </div>
                )}
            </div>

            {/* 2. Content Container */}
            <div className="flex flex-col gap-3 px-2">
                <div className="flex flex-col gap-1">
                    <h3 className="text-2xl font-bold text-black font-['Inter'] tracking-tight">
                        {title}
                    </h3>
                </div>

                <p className="text-base text-black/70 font-['Inter'] leading-relaxed max-w-[90%]">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-zinc-100 text-black/60 text-xs font-bold rounded-full font-['Inter'] uppercase tracking-tight"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
