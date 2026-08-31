"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export interface GalleryItem {
  src: string;
  title?: string;
  subtitle?: string;
}

export default function GalleryLightbox({ items }: { items: GalleryItem[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null && index < items.length;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    [items.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, prev, next]);

  const active = open ? items[index] : null;

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <button
            key={item.src + i}
            onClick={() => setIndex(i)}
            aria-label={item.title ? `View ${item.title}` : "View photo"}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <Image
              src={item.src}
              alt={item.title || ""}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <ZoomIn className="w-4 h-4 text-white" />
              </div>
              {(item.title || item.subtitle) && (
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  {item.title && <p className="text-white font-semibold">{item.title}</p>}
                  {item.subtitle && <p className="text-white/70 text-sm">{item.subtitle}</p>}
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {open && active && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-10"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={active.title || "Photo viewer"}
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {items.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                aria-label="Previous"
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                aria-label="Next"
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <figure
            className="relative flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.title || ""}
              width={1600}
              height={1067}
              className="w-auto h-auto max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            {(active.title || active.subtitle) && (
              <figcaption className="mt-4 text-center">
                {active.title && <p className="text-white font-semibold">{active.title}</p>}
                {active.subtitle && <p className="text-white/60 text-sm">{active.subtitle}</p>}
              </figcaption>
            )}
            <p className="mt-1 text-white/40 text-xs">
              {index + 1} / {items.length}
            </p>
          </figure>
        </div>
      )}
    </>
  );
}
