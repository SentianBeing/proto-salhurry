'use client';

import React, { useState, useEffect } from 'react';

export default function AnimatedHeroImage() {
    const [currentFrame, setCurrentFrame] = useState(1);
    const totalFrames = 22;

    useEffect(() => {
        const fps = 10;
        const interval = 1000 / fps;

        const intervalId = setInterval(() => {
            setCurrentFrame((prev) => {
                // Skip missing frames 17 and 18
                if (prev === 16) return 19;
                if (prev >= totalFrames) return 1;
                return prev + 1;
            });
        }, interval);

        // Preload next few frames
        const preloadFrames = () => {
            for (let i = 1; i <= 3; i++) {
                let nextFrame = currentFrame + i;
                if (nextFrame === 17) nextFrame = 19;
                if (nextFrame === 18) nextFrame = 19;
                if (nextFrame > totalFrames) nextFrame = (nextFrame % totalFrames) || 1;

                const img = document.createElement('img');
                const frameString = nextFrame.toString().padStart(3, '0');
                img.src = `/lock-frames/ezgif-frame-${frameString}.png`;
            }
        };
        preloadFrames();

        return () => clearInterval(intervalId);
    }, [currentFrame, totalFrames]);

    const frameString = currentFrame.toString().padStart(3, '0');
    const imagePath = `/lock-frames/ezgif-frame-${frameString}.png`;

    return (
        <div className="relative w-full h-[400px] lg:h-[500px] rounded-[30px] overflow-hidden lg:ml-auto flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={imagePath}
                alt="Animated web development visualization"
                className="w-full h-full object-contain mix-blend-screen"
                style={{ willChange: 'contents' }}
            />
        </div>
    );
}
