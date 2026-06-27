import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Sun, Moon, Sparkles, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Virtual Twilight | Frame The Vision",
  description:
    "Transform your daytime property photos into stunning twilight shots. Only $15 per image — included FREE with every shoot.",
};

const benefits = [
  "Dramatic twilight sky with warm sunset tones",
  "Glowing interior lights that make homes feel inviting",
  "Landscape & exterior lighting added digitally",
  "No scheduling around sunset — shoot anytime",
  "Delivered within 24-48 hours",
  "1 FREE with every shoot — $15 per additional image",
];

const whyTwilight = [
  {
    icon: Moon,
    title: "Stand Out on MLS",
    description:
      "Twilight photos stop the scroll. They create an emotional reaction that daytime photos simply can't match — making buyers click, save, and schedule showings.",
  },
  {
    icon: Sparkles,
    title: "No Sunset Required",
    description:
      "Traditional twilight shoots require perfect timing and weather. Virtual twilight gives you the same stunning result from any daytime photo — rain or shine.",
  },
  {
    icon: Sun,
    title: "Warm & Inviting",
    description:
      "Glowing windows, warm skies, and soft lighting create an emotional connection with buyers. It transforms a house into a home they can picture themselves in.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Get your virtual twilight images back within 24-48 hours along with the rest of your photos. No extra appointments, no extra hassle.",
  },
];

export default function VirtualTwilightPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <Image
          src="/photos/front-exterior.jpg"
          alt="Virtual Twilight"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gold/20 backdrop-blur-sm flex items-center justify-center">
              <Moon className="w-5 h-5 text-gold" />
            </div>
            <p className="text-gold text-sm font-semibold uppercase tracking-widest">
              Add-On Service
            </p>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Virtual Twilight
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl">
            Transform any daytime exterior into a breathtaking twilight shot —
            dramatic skies, warm glowing windows, and the kind of curb appeal
            that makes buyers fall in love at first scroll.
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
            Every photo shoot includes 1 free virtual twilight image. Need more? Just $15 per additional photo.
          </p>
        </div>
      </section>

      {/* Before / After Concept */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="The Transformation"
            title="From Day to Dusk in One Click"
            description="We take your standard daytime exterior and digitally transform it into a magazine-worthy twilight shot — no sunset shoot required."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <BeforeAfterSlider
              beforeSrc="/photos/front-exterior.jpg"
              afterSrc="/photos/front-exterior.jpg"
              beforeLabel="Daytime"
              afterLabel="Virtual Twilight"
            />
            <BeforeAfterSlider
              beforeSrc="/photos/backyard.jpg"
              afterSrc="/photos/backyard.jpg"
              beforeLabel="Daytime"
              afterLabel="Virtual Twilight"
            />
            <BeforeAfterSlider
              beforeSrc="/photos/right-side.jpg"
              afterSrc="/photos/right-side.jpg"
              beforeLabel="Daytime"
              afterLabel="Virtual Twilight"
            />
          </div>
          <p className="mt-6 text-center text-sm text-gray-body">
            * Actual results will vary. Professional virtual twilight editing produces more realistic, refined results than this preview.
          </p>
        </div>
      </section>

      {/* Why Virtual Twilight */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Why It Works"
            title="The Secret Weapon of Top Agents"
            description="Twilight photos consistently outperform standard daytime shots. Here's why top-producing agents swear by them."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyTwilight.map((item) => (
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
              Every Virtual Twilight Includes
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
            Make Your Listings Unforgettable
          </h2>
          <p className="mt-4 text-lg text-gray-body max-w-xl mx-auto">
            Every photo shoot includes 1 free virtual twilight image.
            Need more? Just $15 per additional photo — add them during checkout.
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
