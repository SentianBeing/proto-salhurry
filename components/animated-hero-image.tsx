'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const VALID_FRAMES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 19, 20, 21, 22];

export default function AnimatedHeroImage() {
    const [currentFrameIndex, setCurrentFrameIndex] = useState(0);

    useEffect(() => {
        const fps = 10;
        const interval = 1000 / fps;

        const intervalId = setInterval(() => {
            setCurrentFrameIndex((prev) => (prev + 1) % VALID_FRAMES.length);
        }, interval);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="relative w-full h-[280px] sm:h-[350px] lg:h-[500px] -mt-6 sm:-mt-8 lg:mt-0 overflow-visible lg:ml-auto flex items-center justify-center">
            {VALID_FRAMES.map((frame, index) => {
                const frameString = frame.toString().padStart(3, '0');
                const imagePath = `/lock-frames/ezgif-frame-${frameString}.png`;
                const isActive = index === currentFrameIndex;

                return (
                    <Image
                        key={frame}
                        src={imagePath}
                        alt={`Animated web development frame ${frameString}`}
                        className={`absolute inset-0 w-full h-full object-contain mix-blend-screen scale-125 sm:scale-110 lg:scale-100 ${isActive ? 'opacity-100 relative' : 'opacity-0'}`}
                        style={{ willChange: 'opacity' }}
                        width={800}
                        height={800}
                        priority={index < 3}
                        unoptimized
                    />
                );
            })}
        </div>
    );
}
