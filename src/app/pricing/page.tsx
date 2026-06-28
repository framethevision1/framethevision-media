import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight, Camera, Plane, Map, Image as ImageIcon, Video } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Frame The Vision",
  description:
    "Transparent pricing for professional real estate photography, video, drone, and 3D virtual tours in Victorville, CA.",
};

const packages = [
  {
    name: "Basic",
    price: 225,
    description: "Professional photos for standard listings.",
    icon: Camera,
    features: [
      "Standard photos",
      "Exterior & interior coverage",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: 275,
    description: "Photos plus aerial drone for maximum curb appeal.",
    icon: Plane,
    features: [
      "Standard photos",
      "Aerial drone photos",
      "Exterior & interior coverage",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: 350,
    description: "The ultimate all-in-one package — everything you need to dominate the market.",
    icon: ImageIcon,
    features: [
      "Standard photos",
      "Aerial drone photos",
      "Detailed 2D floor plan",
      "3D / 360 virtual tour",
      "Exterior & interior coverage",
      "Lead capture on property website",
      "Direct MLS uploading",
      "Tour syndication",
      "Listing analytics & weekly stats",
    ],
    popular: false,
  },
  {
    name: "Land",
    price: 150,
    description: "Specialized for vacant land and lot listings.",
    icon: Map,
    features: [
      "10–15 photos",
      "Traced property lines",
      "Feature & access labels",
      "Add a 1 min outlined video for $175",
    ],
    popular: false,
  },
];

const addOns = [
  { name: "Virtual Twilight", price: 15, href: "/addons/virtual-twilight" },
  { name: "Virtual Staging", price: 30, href: "/addons/virtual-staging" },
  { name: "2D Floor Plan", price: 75 },
  { name: "3D Virtual Tour", price: 125, note: "SAVE $40 — Only $85 when added to any package!" },
];

const videoServices = [
  { name: "Land 1 Minute Outlined Video", price: 225, note: "SAVE $50 — Only $175 when bundled with the Land package!" },
  { name: "Standard MLS Property Video", price: 275 },
  { name: "Key Delivery Video", price: 325 },
  { name: "Agent Branded Video", price: 350 },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero with Photo */}
      <section className="relative min-h-[40vh] flex items-end overflow-hidden">
        <Image
          src="/photos/kitchen.jpg"
          alt="Pricing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-12">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
            Pricing
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl">
            Choose the package that fits your listing. No hidden fees, no
            surprises — just professional media that sells homes faster.
          </p>
          <p className="mt-3 text-sm text-gray-300">
            All pricing is based on a radius of 30 miles from 92395.
            Properties outside this area may incur a travel fee.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Packages"
            title="Choose Your Package"
            description="All packages include professional editing, high-resolution files, and online gallery delivery."
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-2xl p-8 border-2 transition-all duration-300 flex flex-col hover:-translate-y-2 hover:shadow-xl ${
                  pkg.popular
                    ? "border-gold shadow-lg scale-[1.02] bg-cream"
                    : "border-gold/30 bg-cream"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                  <pkg.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-brown">{pkg.name}</h3>
                <p className="mt-2 text-sm text-gray-body">{pkg.description}</p>
                <p className="mt-6">
                  <span className="text-4xl font-bold text-brown">
                    ${pkg.price}
                  </span>
                </p>
                <ul className="mt-8 space-y-3 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-brown">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/book"
                  className={`mt-8 w-full inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                    pkg.popular
                      ? "bg-gold text-white hover:bg-gold-dark"
                      : "bg-gold text-white hover:bg-gold-dark"
                  }`}
                >
                  Book {pkg.name}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons + Video Side by Side */}
      <section id="add-ons" className="relative py-24 overflow-hidden scroll-mt-20">
        <Image
          src="/photos/living-room.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Add-Ons */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-3">
                A La Carte
              </p>
              <h2 className="text-3xl font-bold text-white mb-8">Add-Ons</h2>
              <div className="space-y-4">
                {addOns.map((addon) => {
                  const inner = (
                    <>
                      <div>
                        <p className="font-medium text-white">{addon.name}</p>
                        {addon.note && (
                          <p className="text-xs text-green-400 mt-1">{addon.note}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0">
                        <p className="text-gold font-bold text-xl">${addon.price}</p>
                        {addon.href && <ArrowRight className="w-4 h-4 text-gold" />}
                      </div>
                    </>
                  );
                  return addon.href ? (
                    <Link
                      key={addon.name}
                      href={addon.href}
                      className="flex items-center justify-between p-5 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                    >
                      {inner}
                    </Link>
                  ) : (
                    <div
                      key={addon.name}
                      className="flex items-center justify-between p-5 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                    >
                      {inner}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Video Services */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-3">
                Video
              </p>
              <h2 className="text-3xl font-bold text-white mb-8">Video Services</h2>
              <div className="space-y-4">
                {videoServices.map((vs) => (
                  <div
                    key={vs.name}
                    className="flex items-center justify-between p-5 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <Video className="w-5 h-5 text-gold flex-shrink-0" />
                        <p className="font-medium text-white">{vs.name}</p>
                      </div>
                      {vs.note && (
                        <p className="text-xs text-green-400 mt-1 ml-8">{vs.note}</p>
                      )}
                    </div>
                    <p className="text-gold font-bold text-xl flex-shrink-0">${vs.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Quote CTA */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brown">
            Need a Custom Quote?
          </h2>
          <p className="mt-4 text-lg text-gray-body max-w-xl mx-auto">
            Have a large property, commercial listing, or unique project? We
            create custom packages tailored to your needs.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-white hover:bg-gold-dark transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="/book"
              className="inline-flex items-center justify-center rounded-full border-2 border-brown/20 px-8 py-4 text-base font-semibold text-brown hover:border-gold hover:text-gold transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
