'use client';

import React, { useState, useEffect } from 'react';
import { PlayCircle, PauseCircle, Square, MessageCircle, Bookmark, Share, Hand } from 'lucide-react';

interface Props {
    text: string;
}

export default function BlogAudioPlayer({ text }: Props) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        // Cleanup on unmount
        return () => {
            window.speechSynthesis.cancel();
        };
    }, []);

    const handlePlayPause = () => {
        if (!('speechSynthesis' in window)) {
            alert("Sorry, your browser doesn't support text to speech!");
            return;
        }

        if (isPlaying) {
            if (isPaused) {
                window.speechSynthesis.resume();
                setIsPaused(false);
            } else {
                window.speechSynthesis.pause();
                setIsPaused(true);
            }
        } else {
            const utterance = new SpeechSynthesisUtterance(text);

            utterance.onend = () => {
                setIsPlaying(false);
                setIsPaused(false);
            };

            utterance.onerror = () => {
                setIsPlaying(false);
                setIsPaused(false);
            };

            window.speechSynthesis.speak(utterance);
            setIsPlaying(true);
            setIsPaused(false);
        }
    };

    const handleStop = () => {
        window.speechSynthesis.cancel();
        setIsPlaying(false);
        setIsPaused(false);
    };

    return (
        <div className="w-full flex items-center justify-between py-4 border-y border-gray-100 mb-10 text-gray-500">
            {/* Left Side: Engagement placeholders */}
            <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 hover:text-black transition-colors" title="Applause">
                    <Hand className="w-5 h-5 -rotate-45" strokeWidth={1.5} /> <span className="text-sm">79</span>
                </button>
                <button className="flex items-center gap-2 hover:text-black transition-colors" title="Responses">
                    <MessageCircle className="w-5 h-5" strokeWidth={1.5} /> <span className="text-sm">8</span>
                </button>
            </div>

            {/* Right Side: Actions */}
            <div className="flex items-center gap-6">
                <button className="hover:text-black transition-colors" title="Save">
                    <Bookmark className="w-5 h-5" strokeWidth={1.5} />
                </button>

                <div className="flex items-center gap-2 relative">
                    <button
                        onClick={handlePlayPause}
                        className="group flex items-center hover:text-black transition-colors relative"
                    >
                        {isPlaying && !isPaused ? <PauseCircle className="w-6 h-6" strokeWidth={1.5} /> : <PlayCircle className="w-6 h-6" strokeWidth={1.5} />}

                        {/* Tooltip */}
                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-black text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                            {isPlaying ? (isPaused ? 'Resume' : 'Pause') : 'Listen'}
                        </span>
                    </button>

                    {isPlaying && (
                        <button
                            onClick={handleStop}
                            className="hover:text-red-500 transition-colors"
                            title="Stop reading"
                        >
                            <Square className="w-5 h-5" strokeWidth={1.5} />
                        </button>
                    )}
                </div>

                <button className="hover:text-black transition-colors" title="Share">
                    <Share className="w-5 h-5" strokeWidth={1.5} />
                </button>
            </div>
        </div>
    );
}
