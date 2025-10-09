'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedCard({ children, delay = 0, animationType = 'fadeUp' }) {
    const cardRef = useRef(null);

    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;

        let fromVars = { opacity: 0 };
        let toVars = {
            opacity: 1,
            duration: 0.8,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
                // markers: true,
            },
        };

        switch (animationType) {
            case 'fadeLeft':
                fromVars.x = -50;
                toVars.x = 0;
                break;
            case 'fadeRight':
                fromVars.x = 50;
                toVars.x = 0;
                break;
            case 'scale':
                fromVars.scale = 0.8;
                toVars.scale = 1;
                break;
            case 'rotate':
                fromVars.rotation = -15;
                toVars.rotation = 0;
                break;
            default:
                fromVars.y = 50;
                toVars.y = 0;
        }

        const ctx = gsap.context(() => {
            gsap.fromTo(el, fromVars, toVars);
        }, el);

        return () => ctx.revert();
    }, [delay, animationType]);

    return <div ref={cardRef}>{children}</div>;
}
