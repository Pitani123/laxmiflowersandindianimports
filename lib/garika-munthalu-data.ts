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
export const garikaMunthaluSizes: GarikaMunthaluSize[] = [
  { id: "single", label: "Single Pot", priceInCents: 4500 }, // $45.00
  { id: "pair", label: "Pair", priceInCents: 9000 }, // $90.00
]

// =================================================================================
// GARIKA MUNTHALU PRODUCTS
// =================================================================================
export const garikaMunthaluProducts: GarikaMunthalu[] = [
  {
    id: "garika-munthalu-001",
    name: "GarikaMunthalu_001",
    description: "Gold painted clay pot with pearl bead trim and colorful gemstone flower decorations",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%204.05.42%20PM-H988PFKyGvl8VmeM5QXLZKVIqhv8p3.jpeg"
    ],
    sizes: garikaMunthaluSizes,
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
    sizes: garikaMunthaluSizes,
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
    sizes: garikaMunthaluSizes,
    potSize: "5/6 inch clay pot",
    customizable: true
  }
]

// Helper function to format price
export function formatGarikaMunthaluPrice(priceInCents: number): string {
  return `$${(priceInCents / 100).toFixed(2)}`
}
