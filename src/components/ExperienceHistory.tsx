export default function ExperienceHistory() {
    const experiences = [
        { company: "ITProfound Inc", period: "June 2025 - Present" },
        { company: "Binoric Inc.", period: "Aug 2024 - Dec 2024" },
        { company: "Malayala Manorama", period: "July 2024 - Aug 2024" },
    ];

    return (
        <div className="w-full flex flex-col">
            <div className="mb-[40px]">
                <span className="text-sm font-bold text-[#8a8a8a] font-['Bitcount_Prop_Single']  text-[64px] tracking-[1px]">
                    Experience
                </span>
            </div>

            <div className="flex flex-col w-full">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center py-5 border-b border-black/5 last:border-none"
                    >
                        <span className="text-[24px] font-medium text-black/90 font-['Inter']">
                            {exp.company}
                        </span>
                        <span className="text-[18px] font-medium text-black/40 font-['Inter']">
                            {exp.period}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
