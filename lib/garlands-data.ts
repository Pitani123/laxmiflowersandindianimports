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
  images: string[] // Array of image URLs (supports multiple images)
  videoUrl?: string // Optional video URL for future use
  sizes: GarlandSize[] // Available sizes with prices
  category?: string // Optional category for filtering (e.g., "wedding-accessories")
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
  { id: "3ft", label: "3 ft", priceInCents: 9000 }, // $90.00
  { id: "4ft", label: "4 ft", priceInCents: 9500 }, // $95.00
  { id: "5ft", label: "5 ft", priceInCents: 10000 }, // $100.00
]

export const garland_003_Sizes: GarlandSize[] = [
  { id: "3ft", label: "3 ft", priceInCents: 13000 }, // $130.00
  { id: "4ft", label: "4 ft", priceInCents: 15000 }, // $150.00
  { id: "5ft", label: "5 ft", priceInCents: 17000 }, // $170.00
]

export const garland_004_Sizes: GarlandSize[] = [
  { id: "3ft", label: "3 ft", priceInCents: 9500 }, // $95.00
  { id: "4ft", label: "4 ft", priceInCents: 10000 }, // $100.00
  { id: "5ft", label: "5 ft", priceInCents: 10500 }, // $105.00
]

export const garland_005_Sizes: GarlandSize[] = [
  { id: "3ft", label: "3 ft", priceInCents: 12000 }, // $120.00
  { id: "4ft", label: "4 ft", priceInCents: 13000 }, // $130.00
  { id: "5ft", label: "5 ft", priceInCents: 14000 }, // $140.00
]

export const garland_006_Sizes: GarlandSize[] = [
  { id: "4ft", label: "4 ft", priceInCents: 17000 }, // $170.00
  { id: "5ft", label: "5 ft", priceInCents: 20000 }, // $200.00
]

export const garland_009_Sizes: GarlandSize[] = [
  { id: "3ft", label: "3 ft", priceInCents: 8000 }, // $80.00
  { id: "4ft", label: "4 ft", priceInCents: 8500 }, // $85.00
  { id: "5ft", label: "5 ft", priceInCents: 9000 }, // $90.00
]

export const garland_010_Sizes: GarlandSize[] = [
  { id: "4ft", label: "4 ft", priceInCents: 12000 }, // $120.00
  { id: "5ft", label: "5 ft", priceInCents: 12500 }, // $125.00
]

export const garland_011_Sizes: GarlandSize[] = [
  { id: "3ft", label: "3 ft", priceInCents: 9500 }, // $95.00
  { id: "4ft", label: "4 ft", priceInCents: 10000 }, // $100.00
  { id: "5ft", label: "5 ft", priceInCents: 10500 }, // $105.00
]

export const garland_012_Sizes: GarlandSize[] = [
  { id: "3ft", label: "3 ft", priceInCents: 10000 }, // $100.00
  { id: "4ft", label: "4 ft", priceInCents: 11000 }, // $110.00
  { id: "5ft", label: "5 ft", priceInCents: 11500 }, // $115.00
]

export const garland_013_Sizes: GarlandSize[] = [
  { id: "3ft", label: "3 ft", priceInCents: 13000 }, // $130.00
  { id: "4ft", label: "4 ft", priceInCents: 14000 }, // $140.00
  { id: "5ft", label: "5 ft", priceInCents: 15000 }, // $150.00
]

export const garland_014_Sizes: GarlandSize[] = [
  { id: "3ft", label: "3 ft", priceInCents: 9500 }, // $100.00
  { id: "4ft", label: "4 ft", priceInCents: 10500 }, // $105.00
  { id: "5ft", label: "5 ft", priceInCents: 11000 }, // $110.00
]

export const garland_015_Sizes: GarlandSize[] = [
  { id: "3ft", label: "3 ft", priceInCents: 9500 }, // $95.00
  { id: "4ft", label: "4 ft", priceInCents: 10000 }, // $100.00
  { id: "5ft", label: "5 ft", priceInCents: 10500 }, // $105.00
]

export const garland_016_Sizes: GarlandSize[] = [
  { id: "3ft", label: "3 ft", priceInCents: 9500 }, // $95.00
  { id: "4ft", label: "4 ft", priceInCents: 10000 }, // $100.00
  { id: "5ft", label: "5 ft", priceInCents: 10500 }, // $105.00
]

export const garland_017_Sizes: GarlandSize[] = [
  { id: "3ft", label: "3 ft", priceInCents: 8500 }, // $85.00
  { id: "4ft", label: "4 ft", priceInCents: 9000 }, // $90.00
  { id: "5ft", label: "5 ft", priceInCents: 9500 }, // $95.00
]

export const garland_018_Sizes: GarlandSize[] = [
  { id: "3ft", label: "3 ft", priceInCents: 9500 }, // $95.00
  { id: "4ft", label: "4 ft", priceInCents: 10000 }, // $100.00
  { id: "5ft", label: "5 ft", priceInCents: 10500 }, // $105.00
]

export const garland_019_Sizes: GarlandSize[] = [
  { id: "3ft", label: "3 ft", priceInCents: 9500 }, // $90.00
  { id: "4ft", label: "4 ft", priceInCents: 10000 }, // $95.00
  { id: "5ft", label: "5 ft", priceInCents: 10500 }, // $100.00
]

export const garland_020_Sizes: GarlandSize[] = [
  { id: "3ft", label: "3 ft", priceInCents: 9500 }, // $95.00
  { id: "4ft", label: "4 ft", priceInCents: 10000 }, // $100.00
  { id: "5ft", label: "5 ft", priceInCents: 10500 }, // $105.00
]

export const garland_021_Sizes: GarlandSize[] = [
  { id: "3ft", label: "3 ft", priceInCents: 9500 }, // $95.00
  { id: "4ft", label: "4 ft", priceInCents: 10000 }, // $100.00
  { id: "5ft", label: "5 ft", priceInCents: 10500 }, // $105.00
]

export const garland_022_Sizes: GarlandSize[] = [
  { id: "3ft", label: "3 ft", priceInCents: 9000 }, // $90.00
  { id: "4ft", label: "4 ft", priceInCents: 9500 }, // $95.00
  { id: "5ft", label: "5 ft", priceInCents: 10000 }, // $100.00
]

export const garland_023_Sizes: GarlandSize[] = [
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
    name: "WeddingGarland_001",
    description: "Lotus and Baby's Breath Garland",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.15%20PM-Bo0UPqLUzxI0lEXKT8L3McGaZxX0Uy.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.15%20PM%20%281%29-xIoAWCrxPugzCsgeezBJdmCm9jq2cX.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.12%20PM-H2GwvJAEtRKxiib7U2qRcl4BkgN2XQ.jpeg"
    ],
    sizes: defaultSizes
    //availableExtras: ["pearls", "gold-beads", "silver-beads", "crystals"],  
  },
  {
    id: "garland-002",
    name: "WeddingGarland_002",
    description: "Roses, and Baby's Breath Garland",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2012.09.42%20PM-a27IxFbItgoF11FmjzkXkeQvVuSMET.jpeg"],
    sizes: garland_002_Sizes
    //availableExtras: ["pearls", "gold-beads", "silver-beads", "crystals", "extra-flowers"],
  },
  {
    id: "garland-003",
    name: "WeddingGarland_003",
    description: "Carnations, Roses, and Baby's Breath Garland",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.26%20PM-GvnZbx7l2HPTlDcRz4L8pUlFgdiAli.jpeg"],
    sizes: garland_003_Sizes
    //availableExtras: ["pearls", "gold-beads", "crystals"],
  },
  {
    id: "garland-004",
    name: "WeddingGarland_004",
    description: "Mums, Roses and Baby's Breath Garland",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.11%20PM-mBKW1Oh3L9uZKxzsz5LpWYY9rgKhhX.jpeg"],
    sizes: garland_004_Sizes
    //availableExtras: ["gold-beads", "crystals", "extra-flowers"],
  },
  {
    id: "garland-005",
    name: "WeddingGarland_005",
    description: "Rose Petals Garland",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.40.24%20PM-68AsyoEQaQ8YfMIsWDsra1vtiM1xDe.jpeg"],
    sizes: garland_005_Sizes
    //availableExtras: ["pearls", "silver-beads", "crystals", "ribbons"],
  },
  {
    id: "garland-006",
    name: "WeddingGarland_006",
    description: "Orchids and Roses Garland",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.16%20PM%20%281%29-Dp9B4gguX5sKEDAsfDHKvbcKxjcoyq.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.16%20PM-eA7YiPwunz9NbuDB4rSHo5kzTwuYbc.jpeg"
    ],
    sizes: garland_006_Sizes
    //availableExtras: ["pearls", "crystals", "ribbons"],
  },
  {
    id: "garland-007",
    name: "WeddingGarland_007",
    description: "Roses and Baby's Breath Garland",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.25%20PM-iUVruhGktLurBvZZHIgQIEDG6Op2hU.jpeg"],
    sizes: garland_002_Sizes
    //availableExtras: ["pearls", "silver-beads", "crystals"],
  },
  {
    id: "garland-008",
    name: "WeddingGarland_008",
    description: "Carnation and Baby's Breah Garland",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.39.38%20PM-oUACy734hgrNcq15g94BEUaazGKnC7.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2012.10.55%20PM-cFxS32IXNf000iVsQ5JdSV02iPQ3ax.jpeg"
    ],
    sizes: garland_002_Sizes
    //availableExtras: ["pearls", "silver-beads", "crystals"],
  },
  {
    id: "garland-009",
    name: "WeddingGarland_009",
    description: "Carnations Garland",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.13%20PM-2uBT8GQnOFJHfsMvg8te9bnsPQaP0G.jpeg"],
    sizes: garland_009_Sizes
    //availableExtras: ["pearls", "gold-beads", "silver-beads", "crystals"],
  },
  {
    id: "garland-010",
    name: "WeddingGarland_010",
    description: "Roses, Mums, and Baby's Breath Garland",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.16%20PM%20%283%29-SpGaAjL4J3ZsRPeWLacnWbqthoDPmg.jpeg"],
    sizes: garland_010_Sizes
    //availableExtras: ["pearls", "gold-beads", "silver-beads", "crystals"],
  },
  {
    id: "garland-011",
    name: "WeddingGarland_011",
    description: "Roses, and Baby's Breath Garland",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.40.57%20PM-O272fb5TYnmPvfkhvqbJSwvYGKxWNj.jpeg"],
    sizes: garland_011_Sizes
    //availableExtras: ["pearls", "gold-beads", "silver-beads", "crystals"],
  },
  {
    id: "garland-012",
    name: "WeddingGarland_012",
    description: "Roses, Mums, and Baby's Breath Garland",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2012.10.19%20PM-pwvqSJRRHMTvy5QgOUkOHMyCD8hMFZ.jpeg"],
    sizes: garland_012_Sizes
    //availableExtras: ["pearls", "gold-beads", "crystals"],
  },
  {
    id: "garland-013",
    name: "WeddingGarland_013",
    description: "Lotus, and Baby's Breath Garland",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2012.11.59%20PM-skTbPskt4lrHvbaBOXQFH4Bw0Tl97X.jpeg"],
    sizes: garland_013_Sizes
    //availableExtras: ["pearls", "gold-beads", "silver-beads"],
  },
  {
    id: "garland-014",
    name: "WeddingGarland_014",
    description: "Roses, and Baby's Breath Garland",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.17%20PM-VNYnHnuVcGacKNBP70do7lIgQ3XVpC.jpeg"],
    sizes: garland_014_Sizes
    //availableExtras: ["pearls", "silver-beads", "crystals", "ribbons"],
  },
  {
    id: "garland-015",
    name: "WeddingGarland_015",
    description: "Roses, and Baby's Breath Garland",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.16%20PM%20%282%29-yTpMhtenXfarEaNWZEIVn9EhLOaQbf.jpeg"],
    sizes: garland_015_Sizes
    //availableExtras: ["pearls", "gold-beads", "silver-beads"],
  },
  {
    id: "garland-016",
    name: "WeddingGarland_016",
    description: "Roses, and Baby's Breath Garland",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2012.13.05%20PM-0r9TxlcHuUhxhVlJeyVkLfyGGKhcwR.jpeg"],
    sizes: garland_016_Sizes
    //availableExtras: ["pearls", "silver-beads", "crystals", "ribbons"],
  },
  {
    id: "garland-017",
    name: "WeddingGarland_017",
    description: "Mums, Carnations and Baby's Breath Garland",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%202.49.05%20PM%20%285%29-3ASv17bdEIyFzqUqK0DVFZdRlimXeV.jpeg"],
    sizes: garland_017_Sizes
  },
  {
    id: "garland-018",
    name: "WeddingGarland_018",
    description: "Roses, Mums and Baby's Breath Garland",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%202.49.05%20PM%20%286%29-F2RY8w57qRjrlB0S02Coo4zARAlSXY.jpeg"],
    sizes: garland_018_Sizes
  },
  {
    id: "garland-019",
    name: "WeddingGarland_019",
    description: "Roses and Baby's Breath Garland",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%202.49.05%20PM-P9f7xipVyz0MsqKU8qp4igjfeWEwyk.jpeg"],
    sizes: garland_019_Sizes
  },
  {
    id: "garland-020",
    name: "WeddingGarland_020",
    description: "Roses, and Baby's Breath Garland",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%202.49.05%20PM%20%283%29-mp4CxRYuSbIPUKYRqoaLMa7Mqgia9X.jpeg"],
    sizes: garland_020_Sizes
  },
  {
    id: "garland-021",
    name: "WeddingGarland_021",
    description: "Roses, and Baby's Breath Garland",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%202.49.05%20PM%20%281%29-tlxYUbXiHBdOTnscI6YwTuNQAsoINv.jpeg"],
    sizes: garland_021_Sizes
  },
  {
    id: "garland-022",
    name: "WeddingGarland_022",
    description: "Roses and Baby's Breath Garland",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%202.49.05%20PM%20%284%29-WwxEa0IHWKL2Z2TVENnsjENGTA2Miv.jpeg"],
    sizes: garland_022_Sizes
  },

  {
    id: "garland-023",
    name: "WeddingGarland_023",
    description: "White Jasmine and Baby's Breath Garland with Pink Rose Accents",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-29%20at%209.44.37%20PM-N2IVuqPOEBZFj699KmH8cNr4Bnafm3.jpeg"],
    sizes: defaultSizes
  },
  {
    id: "garland-024",
    name: "WeddingGarland_024",
    description: "Pink and Red Roses with Baby's Breath Double Garland",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-29%20at%209.44.38%20PM%20%283%29-i1gmWws6BoBwLwNmTIytZqjLn517GH.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-29%20at%209.44.38%20PM%20%282%29-h8wwyeSeHKo46xrKCVUV7xosqokoqU.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2012.44.19%20AM%20%281%29-hCmULtwCVsChoZgffXVXn5dXNrT7Vi.jpeg"
    ],
    sizes: defaultSizes
  },
  {
    id: "garland-025",
    name: "WeddingGarland_025",
    description: "Red Roses and Baby's Breath Garland with Pearl Accents",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-29%20at%209.44.37%20PM%20%281%29-WxtA9S5FUJNGGU7y6kwPUzgLje3BLX.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2012.44.18%20AM%20%285%29-1BpenkKSC0rREU8LO7grtD3njQeR6R.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%202.49.05%20PM%20%282%29-e5iER1npLDVycCCjGCjS0ohG1ROEse.jpeg"
    ],
    sizes: defaultSizes
  },

  {
    id: "garland-026",
    name: "WeddingGarland_026",
    description: "Pink Lotus and Baby's Breath Double Garland with Pearl Tassels",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-29%20at%209.46.06%20PM%20%281%29-DmsRYuiqrwbqJBDgA5hlh0ofJpg55Z.jpeg"],
    sizes: defaultSizes
  },

  {
    id: "garland-027",
    name: "WeddingGarland_027",
    description: "Pink Roses with Baby's Breath Garland and Pearl Accents",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2012.44.17%20AM%20%283%29-T98NkFU7LCLPhJYezrsBNg8iRqhOcn.jpeg"],
    sizes: defaultSizes
  },
  {
    id: "garland-028",
    name: "WeddingGarland_028",
    description: "White Roses with Baby's Breath Double Garland and Pearl Accents",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2012.44.17%20AM-9Era4vgRS39Dv75fSIbUukvIIJLvPj.jpeg"],
    sizes: defaultSizes
  },

  {
    id: "garland-029",
    name: "WeddingGarland_029",
    description: "White and Red Roses with Baby's Breath Double Garland and Gold Bead Accents",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2012.44.11%20AM-xjPLULyL0afSIstlK1yySiFPFc3Hz3.jpeg"],
    sizes: defaultSizes
  },
  {
    id: "garland-030",
    name: "WeddingGarland_030",
    description: "Cream Jasmine with Baby's Breath Garland and Pink Rose Accents",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2012.44.18%20AM%20%284%29-5eqzxWOFqQSmLSUrhBdvbPiEGPDPGc.jpeg"],
    sizes: defaultSizes
  },
  {
    id: "garland-031",
    name: "WeddingGarland_031",
    description: "Pink Roses with Baby's Breath Double Garland and Pink Pearl Accents",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2012.44.13%20AM-KVrpbrRvkHVt1lVug0CS8jPVCOQP3P.jpeg"],
    sizes: defaultSizes
  },
  {
    id: "garland-032",
    name: "WeddingGarland_032",
    description: "White Carnations with Red Roses and Baby's Breath Garland",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2012.44.12%20AM-DpHWd0jduD3thAxkLsIiMkJjYnyJsT.jpeg"],
    sizes: defaultSizes
  }
]

// Helper function to get extras by IDs
export function getExtrasByIds(ids: string[]): GarlandExtra[] {
  return garlandExtras.filter(extra => ids.includes(extra.id))
}

// Helper function to format price
export function formatPrice(priceInCents: number): string {
  return `$${(priceInCents / 100).toFixed(2)}`
}
