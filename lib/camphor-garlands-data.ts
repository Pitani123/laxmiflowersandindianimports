// Camphor Garlands Data - Edit this file to change camphor garland names, prices, sizes, and extras
// =================================================================================

export interface CamphorGarlandSize {
  id: string
  label: string
  priceInCents: number // Price in cents (e.g., 2500 = $25.00)
}

export interface CamphorGarlandExtra {
  id: string
  name: string
  priceInCents: number // Additional price in cents
}

export interface CamphorGarland {
  id: string
  name: string // Change this to update the garland name
  description: string
  images: string[] // Array of image URLs (supports multiple images)
  videoUrl?: string // Optional video URL for future use
  sizes: CamphorGarlandSize[] // Available sizes with prices
  category?: string // Optional category for filtering
}

// =================================================================================
// EXTRAS - Add or modify extras here
// =================================================================================
export const camphorGarlandExtras: CamphorGarlandExtra[] = [
  { id: "pearls", name: "Pearls", priceInCents: 500 }, // $5.00
  { id: "gold-beads", name: "Gold Beads", priceInCents: 800 }, // $8.00
  { id: "silver-beads", name: "Silver Beads", priceInCents: 700 }, // $7.00
  { id: "crystals", name: "Crystals", priceInCents: 1000 }, // $10.00
  { id: "ribbons", name: "Ribbons", priceInCents: 300 }, // $3.00
]

// =================================================================================
// DEFAULT SIZES - Camphor Garlands (3ft, 4ft, 5ft)
// =================================================================================
export const defaultCamphorSizes: CamphorGarlandSize[] = [
  { id: "3ft", label: "3 ft", priceInCents: 10000 }, // $100.00
  { id: "4ft", label: "4 ft", priceInCents: 11000 }, // $110.00
  { id: "5ft", label: "5 ft", priceInCents: 12000 }, // $120.00
]

export const camphor_001_Sizes: CamphorGarlandSize[] = [
  { id: "4ft", label: "4 ft", priceInCents: 9500 }, // $95.00
  { id: "5ft", label: "5 ft", priceInCents: 10000 }, // $100.00
]

export const camphor_002_Sizes: CamphorGarlandSize[] = [
  { id: "4ft", label: "4 ft", priceInCents: 9500 }, // $95.00
  { id: "5ft", label: "5 ft", priceInCents: 10000 }, // $100.00
]

export const camphor_003_Sizes: CamphorGarlandSize[] = [
  { id: "4ft", label: "4 ft", priceInCents: 9500 }, // $95.00
  { id: "5ft", label: "5 ft", priceInCents: 10000 }, // $100.00
]

export const camphor_004_Sizes: CamphorGarlandSize[] = [
  { id: "4ft", label: "4 ft", priceInCents: 11000 }, // $110.00 - Update price as needed
  { id: "5ft", label: "5 ft", priceInCents: 12000 }, // $120.00 - Update price as needed
]

// =================================================================================
// CAMPHOR GARLANDS - Named as Camphor_001, Camphor_002, etc.
// =================================================================================
export const camphorGarlands: CamphorGarland[] = [
  {
    id: "camphor-001",
    name: "Camphor_001",
    description: "Dual-strand camphor garland with white camphor blocks, golden beads, pearls, golden mesh balls, and colorful decorative rosettes",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%204.36.59%20PM-FRRNJgBs7q27lot0ETR5tdY62Yw71t.jpeg"
    ],
    sizes: camphor_001_Sizes
  },
  {
    id: "camphor-002",
    name: "Camphor_002",
    description: "Elegant camphor garland with white camphor pieces, golden leaf decorations, yellow and white beads, colorful rosettes, and pearl tassels",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%204.36.42%20PM-n2rJxBixiKxx38cLrK835uk3YjROOL.jpeg"
    ],
    sizes: camphor_002_Sizes
  },
  {
    id: "camphor-003",
    name: "Camphor_003",
    description: "Double-strand camphor garland with golden and yellow decorative beads at top and bottom, white camphor pieces in the middle strands, red silk thread ball accents, and decorative tassels with orange and pearl beads",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-18%20at%201.05.25%20PM-xpszNoeAJLdSFfzt5EDxeHRU3XQFUX.jpeg"
    ],
    sizes: camphor_003_Sizes
  },
  {
    id: "camphor-004",
    name: "Camphor_004",
    description: "Multi-strand camphor garland featuring two large red velvet hearts with gold filigree borders at the top, white camphor beads, golden beads throughout, red silk thread balls in the middle section, and ornate gold bead tassels",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-18%20at%201.00.01%20PM-COZ852IVn4pDZ6WxxYAybqaWqdKYit.jpeg"
    ],
    sizes: camphor_004_Sizes
  }
]

// Helper function to get extras by IDs
export function getCamphorExtrasByIds(ids: string[]): CamphorGarlandExtra[] {
  return camphorGarlandExtras.filter(extra => ids.includes(extra.id))
}

// Helper function to format price
export function formatCamphorPrice(priceInCents: number): string {
  return `$${(priceInCents / 100).toFixed(2)}`
}
