import Link from "next/link";
import Image from "next/image";
import {
  Camera,
  Video,
  Plane,
  Box,
  ArrowRight,
  Star,
  Sparkles,
  TrendingUp,
  Eye,
  Clock,
  Zap,
  BadgeCheck,
  ShieldCheck,
  CalendarCheck,
  Rocket,
  Aperture,
  UserCheck,
  RefreshCw,
  Award,
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionHeading from "@/components/SectionHeading";
import ServicesDropdownButton from "@/components/ServicesDropdownButton";
import CardSlideshow from "@/components/CardSlideshow";
import HeroSlideshow from "@/components/HeroSlideshow";

const services = [
  {
    icon: Camera,
    title: "Photography",
    description:
      "Stunning HDR photography that captures every detail. Interior, exterior, twilight, and lifestyle shots that make listings shine.",
    href: "/services/photography",
    images: ["/photos/kitchen.jpg", "/photos/living-room.jpg", "/photos/bedroom.jpg", "/photos/front-exterior.jpg"],
  },
  {
    icon: Video,
    title: "Video Tours & Branding",
    description:
      "MLS walkthroughs, agent-branded videos, and key delivery content that make you and your listings unforgettable.",
    href: "/services/video",
    images: ["/photos/kitchen-living.jpg", "/photos/entrance-room.jpg", "/photos/living-room-2.jpg", "/photos/backyard.jpg"],
  },
  {
    icon: Plane,
    title: "Land Photo & Video",
    description:
      "Aerial photography, cinematic flyover video, traced property lines, and labeled roads that give buyers confidence to pull the trigger.",
    href: "/services/drone",
    images: ["/photos/land-pearblossom-1.jpg", "/photos/land-pearblossom-3.jpg", "/photos/land-applevalley-1.jpg", "/photos/land-hinkley-1.jpg"],
  },
  {
    icon: Sparkles,
    title: "A La Carte (Add-Ons)",
    description:
      "Virtual twilight, virtual staging, 2D floor plans, and 3D virtual tours. Enhance any shoot with extras that make listings unforgettable.",
    href: "/addons",
    images: ["/photos/twi-joshua-after.jpg", "/photos/twi-joshua-before.jpg", "/photos/bedroom.jpg", "/photos/front-exterior.jpg"],
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

const whyChooseUs = [
  {
    icon: Clock,
    title: "Next Business Day",
    description: "Edited, MLS-ready media in your inbox the very next business day.",
  },
  {
    icon: Zap,
    title: "Book in Minutes",
    description: "Simple online booking — lock in your date in under a minute.",
  },
  {
    icon: BadgeCheck,
    title: "MLS-Ready Files",
    description: "Web-optimized and print-ready. Just upload and go live.",
  },
  {
    icon: ShieldCheck,
    title: "Satisfaction Guaranteed",
    description: "We're not finished until you love every single shot.",
  },
];

const howItWorks = [
  {
    step: "01",
    icon: CalendarCheck,
    title: "Book in 60 Seconds",
    description:
      "Pick your package and date online — no phone tag, no back-and-forth. You're locked in instantly.",
  },
  {
    step: "02",
    icon: Camera,
    title: "We Capture It All",
    description:
      "We arrive on time and shoot every angle — interiors, exteriors, drone, and more, all in one visit.",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Delivered Next Day",
    description:
      "Your edited, MLS-ready media lands in your inbox the next business day. List it and sell it.",
  },
];

const qualityPoints = [
  {
    icon: Aperture,
    title: "Pro HDR Editing",
    description: "Every photo hand-edited for perfect color, light, and clarity.",
  },
  {
    icon: UserCheck,
    title: "One Trusted Local Pro",
    description: "You work directly with Armando — never a rotating cast of strangers.",
  },
  {
    icon: RefreshCw,
    title: "Free Reshoots",
    description: "If something isn't right, we come back and fix it — no charge.",
  },
  {
    icon: Award,
    title: "Consistent Every Time",
    description: "The same premium standard on every listing, guaranteed.",
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

// Curated best shots for the homepage hero — day and twilight alternating.
const heroImages = [
  { src: "/photos/joshua-exterior.jpg", alt: "Real estate exterior in Oak Hills, CA by Frame The Vision" },
  { src: "/photos/twi-thunderbird-after.jpg", alt: "Aerial twilight of a High Desert property by Frame The Vision" },
  { src: "/photos/patricia-kitchen.jpg", alt: "Renovated marble kitchen in Barstow, CA by Frame The Vision" },
  { src: "/photos/twilight-after-2.jpg", alt: "Twilight exterior in Barstow, CA by Frame The Vision" },
  { src: "/photos/silverlakes-aerial.jpg", alt: "Silver Lakes aerial in Helendale, CA by Frame The Vision" },
  { src: "/photos/twi-wrightwood-after.jpg", alt: "Mountain cabin at twilight in Wrightwood, CA by Frame The Vision" },
  { src: "/photos/joshua-family.jpg", alt: "Bright open family room in Oak Hills, CA by Frame The Vision" },
  { src: "/photos/twi-birdie-after.jpg", alt: "Aerial lake twilight in Helendale, CA by Frame The Vision" },
];

export default function Home() {
  return (
    <>
      {/* Hero with Video Background */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <HeroSlideshow images={heroImages} interval={5000} />
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
              <ServicesDropdownButton
                className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:border-gold hover:text-gold transition-colors"
              />
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
                <CardSlideshow images={service.images} interval={3000} />
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

      {/* Why Agents Choose Us */}
      <section className="bg-brown py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-3">
              The Frame The Vision Difference
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Why Agents Choose Us
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-gold/15 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
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

      {/* How It Works */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/photos/living-room-2.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-3">
              Simple &amp; Fast
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              How It Works
            </h2>
            <p className="mt-4 max-w-2xl text-gray-300 text-lg leading-relaxed mx-auto">
              From booking to delivery in three effortless steps — so you spend
              less time coordinating and more time closing.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((item) => (
              <div
                key={item.step}
                className="relative rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8"
              >
                <span className="absolute -top-6 right-6 text-6xl font-bold text-gold/20">
                  {item.step}
                </span>
                <div className="w-14 h-14 rounded-2xl bg-gold/20 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="/book"
              className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-white hover:bg-gold-dark transition-colors"
            >
              Book in 60 Seconds
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Quality Guarantee */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Our Guarantee"
            title="Quality You Can Count On"
            description="Every listing gets the same obsessive attention to detail. Here's how we make sure your media is flawless, every single time."
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-2xl border border-cream-dark p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-5">
                  <point.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-brown">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm text-gray-body leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
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
            <ServicesDropdownButton
              className="inline-flex items-center gap-2 text-gold font-semibold hover:text-gold-dark transition-colors"
            />
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
