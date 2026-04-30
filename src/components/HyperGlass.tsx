import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import figmaIcon from "../assets/images/figma3d.png";
import framerIcon from "../assets/images/miro.png";
import jiraIcon from "../assets/images/jira_logo.jpg";
import confluenceIcon from "../assets/images/confluence_logo.jpg";
import notionIcon from "../assets/images/notion_logo.jpg";

const HyperGlass: React.FC = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 100, damping: 25 });
    const springY = useSpring(mouseY, { stiffness: 100, damping: 25 });

    const rotateX = useTransform(springY, [-100, 100], [12, -12]);
    const rotateY = useTransform(springX, [-100, 100], [-12, 12]);

    // Light reflection shifts
    const lightX = useTransform(springX, [-100, 100], [20, 80]);
    const lightY = useTransform(springY, [-100, 100], [20, 80]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1500,
                rotateX,
                rotateY,
            }}
            className="relative w-full h-full flex items-center justify-center p-10 cursor-pointer group select-none"
        >
            {/* 1. SOLID GLASS BLOCK CORE */}
            <div className="absolute inset-0 rounded-xl bg-white/2 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.6)] border border-white/10">
                {/* 2. INTERNAL REFRACTION LAYER (Distorts background) */}
                <div className="absolute inset-0 rounded-xl backdrop-blur-[30px] backdrop-saturate-[1.8] pointer-events-none">
                    <div className="absolute inset-0 via-transparent to-black/20"></div>
                </div>

                {/* 3. CHROMATIC ABERRATION EDGES */}
                <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 border-t border-red-500/10 blur-[1px] -translate-x-1"></div>
                    <div className="absolute inset-0 border-b border-blue-500/10 blur-[1px] translate-x-1"></div>
                </div>

                {/* 4. PHYSICAL DEPTH (THICK WALLS) */}
                <div className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden">
                    {/* Top wall thickness */}
                    <div className="absolute top-0 inset-x-0 h-8 bg-linear-to-b from-white/20 to-transparent"></div>
                    {/* Bottom wall thickness */}
                    <div className="absolute bottom-0 inset-x-0 h-10 bg-linear-to-t from-black/40 to-transparent"></div>
                    {/* Side highlights */}
                    <div className="absolute inset-y-0 left-0 w-6 bg-linear-to-r from-white/10 to-transparent"></div>
                </div>

                {/* 5. POLISHED RIM HIGHLIGHTS (The "Apple" Look) */}
                <div className="absolute inset-0 rounded-xl border border-white/40 opacity-80 shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]"></div>

                {/* 6. DYNAMIC SPECULAR HIGHLIGHT (Follows Mouse) */}
                <motion.div
                    style={{
                        background: useTransform(
                            [lightX, lightY],
                            ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.3) 0%, transparent 40%)`
                        )
                    }}
                    className="absolute inset-0 pointer-events-none"
                />

                {/* 7. CAUSTICS & BASE SCATTERING */}
                <div className="absolute bottom-0 inset-x-0 h-1/3 bg-linear-to-t from-white/5 to-transparent blur-2xl pointer-events-none"></div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-px bg-white/30 blur-[0.5px] pointer-events-none"></div>
            </div>

            {/* 8. INTERIOR PHYSICS LAYER */}
            <div className="relative z-20 w-full h-full p-8">
                <div className="w-full h-full grid grid-cols-3 grid-rows-3 gap-2 place-items-center">

                    {/* Center - Figma */}
                    <div className="col-start-2 row-start-2 w-full h-full flex items-center justify-center">
                        <motion.div
                            initial={{ y: -500, opacity: 0, rotate: -35 }}
                            animate={{
                                y: 0,
                                opacity: 1,
                                rotate: -12,
                                transition: {
                                    type: "spring",
                                    stiffness: 60,
                                    damping: 18,
                                    mass: 3,
                                    delay: 0.4
                                }
                            }}
                            className="relative group/logo"
                        >
                            <motion.img
                                src={figmaIcon}
                                alt="Figma"
                                className="w-12 h-12 md:w-14 md:h-14 object-contain contrast-125 saturate-110"
                                animate={{
                                    y: [0, -2, 0],
                                    rotate: [-12, -11, -12]
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </motion.div>
                    </div>

                    {/* Top Right - Jira */}
                    <div className="col-start-3 row-start-1 w-full h-full flex items-center justify-center">
                        <motion.div
                            initial={{ y: -650, opacity: 0, rotate: -20 }}
                            animate={{
                                y: 0,
                                opacity: 1,
                                rotate: -5,
                                transition: {
                                    type: "spring",
                                    stiffness: 55,
                                    damping: 16,
                                    mass: 3.2,
                                    delay: 0.5
                                }
                            }}
                            className="relative group/logo"
                        >
                            <motion.img
                                src={jiraIcon}
                                alt="Jira"
                                className="w-12 h-12 md:w-14 md:h-14 object-contain contrast-125 saturate-110"
                                animate={{
                                    y: [0, -2, 0],
                                    rotate: [-5, -6, -5]
                                }}
                                transition={{
                                    duration: 9,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </motion.div>
                    </div>

                    {/* Top Left - Notion */}
                    <div className="col-start-1 row-start-1 w-full h-full flex items-center justify-center">
                        <motion.div
                            initial={{ y: -750, opacity: 0, rotate: -15 }}
                            animate={{
                                y: 0,
                                opacity: 1,
                                rotate: -8,
                                transition: {
                                    type: "spring",
                                    stiffness: 62,
                                    damping: 19,
                                    mass: 3.3,
                                    delay: 0.8
                                }
                            }}
                            className="relative group/logo"
                        >
                            <motion.img
                                src={notionIcon}
                                alt="Notion"
                                className="w-12 h-12 md:w-14 md:h-14 object-contain contrast-125 saturate-110"
                                animate={{
                                    y: [0, -2, 0],
                                    rotate: [-8, -7, -8]
                                }}
                                transition={{
                                    duration: 9.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1.5
                                }}
                            />
                        </motion.div>
                    </div>

                    {/* Bottom Left - Framer */}
                    <div className="col-start-1 row-start-3 w-full h-full flex items-center justify-center">
                        <motion.div
                            initial={{ y: -600, opacity: 0, rotate: 25 }}
                            animate={{
                                y: 0,
                                opacity: 1,
                                rotate: 15,
                                transition: {
                                    type: "spring",
                                    stiffness: 50,
                                    damping: 15,
                                    mass: 3.5,
                                    delay: 0.7
                                }
                            }}
                            className="relative group/logo"
                        >
                            <motion.img
                                src={framerIcon}
                                alt="Framer"
                                className="w-12 h-12 md:w-14 md:h-14 object-contain contrast-125 saturate-110"
                                animate={{
                                    y: [0, -2, 0],
                                    rotate: [15, 16, 15]
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                            />
                        </motion.div>
                    </div>

                    {/* Bottom Right - Confluence */}
                    <div className="col-start-3 row-start-3 w-full h-full flex items-center justify-center">
                        <motion.div
                            initial={{ y: -700, opacity: 0, rotate: 10 }}
                            animate={{
                                y: 0,
                                opacity: 1,
                                rotate: 8,
                                transition: {
                                    type: "spring",
                                    stiffness: 58,
                                    damping: 17,
                                    mass: 3.1,
                                    delay: 0.6
                                }
                            }}
                            className="relative group/logo"
                        >
                            <motion.img
                                src={confluenceIcon}
                                alt="Confluence"
                                className="w-12 h-12 md:w-14 md:h-14 object-contain contrast-125 saturate-110"
                                animate={{
                                    y: [0, -2, 0],
                                    rotate: [8, 9, 8]
                                }}
                                transition={{
                                    duration: 8.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.5
                                }}
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};

export default HyperGlass;
