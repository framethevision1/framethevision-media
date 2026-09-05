export type PortfolioCategory = "photo" | "video" | "drone" | "3d";

export interface PortfolioItem {
  id: number;
  category: PortfolioCategory;
  title: string;
  location: string;
  image: string;
}

// Single source of truth for portfolio content — 100% real client work.
// Ordered most-appealing → least within each category (leads every gallery with the strongest work).
export const portfolioItems: PortfolioItem[] = [
  // ---- Photography (ranked by appeal) ----
  { id: 1, category: "photo", title: "Kitchen", location: "Barstow, CA", image: "/photos/patricia-kitchen.jpg" },
  { id: 2, category: "photo", title: "Kitchen & Fireplace", location: "Oak Hills, CA", image: "/photos/joshua-kitchen-2.jpg" },
  { id: 3, category: "photo", title: "Kitchen", location: "Oak Hills, CA", image: "/photos/joshua-kitchen.jpg" },
  { id: 4, category: "photo", title: "Kitchen", location: "Hesperia, CA", image: "/photos/hesperia-kitchen.jpg" },
  { id: 5, category: "photo", title: "Waterfall Island", location: "Oak Hills, CA", image: "/photos/joshua-island.jpg" },
  { id: 6, category: "photo", title: "Family Room", location: "Oak Hills, CA", image: "/photos/joshua-family.jpg" },
  { id: 7, category: "photo", title: "Great Room", location: "Oak Hills, CA", image: "/photos/joshua-greatroom.jpg" },
  { id: 8, category: "photo", title: "Backyard Pool", location: "Oak Hills, CA", image: "/photos/joshua-pool.jpg" },
  { id: 9, category: "photo", title: "Formal Living Room", location: "Oak Hills, CA", image: "/photos/joshua-living.jpg" },
  { id: 10, category: "photo", title: "Front Exterior", location: "Oak Hills, CA", image: "/photos/joshua-exterior.jpg" },
  { id: 11, category: "photo", title: "Front Exterior", location: "Barstow, CA", image: "/photos/patricia-exterior.jpg" },
  { id: 12, category: "photo", title: "Dining Area", location: "Hesperia, CA", image: "/photos/hesperia-dining.jpg" },
  { id: 13, category: "photo", title: "Breakfast Nook", location: "Oak Hills, CA", image: "/photos/joshua-nook.jpg" },
  { id: 14, category: "photo", title: "Living Room", location: "Barstow, CA", image: "/photos/patricia-living.jpg" },
  { id: 15, category: "photo", title: "Primary Bathroom", location: "Oak Hills, CA", image: "/photos/joshua-bath-2.jpg" },
  { id: 16, category: "photo", title: "Mountain Cabin", location: "Wrightwood, CA", image: "/photos/wrightwood-exterior.jpg" },
  { id: 17, category: "photo", title: "Dining Room", location: "Oak Hills, CA", image: "/photos/joshua-dining.jpg" },
  { id: 18, category: "photo", title: "Kitchen", location: "Helendale, CA", image: "/photos/grifton-kitchen.jpg" },
  { id: 19, category: "photo", title: "Kitchen", location: "Barstow, CA", image: "/photos/patricia-kitchen-2.jpg" },
  { id: 20, category: "photo", title: "Backyard & Pool", location: "Hesperia, CA", image: "/photos/hesperia-backyard.jpg" },
  { id: 21, category: "photo", title: "Primary Bathroom", location: "Helendale, CA", image: "/photos/grifton-bath.jpg" },
  { id: 22, category: "photo", title: "Renovated Bath", location: "Barstow, CA", image: "/photos/patricia-bath-2.jpg" },
  { id: 23, category: "photo", title: "Cabin Great Room", location: "Wrightwood, CA", image: "/photos/wrightwood-fireplace.jpg" },
  { id: 24, category: "photo", title: "Front Exterior", location: "Hesperia, CA", image: "/photos/hesperia-exterior.jpg" },
  { id: 25, category: "photo", title: "Front Exterior", location: "Helendale, CA", image: "/photos/grifton-exterior.jpg" },
  { id: 26, category: "photo", title: "Front Exterior", location: "Helendale, CA", image: "/photos/birdie-exterior.jpg" },
  { id: 27, category: "photo", title: "Primary Bedroom", location: "Barstow, CA", image: "/photos/patricia-bedroom.jpg" },
  { id: 28, category: "photo", title: "Primary Bedroom", location: "Hesperia, CA", image: "/photos/hesperia-bedroom.jpg" },
  { id: 29, category: "photo", title: "Primary Bathroom", location: "Oak Hills, CA", image: "/photos/joshua-bath.jpg" },
  { id: 30, category: "photo", title: "Bathroom", location: "Barstow, CA", image: "/photos/patricia-bath.jpg" },
  { id: 31, category: "photo", title: "Kitchen", location: "Helendale, CA", image: "/photos/birdie-kitchen.jpg" },
  { id: 32, category: "photo", title: "Cabin Living Room", location: "Wrightwood, CA", image: "/photos/wrightwood-living.jpg" },
  { id: 33, category: "photo", title: "Front Exterior", location: "Apple Valley, CA", image: "/photos/thunderbird-exterior.jpg" },
  { id: 34, category: "photo", title: "Mountain Backyard", location: "Wrightwood, CA", image: "/photos/wrightwood-backyard.jpg" },

  // ---- Land Photo & Video (drone/aerial, ranked by appeal) ----
  { id: 35, category: "drone", title: "Silver Lakes Aerial", location: "Helendale, CA", image: "/photos/silverlakes-aerial.jpg" },
  { id: 36, category: "drone", title: "Mountain-View Aerial", location: "Apple Valley, CA", image: "/photos/thunderbird-aerial.jpg" },
  { id: 37, category: "drone", title: "Lake & Mountain View", location: "Helendale, CA", image: "/photos/silverlakes-aerial-2.jpg" },
  { id: 38, category: "drone", title: "Aerial Property View", location: "Oak Hills, CA", image: "/photos/joshua-aerial.jpg" },
  { id: 39, category: "drone", title: "Lake & Golf Aerial", location: "Helendale, CA", image: "/photos/birdie-aerial-3.jpg" },
  { id: 40, category: "drone", title: "Aerial — Pool & Drive", location: "Oak Hills, CA", image: "/photos/joshua-aerial-2.jpg" },
  { id: 41, category: "drone", title: "Silver Lakes Aerial", location: "Helendale, CA", image: "/photos/silverlakes-aerial-3.jpg" },
  { id: 42, category: "drone", title: "Mountain Backdrop Aerial", location: "Apple Valley, CA", image: "/photos/thunderbird-aerial-2.jpg" },
  { id: 43, category: "drone", title: "Forested-Lot Aerial", location: "Wrightwood, CA", image: "/photos/wrightwood-aerial.jpg" },
  { id: 44, category: "drone", title: "Lake Community Aerial", location: "Helendale, CA", image: "/photos/birdie-aerial-2.jpg" },
  { id: 45, category: "drone", title: "Neighborhood Aerial", location: "Hesperia, CA", image: "/photos/hesperia-aerial.jpg" },
  { id: 46, category: "drone", title: "Aerial Property View", location: "Barstow, CA", image: "/photos/patricia-aerial.jpg" },
  { id: 47, category: "drone", title: "Aerial Property View", location: "Barstow, CA", image: "/photos/barstow-aerial.jpg" },

  // ---- Video Tours & Branding (representative stills from real shoots) ----
  { id: 48, category: "video", title: "Property Video Tour", location: "Barstow, CA", image: "/photos/patricia-kitchen.jpg" },
  { id: 49, category: "video", title: "Walkthrough Tour", location: "Oak Hills, CA", image: "/photos/joshua-family.jpg" },
  { id: 50, category: "video", title: "Interior Walkthrough", location: "Hesperia, CA", image: "/photos/hesperia-dining.jpg" },
  { id: 51, category: "video", title: "Cinematic Listing Video", location: "Barstow, CA", image: "/photos/patricia-exterior.jpg" },
  { id: 52, category: "video", title: "Branded Property Video", location: "Oak Hills, CA", image: "/photos/joshua-exterior.jpg" },
  { id: 53, category: "video", title: "Bedroom Walkthrough", location: "Barstow, CA", image: "/photos/patricia-bedroom.jpg" },

  // ---- 3D Virtual Tours (representative stills) ----
  { id: 54, category: "3d", title: "3D Virtual Tour", location: "Oak Hills, CA", image: "/photos/joshua-family.jpg" },
  { id: 55, category: "3d", title: "Kitchen 3D View", location: "Barstow, CA", image: "/photos/patricia-kitchen.jpg" },
  { id: 56, category: "3d", title: "Living Space 3D", location: "Hesperia, CA", image: "/photos/hesperia-dining.jpg" },
  { id: 57, category: "3d", title: "Dining 3D View", location: "Oak Hills, CA", image: "/photos/joshua-dining.jpg" },
  { id: 58, category: "3d", title: "Bathroom Scan", location: "Oak Hills, CA", image: "/photos/joshua-bath.jpg" },
  { id: 59, category: "3d", title: "Bedroom 3D Scan", location: "Barstow, CA", image: "/photos/patricia-bedroom.jpg" },
];

export function portfolioByCategory(category: PortfolioCategory): PortfolioItem[] {
  return portfolioItems.filter((item) => item.category === category);
}
