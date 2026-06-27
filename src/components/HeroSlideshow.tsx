"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface HeroSlideshowProps {
  images: { src: string; alt: string }[];
  interval?: number;
}

export default function HeroSlideshow({
  images,
  interval = 5000,
}: HeroSlideshowProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <>
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          className={`object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          priority={i === 0}
        />
      ))}
    </>
  );
}
