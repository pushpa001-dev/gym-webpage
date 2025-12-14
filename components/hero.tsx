
"use client"
import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Navbar animation
        tl.from('nav', {
            scaleX: 0,
            y: -100,
            opacity: 0,
            duration: 1.2,
            ease: 'power4.out'
        });

        // Left Text animation (split heading)
        tl.from('.hero-title-line', {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power4.out'
        }, "-=0.8");

        // Description and Button
        tl.from('.hero-content', {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out'
        }, "-=0.5");

        // "G" background letter
        tl.from('.hero-bg-g', {
            scale: 0.5,
            opacity: 0,
            rotation: -15,
            duration: 1.5,
            ease: 'back.out(1.7)'
        }, "-=1");

        // Main Hero Image
        tl.from('.hero-image', {
            x: 50,
            opacity: 0,
            scale: 0.9,
            duration: 1.5,
            ease: 'power4.out'
        }, "-=1.2");

    }, { scope: container });

    return (
        <section ref={container} id="hero" className="w-full min-h-screen bg-black text-white relative overflow-hidden font-sans">
            {/* Navbar */}
            <nav className="absolute top-0 w-full flex justify-between items-center py-6 px-10 z-20 border-t-20 2xl:border-t-40 border-black" style={{ backgroundColor: '#CCFF00' }}>
                <div className="text-black text-2xl font-bold font-oswald tracking-tighter">Home</div>
                <div className="flex space-x-12 text-black font-medium text-lg">
                    <a href="#programs" className="hover:underline">Programs</a>
                    <a href="#trainer" className="hover:underline">Trainer</a>
                    <a href="#book" className="hover:underline">Book</a>
                    <a href="#about" className="hover:underline">About</a>
                </div>
            </nav>

            {/* Hero Content */}
            <div className="container mx-auto h-screen flex flex-col md:flex-row items-center justify-between px-6 pt-20 relative z-10">

                {/* Left Text */}
                <div className="w-full md:w-1/2 flex flex-col items-start justify-center space-y-4">
                    <h1 className="text-8xl font-bold leading-none font-oswald text-[#CCFF00] overflow-hidden">
                        <div className="hero-title-line">TRAIN HARD</div>
                        <div className="hero-title-line text-[#CCFF00]">TRAIN SMART</div>
                    </h1>
                    <p className="hero-content text-xl text-gray-300 max-w-md mt-4">
                        Personal training programs designed to transform your body and mindset.
                    </p>
                    <button className="hero-content mt-8 px-10 py-3 bg-[#222] text-[#CCFF00] font-bold rounded hover:bg-[#333] transition duration-300 uppercase tracking-wide">
                        Book
                    </button>
                </div>

                {/* Right Image with Circle Background */}
                <div className="w-full md:w-1/2 relative flex justify-center items-center h-full">

                    {/* Man Image Container */}
                    <div className="relative z-10 w-full h-[800px] flex items-end justify-center">
                        <div className="hero-bg-g absolute bottom-0 transform z-0">
                            <p className="text-[#CCFF00] text-8xl 2xl:text-[800px] font-bbh-sans-bogle font-bold">G</p>
                        </div>
                        <Image
                            src="/hero.png"
                            alt="Fitness Model"
                            width={600}
                            height={800}
                            className="hero-image w-full 2xl:scale-200 absolute top-250 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

