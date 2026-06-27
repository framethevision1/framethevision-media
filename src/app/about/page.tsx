import Image from "next/image";
import Link from "next/link";
import { Eye, Heart, Clock, MapPin, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Frame The Vision",
  description:
    "Learn about Frame The Vision and founder Armando Rosas Cano — professional real estate media serving Victorville, CA and the High Desert.",
};

const values = [
  {
    icon: Eye,
    title: "Quality",
    description:
      "Every shot is meticulously composed, lit, and edited. We don't cut corners because your listings deserve the best.",
  },
  {
    icon: Heart,
    title: "Service",
    description:
      "We treat every listing like our own. Reliable scheduling, clear communication, and fast turnaround — every time.",
  },
  {
    icon: Clock,
    title: "Speed",
    description:
      "24-48 hour turnaround on photos, fast delivery on video and 3D tours. Your listings hit the market on time.",
  },
];

const areas = [
  "Victorville",
  "Hesperia",
  "Apple Valley",
  "Adelanto",
  "Oak Hills",
  "Phelan",
  "Lucerne Valley",
  "Barstow",
  "Yucca Valley",
  "Surrounding High Desert",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero with Photo */}
      <section className="relative min-h-[40vh] flex items-end overflow-hidden">
        <Image
          src="/photos/backyard-2.jpg"
          alt="About Frame The Vision"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-12">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
            About Us
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            We Help Realtors{" "}
            <span className="text-gold">Sell Properties Faster</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl">
            Professional real estate media rooted in the High Desert —
            built by someone who understands the industry from the inside out.
          </p>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/photos/armando.jpg"
                  alt="Armando Rosas Cano — Founder of Frame The Vision"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
                Meet the Founder
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-brown">
                Armando Rosas Cano
              </h2>
              <p className="mt-2 text-gray-body">
                Founder & Photographer, Frame The Vision
              </p>
              <div className="mt-8 space-y-4 text-gray-body leading-relaxed">
                <p>
                  Before Frame The Vision ever existed, I was already obsessed
                  with real estate photography. There was something about
                  capturing a home in its best light — making it feel warm,
                  inviting, and ready for its next chapter — that pulled me in.
                </p>
                <p>
                  But life had other plans. While studying photography, I got
                  detoured into real estate itself and earned my real estate
                  license. That experience turned out to be a gift — I learned
                  firsthand what agents actually need, what buyers respond to,
                  and how much great media impacts a sale.
                </p>
                <p>
                  Now I&apos;m back, and I&apos;m all in. Frame The Vision
                  combines my passion for visual storytelling with real-world
                  knowledge of the real estate industry. I don&apos;t just take
                  photos — I understand <em>why</em> they matter and{" "}
                  <em>how</em> they sell homes.
                </p>
                <p className="font-medium text-brown">
                  When you book with Frame The Vision, you&apos;re not hiring a
                  random photographer. You&apos;re working with someone who
                  speaks your language and is invested in your success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/photos/living-room.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-3">
              Our Mission
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Framing the Vision for Every Property
            </h2>
            <div className="mt-8 space-y-4 text-gray-300 leading-relaxed text-lg">
              <p>
                Every property has a story to tell. Our job is to capture that
                story through stunning visuals that connect with buyers on an
                emotional level — before they ever step foot inside.
              </p>
              <p>
                In today&apos;s market, 97% of home buyers start their search
                online. First impressions are made in seconds. The quality of
                your listing&apos;s media directly impacts how fast it sells and
                how much it sells for.
              </p>
              <p className="text-white font-medium">
                That&apos;s where we come in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Our Values"
            title="What We Stand For"
            description="Three principles that guide everything we do."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl p-8 text-center border border-cream-dark">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-6">
                  <v.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-brown">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm text-gray-body leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Service Area"
            title="Serving the High Desert"
            description="Based in Victorville, CA — we proudly serve the entire High Desert region."
          />
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-2 rounded-full border border-cream-dark px-5 py-2.5 text-sm font-medium text-brown"
              >
                <MapPin className="w-4 h-4 text-gold" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/photos/front-exterior.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
            Ready to elevate your listings? Book a shoot or reach out — I&apos;d
            love to help you stand out in the High Desert market.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book"
              className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-white hover:bg-gold-dark transition-colors"
            >
              Book a Shoot
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:border-gold hover:text-gold transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
