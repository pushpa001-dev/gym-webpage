"use client"
import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const Trainer = () => {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });

        // Heading Animation
        tl.from(".trainer-title", {
            y: -50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });

        // Image Animation
        tl.from(".trainer-image", {
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out"
        }, "-=0.5");

        // Texts Animation (Left and Right)
        tl.from(".trainer-text-left", {
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        }, "-=0.8");

        tl.from(".trainer-text-right", {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        }, "-=1");

        // Mobile Text Animation
        tl.from(".trainer-text-mobile", {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        }, "-=1");


        // Name Animation
        tl.from(".trainer-name", {
            opacity: 0,
            scale: 0.8,
            duration: 1,
            ease: "back.out(1.7)"
        }, "-=0.5");

    }, { scope: container });

    return (
        <section ref={container} id="trainer" className="w-full  bg-black text-white pt-20 relative overflow-hidden flex flex-col items-center">

            {/* Heading */}
            <h2 className="trainer-title text-8xl 2xl:text-[200px] font-bold font-oswald text-[#CCFF00] uppercase text-center mb-10 z-20 relative tracking-tight">
                MEET YOUR TRAINER
            </h2>

            <div className="container mx-auto relative flex justify-center items-end min-h-[600px] w-full max-w-7xl">

                {/* Left Text */}
                <div className="trainer-text-left absolute left-0 top-20 w-1/4 z-20 hidden md:block">
                    <p className="text-gray-300 text-lg leading-relaxed text-left">
                        Certified fitness trainer with 6+ years of experience helping clients achieve real, sustainable results through smart training and discipline.
                    </p>
                </div>

                {/* Center Image */}
                <div className="trainer-image relative z-10 w-full md:w-1/2 flex justify-center items-end h-[600px] 2xl:h-[700px]">
                    <Image
                        src="/trainer.png"
                        alt="Alex Carter - Trainer"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="bottom"
                        className="z-10"
                    />
                </div>

                {/* Right Text */}
                <div className="trainer-text-right absolute right-0 top-20 w-1/4 z-20 hidden md:block text-right">
                    <p className="text-gray-300 text-lg leading-relaxed">
                        He has 6+ years of experience. Trained over 300+ clients in his entire career. And he has ultimate 4.9 client rating.
                    </p>
                </div>

                {/* Name Label */}
                <div className="trainer-name absolute bottom-10 left-10 md:left-20 text-white text-3xl font-sans z-20">
                    Alex Carter
                </div>

            </div>

            {/* Mobile Text (Visible only on small screens) */}
            <div className="md:hidden flex flex-col px-6 space-y-6 mt-8 text-center">
                <p className="trainer-text-mobile text-gray-300 text-lg">
                    Certified fitness trainer with 6+ years of experience helping clients achieve real, sustainable results through smart training and discipline.
                </p>
                <p className="trainer-text-mobile text-gray-300 text-lg">
                    He has 6+ years of experience. Trained over 300+ clients in his entire career. And he has ultimate 4.9 client rating.
                </p>
            </div>

        </section>
    );
};

export default Trainer;
