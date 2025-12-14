"use client"
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const Book = () => {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 75%",
                toggleActions: "play none none reverse"
            }
        });

        // Top Text Animation
        tl.from(".book-top-text", {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });

        // Main Heading Animation (staggered lines/elements if possible, treating whole block or br split)
        tl.from(".book-heading", {
            scale: 0.8,
            y: 50,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out"
        }, "-=0.5");

        // Button Animation
        tl.from(".book-btn", {
            scale: 0,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.7)"
        }, "-=0.5");

    }, { scope: container });

    return (
        <section ref={container} id="book" className="w-full border-b min-h-[60vh] bg-black text-white flex flex-col justify-center items-center py-20 font-sans">

            <div className="container mx-auto flex flex-col items-center justify-center text-center space-y-8 px-4">

                {/* Top Text */}
                <p className="book-top-text text-xl md:text-2xl text-white font-light tracking-wide">
                    Book a free consultation and start your fitness journey today.
                </p>

                {/* Main Heading */}
                <h2 className="book-heading text-6xl md:text-8xl lg:text-9xl font-bold font-oswald text-[#CCFF00] uppercase tracking-tighter leading-none">
                    READY TO TRANSFORM<br className="hidden md:block" /> YOUR BODY
                </h2>

                {/* Button */}
                <button className="book-btn mt-8 px-12 py-4 bg-[#222] text-[#CCFF00] text-xl font-bold rounded hover:bg-[#333] transition duration-300 uppercase tracking-widest border border-[#CCFF00]/20">
                    Book
                </button>

            </div>

        </section>
    );
};

export default Book;

