// Garika Munthalu Data - Decorated Clay Pots for Indian Weddings
// =================================================================================

export interface GarikaMunthaluSize {
  id: string
  label: string
  priceInCents: number // Price in cents (e.g., 4500 = $45.00)
}

export interface GarikaMunthalu {
  id: string
  name: string
  description: string
  images: string[]
  sizes: GarikaMunthaluSize[]
  potSize: string // e.g., "5/6 inch clay pot"
  customizable: boolean
}

// =================================================================================
// DEFAULT SIZES - Single or Pair
// =================================================================================
export const garikaMunthaluSizes1: GarikaMunthaluSize[] = [
  { id: "single", label: "Single Pot", priceInCents: 6500 },
  { id: "pair", label: "Pair", priceInCents: 13000 }, 
]

export const garikaMunthaluSizes2: GarikaMunthaluSize[] = [
  { id: "single", label: "Single Pot", priceInCents: 5500 },
  { id: "pair", label: "Pair", priceInCents: 11000 }, 
]

export const garikaMunthaluSizes3: GarikaMunthaluSize[] = [
  { id: "single", label: "Single Pot", priceInCents: 6000 },
  { id: "pair", label: "Pair", priceInCents: 12000 }, 
]

export const garikaMunthaluSizes4: GarikaMunthaluSize[] = [
  { id: "single", label: "Single Pot", priceInCents: 5500 },
  { id: "pair", label: "Pair", priceInCents: 11000 }, 
]

export const garikaMunthaluSizes5: GarikaMunthaluSize[] = [
  { id: "single", label: "Single Pot", priceInCents: 6500 },
  { id: "pair", label: "Pair", priceInCents: 13000 }, 
]

export const garikaMunthaluSizes6: GarikaMunthaluSize[] = [
  { id: "single", label: "Single Pot", priceInCents: 7500 },
  { id: "pair", label: "Pair", priceInCents: 15000 }, 
]

export const garikaMunthaluSizes7: GarikaMunthaluSize[] = [
  { id: "single", label: "Single Pot", priceInCents: 7000 },
  { id: "pair", label: "Pair", priceInCents: 14000 }, 
]

export const garikaMunthaluSizes8: GarikaMunthaluSize[] = [
  { id: "single", label: "Single Pot", priceInCents: 6500 },
  { id: "pair", label: "Pair", priceInCents: 13000 }, 
]

export const garikaMunthaluSizes9: GarikaMunthaluSize[] = [
  { id: "single", label: "Single Pot", priceInCents: 7500 },
  { id: "pair", label: "Pair", priceInCents: 15000 }, 
]

export const garikaMunthaluSizes10: GarikaMunthaluSize[] = [
  { id: "single", label: "Single Pot", priceInCents: 6500 },
  { id: "pair", label: "Pair", priceInCents: 13000 }, 
]

export const garikaMunthaluSizes11: GarikaMunthaluSize[] = [
  { id: "single", label: "Single Pot", priceInCents: 4500 },
  { id: "pair", label: "Pair", priceInCents: 9000 },
]

// =================================================================================
// GARIKA MUNTHALU PRODUCTS
// =================================================================================
export const garikaMunthaluProducts: GarikaMunthalu[] = [
  {
    id: "garika-munthalu-001",
    name: "GarikaMunthalu_001",
    description: "Traditional decorated clay pots available in red and green with golden base, pearl bead rim, gold chain embellishments, and elegant scalloped patterns",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-29%20at%209.41.55%20PM%20%281%29-1pLnn3gO4RISA7RitjPMWuRwevu2ea.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-29%20at%209.41.55%20PM%20%282%29-rmqY8eGdSSG0xH0GwrJp9gXK9JgOOB.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-29%20at%209.41.55%20PM-QbZg4LfKKaS5KkAPmiZFyyiXij5Z59.jpeg"
    ],
    sizes: garikaMunthaluSizes1,
    potSize: "5/6 inch clay pot",
    customizable: true
  },
  {
    id: "garika-munthalu-002",
    name: "GarikaMunthalu_002",
    description: "Red and gold clay pot with pearl bead trim and colorful gemstone flower accents",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%204.11.41%20PM-VsZlEuNR4SBdC1TSGEmL12gfdYrcjN.jpeg"
    ],
    sizes: garikaMunthaluSizes2,
    potSize: "5/6 inch clay pot",
    customizable: true
  },
  {
    id: "garika-munthalu-003",
    name: "GarikaMunthalu_003",
    description: "Gold painted clay pot with white rim, pearl and gold bead trim, and hanging chain embellishments",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%204.05.43%20PM-j6NghIyGasuJN6oLp26TQSYD8FmANA.jpeg"
    ],
    sizes: garikaMunthaluSizes3,
    potSize: "5/6 inch clay pot",
    customizable: true
  },
  {
    id: "garika-munthalu-004",
    name: "GarikaMunthalu_004",
    description: "Gold painted clay pot with pearl bead trim and colorful gemstone flower decorations",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%204.05.42%20PM-H988PFKyGvl8VmeM5QXLZKVIqhv8p3.jpeg"
    ],
    sizes: garikaMunthaluSizes4,
    potSize: "5/6 inch clay pot",
    customizable: true
  },
  {
    id: "garika-munthalu-005",
    name: "GarikaMunthalu_005",
    description: "Vibrant red clay pot with golden rim, pearl chains, multicolored rhinestones, and intricate golden bead work",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%204.35.04%20PM%20%283%29-0Kdha6raJGXNFMhERMXddHPaWTWa13.jpeg"
    ],
    sizes: garikaMunthaluSizes5,
    potSize: "5/6 inch clay pot",
    customizable: true
  },
  {
    id: "garika-munthalu-006",
    name: "GarikaMunthalu_006",
    description: "Deep red clay pot with pearl bands, green crystal drapes, white flower accents, and golden rhinestone patterns",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%204.35.04%20PM%20%282%29-kYD4ou5FYideu95eSIQwlE0kEuCOOr.jpeg"
    ],
    sizes: garikaMunthaluSizes6,
    potSize: "5/6 inch clay pot",
    customizable: true
  },
  {
    id: "garika-munthalu-007",
    name: "GarikaMunthalu_007",
    description: "Golden clay pot with pearl circular designs, rhinestone centers, golden bead chains, and elegant embellishments",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%204.35.04%20PM%20%284%29-MKqEsdE2VyOw9NVpaQiaimr5Tq9dAz.jpeg"
    ],
    sizes: garikaMunthaluSizes7,
    potSize: "5/6 inch clay pot",
    customizable: true
  },
  {
    id: "garika-munthalu-008",
    name: "GarikaMunthalu_008",
    description: "Elegant red, green and gold banded clay pot pair with pearl flower accents, gold rhinestone borders, emerald crystal details, and golden base",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2012.44.17%20AM%20%281%29-1ODsc5q4CSTdec2U7jGmWxWSAQ4epM.jpeg"
    ],
    sizes: garikaMunthaluSizes8,
    potSize: "5/6 inch clay pot",
    customizable: true
  },
  {
    id: "garika-munthalu-009",
    name: "GarikaMunthalu_009",
    description: "Stunning golden clay pot pair with green leaf petal designs outlined in rhinestones, red teardrop accents, and elegant green rim",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2012.44.15%20AM-vYJ3GzsMg6r9O1BXylLQjizjkimLWf.jpeg"
    ],
    sizes: garikaMunthaluSizes9,
    potSize: "5/6 inch clay pot",
    customizable: true
  },
  {
    id: "garika-munthalu-010",
    name: "GarikaMunthalu_010",
    description: "Rich maroon clay pot pair with golden rim and base, pearl and gold flower decorations, and red rhinestone band accent near the neck",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2012.44.09%20AM-oz8sUBVHywgtOqwXZZ0OS472DA6VeS.jpeg"
    ],
    sizes: garikaMunthaluSizes10,
    potSize: "5/6 inch clay pot",
    customizable: true
  },
  {
    id: "garika-munthalu-011",
    name: "GarikaMunthalu_011",
    description: "Classic maroon and gold striped clay pot pair with pearl dot accents, red crystal embellishments, and gold rhinestone borders between bands",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2012.44.18%20AM-lSgVb3ZItdNXeGr9d65sLhKUSGSZZ3.jpeg"
    ],
    sizes: garikaMunthaluSizes11,
    potSize: "5/6 inch clay pot",
    customizable: true
  }
]

// Helper function to format price
export function formatGarikaMunthaluPrice(priceInCents: number): string {
  return `$${(priceInCents / 100).toFixed(2)}`
}
