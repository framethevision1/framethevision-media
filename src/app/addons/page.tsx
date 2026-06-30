import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Moon, Sofa, Eraser, Map, Box } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A La Carte Add-Ons | Frame The Vision",
  description:
    "Enhance any photo shoot with virtual twilight, virtual staging, de-clutter, 2D floor plans, and 3D virtual tours. Serving Victorville, CA and the High Desert.",
};

export default function AddOnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-end overflow-hidden">
        <Image
          src="/photos/twilight-after.jpg"
          alt="A La Carte Add-Ons"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        <div className="relative mx-auto px-8 sm:px-12 lg:px-20 pt-40 pb-12">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
            A La Carte
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Enhance Any Shoot
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl">
            Add-on services that take your listing media from great to
            unforgettable. Mix and match to build the perfect package.
          </p>
        </div>
      </section>

      {/* Virtual Twilight */}
      <section className="py-12 bg-cream">
        <div className="mx-auto px-8 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <BeforeAfterSlider
                beforeSrc="/photos/twilight-before.jpg"
                afterSrc="/photos/twilight-after.jpg"
                beforeLabel="Daytime"
                afterLabel="Virtual Twilight"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Moon className="w-6 h-6 text-gold" />
                </div>
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-xs font-medium text-green-600">
                  1 FREE with every shoot
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-brown">
                Virtual Twilight
              </h2>
              <p className="mt-6 text-gray-body leading-relaxed text-lg">
                Transform any daytime exterior into a stunning twilight shot —
                dramatic skies, warm glowing windows, and the curb appeal that
                stops the scroll.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-white hover:bg-gold-dark transition-colors"
                >
                  View Pricing & Book
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <Link
                  href="/addons/virtual-twilight"
                  className="inline-flex items-center justify-center rounded-full border-2 border-brown/20 px-8 py-4 text-base font-semibold text-brown hover:border-gold hover:text-gold transition-colors"
                >
                  See Examples
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Staging */}
      <section className="py-12 bg-cream">
        <div className="mx-auto px-8 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="lg:order-2">
              <BeforeAfterSlider
                beforeSrc="/photos/bedroom-2.jpg"
                afterSrc="/photos/bedroom.jpg"
                beforeLabel="Empty"
                afterLabel="Staged"
              />
            </div>
            <div className="lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Sofa className="w-6 h-6 text-gold" />
                </div>
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-xs font-medium text-green-600">
                  1 FREE with every shoot
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-brown">
                Virtual Staging
              </h2>
              <p className="mt-6 text-gray-body leading-relaxed text-lg">
                Turn empty rooms into beautifully furnished spaces that help
                buyers picture themselves living there. Multiple design styles
                available.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-white hover:bg-gold-dark transition-colors"
                >
                  View Pricing & Book
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <Link
                  href="/addons/virtual-staging"
                  className="inline-flex items-center justify-center rounded-full border-2 border-brown/20 px-8 py-4 text-base font-semibold text-brown hover:border-gold hover:text-gold transition-colors"
                >
                  See Examples
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* De-Clutter */}
      <section className="py-12 bg-cream">
        <div className="mx-auto px-8 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <BeforeAfterSlider
                beforeSrc="/photos/declutter-before.jpg"
                afterSrc="/photos/declutter-after.jpg"
                beforeLabel="Cluttered"
                afterLabel="De-Cluttered"
                beforeIcon="boxes"
                afterIcon="sparkles"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Eraser className="w-6 h-6 text-gold" />
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-brown">
                De-Clutter
              </h2>
              <p className="mt-6 text-gray-body leading-relaxed text-lg">
                Digitally remove clutter, boxes, and personal items so rooms look
                clean, spacious, and move-in ready — no heavy lifting required.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-white hover:bg-gold-dark transition-colors"
                >
                  View Pricing & Book
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <Link
                  href="/addons/de-clutter"
                  className="inline-flex items-center justify-center rounded-full border-2 border-brown/20 px-8 py-4 text-base font-semibold text-brown hover:border-gold hover:text-gold transition-colors"
                >
                  See Examples
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2D Floor Plan */}
      <section className="py-12 bg-cream">
        <div className="mx-auto px-8 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/photos/kitchen-living.jpg"
                alt="2D Floor Plan"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Map className="w-6 h-6 text-gold" />
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-brown">
                2D Floor Plan
              </h2>
              <p className="mt-6 text-gray-body leading-relaxed text-lg">
                Detailed, professionally drawn floor plans that give buyers a
                clear understanding of the layout, room sizes, and flow of the
                property.
              </p>
              <div className="mt-8">
                <a
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-white hover:bg-gold-dark transition-colors"
                >
                  View Pricing & Book
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Virtual Tour */}
      <section className="py-12 bg-cream">
        <div className="mx-auto px-8 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="lg:order-2 relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/photos/entrance-room.jpg"
                alt="3D Virtual Tour"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-green-500/20 backdrop-blur-sm">
                <span className="text-sm font-medium text-green-300">
                  SAVE $40 — Only $85 with any package
                </span>
              </div>
            </div>
            <div className="lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Box className="w-6 h-6 text-gold" />
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-brown">
                3D Virtual Tour
              </h2>
              <p className="mt-6 text-gray-body leading-relaxed text-lg">
                Interactive 3D walkthrough experiences that let buyers explore
                every room from anywhere. Available 24/7 — no appointment needed.
              </p>
              <div className="mt-8">
                <a
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-white hover:bg-gold-dark transition-colors"
                >
                  View Pricing & Book
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/photos/twilight-after.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto px-8 sm:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Build Your Perfect Package
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
            Every shoot includes 1 free virtual twilight and 1 free virtual
            staging. Add more during checkout to create the ultimate listing
            package.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-white hover:bg-gold-dark transition-colors"
            >
              Book Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:border-gold hover:text-gold transition-colors"
            >
              View All Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
