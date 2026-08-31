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
// Newest work is listed first within each category.
export const portfolioItems: PortfolioItem[] = [
  // ---- Photography ----
  { id: 1, category: "photo", title: "Front Exterior", location: "Barstow, CA", image: "/photos/barstow-exterior.jpg" },
  { id: 2, category: "photo", title: "Living Room", location: "Victorville, CA", image: "/photos/living-room.jpg" },
  { id: 3, category: "photo", title: "Kitchen", location: "Victorville, CA", image: "/photos/kitchen.jpg" },
  { id: 4, category: "photo", title: "Master Bedroom", location: "Victorville, CA", image: "/photos/bedroom.jpg" },
  { id: 5, category: "photo", title: "Front Exterior", location: "Victorville, CA", image: "/photos/front-exterior.jpg" },
  { id: 6, category: "photo", title: "Kitchen & Living", location: "Victorville, CA", image: "/photos/kitchen-living.jpg" },
  { id: 7, category: "photo", title: "Backyard", location: "Victorville, CA", image: "/photos/backyard.jpg" },
  { id: 8, category: "photo", title: "Entryway", location: "Victorville, CA", image: "/photos/entrance-room.jpg" },
  { id: 9, category: "photo", title: "Master Bathroom", location: "Victorville, CA", image: "/photos/master-bath.jpg" },
  { id: 10, category: "photo", title: "Living Room", location: "Victorville, CA", image: "/photos/living-room-2.jpg" },
  { id: 11, category: "photo", title: "Bedroom", location: "Victorville, CA", image: "/photos/bedroom-2.jpg" },
  { id: 12, category: "photo", title: "Front Entrance", location: "Victorville, CA", image: "/photos/front-entrance.jpg" },
  { id: 13, category: "photo", title: "Exterior", location: "Victorville, CA", image: "/photos/right-side.jpg" },
  { id: 14, category: "photo", title: "Backyard Patio", location: "Victorville, CA", image: "/photos/backyard-2.jpg" },
  { id: 15, category: "photo", title: "Open Concept", location: "Victorville, CA", image: "/photos/living-kitchen.jpg" },

  // ---- Land Photo & Video (drone/aerial) ----
  { id: 16, category: "drone", title: "Aerial Property View", location: "Barstow, CA", image: "/photos/barstow-aerial.jpg" },
  { id: 17, category: "drone", title: "Aerial Overview", location: "Smoke Tree Rd", image: "/photos/drone-smoke-tree-1.jpg" },
  { id: 18, category: "drone", title: "Wide Aerial", location: "Smoke Tree Rd", image: "/photos/drone-smoke-tree-2.jpg" },
  { id: 19, category: "drone", title: "Street View", location: "Smoke Tree Rd", image: "/photos/drone-smoke-tree-3.jpg" },
  { id: 20, category: "drone", title: "Property Lines", location: "Smoke Tree Rd", image: "/photos/drone-smoke-tree-4.jpg" },
  { id: 21, category: "drone", title: "Aerial Overview", location: "Smoke Tree Rd", image: "/photos/drone-smoke-tree-5.jpg" },
  { id: 22, category: "drone", title: "Property Boundaries", location: "Phelan, CA", image: "/photos/drone-phelan-1.jpg" },
  { id: 23, category: "drone", title: "Land Survey", location: "Phelan, CA", image: "/photos/drone-phelan-2.jpg" },
  { id: 24, category: "drone", title: "Neighborhood Context", location: "Phelan, CA", image: "/photos/drone-phelan-3.jpg" },
  { id: 25, category: "drone", title: "Aerial Boundaries", location: "Phelan, CA", image: "/photos/drone-phelan-4.jpg" },
  { id: 26, category: "drone", title: "Wide Aerial", location: "Phelan, CA", image: "/photos/drone-phelan-5.jpg" },
  { id: 27, category: "drone", title: "Neighborhood Aerial", location: "Victorville, CA", image: "/photos/drone-aerial.jpg" },
  { id: 28, category: "drone", title: "Land Survey", location: "Helendale, CA", image: "/photos/drone-land.jpg" },

  // ---- Video Tours & Branding (representative stills) ----
  { id: 29, category: "video", title: "Property Video Tour", location: "Helendale, CA", image: "/photos/kitchen-living.jpg" },
  { id: 30, category: "video", title: "Walkthrough Tour", location: "Victorville, CA", image: "/photos/living-kitchen.jpg" },
  { id: 31, category: "video", title: "Cinematic Listing Video", location: "Victorville, CA", image: "/photos/living-room.jpg" },
  { id: 32, category: "video", title: "Bedroom Walkthrough", location: "Victorville, CA", image: "/photos/bedroom.jpg" },
  { id: 33, category: "video", title: "Entrance Reveal", location: "Victorville, CA", image: "/photos/entrance-room.jpg" },
  { id: 34, category: "video", title: "Branded Property Video", location: "Victorville, CA", image: "/photos/front-exterior.jpg" },

  // ---- 3D Virtual Tours (representative stills) ----
  { id: 35, category: "3d", title: "3D Virtual Tour", location: "Victorville, CA", image: "/photos/entrance-room.jpg" },
  { id: 36, category: "3d", title: "Bedroom 3D Scan", location: "Victorville, CA", image: "/photos/bedroom.jpg" },
  { id: 37, category: "3d", title: "Kitchen 3D View", location: "Victorville, CA", image: "/photos/kitchen.jpg" },
  { id: 38, category: "3d", title: "Bathroom Scan", location: "Victorville, CA", image: "/photos/master-bath.jpg" },
  { id: 39, category: "3d", title: "Living Room 3D", location: "Victorville, CA", image: "/photos/living-room.jpg" },
  { id: 40, category: "3d", title: "Open Floor Plan Scan", location: "Victorville, CA", image: "/photos/kitchen-living.jpg" },
];

export function portfolioByCategory(category: PortfolioCategory): PortfolioItem[] {
  return portfolioItems.filter((item) => item.category === category);
}
