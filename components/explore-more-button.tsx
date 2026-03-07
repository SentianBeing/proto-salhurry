'use client';

import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function ExploreMoreButton() {
    const scrollToBlog = () => {
        const blogElement = document.getElementById('blog-grid');
        if (blogElement) {
            blogElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div
            onClick={scrollToBlog}
            className="absolute right-4 sm:right-6 md:right-12 bottom-12 flex items-center gap-3 text-white text-sm cursor-pointer hover:text-[#A3E635] transition-colors group z-20 pointer-events-auto"
        >
            <span>Explore More</span>
            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-[#A3E635] transition-colors">
                <ArrowDown className="w-4 h-4" />
            </div>
        </div>
    );
}
