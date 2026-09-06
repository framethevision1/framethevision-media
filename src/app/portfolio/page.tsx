"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, Video, Box, Map } from "lucide-react";
import GalleryLightbox from "@/components/GalleryLightbox";
import {
  portfolioItems,
  type PortfolioCategory,
} from "@/lib/portfolio-data";

const filters: {
  label: string;
  value: "all" | PortfolioCategory;
  icon?: typeof Camera;
}[] = [
  { label: "All", value: "all" },
  { label: "Photography", value: "photo", icon: Camera },
  { label: "Video", value: "video", icon: Video },
  { label: "Land", value: "land", icon: Map },
  { label: "3D Tours", value: "3d", icon: Box },
];

export default function PortfolioPage() {
  const [active, setActive] = useState<"all" | PortfolioCategory>("all");

  const filtered =
    active === "all"
      ? // On "All", show each image once (some appear under multiple categories)
        portfolioItems.filter(
          (item, i, arr) =>
            arr.findIndex((x) => x.image === item.image) === i
        )
      : portfolioItems.filter((item) => item.category === active);

  // Only show category tabs that actually have work (plus "All").
  const availableFilters = filters.filter(
    (f) => f.value === "all" || portfolioItems.some((item) => item.category === f.value)
  );

  return (
    <>
      {/* Hero with Photo Background */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <Image
          src="/photos/living-room.jpg"
          alt="Portfolio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-16">
          <div className="max-w-3xl">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-6">
              Portfolio
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Our Work Speaks for Itself
            </h1>
            <p className="mt-6 text-lg text-gray-200 leading-relaxed">
              Browse our portfolio of real estate photography, video, drone
              aerial, and 3D virtual tours from across the High Desert.
              Tap any image to view it full-size.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {availableFilters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-colors ${
                  active === f.value
                    ? "bg-gold text-white"
                    : "border border-cream-dark text-brown hover:border-gold hover:text-gold"
                }`}
              >
                {f.icon && <f.icon className="w-4 h-4" />}
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid + Lightbox */}
          <GalleryLightbox
            items={filtered.map((item) => ({
              src: item.image,
              title: item.title,
              subtitle: item.location,
            }))}
          />
        </div>
      </section>
    </>
  );
}
