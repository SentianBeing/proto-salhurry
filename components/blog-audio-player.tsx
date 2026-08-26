'use client';

import React, { useState, useEffect } from 'react';
import { PlayCircle, PauseCircle, Square, Share2, Check } from 'lucide-react';

interface Props {
  text: string;
}

export default function BlogAudioPlayer({ text }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handlePlayPause = () => {
    if (!('speechSynthesis' in window)) {
      alert("Sorry, your browser doesn't support text-to-speech reading!");
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
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setIsPaused(false);
  };

  const handleShare = async () => {
    const url = window.location.href;
    const title = document.title;

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
        return;
      } catch (err) {
        // User cancelled or share failed, fallback to clipboard
      }
    }

    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch (e) {
        alert(`Copy this URL: ${url}`);
      }
    }
  };

  return (
    <div className="w-full flex items-center justify-between py-4 border-y border-gray-100 mb-10 text-gray-600">
      {/* Audio Player Controls */}
      <div className="flex items-center gap-3 relative">
        <button
          onClick={handlePlayPause}
          className="group flex items-center gap-2 hover:text-black transition-colors relative"
          aria-label={isPlaying ? (isPaused ? 'Resume reading' : 'Pause reading') : 'Listen to article'}
        >
          {isPlaying && !isPaused ? (
            <PauseCircle className="w-6 h-6 text-[#A3E635] fill-black" strokeWidth={1.5} />
          ) : (
            <PlayCircle className="w-6 h-6 hover:text-black transition-colors" strokeWidth={1.5} />
          )}

          <span className="text-xs font-semibold text-gray-700 group-hover:text-black transition-colors">
            {isPlaying ? (isPaused ? 'Resume Audio' : 'Pause Audio') : 'Listen to Article'}
          </span>
        </button>

        {isPlaying && (
          <button
            onClick={handleStop}
            className="hover:text-red-500 transition-colors p-1"
            title="Stop reading"
          >
            <Square className="w-4 h-4" strokeWidth={1.5} />
          </button>
        )}
      </div>

      {/* Share Feature */}
      <div className="relative flex items-center">
        <button
          onClick={handleShare}
          className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full border border-gray-200 hover:border-gray-900 hover:text-black transition-all"
          title="Share Article"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-600 font-bold">Link Copied!</span>
            </>
          ) : (
            <>
              <Share2 className="w-4 h-4" strokeWidth={1.5} />
              <span>Share Article</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
