// Garlands Data - Edit this file to change garland names, prices, sizes, and extras
// =================================================================================

export interface GarlandSize {
  id: string
  label: string
  priceInCents: number // Price in cents (e.g., 2500 = $25.00)
}

export interface GarlandExtra {
  id: string
  name: string
  priceInCents: number // Additional price in cents
}

export interface Garland {
  id: string
  name: string // Change this to update the garland name
  description: string
  image: string
  sizes: GarlandSize[] // Available sizes with prices
  //availableExtras: string[] // IDs of extras that can be added
}

// =================================================================================
// EXTRAS - Add or modify extras here
// =================================================================================
export const garlandExtras: GarlandExtra[] = [
  { id: "pearls", name: "Pearls", priceInCents: 500 }, // $5.00
  { id: "gold-beads", name: "Gold Beads", priceInCents: 800 }, // $8.00
  { id: "silver-beads", name: "Silver Beads", priceInCents: 700 }, // $7.00
  { id: "crystals", name: "Crystals", priceInCents: 1000 }, // $10.00
  { id: "ribbons", name: "Ribbons", priceInCents: 300 }, // $3.00
  { id: "extra-flowers", name: "Extra Flowers", priceInCents: 1200 }, // $12.00
]

// =================================================================================
// DEFAULT SIZES - These are the default size options (can be overridden per garland)
// =================================================================================
export const defaultSizes: GarlandSize[] = [
  //{ id: "1ft", label: "1 ft", priceInCents: 1500 }, // $15.00
  { id: "3ft", label: "3 ft", priceInCents: 3500 }, // $35.00
  { id: "4ft", label: "4 ft", priceInCents: 4500 }, // $45.00
  { id: "5ft", label: "5 ft", priceInCents: 5500 }, // $55.00
  //{ id: "10ft", label: "10 ft", priceInCents: 9500 }, // $95.00
]

// =================================================================================
// GARLANDS - Named as Garland_001, Garland_002, etc.
// =================================================================================
export const garlands: Garland[] = [
  {
    id: "garland-001",
    name: "Garland_001",
    description: "Coral pink roses with white chrysanthemums and baby's breath. Colors: Coral, White, Green",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.15%20PM%20%281%29-xIoAWCrxPugzCsgeezBJdmCm9jq2cX.jpeg",
    sizes: defaultSizes
    //availableExtras: ["pearls", "gold-beads", "silver-beads", "crystals"],  
  },
  {
    id: "garland-002",
    name: "Garland_002",
    description: "Traditional wedding varmala with red rose petals, golden roses, and jasmine. Colors: Red, Gold, White",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.11%20PM-mBKW1Oh3L9uZKxzsz5LpWYY9rgKhhX.jpeg",
    sizes: [
      { id: "3ft", label: "3 ft", priceInCents: 5500 },
      { id: "4ft", label: "4 ft", priceInCents: 7500 },
      { id: "5ft", label: "5 ft", priceInCents: 9500 }
    ]
    //availableExtras: ["gold-beads", "crystals", "extra-flowers"],
  },
  {
    id: "garland-003",
    name: "Garland_003",
    description: "White orchids with soft pink spray roses. Colors: White, Light Green, Pink",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.40.24%20PM-68AsyoEQaQ8YfMIsWDsra1vtiM1xDe.jpeg",
    sizes: defaultSizes
    //availableExtras: ["pearls", "silver-beads", "crystals", "ribbons"],
  },
  {
    id: "garland-004",
    name: "Garland_004",
    description: "Soft pink roses with white baby's breath on pink pearl beads. Colors: Light Pink, White",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.16%20PM%20%281%29-Dp9B4gguX5sKEDAsfDHKvbcKxjcoyq.jpeg",
    sizes: defaultSizes
    //availableExtras: ["pearls", "crystals", "ribbons"],
  },
  {
    id: "garland-005",
    name: "Garland_005",
    description: "Pure white carnations with delicate baby's breath accents. Colors: White, Green",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.25%20PM-iUVruhGktLurBvZZHIgQIEDG6Op2hU.jpeg",
    sizes: defaultSizes
    //availableExtras: ["pearls", "silver-beads", "crystals"],
  },
  {
    id: "garland-006",
    name: "Garland_006",
    description: "Elegant white carnations pair with baby's breath throughout. Colors: White, Ivory, Green",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.39.38%20PM-oUACy734hgrNcq15g94BEUaazGKnC7.jpeg",
    sizes: defaultSizes
    //availableExtras: ["pearls", "silver-beads", "crystals"],
  },
  {
    id: "garland-007",
    name: "Garland_007",
    description: "Pink lotus flowers with white baby's breath and pearl beads. Colors: Pink, Green, White",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2012.10.55%20PM-cFxS32IXNf000iVsQ5JdSV02iPQ3ax.jpeg",
    sizes: defaultSizes
    //availableExtras: ["pearls", "gold-beads", "crystals"],
  },
  {
    id: "garland-008",
    name: "Garland_008",
    description: "Red and white carnations in alternating pattern. Colors: Red, White, Green",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.15%20PM-Bo0UPqLUzxI0lEXKT8L3McGaZxX0Uy.jpeg",
    sizes: defaultSizes
    //availableExtras: ["pearls", "gold-beads", "silver-beads"],
  },
  {
    id: "garland-009",
    name: "Garland_009",
    description: "Pink roses with white daisies and baby's breath on pink beads. Colors: Pink, White, Green",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.13%20PM-2uBT8GQnOFJHfsMvg8te9bnsPQaP0G.jpeg",
    sizes: defaultSizes
    //availableExtras: ["pearls", "gold-beads", "silver-beads", "crystals"],
  },
  {
    id: "garland-010",
    name: "Garland_010",
    description: "Vibrant hot pink roses with white baby's breath. Colors: Hot Pink, White, Green",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.16%20PM%20%283%29-SpGaAjL4J3ZsRPeWLacnWbqthoDPmg.jpeg",
    sizes: defaultSizes
    //availableExtras: ["pearls", "gold-beads", "silver-beads", "crystals"],
  },
  {
    id: "garland-011",
    name: "Garland_011",
    description: "Pink-tipped roses with white chrysanthemums and baby's breath. Colors: Pink, Red, White",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.40.57%20PM-O272fb5TYnmPvfkhvqbJSwvYGKxWNj.jpeg",
    sizes: defaultSizes
    //availableExtras: ["pearls", "gold-beads", "silver-beads", "crystals"],
  },
  {
    id: "garland-012",
    name: "Garland_012",
    description: "Pink lotus flowers with abundant baby's breath sections. Colors: Pink, Olive Green, White",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2012.10.19%20PM-pwvqSJRRHMTvy5QgOUkOHMyCD8hMFZ.jpeg",
    sizes: defaultSizes
    //availableExtras: ["pearls", "gold-beads", "crystals"],
  },
  {
    id: "garland-013",
    name: "Garland_013",
    description: "Deep red roses with white baby's breath accents. Colors: Deep Red, White, Green",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2012.11.59%20PM-skTbPskt4lrHvbaBOXQFH4Bw0Tl97X.jpeg",
    sizes: defaultSizes
    //availableExtras: ["pearls", "gold-beads", "silver-beads"],
  },
  {
    id: "garland-014",
    name: "Garland_014",
    description: "Soft pink roses with white baby's breath pair. Colors: Light Pink, White, Green",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.17%20PM-VNYnHnuVcGacKNBP70do7lIgQ3XVpC.jpeg",
    sizes: defaultSizes
    //availableExtras: ["pearls", "silver-beads", "crystals", "ribbons"],
  },
  {
    id: "garland-015",
    name: "Garland_015",
    description: "Rich deep red roses with white baby's breath pair. Colors: Deep Red, White, Green",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.16%20PM%20%282%29-yTpMhtenXfarEaNWZEIVn9EhLOaQbf.jpeg",
    sizes: defaultSizes
    //availableExtras: ["pearls", "gold-beads", "silver-beads"],
  },
  {
    id: "garland-016",
    name: "Garland_016",
    description: "Luxurious white roses and carnations with baby's breath pair. Colors: White, Ivory, Green",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2012.09.42%20PM-a27IxFbItgoF11FmjzkXkeQvVuSMET.jpeg",
    sizes: [
      { id: "3ft", label: "3 ft", priceInCents: 4500 },
      { id: "4ft", label: "4 ft", priceInCents: 5500 },
      { id: "5ft", label: "5 ft", priceInCents: 6500 }
    ]
    //availableExtras: ["pearls", "gold-beads", "silver-beads", "crystals", "extra-flowers"],
  },
  {
    id: "garland-017",
    name: "Garland_017",
    description: "Pink lotus flowers with baby's breath triple strand. Colors: Pink, Olive Green, White",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.26%20PM-GvnZbx7l2HPTlDcRz4L8pUlFgdiAli.jpeg",
    sizes: defaultSizes
    //availableExtras: ["pearls", "gold-beads", "crystals"],
  },
  {
    id: "garland-018",
    name: "Garland_018",
    description: "White orchids with soft pink spray roses pair. Colors: White, Light Green, Pink",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.12%20PM-H2GwvJAEtRKxiib7U2qRcl4BkgN2XQ.jpeg",
    sizes: defaultSizes
    //availableExtras: ["pearls", "silver-beads", "crystals", "ribbons"],
  },
  {
    id: "garland-019",
    name: "Garland_019",
    description: "Alternating pink and white roses with baby's breath. Colors: Pink, White, Coral",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.16%20PM-eA7YiPwunz9NbuDB4rSHo5kzTwuYbc.jpeg",
    sizes: defaultSizes
    //availableExtras: ["pearls", "silver-beads", "crystals", "ribbons"],
  },
  {
    id: "garland-020",
    name: "Garland_020",
    description: "Pink and cream roses alternating with baby's breath. Colors: Coral Pink, Cream, White",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2012.13.05%20PM-0r9TxlcHuUhxhVlJeyVkLfyGGKhcwR.jpeg",
    sizes: defaultSizes
    //availableExtras: ["pearls", "silver-beads", "crystals", "ribbons"],
  },
]

// Helper function to get extras by IDs
export function getExtrasByIds(ids: string[]): GarlandExtra[] {
  return garlandExtras.filter(extra => ids.includes(extra.id))
}

// Helper function to format price
export function formatPrice(priceInCents: number): string {
  return `$${(priceInCents / 100).toFixed(2)}`
}
