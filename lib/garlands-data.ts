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
// DEFAULT SIZES - Wedding Garlands (3ft, 4ft, 5ft)
// =================================================================================
export const defaultSizes: GarlandSize[] = [
  { id: "3ft", label: "3 ft", priceInCents: 10000 }, // $100.00
  { id: "4ft", label: "4 ft", priceInCents: 11000 }, // $110.00
  { id: "5ft", label: "5 ft", priceInCents: 12000 }, // $120.00
]

export const garland_002_Sizes: GarlandSize[] = [
  { id: "3ft", label: "3 ft", priceInCents: 11000 }, // $110.00
  { id: "4ft", label: "4 ft", priceInCents: 12000 }, // $120.00
  { id: "5ft", label: "5 ft", priceInCents: 13000 }, // $130.00
]

// =================================================================================
// GARLANDS - Named as Garland_001, Garland_002, etc.
// =================================================================================
export const garlands: Garland[] = [
  {
    id: "garland-001",
    name: "Garland_001",
    description: "Lotus and Baby's Breath Garland",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.15%20PM%20%281%29-xIoAWCrxPugzCsgeezBJdmCm9jq2cX.jpeg",
    sizes: defaultSizes
    //availableExtras: ["pearls", "gold-beads", "silver-beads", "crystals"],  
  },
  {
    id: "garland-002",
    name: "Garland_002",
    description: "Mums, Roses and Baby's Breath Garland",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.11%20PM-mBKW1Oh3L9uZKxzsz5LpWYY9rgKhhX.jpeg",
    sizes: garland_002_Sizes
    //availableExtras: ["gold-beads", "crystals", "extra-flowers"],
  },
  {
    id: "garland-003",
    name: "Garland_003",
    description: "Rose Petals Garland",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.40.24%20PM-68AsyoEQaQ8YfMIsWDsra1vtiM1xDe.jpeg",
    sizes: defaultSizes
    //availableExtras: ["pearls", "silver-beads", "crystals", "ribbons"],
  },
  {
    id: "garland-004",
    name: "Garland_004",
    description: "Orchids and Roses Garland",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.16%20PM%20%281%29-Dp9B4gguX5sKEDAsfDHKvbcKxjcoyq.jpeg",
    sizes: defaultSizes
    //availableExtras: ["pearls", "crystals", "ribbons"],
  },
  {
    id: "garland-005",
    name: "Garland_005",
    description: "Roses and Baby's Breath Garland",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.25%20PM-iUVruhGktLurBvZZHIgQIEDG6Op2hU.jpeg",
    sizes: defaultSizes
    //availableExtras: ["pearls", "silver-beads", "crystals"],
  },
  {
    id: "garland-006",
    name: "Garland_006",
    description: "Carnation and Baby's Breah Garland",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.39.38%20PM-oUACy734hgrNcq15g94BEUaazGKnC7.jpeg",
    sizes: defaultSizes
    //availableExtras: ["pearls", "silver-beads", "crystals"],
  },
  {
    id: "garland-007",
    name: "Garland_007",
    description: "Carnation and Baby's Breah Garland",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2012.10.55%20PM-cFxS32IXNf000iVsQ5JdSV02iPQ3ax.jpeg",
    sizes: defaultSizes
    //availableExtras: ["pearls", "gold-beads", "crystals"],
  },
  {
    id: "garland-008",
    name: "Garland_008",
    description: "Lotus and Baby's Breath Garland",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.15%20PM-Bo0UPqLUzxI0lEXKT8L3McGaZxX0Uy.jpeg",
    sizes: defaultSizes
    //availableExtras: ["pearls", "gold-beads", "silver-beads"],
  },
  {
    id: "garland-009",
    name: "Garland_009",
    description: "Carnations Garland",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.13%20PM-2uBT8GQnOFJHfsMvg8te9bnsPQaP0G.jpeg",
    sizes: defaultSizes
    //availableExtras: ["pearls", "gold-beads", "silver-beads", "crystals"],
  },
  {
    id: "garland-010",
    name: "Garland_010",
    description: "Roses, Mums, and Baby's Breath Garland",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.16%20PM%20%283%29-SpGaAjL4J3ZsRPeWLacnWbqthoDPmg.jpeg",
    sizes: defaultSizes
    //availableExtras: ["pearls", "gold-beads", "silver-beads", "crystals"],
  },
  {
    id: "garland-011",
    name: "Garland_011",
    description: "Roses, and Baby's Breath Garland",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.40.57%20PM-O272fb5TYnmPvfkhvqbJSwvYGKxWNj.jpeg",
    sizes: defaultSizes
    //availableExtras: ["pearls", "gold-beads", "silver-beads", "crystals"],
  },
  {
    id: "garland-012",
    name: "Garland_012",
    description: "Roses, Mums, and Baby's Breath Garland",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2012.10.19%20PM-pwvqSJRRHMTvy5QgOUkOHMyCD8hMFZ.jpeg",
    sizes: defaultSizes
    //availableExtras: ["pearls", "gold-beads", "crystals"],
  },
  {
    id: "garland-013",
    name: "Garland_013",
    description: "Lotus, and Baby's Breath Garland",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2012.11.59%20PM-skTbPskt4lrHvbaBOXQFH4Bw0Tl97X.jpeg",
    sizes: defaultSizes
    //availableExtras: ["pearls", "gold-beads", "silver-beads"],
  },
  {
    id: "garland-014",
    name: "Garland_014",
    description: "Roses, and Baby's Breath Garland",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.17%20PM-VNYnHnuVcGacKNBP70do7lIgQ3XVpC.jpeg",
    sizes: defaultSizes
    //availableExtras: ["pearls", "silver-beads", "crystals", "ribbons"],
  },
  {
    id: "garland-015",
    name: "Garland_015",
    description: "Roses, and Baby's Breath Garland",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.16%20PM%20%282%29-yTpMhtenXfarEaNWZEIVn9EhLOaQbf.jpeg",
    sizes: defaultSizes
    //availableExtras: ["pearls", "gold-beads", "silver-beads"],
  },
  {
    id: "garland-016",
    name: "Garland_016",
    description: "Roses, and Baby's Breath Garland",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2012.09.42%20PM-a27IxFbItgoF11FmjzkXkeQvVuSMET.jpeg",
    sizes: defaultSizes
    //availableExtras: ["pearls", "gold-beads", "silver-beads", "crystals", "extra-flowers"],
  },
  {
    id: "garland-017",
    name: "Garland_017",
    description: "Carnations, Roses, and Baby's Breath Garland",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.26%20PM-GvnZbx7l2HPTlDcRz4L8pUlFgdiAli.jpeg",
    sizes: defaultSizes
    //availableExtras: ["pearls", "gold-beads", "crystals"],
  },
  {
    id: "garland-018",
    name: "Garland_018",
    description: "Lotus and Baby's Breath Garland",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.12%20PM-H2GwvJAEtRKxiib7U2qRcl4BkgN2XQ.jpeg",
    sizes: defaultSizes
    //availableExtras: ["pearls", "silver-beads", "crystals", "ribbons"],
  },
  {
    id: "garland-019",
    name: "Garland_019",
    description: "Orchids and Roses Garland",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.16%20PM-eA7YiPwunz9NbuDB4rSHo5kzTwuYbc.jpeg",
    sizes: defaultSizes
    //availableExtras: ["pearls", "silver-beads", "crystals", "ribbons"],
  },
  {
    id: "garland-020",
    name: "Garland_020",
    description: "Roses, and Baby's Breath Garland",
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
