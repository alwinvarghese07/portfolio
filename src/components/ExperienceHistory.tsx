export default function ExperienceHistory() {
    const experiences = [
        { company: "ITProfound Inc", period: "June 2025 - Present" },
        { company: "Binoric Inc.", period: "Aug 2024 - Dec 2024" },
        { company: "Malayala Manorama", period: "July 2024 - Aug 2024" },
    ];

    return (
        <div className="w-full flex flex-col">
            <div className="mb-[6px] md:mb-[40px]">
                <span className="text-4xl md:text-[64px] font-bold text-[#ffffff] font-['Bitcount_Prop_Single'] tracking-[1px]">
                    Experience
                </span>
            </div>

            <div className="flex flex-col w-full">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row justify-between items-start md:items-center py-5 border-b border-white/30 last:border-none gap-2 md:gap-0"
                    >
                        <span className="text-xl md:text-[24px] font-medium text-white font-['Inter']">
                            {exp.company}
                        </span>
                        <span className="text-sm md:text-[18px] font-medium text-white font-['Inter']">
                            {exp.period}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
