export type PortfolioCategory = "photo" | "video" | "land" | "3d";

export interface PortfolioItem {
  id: number;
  category: PortfolioCategory;
  title: string;
  location: string;
  image: string;
}

// Single source of truth for portfolio content — 100% real client work.
// Photography (interiors, exteriors, and property aerials) is sequenced
// magazine-style: strongest work up front, types interleaved so no two of the
// same kind sit back-to-back. Aerials are treated as ordinary photos.
export const portfolioItems: PortfolioItem[] = [
  // ---- Photography (interiors, exteriors & property aerials) ----
  { id: 1, category: "photo", title: "Kitchen", location: "Barstow, CA", image: "/photos/patricia-kitchen.jpg" },
  { id: 2, category: "photo", title: "Family Room", location: "Oak Hills, CA", image: "/photos/joshua-family.jpg" },
  { id: 3, category: "photo", title: "Front Exterior", location: "Oak Hills, CA", image: "/photos/joshua-exterior.jpg" },
  { id: 4, category: "photo", title: "Silver Lakes Aerial", location: "Helendale, CA", image: "/photos/silverlakes-aerial.jpg" },
  { id: 5, category: "photo", title: "Waterfall Island", location: "Oak Hills, CA", image: "/photos/joshua-island.jpg" },
  { id: 6, category: "photo", title: "Dining Area", location: "Hesperia, CA", image: "/photos/hesperia-dining.jpg" },
  { id: 7, category: "photo", title: "Mountain-View Aerial", location: "Apple Valley, CA", image: "/photos/thunderbird-aerial.jpg" },
  { id: 8, category: "photo", title: "Front Exterior", location: "Barstow, CA", image: "/photos/patricia-exterior.jpg" },
  { id: 9, category: "photo", title: "Primary Bathroom", location: "Oak Hills, CA", image: "/photos/joshua-bath-2.jpg" },
  { id: 10, category: "photo", title: "Aerial Property View", location: "Oak Hills, CA", image: "/photos/joshua-aerial.jpg" },
  { id: 11, category: "photo", title: "Kitchen & Fireplace", location: "Oak Hills, CA", image: "/photos/joshua-kitchen-2.jpg" },
  { id: 12, category: "photo", title: "Backyard Pool", location: "Oak Hills, CA", image: "/photos/joshua-pool.jpg" },
  { id: 13, category: "photo", title: "Lake & Golf Aerial", location: "Helendale, CA", image: "/photos/birdie-aerial-3.jpg" },
  { id: 14, category: "photo", title: "Formal Living Room", location: "Oak Hills, CA", image: "/photos/joshua-living.jpg" },
  { id: 15, category: "photo", title: "Mountain Cabin", location: "Wrightwood, CA", image: "/photos/wrightwood-exterior.jpg" },
  { id: 16, category: "photo", title: "Aerial — Pool & Drive", location: "Oak Hills, CA", image: "/photos/joshua-aerial-2.jpg" },
  { id: 17, category: "photo", title: "Kitchen", location: "Oak Hills, CA", image: "/photos/joshua-kitchen.jpg" },
  { id: 18, category: "photo", title: "Breakfast Nook", location: "Oak Hills, CA", image: "/photos/joshua-nook.jpg" },
  { id: 19, category: "photo", title: "Lake & Mountain View", location: "Helendale, CA", image: "/photos/silverlakes-aerial-2.jpg" },
  { id: 20, category: "photo", title: "Living Room", location: "Barstow, CA", image: "/photos/patricia-living.jpg" },
  { id: 21, category: "photo", title: "Kitchen", location: "Hesperia, CA", image: "/photos/hesperia-kitchen.jpg" },
  { id: 22, category: "photo", title: "Forested-Lot Aerial", location: "Wrightwood, CA", image: "/photos/wrightwood-aerial.jpg" },
  { id: 23, category: "photo", title: "Backyard & Pool", location: "Hesperia, CA", image: "/photos/hesperia-backyard.jpg" },
  { id: 24, category: "photo", title: "Primary Bedroom", location: "Barstow, CA", image: "/photos/patricia-bedroom.jpg" },
  { id: 25, category: "photo", title: "Neighborhood Aerial", location: "Hesperia, CA", image: "/photos/hesperia-aerial.jpg" },
  { id: 26, category: "photo", title: "Primary Bathroom", location: "Helendale, CA", image: "/photos/grifton-bath.jpg" },
  { id: 27, category: "photo", title: "Front Exterior", location: "Hesperia, CA", image: "/photos/hesperia-exterior.jpg" },
  { id: 28, category: "photo", title: "Silver Lakes Aerial", location: "Helendale, CA", image: "/photos/silverlakes-aerial-3.jpg" },
  { id: 29, category: "photo", title: "Kitchen", location: "Barstow, CA", image: "/photos/patricia-kitchen-2.jpg" },
  { id: 30, category: "photo", title: "Cabin Great Room", location: "Wrightwood, CA", image: "/photos/wrightwood-fireplace.jpg" },
  { id: 31, category: "photo", title: "Mountain Backdrop Aerial", location: "Apple Valley, CA", image: "/photos/thunderbird-aerial-2.jpg" },
  { id: 32, category: "photo", title: "Dining Room", location: "Oak Hills, CA", image: "/photos/joshua-dining.jpg" },
  { id: 33, category: "photo", title: "Front Exterior", location: "Helendale, CA", image: "/photos/grifton-exterior.jpg" },
  { id: 34, category: "photo", title: "Lake Community Aerial", location: "Helendale, CA", image: "/photos/birdie-aerial-2.jpg" },
  { id: 35, category: "photo", title: "Kitchen", location: "Helendale, CA", image: "/photos/grifton-kitchen.jpg" },
  { id: 36, category: "photo", title: "Renovated Bath", location: "Barstow, CA", image: "/photos/patricia-bath-2.jpg" },
  { id: 37, category: "photo", title: "Aerial Property View", location: "Barstow, CA", image: "/photos/patricia-aerial.jpg" },
  { id: 38, category: "photo", title: "Primary Bedroom", location: "Hesperia, CA", image: "/photos/hesperia-bedroom.jpg" },
  { id: 39, category: "photo", title: "Front Exterior", location: "Helendale, CA", image: "/photos/birdie-exterior.jpg" },
  { id: 40, category: "photo", title: "Aerial Property View", location: "Barstow, CA", image: "/photos/barstow-aerial.jpg" },
  { id: 41, category: "photo", title: "Kitchen", location: "Helendale, CA", image: "/photos/birdie-kitchen.jpg" },
  { id: 42, category: "photo", title: "Cabin Living Room", location: "Wrightwood, CA", image: "/photos/wrightwood-living.jpg" },
  { id: 43, category: "photo", title: "Primary Bathroom", location: "Oak Hills, CA", image: "/photos/joshua-bath.jpg" },
  { id: 44, category: "photo", title: "Front Exterior", location: "Apple Valley, CA", image: "/photos/thunderbird-exterior.jpg" },
  { id: 45, category: "photo", title: "Bathroom", location: "Barstow, CA", image: "/photos/patricia-bath.jpg" },
  { id: 46, category: "photo", title: "Mountain Backyard", location: "Wrightwood, CA", image: "/photos/wrightwood-backyard.jpg" },

  // ---- Land Photo & Video (vacant-land parcels — shown on the Land page) ----
  { id: 47, category: "land", title: "Highway-Frontage Parcel", location: "Pearblossom, CA", image: "/photos/land-pearblossom-1.jpg" },
  { id: 48, category: "land", title: "Land with Road Access", location: "Apple Valley, CA", image: "/photos/land-applevalley-1.jpg" },
  { id: 49, category: "land", title: "Traced Parcel Boundary", location: "Pearblossom, CA", image: "/photos/land-pearblossom-2.jpg" },
  { id: 50, category: "land", title: "Corner-Lot Access", location: "Hinkley, CA", image: "/photos/land-hinkley-1.jpg" },
  { id: 51, category: "land", title: "Dual-Frontage Lot", location: "Pearblossom, CA", image: "/photos/land-pearblossom-3.jpg" },
  { id: 52, category: "land", title: "Roadfront Acreage", location: "Apple Valley, CA", image: "/photos/land-applevalley-2.jpg" },
  { id: 53, category: "land", title: "Parcel Overview", location: "Pearblossom, CA", image: "/photos/land-pearblossom-4.jpg" },
  { id: 54, category: "land", title: "Open Land Frontage", location: "Hinkley, CA", image: "/photos/land-hinkley-2.jpg" },
];

export function portfolioByCategory(category: PortfolioCategory): PortfolioItem[] {
  return portfolioItems.filter((item) => item.category === category);
}
