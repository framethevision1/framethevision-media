"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { Sun, Moon } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  function handleMove(clientX: number) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-col-resize select-none"
      onMouseMove={(e) => {
        if (e.buttons === 1) handleMove(e.clientX);
      }}
      onMouseDown={(e) => handleMove(e.clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
    >
      {/* After (full background) */}
      <div className="absolute inset-0">
        <Image
          src={afterSrc}
          alt={afterLabel}
          fill
          className="object-cover"
        />
      </div>

      {/* Before (clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeLabel}
          fill
          className="object-cover"
        />
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white z-10"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
          <div className="flex items-center gap-0.5">
            <svg className="w-3 h-3 text-brown rotate-180" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 15l-5-5 5-5v10z" />
            </svg>
            <svg className="w-3 h-3 text-brown" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 15l-5-5 5-5v10z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm z-10">
        <div className="flex items-center gap-1.5">
          <Sun className="w-3.5 h-3.5 text-yellow-500" />
          <span className="text-xs font-semibold text-brown">{beforeLabel}</span>
        </div>
      </div>
      <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-gold/90 backdrop-blur-sm z-10">
        <div className="flex items-center gap-1.5">
          <Moon className="w-3.5 h-3.5 text-white" />
          <span className="text-xs font-semibold text-white">{afterLabel}</span>
        </div>
      </div>

      {/* Drag hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm z-10">
        <span className="text-xs text-white font-medium">Drag to compare</span>
      </div>
    </div>
  );
}
