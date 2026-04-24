import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import spotifyLogo from "../assets/images/spotify.png";

export default function SpotifyCard() {
    const cardRef = useRef<HTMLAnchorElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // 3D Parallax Tilt Values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Ultra-smooth spring physics for breathing life into the card
    const mouseX = useSpring(x, { stiffness: 150, damping: 25 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 25 });

    // Rotate matrix based on distance from center
    const rotateX = useTransform(mouseY, [-150, 150], [6, -6]);
    const rotateY = useTransform(mouseX, [-150, 150], [-6, 6]);

    // Very subtle translation for depth (inner parallax)
    const imageShiftX = useTransform(mouseX, [-150, 150], [-6, 6]);
    const imageShiftY = useTransform(mouseY, [-150, 150], [-6, 6]);

    const handleMouseMove = (e: ReactMouseEvent<HTMLAnchorElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();

        // Exact pixel position inside the card bounding box
        const localX = e.clientX - rect.left;
        const localY = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Center-offset for 3D tilts
        x.set(localX - centerX);
        y.set(localY - centerY);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
        document.body.classList.add('hide-custom-cursor');
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        // Gently reset parallax back to flat neutral
        x.set(0);
        y.set(0);
        document.body.classList.remove('hide-custom-cursor');
    };

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
        <motion.a
            ref={cardRef}
            href="https://open.spotify.com/user/tab1twa8qs27vu9tdprv3o58l"
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                transformPerspective: 1200,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative flex flex-col justify-between rounded-2xl p-6 md:p-8 w-full md:w-[500px] gap-6 overflow-hidden bg-[#EDFCF3] border border-[#d2f3e0] cursor-none group shadow-sm transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-[#EDFCF3]/60"
        >
            {/* Soft Ambient Breathing Glow / Gradient Shift */}
            <div
                className={`absolute inset-0 bg-linear-to-tr from-white/60 via-transparent to-white/10 transition-opacity duration-700 pointer-events-none rounded-3xl ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            />

            {/* Top row */}
            <div className="flex justify-between items-center w-full gap-4 pointer-events-none relative z-10" style={{ transform: "translateZ(30px)" }}>
                {/* Left: Logo + text */}
                <div className="flex items-center gap-4 min-w-0">
                    <img
                        src={spotifyLogo}
                        alt="Spotify logo"
                        className="h-[45px] drop-shadow-sm transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="flex flex-col items-start min-w-0 gap-1.5">
                        <span className="text-[#393939] text-xl leading-[24px] font-medium font-['Inter']">
                            No Skips 🎧
                        </span>
                        <span className="text-[#6d6d6d] leading-[20px] font-medium font-['Inter'] tracking-wide">
                            Curated by me
                        </span>
                    </div>
                </div>

                {/* Right: Album covers with parallax depth shift */}
                <motion.div
                    className="flex items-center h-[100px]"
                    style={{ x: imageShiftX, y: imageShiftY, transform: "translateZ(50px)" }}
                >
                    {albumImages.map((img, i) => (
                        <div key={i} className="relative transition-transform duration-500 group-hover:-translate-y-1" style={{ marginLeft: i === 0 ? 0 : "-60px" }}>
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-[100px] h-[100px] object-cover rounded-xl"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Bottom: Spotify link */}
            <span
                className="self-stretch text-[#007BFF] text-[15px] font-semibold leading-[30px] font-['Inter'] relative z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                style={{ transform: "translateZ(20px)" }}
            >
                Spotify ↗
            </span>
        </motion.a>
    );
}