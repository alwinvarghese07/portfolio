import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import figmaIcon from "../assets/images/figma_3d.png";
import framerIcon from "../assets/images/framer_3d.png";

const GlassToolBox: React.FC = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 150, damping: 25 });
    const springY = useSpring(mouseY, { stiffness: 150, damping: 25 });

    const rotateX = useTransform(springY, [-100, 100], [8, -8]);
    const rotateY = useTransform(springX, [-100, 100], [-8, 8]);
    const glareX = useTransform(springX, [-100, 100], [0, 100]);
    const glareY = useTransform(springY, [-100, 100], [0, 100]);

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
                perspective: 1200,
                rotateX,
                rotateY,
            }}
            className="relative w-full h-full flex items-center justify-center p-8 cursor-pointer group"
        >
            {/* THICK GLASS BLOCK CONTAINER */}
            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
                {/* Background Distortion Layer */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-[25px] backdrop-saturate-150"></div>
                
                {/* Inner Volume / Depth Simulation */}
                <div className="absolute inset-[2px] rounded-[2.4rem] border-t-[20px] border-l-[10px] border-white/10 pointer-events-none"></div>
                <div className="absolute inset-[2px] rounded-[2.4rem] border-b-[20px] border-r-[10px] border-black/20 pointer-events-none"></div>

                {/* Polished Edge Highlights */}
                <div className="absolute inset-0 border-[1px] border-white/30 rounded-[2.5rem] pointer-events-none"></div>
                <div className="absolute inset-[1px] border-[1px] border-black/10 rounded-[2.5rem] pointer-events-none"></div>
                
                {/* Caustic / Light Leak Effect */}
                <motion.div 
                    style={{ 
                        background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.15) 0%, transparent 60%)` 
                    }}
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Reflection Layer */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
            </div>

            {/* INTERIOR PHYSICS LAYER */}
            <div className="relative z-10 w-full h-full flex items-end justify-around pb-12">
                {/* Figma Logo */}
                <motion.div
                    initial={{ y: -400, opacity: 0, rotate: -25 }}
                    animate={{ 
                        y: 0, 
                        opacity: 1, 
                        rotate: -10,
                        transition: { 
                            type: "spring", 
                            stiffness: 80, 
                            damping: 15, 
                            mass: 2, // Heavier feel
                            delay: 0.3 
                        } 
                    }}
                    className="relative"
                >
                    <motion.img 
                        src={figmaIcon} 
                        alt="Figma" 
                        className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.3)]"
                        animate={{
                            y: [0, -2, 0],
                            rotate: [-10, -8, -10]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    {/* Shadow on the "floor" */}
                    <motion.div 
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                            scale: 1, 
                            opacity: 0.3,
                            transition: { delay: 0.8, duration: 0.5 }
                        }}
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-14 h-2 bg-black blur-md rounded-full pointer-events-none"
                    ></motion.div>
                </motion.div>

                {/* Framer Logo */}
                <motion.div
                    initial={{ y: -500, opacity: 0, rotate: 20 }}
                    animate={{ 
                        y: 0, 
                        opacity: 1, 
                        rotate: 12,
                        transition: { 
                            type: "spring", 
                            stiffness: 70, 
                            damping: 12, 
                            mass: 2.5, // Even heavier
                            delay: 0.6 
                        } 
                    }}
                    className="relative"
                >
                    <motion.img 
                        src={framerIcon} 
                        alt="Framer" 
                        className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.3)]"
                        animate={{
                            y: [0, -2, 0],
                            rotate: [12, 14, 12]
                        }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                    />
                    {/* Shadow on the "floor" */}
                    <motion.div 
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                            scale: 1, 
                            opacity: 0.3,
                            transition: { delay: 1.1, duration: 0.5 }
                        }}
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-14 h-2 bg-black blur-md rounded-full pointer-events-none"
                    ></motion.div>
                </motion.div>
            </div>
            
            {/* Base Highlight (Polished floor) */}
            <div className="absolute bottom-4 inset-x-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"></div>
        </motion.div>
    );
};

export default GlassToolBox;
