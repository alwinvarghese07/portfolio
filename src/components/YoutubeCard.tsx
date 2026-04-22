import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import React, { useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import youtubeLogo from "../assets/images/yt.png";
import weightless from "../assets/images/weightless_remix.png";
import makeyoumine from "../assets/images/makeyoumine.png";
import control from "../assets/images/control.png";

export default function YTCard() {
    const cardRef = useRef<HTMLAnchorElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // 3D Parallax Tilt Values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Magnetic Cursor Values
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Spring physics
    const mouseX = useSpring(x, { stiffness: 150, damping: 25 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 25 });

    const cursorSpringX = useSpring(cursorX, { stiffness: 200, damping: 20 });
    const cursorSpringY = useSpring(cursorY, { stiffness: 200, damping: 20 });

    const rotateX = useTransform(mouseY, [-150, 150], [6, -6]);
    const rotateY = useTransform(mouseX, [-150, 150], [-6, 6]);

    const imageShiftX = useTransform(mouseX, [-150, 150], [-6, 6]);
    const imageShiftY = useTransform(mouseY, [-150, 150], [-6, 6]);

    const handleMouseMove = (e: ReactMouseEvent<HTMLAnchorElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();

        const localX = e.clientX - rect.left;
        const localY = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        x.set(localX - centerX);
        y.set(localY - centerY);

        const pullStrength = 0.15;
        const magnetX = localX - (localX - centerX) * pullStrength;
        const magnetY = localY - (localY - centerY) * pullStrength;

        cursorX.set(magnetX);
        cursorY.set(magnetY);
    };

    const handleMouseEnter = (e: ReactMouseEvent<HTMLAnchorElement>) => {
        setIsHovered(true);
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const localX = e.clientX - rect.left;
        const localY = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const pullStrength = 0.15;
        cursorX.set(localX - (localX - centerX) * pullStrength);
        cursorY.set(localY - (localY - centerY) * pullStrength);

        document.body.classList.add('hide-custom-cursor');
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
        document.body.classList.remove('hide-custom-cursor');
    };

    const albumImages = [
        {
            src: weightless,
            alt: "Album cover 1",
        },
        {
            src: makeyoumine,
            alt: "Album cover 2",
        },
        {
            src: control,
            alt: "Album cover 3",
        },
    ];

    return (
        <motion.a
            ref={cardRef}
            href="https://www.youtube.com/@alweece"
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
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative flex flex-col justify-between rounded-3xl p-8 w-[500px] gap-6 bg-[#FFF0F0] border border-[#fee2e2] overflow-hidden cursor-none group shadow-sm transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-[#FFF0F0]/60 block"
        >
            {/* Soft Ambient Breathing Glow */}
            <div
                className={`absolute inset-0 bg-gradient-to-tr from-white/60 via-transparent to-white/10 transition-opacity duration-700 pointer-events-none rounded-3xl ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            />

            {/* Top Section */}
            <div className="flex justify-between items-center w-full relative z-10 pointer-events-none" style={{ transform: "translateZ(30px)" }}>

                {/* Left: Logo + Text */}
                <div className="flex items-center gap-4">
                    <img
                        src={youtubeLogo}
                        alt="yt logo"
                        className="h-[45px] drop-shadow-sm transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="flex flex-col gap-1.5">
                        <span className="text-[#393939] text-xl font-medium font-['Inter']">
                            Tunes by me
                        </span>
                        <span className="text-[#6d6d6d] text-sm font-medium font-['Inter'] tracking-wide uppercase">
                            Originals & remixes
                        </span>
                    </div>
                </div>

                {/* Right: Album Stack */}
                <motion.div
                    className="relative w-[160px] h-[100px]"
                    style={{ x: imageShiftX, y: imageShiftY, transform: "translateZ(50px)" }}
                >
                    {albumImages.map((img, i) => (
                        <div key={i} className="absolute transition-transform duration-500 group-hover:-translate-y-1" style={{ left: `${i * 35}px`, zIndex: albumImages.length - i }}>
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-[100px] h-[100px] object-cover rounded-xl border border-white shadow-[0_5px_15px_rgba(0,0,0,0.12)]"
                            />
                        </div>
                    ))}
                </motion.div>

            </div>

            {/* Bottom Link */}
            <span
                className="text-[#007BFF] text-[15px] font-semibold leading-[30px] font-['Inter'] relative z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                style={{ transform: "translateZ(20px)" }}
            >
                YouTube ↗
            </span>
        </motion.a>
    );
}