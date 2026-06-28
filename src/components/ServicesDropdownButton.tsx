"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const services = [
  { name: "Photography", href: "/services/photography" },
  { name: "Video Tours & Branding", href: "/services/video" },
  { name: "Land Photo & Video", href: "/services/drone" },
  { name: "A La Carte (Add-Ons)", href: "/addons" },
];

export default function ServicesDropdownButton({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className={className}
      >
        View Our Work
        <ChevronDown className={`ml-2 w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute bottom-full left-0 mb-3 w-56 rounded-xl bg-white text-brown shadow-xl border border-cream-dark py-2">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="block px-4 py-3 text-sm font-medium hover:bg-cream hover:text-gold transition-colors"
              onClick={() => setOpen(false)}
            >
              {s.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
