import vid1 from "../assets/videos/Dribbble-shot.mp4";

const bentoVideos = [
    {
        id: 1,
        // Abstract dark fluid
        src: vid1,
        className: "md:col-span-2 md:row-span-2 min-h-full",
    },
    {
        id: 2,
        // Smooth gradients
        src: "https://cdn.pixabay.com/video/2023/10/22/186001-876800742_tiny.mp4",
        className: "md:col-span-1 md:row-span-1 min-h-full",
    },
    {
        id: 3,
        // Abstract geometry
        src: "https://cdn.pixabay.com/video/2024/02/22/201533-915998188_tiny.mp4",
        className: "md:col-span-1 md:row-span-2 min-h-full",
    },
    {
        id: 4,
        // Minimalist tech loop
        src: "https://cdn.pixabay.com/video/2021/08/11/84700-587428800_tiny.mp4",
        className: "md:col-span-2 md:row-span-1 min-h-full",
    }
];

export default function BentoGrid() {
    return (
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4">
            {bentoVideos.map((vid) => (
                <div
                    key={vid.id}
                    className={`relative overflow-hidden rounded-4xl bg-zinc-900 group transition-all duration-500 ease-out hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/10 hover:z-10 ${vid.className}`}
                >
                    <video
                        src={vid.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    {/* Subtle overlay that fades out on hover to make the card "pop" more */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                </div>
            ))}
        </div>
    );
}
