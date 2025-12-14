"use client"
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 60%",
                toggleActions: "play none none reverse"
            }
        });

        // Central Title Zoom/Fade
        tl.from(".about-title", {
            scale: 0.5,
            opacity: 0,
            duration: 1,
            ease: "back.out(1.7)"
        });

        // Items Animation (Moving towards center)
        // Top Left
        tl.from(".about-item-1", { x: -50, y: -50, opacity: 0, duration: 0.8 }, "-=0.5");
        // Top Right
        tl.from(".about-item-2", { x: 50, y: -50, opacity: 0, duration: 0.8 }, "-=0.7");
        // Bottom Left
        tl.from(".about-item-3", { x: -50, y: 50, opacity: 0, duration: 0.8 }, "-=0.7");
        // Bottom Right
        tl.from(".about-item-4", { x: 50, y: 50, opacity: 0, duration: 0.8 }, "-=0.7");

        // Arrows
        tl.from(".about-arrow", { opacity: 0, duration: 1, stagger: 0.1 }, "-=0.5");

    }, { scope: container });

    return (
        <section ref={container} id="about" className="w-full min-h-[80vh] bg-neutral-900 text-white flex flex-col justify-center items-center relative py-20 font-sans">

            {/* Container for the graphics */}
            <div className="relative w-full max-w-5xl h-[500px] flex flex-col justify-between md:block">

                {/* Central Title */}
                <h2 className="about-title text-7xl md:text-8xl font-bold font-oswald text-[#CCFF00] text-center md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-10 whitespace-nowrap">
                    WHY CHOOSE US ?
                </h2>

                {/* Item 1: Top Left */}
                <div className="about-item-1 flex flex-col items-center md:absolute md:top-[15%] md:left-[10%] group">
                    <p className="text-xl md:text-2xl mb-2 text-center">Personal Workout plans</p>
                    {/* Arrow pointing down */}
                    <svg width="2" height="100" viewBox="0 0 2 100" className="about-arrow hidden md:block">
                        <line x1="1" y1="0" x2="1" y2="100" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
                        <polygon points="1,100 -4,90 6,90" fill="white" className="hidden" /> {/* Arrowhead if needed */}
                    </svg>
                    {/* Mobile Arrow */}
                    <div className="h-10 w-[2px] bg-transparent border-l-2 border-dotted border-white md:hidden mb-4"></div>
                </div>

                {/* Item 2: Top Right */}
                <div className="about-item-2 flex flex-col items-center md:absolute md:top-[15%] md:right-[25%] group">
                    <p className="text-xl md:text-2xl mb-2 text-center">Real Results & Accountability</p>
                    {/* Arrow pointing down */}
                    <svg width="2" height="100" viewBox="0 0 2 100" className="about-arrow hidden md:block">
                        <line x1="1" y1="0" x2="1" y2="100" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
                    </svg>
                    {/* Mobile Arrow */}
                    <div className="h-10 w-[2px] bg-transparent border-l-2 border-dotted border-white md:hidden mb-4"></div>
                </div>

                {/* Item 3: Bottom Left */}
                <div className="about-item-3 flex flex-col-reverse md:flex-col items-center md:absolute md:bottom-[12%] md:left-[24%] group">
                    {/* Mobile Arrow (pointing down visually in stack, but logically up to title if title was below, but title is middle) */}
                    {/* Stick to md:block for arrows to avoid mobile clutter */}
                    {/* Arrow pointing up */}
                    <svg width="2" height="100" viewBox="0 0 2 100" className="about-arrow hidden md:block mb-2">
                        <line x1="1" y1="100" x2="1" y2="0" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
                    </svg>
                    <p className="text-xl md:text-2xl mt-2 text-center">Science - Based Training</p>
                </div>

                {/* Item 4: Bottom Right */}
                <div className="about-item-4 flex flex-col-reverse md:flex-col items-center md:absolute md:bottom-[12%] md:right-[15%] group">
                    {/* Arrow pointing up */}
                    <svg width="2" height="100" viewBox="0 0 2 100" className="about-arrow hidden md:block mb-2">
                        <line x1="1" y1="100" x2="1" y2="0" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
                    </svg>
                    <p className="text-xl md:text-2xl mt-2 text-center">Flexible Timings</p>
                </div>

            </div>

        </section>
    );
};

export default About;
