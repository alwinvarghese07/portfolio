import React, { useRef } from "react";
import { motion } from "motion/react";
import profile from "../assets/images/alwin.png";
import whiteboard from "../assets/images/whiteboard.png";
import HyperGlass from "./HyperGlass";
import Shelf from "./Shelf";


interface StickyNoteProps {
    text: string;
    color: string;
    rotation: number;
    position: { x: number; y: number };
    constraintsRef: React.RefObject<HTMLDivElement | null>;
}

const StickyNote = ({ text, color, rotation, position, constraintsRef }: StickyNoteProps) => {
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
            className={`absolute w-12 h-12 md:w-20 md:h-20 shadow-lg flex items-center justify-center text-center select-none cursor-grab active:cursor-grabbing transition-shadow duration-300 ${color}`}
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
    const freezerRef = useRef<HTMLDivElement>(null);

    return (
        <div className="w-full max-w-7xl mx-auto">
            {/* GRID */}
            <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-[1.15fr_0.85fr] gap-4 h-auto md:h-[560px]">

                {/* 1. PROFILE */}
                <div
                    data-cursor="Yep, that's me"
                    className="rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-500 md:col-start-1 md:row-start-1 md:col-span-1 md:row-span-2"
                >
                    <img
                        src={profile}
                        alt="Profile"
                        className="w-full h-full object-cover hover:grayscale-0 transition-all duration-700"
                    />
                </div>

                {/* 3. SHELF (Replaces Board Games) */}
                <div
                    data-cursor="My interests"
                    className="w-full h-full p-0 m-0 md:col-start-3 md:col-span-2 md:row-start-1 md:row-span-1"
                >
                    <Shelf />
                </div>

                {/* 4. SPOTIFY EMBED */}
                <div
                    data-cursor="On Loop"
                    className="overflow-hidden rounded-3xl hover:scale-[1.02] transition-transform duration-500 md:col-start-2 md:col-span-2 md:row-start-2 md:row-span-1"
                >
                    <div className="relative w-full h-full overflow-hidden" style={{ minHeight: '152px' }}>
                        <iframe
                            src="https://open.spotify.com/embed/playlist/2CcAzDF4uZapVsEA2Xlo1w?utm_source=generator&theme=1"
                            style={{
                                border: "0",
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "63.3%",
                                height: "152px",
                                transform: "scale(1.58)",
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
                    data-cursor="Drag around the notes"
                    className="relative overflow-hidden group md:col-start-4 md:row-start-2 md:col-span-1 md:row-span-1 rounded-xl"
                >
                    {/* Whiteboard Background Image */}
                    <img
                        src={whiteboard}
                        alt="Whiteboard"
                        className="absolute inset-0 w-full h-full object-fill pointer-events-none"
                    />

                    {/* Content Layer (Sticky Notes) */}
                    <div className="relative z-10 w-full h-full">
                        <StickyNote
                            text="F1 Sundays"
                            color="bg-[#FEF9C3]"
                            rotation={-3}
                            position={{ x: 40, y: 20 }}
                            constraintsRef={freezerRef}
                        />
                        <StickyNote
                            text="Mes Que Un Club"
                            color="bg-[#F8FAFC]"
                            rotation={2}
                            position={{ x: 180, y: 30 }}
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
                            position={{ x: 140, y: 130 }}
                            constraintsRef={freezerRef}
                        />
                    </div>
                </div>

                {/* 7. HYPER-REALISTIC GLASS CORE (Replaces Static Notes) */}
                <div
                    data-cursor="Tools i use"
                    className="md:col-start-2 md:row-start-1 md:col-span-1 md:row-span-1 overflow-hidden"
                >
                    <HyperGlass />
                </div>

            </div>
        </div>
    );
}