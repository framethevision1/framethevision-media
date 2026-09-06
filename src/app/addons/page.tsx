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
          src="/photos/twi-joshua-after.jpg"
          alt="A La Carte Add-Ons"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-40 pb-12">
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

      {/* Add-on cards */}
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Virtual Twilight */}
            <div className="rounded-2xl overflow-hidden border border-cream-dark bg-white/50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <BeforeAfterSlider
                beforeSrc="/photos/twi-joshua-before.jpg"
                afterSrc="/photos/twi-joshua-after.jpg"
                beforeLabel="Daytime"
                afterLabel="Virtual Twilight"
              />
              <Link href="/addons/virtual-twilight" className="block p-6">
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <Moon className="w-5 h-5 text-gold" />
                  <h3 className="text-lg font-bold text-brown">Virtual Twilight</h3>
                  <span className="px-3 py-1 rounded-full bg-green-500/10 text-xs font-medium text-green-600">
                    1 FREE with every shoot
                  </span>
                </div>
                <p className="text-sm text-gray-body leading-relaxed">
                  Transform any daytime exterior into a stunning twilight shot —
                  dramatic skies and warm glowing windows.
                </p>
                <span className="mt-3 inline-flex items-center text-sm font-medium text-gold">
                  See Examples <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </Link>
            </div>

            {/* Virtual Staging */}
            <div className="rounded-2xl overflow-hidden border border-cream-dark bg-white/50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <BeforeAfterSlider
                beforeSrc="/photos/staging-before.jpg"
                afterSrc="/photos/staging-after.jpg"
                beforeLabel="Empty"
                afterLabel="Staged"
                beforeIcon="boxes"
                afterIcon="sparkles"
              />
              <Link href="/addons/virtual-staging" className="block p-6">
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <Sofa className="w-5 h-5 text-gold" />
                  <h3 className="text-lg font-bold text-brown">Virtual Staging</h3>
                  <span className="px-3 py-1 rounded-full bg-green-500/10 text-xs font-medium text-green-600">
                    1 FREE with every shoot
                  </span>
                </div>
                <p className="text-sm text-gray-body leading-relaxed">
                  Turn empty rooms into beautifully furnished spaces buyers can
                  picture themselves living in.
                </p>
                <span className="mt-3 inline-flex items-center text-sm font-medium text-gold">
                  See Examples <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </Link>
            </div>

            {/* De-Clutter */}
            <div className="rounded-2xl overflow-hidden border border-cream-dark bg-white/50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <BeforeAfterSlider
                beforeSrc="/photos/declutter-before.jpg"
                afterSrc="/photos/declutter-after.jpg"
                beforeLabel="Cluttered"
                afterLabel="De-Cluttered"
                beforeIcon="boxes"
                afterIcon="sparkles"
              />
              <Link href="/addons/de-clutter" className="block p-6">
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <Eraser className="w-5 h-5 text-gold" />
                  <h3 className="text-lg font-bold text-brown">De-Clutter</h3>
                  <span className="px-3 py-1 rounded-full bg-gold/10 text-xs font-medium text-gold">
                    $25 per photo
                  </span>
                </div>
                <p className="text-sm text-gray-body leading-relaxed">
                  Digitally remove clutter, boxes, and personal items so rooms
                  look clean, spacious, and move-in ready.
                </p>
                <span className="mt-3 inline-flex items-center text-sm font-medium text-gold">
                  See Examples <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </Link>
            </div>

            {/* 2D Floor Plan */}
            <div className="rounded-2xl overflow-hidden border border-cream-dark bg-white/50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/photos/kitchen-living.jpg"
                  alt="2D Floor Plan"
                  fill
                  className="object-cover"
                />
              </div>
              <Link href="/pricing" className="block p-6">
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <Map className="w-5 h-5 text-gold" />
                  <h3 className="text-lg font-bold text-brown">2D Floor Plan</h3>
                </div>
                <p className="text-sm text-gray-body leading-relaxed">
                  Professionally drawn floor plans that show buyers the layout,
                  room sizes, and flow of the property.
                </p>
                <span className="mt-3 inline-flex items-center text-sm font-medium text-gold">
                  View Pricing <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </Link>
            </div>

            {/* 3D Virtual Tour */}
            <div className="rounded-2xl overflow-hidden border border-cream-dark bg-white/50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/photos/entrance-room.jpg"
                  alt="3D Virtual Tour"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-green-500/20 backdrop-blur-sm">
                  <span className="text-xs font-medium text-green-300">
                    SAVE $40 — $85 with any package
                  </span>
                </div>
              </div>
              <Link href="/pricing" className="block p-6">
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <Box className="w-5 h-5 text-gold" />
                  <h3 className="text-lg font-bold text-brown">3D Virtual Tour</h3>
                </div>
                <p className="text-sm text-gray-body leading-relaxed">
                  Interactive 3D walkthroughs that let buyers explore every room
                  from anywhere, 24/7 — no appointment needed.
                </p>
                <span className="mt-3 inline-flex items-center text-sm font-medium text-gold">
                  View Pricing <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/photos/twi-joshua-after.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
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
