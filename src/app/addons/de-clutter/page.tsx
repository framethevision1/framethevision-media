import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Eraser, Sparkles, Wand2, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "De-Clutter | Frame The Vision",
  description:
    "Digitally remove clutter, boxes, and personal items from your listing photos so rooms look clean, spacious, and move-in ready. Only $25 per photo.",
};

const benefits = [
  "Clutter, boxes, and personal items removed",
  "Rooms look clean, open, and move-in ready",
  "Keeps the home's real walls, floors, and finishes",
  "Perfect for occupied or messy vacant listings",
  "Delivered within 24-48 hours",
  "Just $25 per photo",
];

const whyDeclutter = [
  {
    icon: Eraser,
    title: "Show the Space, Not the Stuff",
    description:
      "Buyers can't picture a home buried in clutter. Removing the distractions lets them focus on the room's size, light, and real potential.",
  },
  {
    icon: Sparkles,
    title: "Show-Ready in Hours",
    description:
      "No need to haul everything out before the shoot. We clean it up digitally so the listing looks its absolute best — fast.",
  },
  {
    icon: Wand2,
    title: "Natural, Believable Edits",
    description:
      "Careful retouching that keeps the room's true finishes intact. Clean, realistic results — never fake or obvious.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Get your de-cluttered images back within 24-48 hours, right alongside the rest of your photos.",
  },
];

export default function DeClutterPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <Image
          src="/photos/declutter-after.jpg"
          alt="De-Clutter"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gold/20 backdrop-blur-sm flex items-center justify-center">
              <Eraser className="w-5 h-5 text-gold" />
            </div>
            <p className="text-gold text-sm font-semibold uppercase tracking-widest">
              Add-On Service
            </p>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            De-Clutter
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl">
            Clear the clutter — digitally. We remove boxes, mess, and personal
            items so buyers see a clean, spacious, move-in-ready home instead of
            someone else's stuff.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
            <a
              href="/book"
              className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-white hover:bg-gold-dark transition-colors"
            >
              Book a Shoot & Add This
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-gold/20 backdrop-blur-sm">
              <Eraser className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold">
                Only $25 per photo
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="The Transformation"
            title="From Cluttered to Move-In Ready"
            description="We digitally remove the mess, boxes, and personal items — leaving a clean, open space that lets the home shine. Drag the slider to compare."
          />
          <div className="mt-16 max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeSrc="/photos/declutter-before.jpg"
              afterSrc="/photos/declutter-after.jpg"
              beforeLabel="Cluttered"
              afterLabel="De-Cluttered"
              beforeIcon="boxes"
              afterIcon="sparkles"
            />
          </div>
        </div>
      </section>

      {/* Why De-Clutter */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Why It Works"
            title="A Clean Room Sells Faster"
            description="Cluttered photos make rooms look smaller and turn buyers away. A clean, distraction-free space helps them fall in love."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyDeclutter.map((item) => (
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
          src="/photos/right-side.jpg"
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
              Every De-Clutter Includes
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
            Let Buyers See the Home, Not the Mess
          </h2>
          <p className="mt-4 text-lg text-gray-body max-w-xl mx-auto">
            Add De-Clutter to any shoot for just $25 per photo — clean, spacious
            rooms that help your listing sell faster.
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
