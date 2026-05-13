import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const roundCursorRef = useRef<HTMLDivElement>(null);
    const pillCursorRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);
    
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    // Interaction states using refs
    const isVisible = useRef(false);
    const isHoveringBento = useRef(false);
    const isClickable = useRef(false);
    const currentText = useRef<string | null>(null);

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
            if (!isVisible.current) {
                isVisible.current = true;
                if (cursorRef.current) cursorRef.current.style.opacity = '1';
            }

            const target = e.target as HTMLElement;

            // 1. Detect Bento Grid items
            const bentoEl = target.closest("[data-cursor]") as HTMLElement;
            if (bentoEl) {
                const label = bentoEl.getAttribute("data-cursor");
                if (currentText.current !== label) {
                    currentText.current = label;
                    if (textRef.current) textRef.current.textContent = label;
                }
                isHoveringBento.current = true;
            } else {
                isHoveringBento.current = false;
            }

            // 2. Detect Clickable items
            const clickableEl = target.closest("a, button, [role='button'], [data-cursor]");
            isClickable.current = !!clickableEl;
        };

        const onMouseLeave = () => {
            isVisible.current = false;
            if (cursorRef.current) cursorRef.current.style.opacity = '0';
        };
        const onMouseEnter = () => {
            isVisible.current = true;
            if (cursorRef.current) cursorRef.current.style.opacity = '1';
        };

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

            // Update round cursor
            if (roundCursorRef.current) {
                if (isHoveringBento.current || isClickable.current) {
                    roundCursorRef.current.style.transform = 'scale(0)';
                    roundCursorRef.current.style.opacity = '0';
                } else {
                    roundCursorRef.current.style.transform = 'scale(1)';
                    roundCursorRef.current.style.opacity = '1';
                }
            }

            // Update pill cursor
            if (pillCursorRef.current) {
                if (isHoveringBento.current) {
                    pillCursorRef.current.style.transform = 'scale(1)';
                    pillCursorRef.current.style.opacity = '1';
                } else {
                    pillCursorRef.current.style.transform = 'scale(0.5)';
                    pillCursorRef.current.style.opacity = '0';
                }
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
    }, [isTouchDevice]);

    if (isTouchDevice) return null;

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 pointer-events-none z-10000 will-change-transform flex items-center justify-center opacity-0 transition-opacity duration-300"
        >
            {/* 1. ORIGINAL ROUND CURSOR */}
            <div
                ref={roundCursorRef}
                className="w-8 h-8 -ml-4 -mt-4 transition-all duration-300 flex items-center justify-center will-change-transform"
                style={{ mixBlendMode: 'difference' }}
            >
                <div className="w-full h-full bg-white rounded-full border-[1.5px] border-black" />
            </div>

            {/* 2. BLUE PILL CURSOR */}
            <div
                ref={pillCursorRef}
                className="absolute flex flex-col items-start transition-all duration-300 ease-out will-change-transform"
                style={{
                    left: 0,
                    top: 0,
                    transform: 'scale(0.5)',
                    opacity: 0,
                    transformOrigin: 'top left'
                }}
            >
                {/* Pointer Triangle (Tip is at 0,0) */}
                <div
                    className="w-4 h-4 bg-[#0066FF] mb-[-4px] ml-1"
                    style={{ clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)', transform: 'rotate(-15deg)' }}
                ></div>

                {/* Text Pill */}
                <div className="bg-[#0066FF] rounded-full px-4 py-2 shadow-2xl border border-white/10 flex items-center gap-2">
                    <span ref={textRef} className="text-white text-xs md:text-sm font-semibold whitespace-nowrap select-none">
                    </span>
                </div>
            </div>
        </div>
    );
}


