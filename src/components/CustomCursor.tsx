import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    
    // Interaction states
    const [isHoveringBento, setIsHoveringBento] = useState(false);
    const [isClickable, setIsClickable] = useState(false);
    const [cursorText, setCursorText] = useState<string | null>(null);

    // Position tracking
    const mousePos = useRef({ x: 0, y: 0 });
    const cursorPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const checkTouch = () => {
            setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
        };
        checkTouch();

        if (isTouchDevice) return;

        const onMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
            if (!isVisible) setIsVisible(true);

            const target = e.target as HTMLElement;

            // 1. Detect Bento Grid items
            const bentoEl = target.closest("[data-cursor]") as HTMLElement;
            if (bentoEl) {
                const label = bentoEl.getAttribute("data-cursor");
                setCursorText(label);
                setIsHoveringBento(true);
            } else {
                setIsHoveringBento(false);
            }

            // 2. Detect Clickable items (Links, Buttons, or Bento Items)
            const clickableEl = target.closest("a, button, [role='button'], [data-cursor]");
            setIsClickable(!!clickableEl);
        };

        const onMouseLeave = () => setIsVisible(false);
        const onMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseleave', onMouseLeave);
        document.addEventListener('mouseenter', onMouseEnter);

        // Animation loop for smooth Lerp
        let rafId: number;
        const animate = () => {
            const lerpFactor = 0.15;
            cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * lerpFactor;
            cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * lerpFactor;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0)`;
            }

            rafId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseleave', onMouseLeave);
            document.removeEventListener('mouseenter', onMouseEnter);
            cancelAnimationFrame(rafId);
        };
    }, [isVisible, isTouchDevice]);

    if (isTouchDevice) return null;

    return (
        <div
            ref={cursorRef}
            className={`fixed top-0 left-0 pointer-events-none z-[10000] will-change-transform flex items-center justify-center transition-opacity duration-300
                ${isVisible ? 'opacity-100' : 'opacity-0'}
            `}
        >
            {/* 1. ORIGINAL ROUND CURSOR (Visible in general areas) */}
            <div 
                className={`w-8 h-8 -ml-4 -mt-4 transition-all duration-300 flex items-center justify-center
                    ${(isHoveringBento || isClickable) ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}
                `}
                style={{ mixBlendMode: 'difference' }}
            >
                <div className="w-full h-full bg-white rounded-full border-[1.5px] border-black" />
            </div>

            {/* 2. BLUE PILL CURSOR (Visible on Bento items) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                    opacity: isHoveringBento ? 1 : 0,
                    scale: isHoveringBento ? 1 : 0.5
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute flex flex-col items-start"
                style={{ 
                    left: 0,
                    top: 0
                }}
            >
                {/* Pointer Triangle (Tip is at 0,0) */}
                <div 
                    className="w-4 h-4 bg-[#0066FF] mb-[-4px] ml-1" 
                    style={{ clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)', transform: 'rotate(-15deg)' }}
                ></div>
                
                {/* Text Pill */}
                <div className="bg-[#0066FF] rounded-full px-4 py-2 shadow-2xl border border-white/10 flex items-center gap-2">
                    <span className="text-white text-xs md:text-sm font-semibold whitespace-nowrap select-none">
                        {cursorText}
                    </span>
                </div>
            </motion.div>
        </div>
    );
}


