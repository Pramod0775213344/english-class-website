'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedText({ text, animationType = 'fadeIn', delay = 0 }) {
    const containerRef = useRef(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        // Split text into letters for most animations except typing
        const letters = Array.from(el.querySelectorAll('.letter'));

        const ctx = gsap.context(() => {
            if (animationType === 'typing') {
                // Typing effect: reveal letters one by one
                gsap.fromTo(
                    letters,
                    { opacity: 0 },
                    {
                        opacity: 1,
                        stagger: 0.1,
                        duration: 0.1,
                        delay,
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 90%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            } else {
                // Prepare fromVars and toVars depending on animationType
                let fromVars = { opacity: 0 };
                let toVars = {
                    opacity: 1,
                    duration: 0.6,
                    delay,
                    ease: 'power3.out',
                    stagger: 0.05,
                    scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none reverse' },
                };

                switch (animationType) {
                    case 'fadeIn':
                        // just fade
                        break;
                    case 'slideLeft':
                        fromVars.x = 50;
                        toVars.x = 0;
                        break;
                    case 'slideRight':
                        fromVars.x = -50;
                        toVars.x = 0;
                        break;
                    case 'slideUp':
                        fromVars.y = 20;
                        toVars.y = 0;
                        break;
                    case 'slideDown':
                        fromVars.y = -20;
                        toVars.y = 0;
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
                        break;
                }

                gsap.fromTo(letters, fromVars, toVars);
            }
        }, el);

        return () => ctx.revert();
    }, [animationType, delay]);

    // Helper to split text into letter spans
    function splitLetters(text) {
        return text.split('').map((char, i) => (
            <span
                key={i}
                className="letter"
                style={{ display: 'inline-block', whiteSpace: 'pre' }}
            >
                {char}
            </span>
        ));
    }

    return (
        <div ref={containerRef} style={{ display: 'inline-block', overflow: 'hidden' }}>
            {splitLetters(text)}
        </div>
    );
}
