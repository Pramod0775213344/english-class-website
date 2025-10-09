
'use client'
import { useEffect, useRef } from 'react'

// Inline AnimatedCard component
function AnimatedCard({ children }) {
    const cardRef = useRef(null);

    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={cardRef}
            style={{
                opacity: 0,
                transform: 'translateY(50px)',
                transition: 'opacity 1s ease-out, transform 1s ease-out'
            }}
        >
            {children}
        </div>
    );
}