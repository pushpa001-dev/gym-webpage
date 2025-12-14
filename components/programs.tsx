"use client"
import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const Programs = () => {
    const container = useRef(null);

    useGSAP(() => {
        // Image Animation
        gsap.from(".program-image", {
            scrollTrigger: {
                trigger: ".program-image",
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            x: -100,
            opacity: 0,
            duration: 1.5,
            ease: "power3.out"
        });

        // Title Animation
        gsap.from(".program-title", {
            scrollTrigger: {
                trigger: ".program-title",
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });

        // List Items Animation
        gsap.from(".program-item", {
            scrollTrigger: {
                trigger: ".program-list",
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        });

    }, { scope: container });

    return (
        <section ref={container} id="programs" className="w-full bg-neutral-900 text-white flex flex-col md:flex-row items-center justify-center pr-10 overflow-hidden">

            {/* Left Image */}
            <div className="program-image w-full md:w-5/12 flex justify-start items-center relative">
                <Image
                    src="/programs.png"
                    alt="Athlete with Dumbbell"
                    width={500}
                    height={700}
                    className="object-contain"
                />
                {/* Shadow effect at the bottom if needed */}
                <div className="absolute bottom-0 w-3/4 h-12 bg-black/50 blur-xl rounded-[50%]"></div>
            </div>

            {/* Right Content */}
            <div className="w-full md:w-7/12 flex flex-col pl-10 space-y-12">
                <h2 className="program-title text-7xl font-bold font-oswald text-[#CCFF00] mb-8 self-start">
                    PROGRAMS
                </h2>

                <div className="program-list space-y-10">
                    {/* Program 1 */}
                    <div className="program-item flex flex-col space-y-2">
                        <h3 className="text-2xl font-bold font-oswald text-[#CCFF00] uppercase tracking-wide">
                            1. STRENGTH TRAINING
                        </h3>
                        <p className="text-gray-300 text-lg max-w-lg">
                            Build Muscle, increase power and improve overall strength with structured workouts.
                        </p>
                    </div>

                    {/* Program 2 */}
                    <div className="program-item flex flex-col space-y-2">
                        <h3 className="text-2xl font-bold font-oswald text-[#CCFF00] uppercase tracking-wide">
                            2. FAT LOSS PROGRAM
                        </h3>
                        <p className="text-gray-300 text-lg max-w-lg">
                            Burn fat effectively with high-intensity training and nutrition guidance.
                        </p>
                    </div>

                    {/* Program 3 */}
                    <div className="program-item flex flex-col space-y-2">
                        <h3 className="text-2xl font-bold font-oswald text-[#CCFF00] uppercase tracking-wide">
                            3. MUSCLE BUILDING
                        </h3>
                        <p className="text-gray-300 text-lg max-w-lg">
                            Progressive training plans focused on size, symmetry and performance.
                        </p>
                    </div>

                    {/* Program 4 */}
                    <div className="program-item flex flex-col space-y-2">
                        <h3 className="text-2xl font-bold font-oswald text-[#CCFF00] uppercase tracking-wide">
                            4. ONLINE COACHING
                        </h3>
                        <p className="text-gray-300 text-lg max-w-lg">
                            Train from anywhere with personalized plans and weekly check-ins.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Programs;

