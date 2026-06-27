"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, Video, Plane, Box } from "lucide-react";

const filters = [
  { label: "All", value: "all" },
  { label: "Photography", value: "photo", icon: Camera },
  { label: "Video", value: "video", icon: Video },
  { label: "Drone", value: "drone", icon: Plane },
  { label: "3D Tours", value: "3d", icon: Box },
];

const portfolioItems = [
  { id: 1, category: "photo", title: "Living Room", location: "Victorville, CA", image: "/photos/living-room.jpg" },
  { id: 2, category: "photo", title: "Kitchen", location: "Victorville, CA", image: "/photos/kitchen.jpg" },
  { id: 3, category: "drone", title: "Aerial Property View", location: "Victorville, CA", image: "/photos/drone-aerial.jpg" },
  { id: 4, category: "photo", title: "Master Bedroom", location: "Victorville, CA", image: "/photos/bedroom.jpg" },
  { id: 5, category: "drone", title: "Land Survey Aerial", location: "Helendale, CA", image: "/photos/drone-land.jpg" },
  { id: 6, category: "photo", title: "Front Exterior", location: "Victorville, CA", image: "/photos/front-exterior.jpg" },
  { id: 7, category: "video", title: "Property Video Tour", location: "Helendale, CA", image: "/photos/kitchen-living.jpg" },
  { id: 8, category: "3d", title: "3D Virtual Tour", location: "Victorville, CA", image: "/photos/entrance-room.jpg" },
  { id: 9, category: "photo", title: "Backyard", location: "Victorville, CA", image: "/photos/backyard.jpg" },
  { id: 10, category: "photo", title: "Kitchen & Living Room", location: "Victorville, CA", image: "/photos/kitchen-living.jpg" },
  { id: 11, category: "photo", title: "Master Bathroom", location: "Victorville, CA", image: "/photos/master-bath.jpg" },
  { id: 12, category: "photo", title: "Front Entrance", location: "Victorville, CA", image: "/photos/front-entrance.jpg" },
  { id: 13, category: "photo", title: "Living Room", location: "Victorville, CA", image: "/photos/living-room-2.jpg" },
  { id: 14, category: "photo", title: "Bedroom 2", location: "Victorville, CA", image: "/photos/bedroom-2.jpg" },
  { id: 15, category: "photo", title: "Right Side Exterior", location: "Victorville, CA", image: "/photos/right-side.jpg" },
  { id: 16, category: "video", title: "Walkthrough Tour", location: "Victorville, CA", image: "/photos/living-kitchen.jpg" },
  { id: 17, category: "photo", title: "Backyard Patio", location: "Victorville, CA", image: "/photos/backyard-2.jpg" },
  { id: 18, category: "3d", title: "Virtual Tour Scan", location: "Victorville, CA", image: "/photos/bedroom.jpg" },
];

export default function PortfolioPage() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === active);

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
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {filters.map((f) => (
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

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-semibold">{item.title}</p>
                    <p className="text-white/70 text-sm">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
