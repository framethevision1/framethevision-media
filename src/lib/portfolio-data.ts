export type PortfolioCategory = "photo" | "video" | "drone" | "3d";

export interface PortfolioItem {
  id: number;
  category: PortfolioCategory;
  title: string;
  location: string;
  image: string;
}

// Single source of truth for portfolio content — 100% real client work.
// Service pages show their own category; the Portfolio page shows all (deduped by image).
export const portfolioItems: PortfolioItem[] = [
  // ---- Photography ----
  { id: 1, category: "photo", title: "Front Exterior", location: "Barstow, CA", image: "/photos/patricia-exterior.jpg" },
  { id: 2, category: "photo", title: "Kitchen", location: "Barstow, CA", image: "/photos/patricia-kitchen.jpg" },
  { id: 3, category: "photo", title: "Front Exterior", location: "Oak Hills, CA", image: "/photos/joshua-exterior.jpg" },
  { id: 4, category: "photo", title: "Kitchen", location: "Oak Hills, CA", image: "/photos/joshua-kitchen.jpg" },
  { id: 5, category: "photo", title: "Kitchen", location: "Hesperia, CA", image: "/photos/hesperia-kitchen.jpg" },
  { id: 6, category: "photo", title: "Living Room", location: "Barstow, CA", image: "/photos/patricia-living.jpg" },
  { id: 7, category: "photo", title: "Family Room", location: "Oak Hills, CA", image: "/photos/joshua-family.jpg" },
  { id: 41, category: "photo", title: "Cabin Living Room", location: "Wrightwood, CA", image: "/photos/wrightwood-living.jpg" },
  { id: 8, category: "photo", title: "Dining Room", location: "Oak Hills, CA", image: "/photos/joshua-dining.jpg" },
  { id: 9, category: "photo", title: "Dining Area", location: "Hesperia, CA", image: "/photos/hesperia-dining.jpg" },
  { id: 10, category: "photo", title: "Primary Bedroom", location: "Barstow, CA", image: "/photos/patricia-bedroom.jpg" },
  { id: 11, category: "photo", title: "Primary Bedroom", location: "Hesperia, CA", image: "/photos/hesperia-bedroom.jpg" },
  { id: 12, category: "photo", title: "Bathroom", location: "Barstow, CA", image: "/photos/patricia-bath.jpg" },
  { id: 13, category: "photo", title: "Primary Bathroom", location: "Oak Hills, CA", image: "/photos/joshua-bath.jpg" },
  { id: 14, category: "photo", title: "Front Exterior", location: "Hesperia, CA", image: "/photos/hesperia-exterior.jpg" },
  { id: 15, category: "photo", title: "Mountain Cabin", location: "Wrightwood, CA", image: "/photos/wrightwood-exterior.jpg" },
  { id: 16, category: "photo", title: "Backyard & Pool", location: "Hesperia, CA", image: "/photos/hesperia-backyard.jpg" },
  { id: 17, category: "photo", title: "Front Exterior", location: "Apple Valley, CA", image: "/photos/thunderbird-exterior.jpg" },
  { id: 18, category: "photo", title: "Kitchen", location: "Helendale, CA", image: "/photos/birdie-kitchen.jpg" },

  // ---- Land Photo & Video (drone/aerial) ----
  { id: 19, category: "drone", title: "Silver Lakes Aerial", location: "Helendale, CA", image: "/photos/silverlakes-aerial.jpg" },
  { id: 20, category: "drone", title: "Aerial Property View", location: "Oak Hills, CA", image: "/photos/joshua-aerial.jpg" },
  { id: 21, category: "drone", title: "Mountain-View Aerial", location: "Apple Valley, CA", image: "/photos/thunderbird-aerial.jpg" },
  { id: 22, category: "drone", title: "Forested-Lot Aerial", location: "Wrightwood, CA", image: "/photos/wrightwood-aerial.jpg" },
  { id: 23, category: "drone", title: "Aerial Property View", location: "Barstow, CA", image: "/photos/patricia-aerial.jpg" },
  { id: 24, category: "drone", title: "Lake Community Aerial", location: "Helendale, CA", image: "/photos/birdie-aerial-2.jpg" },
  { id: 25, category: "drone", title: "Neighborhood Aerial", location: "Hesperia, CA", image: "/photos/hesperia-aerial.jpg" },
  { id: 26, category: "drone", title: "Lake & Mountain View", location: "Helendale, CA", image: "/photos/silverlakes-aerial-2.jpg" },
  { id: 27, category: "drone", title: "Mountain Backdrop Aerial", location: "Apple Valley, CA", image: "/photos/thunderbird-aerial-2.jpg" },
  { id: 28, category: "drone", title: "Aerial Property View", location: "Barstow, CA", image: "/photos/barstow-aerial.jpg" },

  // ---- Video Tours & Branding (representative stills from real shoots) ----
  { id: 29, category: "video", title: "Property Video Tour", location: "Barstow, CA", image: "/photos/patricia-kitchen.jpg" },
  { id: 30, category: "video", title: "Walkthrough Tour", location: "Oak Hills, CA", image: "/photos/joshua-family.jpg" },
  { id: 31, category: "video", title: "Cinematic Listing Video", location: "Barstow, CA", image: "/photos/patricia-exterior.jpg" },
  { id: 32, category: "video", title: "Interior Walkthrough", location: "Hesperia, CA", image: "/photos/hesperia-dining.jpg" },
  { id: 33, category: "video", title: "Bedroom Walkthrough", location: "Barstow, CA", image: "/photos/patricia-bedroom.jpg" },
  { id: 34, category: "video", title: "Branded Property Video", location: "Oak Hills, CA", image: "/photos/joshua-exterior.jpg" },

  // ---- 3D Virtual Tours (representative stills) ----
  { id: 35, category: "3d", title: "3D Virtual Tour", location: "Oak Hills, CA", image: "/photos/joshua-family.jpg" },
  { id: 36, category: "3d", title: "Bedroom 3D Scan", location: "Barstow, CA", image: "/photos/patricia-bedroom.jpg" },
  { id: 37, category: "3d", title: "Kitchen 3D View", location: "Barstow, CA", image: "/photos/patricia-kitchen.jpg" },
  { id: 38, category: "3d", title: "Bathroom Scan", location: "Oak Hills, CA", image: "/photos/joshua-bath.jpg" },
  { id: 39, category: "3d", title: "Dining 3D View", location: "Oak Hills, CA", image: "/photos/joshua-dining.jpg" },
  { id: 40, category: "3d", title: "Living Space 3D", location: "Hesperia, CA", image: "/photos/hesperia-dining.jpg" },
];

export function portfolioByCategory(category: PortfolioCategory): PortfolioItem[] {
  return portfolioItems.filter((item) => item.category === category);
}
