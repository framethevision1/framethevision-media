import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://framethevision.media"),
  title: "Frame The Vision | Real Estate Media - Victorville, CA",
  description:
    "Professional real estate photography, drone aerial, video walkthroughs, and 3D virtual tours serving Victorville, CA and the High Desert. Elevate your listings with Frame The Vision.",
  keywords: [
    "real estate photography",
    "real estate photographer Victorville",
    "High Desert real estate media",
    "drone photography",
    "virtual staging",
    "virtual tours",
    "Victorville",
    "Hesperia",
    "Apple Valley",
    "property video",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Frame The Vision | Real Estate Media",
    description:
      "Professional real estate media — photography, video, drone & virtual staging — serving Victorville, CA and the High Desert.",
    type: "website",
    locale: "en_US",
    url: "https://framethevision.media",
    siteName: "Frame The Vision",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frame The Vision | Real Estate Media",
    description:
      "Professional real estate media serving Victorville, CA and the High Desert.",
  },
};

// Structured data so Google AND AI assistants (ChatGPT, Gemini) understand the business.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://framethevision.media/#business",
  name: "Frame The Vision",
  description:
    "Professional real estate media — HDR photography, cinematic video, drone/aerial, virtual staging & twilight, floor plans, and 3D virtual tours — serving Victorville and the High Desert.",
  url: "https://framethevision.media",
  telephone: "+1-760-646-2321",
  email: "framethevision1@gmail.com",
  image: "https://framethevision.media/opengraph-image.jpg",
  logo: "https://framethevision.media/logo.png",
  slogan: "Essence in Every Frame",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Victorville",
    addressRegion: "CA",
    postalCode: "92395",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 34.5362, longitude: -117.2928 },
  areaServed: [
    "Victorville",
    "Hesperia",
    "Apple Valley",
    "Adelanto",
    "Oak Hills",
    "Phelan",
    "Lucerne Valley",
    "Barstow",
    "Helendale",
    "Oro Grande",
  ].map((c) => ({ "@type": "City", name: c })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "19:00",
    },
  ],
  founder: { "@type": "Person", name: "Armando Rosas Cano" },
  sameAs: ["https://www.instagram.com/framethevision"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Real Estate Media Services",
    itemListElement: [
      "Real Estate Photography",
      "Video Tours & Branding",
      "Land Photo & Video (Drone/Aerial)",
      "Virtual Staging",
      "Virtual Twilight",
      "2D Floor Plans",
      "3D Virtual Tours",
    ].map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
