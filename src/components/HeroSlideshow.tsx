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

  // The outgoing image stays fully opaque underneath while the incoming one
  // fades in on top — so a solid image always covers the background and the
  // crossfade never dips to a gray flash.
  const previous = (current - 1 + images.length) % images.length;

  return (
    <>
      {images.map((img, i) => {
        const layer =
          i === current
            ? "opacity-100 z-20"
            : i === previous
            ? "opacity-100 z-10"
            : "opacity-0 z-0";
        return (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            fill
            sizes="100vw"
            priority={i === 0}
            className={`object-cover transition-opacity duration-1000 ease-in-out ${layer}`}
          />
        );
      })}
    </>
  );
}
