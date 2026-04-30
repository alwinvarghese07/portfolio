import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import boxImage from "../assets/images/cardboard.png";

const ToolPopup = ({ emoji, label, delay, xOffset }: { emoji: string; label: string; delay: number; xOffset: number }) => (
    <motion.div
        initial={{ y: 30, opacity: 0, scale: 0.9 }}
        animate={{ 
            y: -130, 
            opacity: 1, 
            scale: 1,
            transition: { 
                type: "spring", 
                stiffness: 260, 
                damping: 20, 
                delay 
            } 
        }}
        exit={{ y: 30, opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
        className="absolute bottom-1/2 left-1/2 flex flex-col items-center pointer-events-none z-[100]"
        style={{ marginLeft: xOffset }}
    >
        <div className="bg-white/10 backdrop-blur-xl p-3 px-4 rounded-[20px] border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex items-center gap-3">
            <span className="text-2xl">{emoji}</span>
            <span className="text-xs font-bold text-white/90 uppercase tracking-[0.2em]">{label}</span>
        </div>
        <div className="w-[1.5px] h-10 bg-gradient-to-t from-transparent via-white/30 to-transparent mt-2 rounded-full"></div>
    </motion.div>
);

const CardboardBox: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    const tools = [
        { emoji: "🎨", label: "Figma", delay: 0, xOffset: -65 },
        { emoji: "⚡", label: "Vite", delay: 0.1, xOffset: 0 },
        { emoji: "🛠️", label: "React", delay: 0.2, xOffset: 65 },
    ];

    return (
        <div 
            className="relative w-full h-full flex items-center justify-center cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* CARDBOARD IMAGE (Filling the container with clipping) */}
            <motion.div
                animate={{ 
                    scale: isHovered ? 1.02 : 1,
                }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden shadow-lg border border-white/10"
            >
                <img 
                    src={boxImage} 
                    alt="Cardboard Box" 
                    className="w-full h-full object-fill pointer-events-none"
                />
            </motion.div>

            {/* POPUP ITEMS */}
            <AnimatePresence>
                {isHovered && tools.map((tool, index) => (
                    <ToolPopup key={index} {...tool} />
                ))}
            </AnimatePresence>

            {/* LIGHT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none"></div>
            
            {/* MINIMAL LABEL */}
            {!isHovered && (
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 pointer-events-none opacity-30 group-hover:opacity-0 transition-all duration-500">
                    <div className="w-1 h-1 rounded-full bg-white/40"></div>
                    <span className="text-[9px] font-black text-white uppercase tracking-[0.5em]">Inventory</span>
                    <div className="w-1 h-1 rounded-full bg-white/40"></div>
                </div>
            )}
        </div>
    );
};

export default CardboardBox;
