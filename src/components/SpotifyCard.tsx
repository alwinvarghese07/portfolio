import spotifyLogo from "../assets/images/spotify.png";

export default function SpotifyCard() {
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
        <div className="relative flex flex-col justify-between rounded-2xl p-6 w-[500px] gap-6 overflow-hidden bg-[#EDFCF3]">
            {/* Top row */}
            <div className="flex justify-between items-center w-full gap-4">
                {/* Left: Logo + text */}
                <div className="flex items-center gap-4 min-w-0">
                    <img
                        src={spotifyLogo}
                        alt="Spotify logo"
                        className="h-[45px]"
                    />
                    <div className="flex flex-col items-start min-w-0 gap-2">
                        <span className="text-[#393939] text-xl leading-[24px] font-medium font-['Inter']">
                            No Skips 🎧
                        </span>
                        <span className="text-[#6d6d6d] text-base leading-[20px] font-normal font-['Inter']">
                            Curated by me
                        </span>
                    </div>
                </div>

                {/* Right: Album covers with overlap */}
                <div className="flex items-center h-[100px]">
                    {albumImages.map((img, i) => (
                        <img
                            key={i}
                            src={img.src}
                            alt={img.alt}
                            className="w-[100px] h-full object-cover rounded-lg"
                            style={{ marginLeft: i === 0 ? 0 : "-60px" }}
                        />
                    ))}
                </div>
            </div>

            {/* Bottom: Spotify link */}
            <a
                href="https://open.spotify.com/user/tab1twa8qs27vu9tdprv3o58l"
                target="_blank"
                rel="noopener noreferrer"
                className="self-stretch text-[#007BFF] text-base font-medium leading-[30px] font-dm-sans hover:underline"
            >
                Spotify ↗
            </a>
        </div>
    );
}