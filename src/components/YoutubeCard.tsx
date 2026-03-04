import youtubeLogo from "../assets/images/yt.png";

export default function YTCard() {
    const albumImages = [
        {
            src: "https://api.builder.io/api/v1/image/assets/TEMP/1612f19ae89d51872dbf5cd46097c10d9248d59d?width=200",
            alt: "Album cover 1",
        },
        {
            src: "https://api.builder.io/api/v1/image/assets/TEMP/c96e84ea82ca9962478b396584d7bc68ddcc09cd?width=200",
            alt: "Album cover 2",
        },
        {
            src: "https://api.builder.io/api/v1/image/assets/TEMP/f25a10435916dff1cb4816de5829468c8b74d3e9?width=200",
            alt: "Album cover 3",
        },
    ];

    return (
        <div className="relative flex flex-col justify-between rounded-2xl p-6 w-[500px] gap-6 bg-[#FFF0F0] overflow-hidden">

            {/* Top Section */}
            <div className="flex justify-between items-center w-full">

                {/* Left: Logo + Text */}
                <div className="flex items-center gap-4">
                    <img
                        src={youtubeLogo}
                        alt="yt logo"
                        className="h-[45px]"
                    />
                    <div className="flex flex-col">
                        <span className="text-[#393939] text-xl font-medium">
                            Tunes by me
                        </span>
                        <span className="text-[#6d6d6d] text-base">
                            Originals & remixes
                        </span>
                    </div>
                </div>

                {/* Right: Album Stack (Contained Properly) */}
                <div className="relative w-[160px] h-[100px]">
                    {albumImages.map((img, i) => (
                        <img
                            key={i}
                            src={img.src}
                            alt={img.alt}
                            className="absolute top-0 w-[100px] h-[100px] object-cover rounded-lg"
                            style={{ left: `${i * 35}px` }}
                        />
                    ))}
                </div>

            </div>

            {/* Bottom Link */}
            <a
                href="https://www.youtube.com/@alweece"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#007BFF] text-base font-medium hover:underline"
            >
                YouTube ↗
            </a>
        </div>
    );
}