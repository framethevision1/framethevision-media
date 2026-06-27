import Link from "next/link";
import { Check, ArrowRight, Camera, Plane, Map, Image } from "lucide-react";
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
    description: "The full package — photos, drone, and a detailed floor plan.",
    icon: Image,
    features: [
      "Standard photos",
      "Aerial drone photos",
      "Detailed 2D floor plan",
      "Exterior & interior coverage",
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
  { name: "Virtual Twilight", price: 15 },
  { name: "Virtual Staging", price: 30 },
  { name: "2D Floor Plan", price: 75 },
  { name: "3D Virtual Tour", price: 125, note: "Only $85 when added to any package" },
];

const videoServices = [
  { name: "Land 1 Minute Outlined Video", price: 225 },
  { name: "Standard MLS Property Video", price: 275 },
  { name: "Key Delivery Video", price: 325 },
  { name: "Agent Branded Video", price: 350 },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-cream pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-6">
              Pricing
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brown">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-6 text-lg text-gray-body leading-relaxed">
              Choose the package that fits your listing. No hidden fees, no
              surprises — just professional media that sells homes faster.
            </p>
            <p className="mt-3 text-sm text-gray-body">
              All pricing is based on a radius of 30 miles from 92395.
              Properties outside this area may incur a travel fee.
            </p>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-gray-bg">
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
                className={`relative bg-cream rounded-2xl p-8 ${
                  pkg.popular
                    ? "ring-2 ring-gold shadow-lg scale-[1.02]"
                    : "shadow-sm"
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
                <ul className="mt-8 space-y-3">
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
                      : "bg-cream text-brown hover:bg-cream-dark"
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

      {/* Add-Ons */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="A La Carte"
            title="Add-Ons"
            description="Enhance any package with these individual services."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon) => (
              <div
                key={addon.name}
                className="p-6 rounded-2xl bg-gray-bg"
              >
                <p className="font-medium text-brown">{addon.name}</p>
                <p className="text-gold font-bold text-xl mt-1">
                  ${addon.price}
                </p>
                {addon.note && (
                  <p className="mt-2 text-xs text-green-600 font-medium">
                    {addon.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Services */}
      <section className="py-24 bg-gray-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Video"
            title="Video Services"
            description="Professional video content to bring your listings to life."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoServices.map((vs) => (
              <div
                key={vs.name}
                className="bg-cream p-6 rounded-2xl shadow-sm"
              >
                <p className="font-medium text-brown">{vs.name}</p>
                <p className="text-gold font-bold text-xl mt-1">${vs.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote */}
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
          </div>
        </div>
      </section>
    </>
  );
}
