import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { servicesData, type ServiceSlug } from "@/lib/services-data";
import SectionHeading from "@/components/SectionHeading";
import HeroSlideshow from "@/components/HeroSlideshow";

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const service = servicesData[slug as ServiceSlug];
    if (!service) return {};
    return {
      title: `${service.title} | Frame The Vision`,
      description: service.description,
    };
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug as ServiceSlug];
  if (!service) notFound();

  const Icon = service.icon;

  return (
    <>
      {/* Hero with Slideshow */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <HeroSlideshow images={service.gallery.slice(0, 6)} interval={5000} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-16 md:pb-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gold/20 backdrop-blur-sm flex items-center justify-center">
                <Icon className="w-6 h-6 text-gold" />
              </div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest">
                {service.tagline}
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              {service.title}
            </h1>
            <p className="mt-6 text-lg text-gray-200 leading-relaxed max-w-2xl">
              {service.description}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="/book"
                className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-white hover:bg-gold-dark transition-colors"
              >
                Book This Service
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
        </div>
      </section>

      {/* Key Stat */}
      <section className="py-12 bg-gold">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-4xl md:text-5xl font-bold text-white">
            {service.heroStat.value}
          </p>
          <p className="mt-2 text-white/80">{service.heroStat.label}</p>
          {service.heroStat.source && (
            <p className="mt-1 text-xs text-white/50">Source: {service.heroStat.source}</p>
          )}
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                tag="What's Included"
                title="Everything You Get"
                center={false}
              />
              <ul className="mt-8 space-y-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-gold" />
                    </div>
                    <span className="text-brown">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <a
                  href="/book"
                  className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-white hover:bg-gold-dark transition-colors"
                >
                  Book Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {service.gallery.slice(0, 4).map((img, i) => (
                <div
                  key={i}
                  className={`rounded-2xl overflow-hidden ${
                    i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Gallery"
            title="See Our Work"
            description="Real results from real shoots across the High Desert."
          />
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4">
            {service.gallery.map((img, i) => (
              <div
                key={i}
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
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src={service.heroImage}
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-3">
              The Numbers
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Why This Service Matters
            </h2>
            <p className="mt-4 max-w-2xl text-gray-300 text-lg mx-auto">
              Data-backed reasons why this investment pays for itself.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-bold text-gold">{stat.highlight}</p>
                <p className="mt-2 text-sm text-gray-300">{stat.text}</p>
                {stat.source && (
                  <p className="mt-1 text-xs text-gray-500">Source: {stat.source}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brown">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-gray-body max-w-xl mx-auto">
            Book your {service.title.toLowerCase()} session today and see the
            difference professional media makes.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book"
              className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-white hover:bg-gold-dark transition-colors"
            >
              Book Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full border-2 border-brown/20 px-8 py-4 text-base font-semibold text-brown hover:border-gold hover:text-gold transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
