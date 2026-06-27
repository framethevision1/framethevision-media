import Link from "next/link";
import Image from "next/image";
import {
  Camera,
  Video,
  Plane,
  Box,
  ArrowRight,
  Star,
  TrendingUp,
  Eye,
  Clock,
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    icon: Camera,
    title: "Photography",
    description:
      "Stunning HDR photography that captures every detail. Interior, exterior, twilight, and lifestyle shots that make listings shine.",
    href: "/services/photography",
    image: "/photos/kitchen.jpg",
  },
  {
    icon: Video,
    title: "Video Walkthroughs",
    description:
      "Cinematic property tours that tell a story. Professionally edited videos with music that engage buyers from the first frame.",
    href: "/services/video",
    image: "/photos/kitchen-living.jpg",
  },
  {
    icon: Plane,
    title: "Drone / Aerial",
    description:
      "Breathtaking aerial perspectives that showcase properties, neighborhoods, and surrounding landscapes from above.",
    href: "/services/drone",
    image: "/photos/drone-aerial.jpg",
  },
  {
    icon: Box,
    title: "3D Virtual Tours",
    description:
      "Interactive 3D experiences that let buyers walk through properties from anywhere. Available 24/7, no appointment needed.",
    href: "/services/virtual-tours",
    image: "/photos/living-room.jpg",
  },
];

const stats = [
  {
    icon: TrendingUp,
    stat: "Homes with pro photos sell for",
    highlight: "$11,200+ more",
    source: "NAR / PhotoUp",
  },
  {
    icon: Clock,
    stat: "Professional photos sell homes",
    highlight: "32% faster",
    source: "Redfin / MLS",
  },
  {
    icon: Eye,
    stat: "Listings with video receive",
    highlight: "403% more inquiries",
    source: "Domain.com.au",
  },
  {
    icon: Plane,
    stat: "Drone aerial photos help sell",
    highlight: "68% faster",
    source: "MLS / Inman",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Realtor, Victorville",
    quote:
      "Frame The Vision transformed how I market my listings. My properties are getting more views and selling faster than ever.",
    rating: 5,
  },
  {
    name: "David R.",
    role: "Broker, Apple Valley",
    quote:
      "The drone shots and virtual tours have been game-changers. Buyers love being able to tour properties remotely before visiting.",
    rating: 5,
  },
  {
    name: "Michelle K.",
    role: "Realtor, Hesperia",
    quote:
      "Professional, punctual, and the quality is outstanding. Frame The Vision is my go-to for every listing now.",
    rating: 5,
  },
];

const portfolioImages = [
  { src: "/photos/living-room.jpg", alt: "Living Room" },
  { src: "/photos/front-exterior.jpg", alt: "Front Exterior" },
  { src: "/photos/kitchen.jpg", alt: "Kitchen" },
  { src: "/photos/bedroom.jpg", alt: "Master Bedroom" },
  { src: "/photos/drone-land.jpg", alt: "Drone Aerial" },
  { src: "/photos/backyard.jpg", alt: "Backyard" },
];

export default function Home() {
  return (
    <>
      {/* Hero with Video Background */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/photos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-6">
              Victorville, CA &bull; High Desert
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Elevate Your{" "}
              <span className="text-gold">Real Estate Listings</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
              Professional photography, cinematic video, drone aerial, and 3D
              virtual tours that help your properties sell faster and for more.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="/book"
                className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-white hover:bg-gold-dark transition-colors"
              >
                Book a Shoot
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:border-gold hover:text-gold transition-colors"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-cream py-16 border-b border-cream-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={32} suffix="%" label="Faster Sales with Pro Photos" />
            <AnimatedCounter end={403} suffix="%" label="More Inquiries with Video" />
            <AnimatedCounter end={68} suffix="%" label="Faster Sales with Drone" />
            <AnimatedCounter end={85} suffix="%" label="Of Buyers Expect Aerial Views" />
          </div>
        </div>
      </section>

      {/* Services with Photo Backgrounds */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="What We Offer"
            title="Real Estate Media Services"
            description="Everything you need to market your listings with stunning visuals that attract buyers and close deals faster."
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="w-10 h-10 rounded-lg bg-gold/20 backdrop-blur-sm flex items-center justify-center mb-3">
                    <service.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-300 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm font-medium text-gold">
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Professional Media */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="The Data Speaks"
            title="Why Professional Media Matters"
            description="The numbers prove it — professional real estate media directly impacts how fast properties sell and how much they sell for."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {stats.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-5 p-6 rounded-2xl border border-cream-dark"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-brown">
                    {item.stat}{" "}
                    <span className="font-bold text-gold">{item.highlight}</span>
                  </p>
                  <p className="mt-1 text-xs text-gray-body">
                    Source: {item.source}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-body">
              Agents using professional photography earn{" "}
              <span className="font-bold text-brown">
                2x the gross commission income
              </span>{" "}
              compared to those who don&apos;t.
            </p>
            <p className="mt-1 text-xs text-gray-body">Source: NAR</p>
          </div>
        </div>
      </section>

      {/* Portfolio Preview with Real Photos */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/photos/kitchen-living.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-3">
              Our Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Featured Portfolio
            </h2>
            <p className="mt-4 max-w-2xl text-gray-300 text-lg leading-relaxed mx-auto">
              A glimpse of the stunning visuals we create for real estate
              professionals across the High Desert.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4">
            {portfolioImages.map((img) => (
              <div
                key={img.src}
                className="aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-gold font-semibold hover:text-gold-dark transition-colors"
            >
              View Full Portfolio <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Testimonials"
            title="What Realtors Are Saying"
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 border border-cream-dark"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-5 h-5 fill-gold text-gold"
                    />
                  ))}
                </div>
                <p className="text-brown leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="font-semibold text-brown">{t.name}</p>
                  <p className="text-sm text-gray-body">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with Photo Background */}
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
            Ready to Elevate Your Listings?
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
            Join the top-performing realtors in the High Desert who trust Frame
            The Vision to showcase their properties.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book"
              className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-white hover:bg-gold-dark transition-colors"
            >
              Book Your Shoot Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:border-gold hover:text-gold transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
