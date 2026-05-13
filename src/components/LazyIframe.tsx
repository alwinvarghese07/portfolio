import { useState, useEffect, useRef } from 'react';

interface LazyIframeProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
    rootMargin?: string;
    iframeStyle?: React.CSSProperties;
}

export default function LazyIframe({ src, rootMargin = "200px", iframeStyle, ...props }: LazyIframeProps) {
    const [isIntersecting, setIntersecting] = useState(false);
    const iframeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!iframeRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIntersecting(true);
                    observer.disconnect();
                }
            },
            { rootMargin }
        );

        observer.observe(iframeRef.current);

        return () => observer.disconnect();
    }, [rootMargin]);

    return (
        <div ref={iframeRef} className={props.className} style={props.style}>
            {isIntersecting ? (
                <iframe src={src} {...props} style={iframeStyle || { width: '100%', height: '100%' }} />
            ) : null}
        </div>
    );
}
