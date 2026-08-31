export type PortfolioCategory = "photo" | "video" | "drone" | "3d";

export interface PortfolioItem {
  id: number;
  category: PortfolioCategory;
  title: string;
  location: string;
  image: string;
}

// Single source of truth for portfolio content.
// Service pages show their own category; the Portfolio page shows all (deduped by image).
// Real client work leads; a couple of model-home shots (living room, bathroom) are kept
// only where real shoots don't yet cover that room.
export const portfolioItems: PortfolioItem[] = [
  // ---- Photography ----
  { id: 1, category: "photo", title: "Front Exterior", location: "Hesperia, CA", image: "/photos/hesperia-exterior.jpg" },
  { id: 2, category: "photo", title: "Kitchen", location: "Hesperia, CA", image: "/photos/hesperia-kitchen.jpg" },
  { id: 3, category: "photo", title: "Dining Area", location: "Hesperia, CA", image: "/photos/hesperia-dining.jpg" },
  { id: 4, category: "photo", title: "Front Exterior", location: "Barstow, CA", image: "/photos/barstow-exterior.jpg" },
  { id: 5, category: "photo", title: "Primary Bedroom", location: "Hesperia, CA", image: "/photos/hesperia-bedroom.jpg" },
  { id: 6, category: "photo", title: "Backyard & Pool", location: "Hesperia, CA", image: "/photos/hesperia-backyard.jpg" },
  { id: 7, category: "photo", title: "Living Room", location: "Victorville, CA", image: "/photos/living-room.jpg" },
  { id: 8, category: "photo", title: "Entryway", location: "Hesperia, CA", image: "/photos/hesperia-entry.jpg" },
  { id: 9, category: "photo", title: "Master Bathroom", location: "Victorville, CA", image: "/photos/master-bath.jpg" },

  // ---- Land Photo & Video (drone/aerial) ----
  { id: 10, category: "drone", title: "Neighborhood Aerial", location: "Hesperia, CA", image: "/photos/hesperia-aerial.jpg" },
  { id: 11, category: "drone", title: "Aerial Property View", location: "Barstow, CA", image: "/photos/barstow-aerial.jpg" },
  { id: 12, category: "drone", title: "Aerial — Backyard & Pool", location: "Hesperia, CA", image: "/photos/hesperia-aerial-2.jpg" },
  { id: 13, category: "drone", title: "Aerial Overview", location: "Smoke Tree Rd", image: "/photos/drone-smoke-tree-1.jpg" },
  { id: 14, category: "drone", title: "Property Boundaries", location: "Phelan, CA", image: "/photos/drone-phelan-1.jpg" },
  { id: 15, category: "drone", title: "Land Survey", location: "Helendale, CA", image: "/photos/drone-land.jpg" },

  // ---- Video Tours & Branding (representative stills from real shoots) ----
  { id: 16, category: "video", title: "Property Video Tour", location: "Hesperia, CA", image: "/photos/hesperia-kitchen.jpg" },
  { id: 17, category: "video", title: "Walkthrough Tour", location: "Hesperia, CA", image: "/photos/hesperia-dining.jpg" },
  { id: 18, category: "video", title: "Cinematic Listing Video", location: "Hesperia, CA", image: "/photos/hesperia-exterior.jpg" },
  { id: 19, category: "video", title: "Bedroom Walkthrough", location: "Hesperia, CA", image: "/photos/hesperia-bedroom.jpg" },
  { id: 20, category: "video", title: "Outdoor Feature Tour", location: "Hesperia, CA", image: "/photos/hesperia-backyard.jpg" },
  { id: 21, category: "video", title: "Branded Property Video", location: "Barstow, CA", image: "/photos/barstow-exterior.jpg" },

  // ---- 3D Virtual Tours (representative stills) ----
  { id: 22, category: "3d", title: "3D Virtual Tour", location: "Hesperia, CA", image: "/photos/hesperia-entry.jpg" },
  { id: 23, category: "3d", title: "Bedroom 3D Scan", location: "Hesperia, CA", image: "/photos/hesperia-bedroom.jpg" },
  { id: 24, category: "3d", title: "Kitchen 3D View", location: "Hesperia, CA", image: "/photos/hesperia-kitchen.jpg" },
  { id: 25, category: "3d", title: "Bathroom Scan", location: "Victorville, CA", image: "/photos/master-bath.jpg" },
  { id: 26, category: "3d", title: "Dining 3D View", location: "Hesperia, CA", image: "/photos/hesperia-dining.jpg" },
  { id: 27, category: "3d", title: "Living Room 3D", location: "Victorville, CA", image: "/photos/living-room.jpg" },
];

export function portfolioByCategory(category: PortfolioCategory): PortfolioItem[] {
  return portfolioItems.filter((item) => item.category === category);
}
