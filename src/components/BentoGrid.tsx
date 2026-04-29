import React, { useRef } from "react";
import { motion } from "motion/react";
import profile from "../assets/images/alwin.png";

const StickyNote = ({ text, color, rotation, position, constraintsRef }) => {
    return (
        <motion.div
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.05}
            dragMomentum={false}
            initial={{ rotate: rotation }}
            whileHover={{ scale: 1.05, rotate: rotation + 2, zIndex: 50 }}
            whileTap={{ scale: 1.1, cursor: "grabbing" }}
            whileDrag={{ scale: 1.1, rotate: rotation - 2, zIndex: 100 }}
            className={`absolute p-4 w-24 h-24 md:w-28 md:h-28 shadow-lg flex items-center justify-center text-center select-none cursor-grab active:cursor-grabbing transition-shadow duration-300 ${color}`}
            style={{
                left: position.x,
                top: position.y,
                borderRadius: "2px 4px 3px 12px",
                boxShadow: "inset 0 0 40px rgba(0,0,0,0.02), 2px 5px 15px rgba(0,0,0,0.08)",
            }}
        >
            {/* Subtle Texture Layer */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/felt.png')]"></div>
            
            <span className="text-[10px] md:text-xs font-bold text-black/60 uppercase tracking-tight leading-tight z-10 pointer-events-none">
                {text}
            </span>
            
            {/* Corner fold effect hint */}
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-black/5 rounded-tl-lg pointer-events-none"></div>
        </motion.div>
    );
};

export default function BentoGrid() {
    const freezerRef = useRef(null);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-10">
            {/* GRID */}
            <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-3 gap-4 h-auto md:h-[840px]">
                
                {/* 1. PROFILE */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-white/10 hover:scale-[1.02] transition-transform duration-500 md:col-start-1 md:row-start-1 md:col-span-1 md:row-span-2">
                    <img
                        src={profile}
                        alt="Profile"
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>

                {/* 2. TOOLS PLACEHOLDER */}
                <div className="bg-white rounded-3xl p-6 flex items-center justify-center shadow-lg border border-white/10 hover:scale-[1.02] transition-transform duration-500 md:col-start-1 md:row-start-3 md:col-span-1 md:row-span-1">
                    <div className="w-full flex items-center gap-4">
                        <div className="w-12 h-12 bg-black rounded-lg"></div>
                        <div className="flex-1">
                            <div className="h-2 bg-black/10 rounded-full w-3/4 mb-2"></div>
                            <div className="h-2 bg-black/5 rounded-full w-1/2"></div>
                        </div>
                        <span className="text-2xl font-bold text-black/20 uppercase tracking-widest">tools</span>
                    </div>
                </div>

                {/* 3. BOARD GAMES */}
                <div className="bg-white rounded-3xl p-6 flex items-center justify-center shadow-lg border border-white/10 hover:scale-[1.02] transition-transform duration-500 md:col-start-3 md:col-span-2 md:row-start-1 md:row-span-1">
                    <div className="text-center">
                        <span className="text-black/30 font-bold text-xl block">Viha's</span>
                        <span className="text-black font-['Bitcount_Prop_Single'] text-3xl font-bold tracking-tight uppercase">Board Games</span>
                    </div>
                </div>

                {/* 4. TOOLS ICON */}
                <div className="bg-white rounded-3xl p-6 flex items-center justify-center shadow-lg border border-white/10 hover:scale-[1.02] transition-transform duration-500 md:col-start-2 md:col-span-2 md:row-start-2 md:row-span-1">
                    <div className="w-20 h-20 bg-green-400/20 rounded-2xl flex items-center justify-center">
                        <span className="text-4xl">🛠️</span>
                    </div>
                </div>

                {/* 5. SPOTIFY EMBED */}
                <div className="bg-white overflow-hidden rounded-[20px] shadow-lg border border-white/10 hover:scale-[1.02] transition-transform duration-500 md:col-start-2 md:col-span-2 md:row-start-3 md:row-span-1">
                    <div className="relative w-full h-full overflow-hidden" style={{ minHeight: '152px' }}>
                        <iframe
                            src="https://open.spotify.com/embed/playlist/2CcAzDF4uZapVsEA2Xlo1w?utm_source=generator&theme=0"
                            style={{
                                border: "0",
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "56.2%",
                                height: "152px",
                                transform: "scale(1.78)",
                                transformOrigin: "top left",
                            }}
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* 6. FREEZER - Interactive Sticky Notes */}
                <div 
                    ref={freezerRef}
                    className="bg-[#F1F1F1] rounded-3xl shadow-lg border border-white/10 md:col-start-2 md:row-start-1 md:col-span-1 md:row-span-1 relative overflow-hidden"
                >
                    <StickyNote 
                        text="F1 Sundays" 
                        color="bg-[#FEF9C3]" 
                        rotation={-3} 
                        position={{ x: 10, y: 15 }} 
                        constraintsRef={freezerRef} 
                    />
                    <StickyNote 
                        text="Mes Que Un" 
                        color="bg-[#F8FAFC]" 
                        rotation={2} 
                        position={{ x: 90, y: 30 }} 
                        constraintsRef={freezerRef} 
                    />
                    <StickyNote 
                        text="2AM Producing" 
                        color="bg-[#DCFCE7]" 
                        rotation={-2} 
                        position={{ x: 20, y: 120 }} 
                        constraintsRef={freezerRef} 
                    />
                    <StickyNote 
                        text="UX Designer" 
                        color="bg-[#FCE7F3]" 
                        rotation={4} 
                        position={{ x: 100, y: 140 }} 
                        constraintsRef={freezerRef} 
                    />
                </div>

                {/* 7. NOTES (STATIC) */}
                <div className="bg-white rounded-3xl p-6 flex flex-col items-center justify-center shadow-lg border border-white/10 hover:scale-[1.02] transition-transform duration-500 md:col-start-4 md:row-start-2 md:col-span-1 md:row-span-2">
                    <div className="bg-yellow-100/50 p-4 rotate-2 shadow-sm border border-yellow-200">
                        <p className="text-black/60 font-medium text-sm leading-tight">- sleep <br /> - eat</p>
                    </div>
                    <div className="mt-4 bg-green-100/50 p-4 -rotate-3 shadow-sm border border-green-200">
                        <p className="text-black/60 font-bold text-xs uppercase">viha's <br /> portfolio</p>
                    </div>
                </div>

            </div>
        </div>
    );
}