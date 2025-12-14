"use client"
import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const LoadingScreen = () => {
    const container = useRef(null);
    const [count, setCount] = useState(0);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Counter Animation
        tl.to({ val: 0 }, {
            val: 100,
            duration: 0.5,
            ease: "power2.inOut",
            onUpdate: function () {
                setCount(Math.floor(this.targets()[0].val));
            },
            onComplete: () => {
                // Slide up animation after counter finishes
                gsap.to(container.current, {
                    y: "-100%",
                    duration: 1,
                    ease: "power4.inOut",
                    delay: 0.2
                });
            }
        });

    }, { scope: container });

    return (
        <div ref={container} className="fixed inset-0 z-50 bg-black flex items-center justify-center font-oswald text-[#CCFF00]">
            <div className="relative flex flex-col items-center">
                {/* Counter */}
                <div className="text-9xl md:text-[200px] font-bold leading-none tracking-tighter">
                    {count}%
                </div>

                {/* Optional text or spinner */}
                <div className="mt-4 text-xl tracking-widest uppercase opacity-80">
                    Loading
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
