'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, ArrowRight } from 'lucide-react';

export default function BlogSearch() {
    const [query, setQuery] = useState('');
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const searchParams = new URLSearchParams();
        if (query.trim()) {
            searchParams.set('search', query.trim());
        }

        router.push(`/blog?${searchParams.toString()}`, { scroll: false });

        // Scroll to the blog list area smoothly
        const blogElement = document.getElementById('blog-grid');
        if (blogElement) {
            blogElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <form onSubmit={handleSearch} className="bg-white rounded-full p-2 flex items-center max-w-md w-full mb-8 lg:mb-0">
            <Search className="w-5 h-5 text-gray-400 ml-3 shrink-0" />
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles..."
                className="flex-1 bg-transparent border-none outline-none px-3 text-black placeholder-gray-500 text-sm w-full"
            />
            {/* Custom 250deg Rotation Button */}
            <button type="submit" className="custom-search-btn shrink-0">
                <span>Search</span>
                <svg className="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
                </svg>
            </button>

            <style jsx>{`
                .custom-search-btn {
                    width: 110px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    gap: 10px;
                    background-color: rgb(161, 255, 20);
                    border-radius: 30px;
                    color: rgb(19, 19, 19);
                    font-weight: 600;
                    border: none;
                    position: relative;
                    cursor: pointer;
                    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.116);
                    padding-left: 17px;
                    transition-duration: .5s;
                }
                .svgIcon {
                    height: 18px;
                    transition-duration: 1.5s;
                    fill: rgb(19, 19, 19);
                }
                .custom-search-btn:hover {
                    background-color: rgb(192, 255, 20);
                    transition-duration: .5s;
                }
                .custom-search-btn:active {
                    transform: scale(0.97);
                    transition-duration: .2s;
                }
                .custom-search-btn:hover .svgIcon {
                    transform: rotate(250deg);
                    transition-duration: 1.5s;
                }
            `}</style>
        </form>
    );
}
