import { Camera, Eye, Heart, Clock, MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Frame The Vision",
  description:
    "Learn about Frame The Vision — professional real estate media serving Victorville, CA and the High Desert.",
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
      {/* Hero */}
      <section className="bg-cream pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-6">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brown">
              We Help Realtors{" "}
              <span className="text-gold">Sell Properties Faster</span>
            </h1>
            <p className="mt-6 text-lg text-gray-body leading-relaxed max-w-2xl">
              Frame The Vision is a professional real estate media company based
              in Victorville, CA. We create stunning photography, cinematic
              video, drone aerial, and immersive 3D virtual tours that help
              realtors market their listings and close deals faster.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                tag="Our Mission"
                title="Framing the Vision for Every Property"
                center={false}
              />
              <div className="mt-8 space-y-4 text-gray-body leading-relaxed">
                <p>
                  We believe every property has a story to tell. Our job is to
                  capture that story through stunning visuals that connect with
                  buyers on an emotional level — before they ever step foot
                  inside.
                </p>
                <p>
                  In today&apos;s market, 97% of home buyers start their search
                  online. First impressions are made in seconds, and the quality
                  of your listing&apos;s media directly impacts how fast it
                  sells and how much it sells for. That&apos;s where we come in.
                </p>
                <p>
                  We combine professional-grade equipment, creative expertise,
                  and an understanding of real estate marketing to deliver
                  content that sets your listings apart from the competition.
                </p>
              </div>
            </div>
            <div className="aspect-square rounded-2xl bg-cream flex items-center justify-center">
              <Camera className="w-20 h-20 text-gray-body" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Our Values"
            title="What We Stand For"
            description="Three principles that guide everything we do."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-cream rounded-2xl p-8 text-center">
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
                className="inline-flex items-center gap-2 rounded-full bg-gray-bg px-5 py-2.5 text-sm font-medium text-brown"
              >
                <MapPin className="w-4 h-4 text-gold" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
