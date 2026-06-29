import Image from "next/image";
import { Check, Phone, Mail, Clock, Shield, Star } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Now | Frame The Vision",
  description:
    "Book your professional real estate media session — photography, drone, video, and 3D virtual tours in Victorville, CA.",
};

const included = [
  "Professional HDR photography",
  "FREE Virtual Twilight & Staging",
  "Property Website with Lead Capture",
  "Ready-to-post Social Media Banners",
  "Custom Marketing Flyer & QR Code",
  "Direct MLS uploading",
  "Listing analytics & weekly stats",
  "Fast 24-48 hour turnaround",
  "1 year media access in your portal",
  "MLS-ready photo formats",
];

export default function BookPage() {
  return (
    <>
      {/* Hero with Photo */}
      <section className="relative min-h-[40vh] flex items-end overflow-hidden">
        <Image
          src="/photos/front-exterior.jpg"
          alt="Book a Shoot"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-12">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
            Book Your Shoot
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Ready to Elevate Your Listing?
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl">
            Select your services, choose your date, and we&apos;ll handle the
            rest.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Aryeo Form */}
          <div className="rounded-2xl overflow-hidden border border-cream-dark shadow-sm">
            <iframe
              src="https://listings.framethevision.media/order-forms/019abda4-913d-73ad-be87-fdbc4d343a0c"
              className="w-full border-0"
              style={{ minHeight: "900px" }}
              title="Book a Shoot — Frame The Vision"
              allow="payment"
            />
          </div>

          {/* Every Shoot Includes */}
          <div className="mt-12">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold mb-6 text-center">
              Every Shoot Includes
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {included.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gold flex-shrink-0" />
                  <span className="text-sm text-brown">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Points */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 rounded-2xl border border-cream-dark p-6">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="font-semibold text-brown">Satisfaction Guaranteed</p>
                <p className="text-sm text-gray-body mt-1">
                  We don&apos;t stop until you&apos;re 100% happy with the results.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-cream-dark p-6">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Star className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="font-semibold text-brown">5-Star Rated</p>
                <p className="text-sm text-gray-body mt-1">
                  Trusted by top realtors across the High Desert.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-cream-dark p-6">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="font-semibold text-brown">Need Help Booking?</p>
                <p className="text-sm text-gray-body mt-1">
                  Call{" "}
                  <a href="tel:+17606462321" className="text-gold font-medium hover:text-gold-dark">(760) 646-2321</a>
                  {" "}or email{" "}
                  <a href="mailto:framethevision1@gmail.com" className="text-gold font-medium hover:text-gold-dark">framethevision1@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
