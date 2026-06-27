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
  title: "Frame The Vision | Real Estate Media - Victorville, CA",
  description:
    "Professional real estate photography, drone aerial, video walkthroughs, and 3D virtual tours serving Victorville, CA and the High Desert. Elevate your listings with Frame The Vision.",
  keywords: [
    "real estate photography",
    "drone photography",
    "virtual tours",
    "Victorville",
    "High Desert",
    "real estate media",
    "property video",
  ],
  openGraph: {
    title: "Frame The Vision | Real Estate Media",
    description:
      "Professional real estate media serving Victorville, CA and the High Desert.",
    type: "website",
    locale: "en_US",
    url: "https://framethevision.media",
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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
