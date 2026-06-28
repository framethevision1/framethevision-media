import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Home, Sun, Plane } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Prep Guide | Frame The Vision",
  description:
    "Our guide to getting your property photo-ready. Small details make a big difference in how your listing photographs.",
};

const interior = [
  "Every light on — lamps, overheads, under-cabinets. Bright homes sell faster.",
  "Blinds and curtains open — natural light is your listing's best friend.",
  "Countertops cleared — kitchens, bathrooms, nightstands. Less is more.",
  "Personal items out of sight — photos, mail, medications, kids' artwork.",
  "Beds made tight — clean bedding, pillows fluffed, no wrinkles.",
  "Closet and cabinet doors shut — we don't need to see what's inside.",
  "Mirrors and glass spotless — smudges show up in HDR photography.",
  "Bathrooms show-ready — lids down, fresh towels, products hidden.",
  "Burnt-out bulbs replaced — dark spots draw the eye for the wrong reasons.",
  "Ceiling fans and TVs off — motion and screen glare ruin photos.",
];

const exterior = [
  "Cars off the driveway — a clear approach photographs best.",
  "Trash bins, hoses, and tools stored away.",
  "Front door and entry wiped clean — it's the first photo buyers see.",
  "Lawn mowed and hedges trimmed if time allows.",
  "Patio furniture arranged neatly — or removed if it looks worn.",
  "Kids' toys, pet items, and yard clutter picked up.",
];

const drone = [
  "Vehicles moved — they're just as visible from 200 feet up.",
  "Tarps, covers, and temporary items removed from the yard.",
  "Pets secured inside — for their safety during the flight.",
];

const dayOf = [
  "The property should be fully prepped before we arrive — our time on-site is dedicated to shooting, not waiting.",
  "We work best with an empty home. If someone needs to be present, one room out of the way works fine.",
  "Lockbox code or key left for us if you can't be there — most agents prefer this.",
  "Allow about 1-2 hours for photos. Add 30-60 minutes for video or drone.",
];

export default function PrepPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-end overflow-hidden">
        <Image
          src="/photos/living-room.jpg"
          alt="Property Prep Guide"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-12">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
            Property Prep Guide
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Small Details. Big Difference.
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl">
            The difference between a good listing and an unforgettable one
            often comes down to preparation. Here&apos;s how to make sure your
            property is ready for its close-up.
          </p>
        </div>
      </section>

      {/* Interior */}
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
              <Home className="w-5 h-5 text-gold" />
            </div>
            <h2 className="text-2xl font-bold text-brown">Inside the Home</h2>
          </div>
          <p className="text-gray-body mb-8">
            These are the details that separate a scroll-past from a saved listing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {interior.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl border border-cream-dark"
              >
                <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-brown text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exterior */}
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
              <Sun className="w-5 h-5 text-gold" />
            </div>
            <h2 className="text-2xl font-bold text-brown">Curb Appeal</h2>
          </div>
          <p className="text-gray-body mb-8">
            The exterior is the first impression. Make it count.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {exterior.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl border border-cream-dark"
              >
                <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-brown text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Drone */}
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
              <Plane className="w-5 h-5 text-gold" />
            </div>
            <h2 className="text-2xl font-bold text-brown">Aerial Prep</h2>
          </div>
          <p className="text-gray-body mb-8">
            If your package includes drone, keep these in mind.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {drone.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl border border-cream-dark"
              >
                <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-brown text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day Of */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/photos/front-exterior.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-3 text-center">
            Day of the Shoot
          </p>
          <h2 className="text-3xl font-bold text-white text-center">
            What to Expect
          </h2>
          <div className="mt-10 space-y-4">
            {dayOf.map((tip, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-gray-200">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brown">
            Ready When You Are
          </h2>
          <p className="mt-4 text-lg text-gray-body max-w-xl mx-auto">
            Once the property is prepped, we handle everything else. Book
            your shoot and let&apos;s make your listing stand out.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book"
              className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-white hover:bg-gold-dark transition-colors"
            >
              Book Your Shoot
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center rounded-full border-2 border-brown/20 px-8 py-4 text-base font-semibold text-brown hover:border-gold hover:text-gold transition-colors"
            >
              Have Questions? See FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
