import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Sofa, DollarSign, TrendingUp, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Virtual Staging | Frame The Vision",
  description:
    "Transform empty rooms into beautifully furnished spaces. Only $30 per room — help buyers visualize their future home.",
};

const benefits = [
  "Professionally designed furniture & decor added digitally",
  "Multiple design styles available (modern, farmhouse, luxury, etc.)",
  "Helps buyers visualize empty or outdated spaces",
  "Fraction of the cost of physical staging",
  "Delivered within 24-48 hours",
  "1 FREE with every shoot — $30 per additional room",
];

const whyStaging = [
  {
    icon: DollarSign,
    title: "Save Thousands vs. Physical Staging",
    description:
      "Physical staging costs $2,000–$5,000+ per home. Virtual staging delivers the same buyer impact at a fraction of the price — just $30 per room.",
  },
  {
    icon: TrendingUp,
    title: "Sell 73% Faster",
    description:
      "According to the NAR, staged homes sell 73% faster than non-staged homes. Virtual staging gives you the same advantage without the logistics.",
  },
  {
    icon: Sofa,
    title: "Any Style, Any Room",
    description:
      "Modern minimalist, cozy farmhouse, luxury contemporary — we match the staging style to the home and the target buyer.",
  },
  {
    icon: Clock,
    title: "Ready in 24-48 Hours",
    description:
      "No waiting for furniture deliveries or coordinating with stagers. Send us the empty room photo and we'll have it staged within 48 hours.",
  },
];

export default function VirtualStagingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <Image
          src="/photos/living-room.jpg"
          alt="Virtual Staging"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gold/20 backdrop-blur-sm flex items-center justify-center">
              <Sofa className="w-5 h-5 text-gold" />
            </div>
            <p className="text-gold text-sm font-semibold uppercase tracking-widest">
              Add-On Service
            </p>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Virtual Staging
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl">
            Transform empty rooms into beautifully furnished spaces that help
            buyers fall in love — without moving a single piece of furniture.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
            <a
              href="/book"
              className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-white hover:bg-gold-dark transition-colors"
            >
              Book a Shoot & Add This
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-green-500/20 backdrop-blur-sm">
              <Check className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-green-300">
                1 FREE with every photo shoot
              </span>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-300">
            Every photo shoot includes 1 free virtually staged room. Need more? Just $30 per additional room.
          </p>
        </div>
      </section>

      {/* Before / After Sliders */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="The Transformation"
            title="Empty to Stunning in 48 Hours"
            description="See how virtual staging transforms vacant rooms into spaces buyers can picture themselves living in."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <BeforeAfterSlider
              beforeSrc="/photos/living-room-2.jpg"
              afterSrc="/photos/living-room.jpg"
              beforeLabel="Empty"
              afterLabel="Staged"
            />
            <BeforeAfterSlider
              beforeSrc="/photos/bedroom-2.jpg"
              afterSrc="/photos/bedroom.jpg"
              beforeLabel="Empty"
              afterLabel="Staged"
            />
            <BeforeAfterSlider
              beforeSrc="/photos/entrance-room.jpg"
              afterSrc="/photos/kitchen-living.jpg"
              beforeLabel="Empty"
              afterLabel="Staged"
            />
          </div>
          <p className="mt-6 text-center text-sm text-gray-body">
            * Photos shown are for demonstration purposes. Your staging will be customized to match the property style.
          </p>
        </div>
      </section>

      {/* Why Virtual Staging */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Why It Works"
            title="Buyers Can't Visualize Empty Rooms"
            description="93% of buyers start their search online. If they can't picture themselves in the space, they scroll past. Virtual staging solves that."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyStaging.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-5 p-6 rounded-2xl border border-cream-dark"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-brown text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-body leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/photos/living-room.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-3">
              What You Get
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Every Virtual Staging Includes
            </h2>
            <ul className="mt-10 space-y-4 text-left">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-gray-200">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brown">
            Stop Losing Buyers to Empty Rooms
          </h2>
          <p className="mt-4 text-lg text-gray-body max-w-xl mx-auto">
            Every photo shoot includes 1 free virtually staged room.
            Need more? Just $30 per additional room — add them during checkout.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book"
              className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-white hover:bg-gold-dark transition-colors"
            >
              Book a Shoot & Add This
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full border-2 border-brown/20 px-8 py-4 text-base font-semibold text-brown hover:border-gold hover:text-gold transition-colors"
            >
              View All Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
