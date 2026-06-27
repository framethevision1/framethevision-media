import { Check, Clock, Shield, Star } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Now | Frame The Vision",
  description:
    "Book your professional real estate media session — photography, drone, video, and 3D virtual tours in Victorville, CA.",
};

const trustPoints = [
  {
    icon: Clock,
    title: "24-48 Hour Turnaround",
    description: "Get your photos fast so your listing hits the market on time.",
  },
  {
    icon: Shield,
    title: "Satisfaction Guaranteed",
    description: "We don't stop until you're 100% happy with the results.",
  },
  {
    icon: Star,
    title: "5-Star Rated",
    description: "Trusted by top realtors across the High Desert.",
  },
];

const included = [
  "Professional HDR photography",
  "Drone & aerial available",
  "Cinematic video walkthroughs",
  "3D virtual tours",
  "Fast turnaround",
  "Online gallery delivery",
];

export default function BookPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
            Book Your Shoot
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brown">
            Ready to Elevate Your Listing?
          </h1>
          <p className="mt-4 text-lg text-gray-body max-w-2xl mx-auto">
            Fill out the form below to schedule your shoot. Select your
            services, choose your date, and we&apos;ll handle the rest.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Aryeo Form Embed */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden border border-cream-dark bg-cream shadow-sm">
                <iframe
                  src="https://listings.framethevision.media/order-forms/019abda4-913d-73ad-be87-fdbc4d343a0c"
                  className="w-full border-0"
                  style={{ minHeight: "900px" }}
                  title="Book a Shoot — Frame The Vision"
                  allow="payment"
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* What's Included */}
              <div className="rounded-2xl bg-cream border border-cream-dark p-8">
                <h3 className="text-lg font-bold text-brown mb-6">
                  What&apos;s Included
                </h3>
                <ul className="space-y-3">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-gold" />
                      </div>
                      <span className="text-sm text-brown">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust Points */}
              {trustPoints.map((point) => (
                <div
                  key={point.title}
                  className="flex items-start gap-4 rounded-2xl bg-cream border border-cream-dark p-6"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-brown">{point.title}</p>
                    <p className="text-sm text-gray-body mt-1">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* Contact */}
              <div className="rounded-2xl bg-gold/10 border border-gold/20 p-6 text-center">
                <p className="font-semibold text-brown">Need Help Booking?</p>
                <p className="text-sm text-gray-body mt-2">
                  Call us at{" "}
                  <a
                    href="tel:+17606462321"
                    className="text-gold font-medium hover:text-gold-dark"
                  >
                    (760) 646-2321
                  </a>
                </p>
                <p className="text-sm text-gray-body mt-1">
                  or email{" "}
                  <a
                    href="mailto:framethevision1@gmail.com"
                    className="text-gold font-medium hover:text-gold-dark"
                  >
                    framethevision1@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
