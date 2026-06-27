"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { name: "Photography", href: "/services/photography" },
  { name: "Video", href: "/services/video" },
  { name: "Drone / Aerial", href: "/services/drone" },
  { name: "3D Virtual Tours", href: "/services/virtual-tours" },
];

const navLinks = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const hasPhotoHero = pathname === "/" || pathname.startsWith("/services/");

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = hasPhotoHero && !scrolled && !mobileOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent text-white"
          : "bg-cream text-brown border-b border-cream-dark shadow-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Frame The Vision" width={64} height={64} className="w-16 h-16" />
            <span className="text-xl font-bold tracking-tight">
              FRAME THE <span className="text-gold">VISION</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium hover:text-gold transition-colors py-2">
                Services <ChevronDown className="w-4 h-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 pt-2">
                <div className="w-56 rounded-lg bg-cream text-brown shadow-xl border border-cream-dark py-2">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2.5 text-sm hover:bg-cream-dark hover:text-gold transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <a
              href="/book"
              className="rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-white hover:bg-gold-dark transition-colors"
            >
              Book Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-cream-dark bg-cream text-brown">
          <div className="px-4 py-4 space-y-1">
            <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gray-body">
              Services
            </p>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block px-3 py-2 text-sm hover:text-gold transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {s.name}
              </Link>
            ))}

            <div className="border-t border-cream-dark my-3" />

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm hover:text-gold transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-3">
              <a
                href="/book"
                className="block w-full rounded-full bg-gold px-6 py-3 text-center text-sm font-semibold text-white hover:bg-gold-dark transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
