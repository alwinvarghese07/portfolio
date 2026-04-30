import React, { useState } from "react";
import { motion } from "motion/react";
import woodTexture from "../assets/images/warm_wood.png";

const Cupboard: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="relative w-full h-full group cursor-pointer"
            style={{ perspective: "1200px" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Main Cupboard Body (The inside structure from the image) */}
            <div className="absolute inset-0 bg-[#c68642] rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                {/* Outer Beveled Frame */}
                <div className="absolute inset-0 border-[12px] border-[#d49a5b] z-10 shadow-[inset_0_0_15px_rgba(0,0,0,0.3)]">
                    <div 
                        className="absolute inset-0 opacity-100"
                        style={{ backgroundImage: `url(${woodTexture})`, backgroundSize: 'cover' }}
                    />
                    {/* Corner Miter Joints */}
                    <div className="absolute top-0 left-0 w-full h-full border-[1px] border-white/10 pointer-events-none"></div>
                </div>

                {/* Inner Back Panel */}
                <div className="absolute inset-[12px] bg-[#a67038] shadow-[inset_0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden">
                    <div 
                        className="absolute inset-0 opacity-90"
                        style={{ 
                            backgroundImage: `url(${woodTexture})`, 
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    />
                    
                    {/* Interior Shelves */}
                    <div className="absolute inset-0 flex flex-col pt-2">
                        {/* Top Shelf Section */}
                        <div className="flex-1 relative flex flex-col justify-end">
                            {/* The Plank */}
                            <div className="w-full h-6 bg-[#d49a5b] shadow-xl border-t border-white/10 relative">
                                <div 
                                    className="absolute inset-0 opacity-100"
                                    style={{ backgroundImage: `url(${woodTexture})`, backgroundSize: '300px' }}
                                />
                                <div className="absolute inset-0 bg-black/5"></div>
                            </div>
                            {/* Shelf Shadow on wall below */}
                            <div className="absolute -bottom-8 left-0 right-0 h-10 bg-gradient-to-b from-black/50 to-transparent z-0"></div>
                            
                            {/* Items on top shelf (revealed on hover) */}
                            <div className="absolute bottom-6 left-0 right-0 flex justify-around items-end z-10 px-6">
                                <motion.span 
                                    animate={{ y: isHovered ? 0 : 30, opacity: isHovered ? 1 : 0 }}
                                    transition={{ delay: 0.1, type: "spring" }}
                                    className="text-4xl filter drop-shadow-[0_15px_10px_rgba(0,0,0,0.6)]"
                                >
                                    🎨
                                </motion.span>
                                <motion.span 
                                    animate={{ y: isHovered ? 0 : 30, opacity: isHovered ? 1 : 0 }}
                                    transition={{ delay: 0.2, type: "spring" }}
                                    className="text-4xl filter drop-shadow-[0_15px_10px_rgba(0,0,0,0.6)]"
                                >
                                    ⚡
                                </motion.span>
                            </div>
                        </div>

                        {/* Bottom Shelf Section */}
                        <div className="flex-1 relative flex flex-col justify-end">
                            {/* Floor Plank */}
                            <div className="w-full h-6 bg-[#d49a5b] shadow-xl border-t border-white/10 relative">
                                <div 
                                    className="absolute inset-0 opacity-100"
                                    style={{ backgroundImage: `url(${woodTexture})`, backgroundSize: '300px' }}
                                />
                            </div>
                            
                            {/* Items on bottom shelf (revealed on hover) */}
                            <div className="absolute bottom-6 left-0 right-0 flex justify-around items-end z-10 px-6">
                                <motion.span 
                                    animate={{ y: isHovered ? 0 : 30, opacity: isHovered ? 1 : 0 }}
                                    transition={{ delay: 0.3, type: "spring" }}
                                    className="text-4xl filter drop-shadow-[0_15px_10px_rgba(0,0,0,0.6)]"
                                >
                                    🛠️
                                </motion.span>
                                <motion.span 
                                    animate={{ y: isHovered ? 0 : 30, opacity: isHovered ? 1 : 0 }}
                                    transition={{ delay: 0.4, type: "spring" }}
                                    className="text-4xl filter drop-shadow-[0_15px_10px_rgba(0,0,0,0.6)]"
                                >
                                    📱
                                </motion.span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ambient Occlusion when doors closed */}
                <motion.div 
                    animate={{ opacity: isHovered ? 0.2 : 0.8 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-[#3d2b1f] pointer-events-none z-[15]"
                />
            </div>

            {/* Doors Container */}
            <div className="absolute inset-0 flex pointer-events-none z-20">
                {/* Left Door */}
                <motion.div 
                    initial={false}
                    animate={{ rotateY: isHovered ? -130 : 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    style={{ originX: "left", transformStyle: "preserve-3d" }}
                    className="flex-1 h-full relative pointer-events-auto"
                >
                    <div className="absolute inset-0 bg-[#d49a5b] border-r border-black/30 shadow-2xl rounded-l-3xl overflow-hidden">
                        <div 
                            className="absolute inset-0 opacity-100"
                            style={{ backgroundImage: `url(${woodTexture})`, backgroundSize: 'cover' }}
                        />
                        {/* Panel Detail */}
                        <div className="absolute inset-4 border-[2px] border-black/10 rounded-sm shadow-[inset_0_0_15px_rgba(0,0,0,0.2)]" />
                        {/* Door Handle */}
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-16 bg-gradient-to-b from-[#8b6b3e] to-[#4a371c] rounded-full shadow-lg border border-white/20" />
                    </div>
                    {/* Back side of door */}
                    <div 
                        className="absolute inset-0 bg-[#b67a3d] rounded-l-3xl"
                        style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
                    />
                </motion.div>

                {/* Right Door */}
                <motion.div 
                    initial={false}
                    animate={{ rotateY: isHovered ? 130 : 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    style={{ originX: "right", transformStyle: "preserve-3d" }}
                    className="flex-1 h-full relative pointer-events-auto"
                >
                    <div className="absolute inset-0 bg-[#d49a5b] border-l border-black/30 shadow-2xl rounded-r-3xl overflow-hidden">
                        <div 
                            className="absolute inset-0 opacity-100"
                            style={{ backgroundImage: `url(${woodTexture})`, backgroundSize: 'cover' }}
                        />
                        {/* Panel Detail */}
                        <div className="absolute inset-4 border-[2px] border-black/10 rounded-sm shadow-[inset_0_0_15px_rgba(0,0,0,0.2)]" />
                        {/* Door Handle */}
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-2 h-16 bg-gradient-to-b from-[#8b6b3e] to-[#4a371c] rounded-full shadow-lg border border-white/20" />
                    </div>
                    {/* Back side of door */}
                    <div 
                        className="absolute inset-0 bg-[#b67a3d] rounded-r-3xl"
                        style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Cupboard;
