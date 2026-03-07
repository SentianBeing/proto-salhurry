'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function AnimatedArmRobot() {
    const [currentFrame, setCurrentFrame] = useState(1);
    const totalFrames = 31;

    useEffect(() => {
        // Requirements specified 10 frames per second
        const fps = 10;
        const interval = 1000 / fps;
        const pauseDuration = 20000; // 20 seconds pause at the last frame

        const delay = currentFrame === totalFrames ? pauseDuration : interval;

        const timeoutId = setTimeout(() => {
            setCurrentFrame((prev) => {
                if (prev >= totalFrames) return 1;
                return prev + 1;
            });
        }, delay);

        // Preload next few frames for smoother playback
        const preloadFrames = () => {
            for (let i = 1; i <= 3; i++) {
                let nextFrame = currentFrame + i;
                if (nextFrame > totalFrames) nextFrame = (nextFrame % totalFrames) || 1;

                const img = document.createElement('img');
                const frameString = nextFrame.toString().padStart(3, '0');
                img.src = `/salhurry-arm-robot/ezgif-frame-${frameString}.png`;
            }
        };
        preloadFrames();

        return () => clearTimeout(timeoutId);
    }, [currentFrame, totalFrames]);

    const frameString = currentFrame.toString().padStart(3, '0');
    const imagePath = `/salhurry-arm-robot/ezgif-frame-${frameString}.png`;

    return (
        <Image
            src={imagePath}
            alt="Animated robot arm visualization"
            className="w-full h-full object-contain"
            style={{ willChange: 'contents' }}
            width={800}
            height={800}
            unoptimized
        />
    );
}
