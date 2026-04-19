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
  availableExtras: string[] // IDs of extras that can be added
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
  { id: "1ft", label: "1 ft", priceInCents: 1500 }, // $15.00
  { id: "3ft", label: "3 ft", priceInCents: 3500 }, // $35.00
  { id: "4ft", label: "4 ft", priceInCents: 4500 }, // $45.00
  { id: "5ft", label: "5 ft", priceInCents: 5500 }, // $55.00
  { id: "10ft", label: "10 ft", priceInCents: 9500 }, // $95.00
]

// =================================================================================
// GARLANDS - Sorted by similarity (grouped by flower type/color)
// =================================================================================
export const garlands: Garland[] = [
  // ---------------------------------------------------------------------------------
  // RED ROSE GARLANDS
  // ---------------------------------------------------------------------------------
  {
    id: "deep-red-rose",
    name: "Deep Red Rose Garland",
    description: "Rich deep red roses with white baby's breath accents",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2012.10.19%20PM-0P4WiWuw544Yqmb4bhWquTsy1peyRe.jpeg",
    sizes: defaultSizes,
    availableExtras: ["pearls", "gold-beads", "silver-beads"],
  },
  {
    id: "red-rose-single",
    name: "Red Rose Garland",
    description: "Classic red roses with white baby's breath",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.39.38%20PM-L0ol5lqqa3qujRPeAmOWcEsaBebUp6.jpeg",
    sizes: defaultSizes,
    availableExtras: ["pearls", "gold-beads", "silver-beads"],
  },
  {
    id: "red-rose-mum-single",
    name: "Red Rose & Chrysanthemum Garland",
    description: "Classic red roses with white chrysanthemums and baby's breath",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2012.25.29%20PM-BrotXTC3MD9LrXUq9KIELtVD1Gt0Ou.jpeg",
    sizes: defaultSizes,
    availableExtras: ["pearls", "gold-beads", "silver-beads", "crystals"],
  },
  {
    id: "red-rose-mum-double",
    name: "Red Rose & Mum Double Garland",
    description: "Matching pair of red roses with white chrysanthemums",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2012.25.29%20PM%20%281%29-IXPyaYihsK7cNnP0loLbSTtC24PsxT.jpeg",
    sizes: defaultSizes,
    availableExtras: ["pearls", "gold-beads", "silver-beads", "crystals"],
  },
  {
    id: "red-white-carnation",
    name: "Red & White Carnation Garland",
    description: "Classic combination of red and white carnations",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.40.57%20PM-XFSO1cFLXVoMRaeF3WnlK0nOKhg0DW.jpeg",
    sizes: defaultSizes,
    availableExtras: ["pearls", "gold-beads", "silver-beads"],
  },
  {
    id: "red-pink-daisy",
    name: "Red & Pink Rose with Daisy Garland",
    description: "Vibrant red-pink roses with white daisies and baby's breath",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.26%20PM-CAuwPXGjdK87gqWw3MkSYJM8YJCHsC.jpeg",
    sizes: defaultSizes,
    availableExtras: ["pearls", "gold-beads", "crystals"],
  },

  // ---------------------------------------------------------------------------------
  // PINK ROSE GARLANDS
  // ---------------------------------------------------------------------------------
  {
    id: "hot-pink-rose",
    name: "Hot Pink Rose Garland",
    description: "Vibrant hot pink roses with white baby's breath",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2012.11.59%20PM-V7u5tO8KdeuQkishWKRquDsGcICyu4.jpeg",
    sizes: defaultSizes,
    availableExtras: ["pearls", "gold-beads", "silver-beads", "crystals"],
  },
  {
    id: "pink-rose-pair",
    name: "Pink Rose Double Garland",
    description: "Matching pair of pink rose garlands with baby's breath",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.11%20PM-cbAzsebfmJ05dYr6ZwI0006CinyMCl.jpeg",
    sizes: defaultSizes,
    availableExtras: ["pearls", "gold-beads", "crystals"],
  },
  {
    id: "pink-rose-simple",
    name: "Simple Pink Rose Garland",
    description: "Soft pink roses with baby's breath for a delicate look",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.17%20PM-MQ9sjle9JBqQFGGxmgUW0qLX09IrXk.jpeg",
    sizes: defaultSizes,
    availableExtras: ["pearls", "crystals", "ribbons"],
  },
  {
    id: "pink-rose-daisy",
    name: "Pink Rose & Daisy Garland",
    description: "Elegant pink roses with white daisies and baby's breath",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.16%20PM%20%281%29-Bw2pkgn4VjDqsaqepDFzSeS5Z9a3Xo.jpeg",
    sizes: defaultSizes,
    availableExtras: ["pearls", "gold-beads", "silver-beads", "crystals"],
  },
  {
    id: "coral-rose-mum",
    name: "Coral Rose & Chrysanthemum Garland",
    description: "Coral pink roses with white chrysanthemums and baby's breath",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2012.26.24%20PM-98tS3cAG1QbQknFBMId3DTrci6RUWQ.jpeg",
    sizes: defaultSizes,
    availableExtras: ["pearls", "gold-beads", "silver-beads", "crystals"],
  },
  {
    id: "pastel-rose-mix",
    name: "Pastel Rose Mix Garland",
    description: "Delicate light pink and cream roses with baby's breath",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2012.26.46%20PM-7Z6d4bL3A5NRAYWcEiD1EIeIOHwdvh.jpeg",
    sizes: defaultSizes,
    availableExtras: ["pearls", "silver-beads", "crystals", "ribbons"],
  },
  {
    id: "pink-white-alternating",
    name: "Pink & White Rose Garland",
    description: "Alternating pink and white roses with baby's breath",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2012.09.42%20PM-DmjfhwkBvaaZmG3FJVZOceWA3qC8oc.jpeg",
    sizes: defaultSizes,
    availableExtras: ["pearls", "silver-beads", "crystals", "ribbons"],
  },
  {
    id: "white-mum-pink-rose",
    name: "White Mum & Pink Rose Garland",
    description: "White chrysanthemums with pink roses and baby's breath",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.25%20PM-6mmHwrRMo7GnrMH5X0szTjxpD3Fmma.jpeg",
    sizes: defaultSizes,
    availableExtras: ["pearls", "gold-beads", "silver-beads", "crystals"],
  },

  // ---------------------------------------------------------------------------------
  // WHITE GARLANDS
  // ---------------------------------------------------------------------------------
  {
    id: "white-carnation",
    name: "White Carnation Garland",
    description: "Pure white carnations with elegant baby's breath accents",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.15%20PM%20%281%29-AkiDUV6utmZfr53AgCSba0Kf0KaXcl.jpeg",
    sizes: defaultSizes,
    availableExtras: ["pearls", "silver-beads", "crystals"],
  },
  {
    id: "white-carnation-full",
    name: "Full White Carnation Garland",
    description: "Lush white carnations with delicate baby's breath throughout",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2012.13.05%20PM-VKpkvEX0TwwFaFJy4Fs7W4iiFNEmdt.jpeg",
    sizes: defaultSizes,
    availableExtras: ["pearls", "silver-beads", "crystals"],
  },
  {
    id: "white-elaborate",
    name: "Elaborate White Garland",
    description: "Luxurious white roses and carnations with baby's breath",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.16%20PM%20%282%29-0tdX9cj8M0dijC9D51KgTJkRk8udoF.jpeg",
    sizes: [
      { id: "3ft", label: "3 ft", priceInCents: 4500 },
      { id: "4ft", label: "4 ft", priceInCents: 5500 },
      { id: "5ft", label: "5 ft", priceInCents: 6500 },
      { id: "10ft", label: "10 ft", priceInCents: 11500 },
    ],
    availableExtras: ["pearls", "gold-beads", "silver-beads", "crystals", "extra-flowers"],
  },
  {
    id: "white-orchid-rose",
    name: "White Orchid & Rose Garland",
    description: "White orchids paired with soft pink roses",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.12%20PM-FCZ2vPuuE1kV6soqckzYBp95mStKmC.jpeg",
    sizes: defaultSizes,
    availableExtras: ["pearls", "silver-beads", "crystals", "ribbons"],
  },

  // ---------------------------------------------------------------------------------
  // LOTUS GARLANDS
  // ---------------------------------------------------------------------------------
  {
    id: "lotus-single",
    name: "Single Lotus Garland",
    description: "Elegant single strand pink lotus with baby's breath",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.13%20PM-5VAYObIlZpEhHzhQFAduxTrbzBq5Ku.jpeg",
    sizes: defaultSizes,
    availableExtras: ["pearls", "gold-beads", "crystals"],
  },
  {
    id: "pink-lotus-triple",
    name: "Pink Lotus Garland",
    description: "Beautiful pink lotus flowers with delicate baby's breath",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.16%20PM%20%283%29-dDU0TQ60HapGnV4a5sUTGIKDVsQDhV.jpeg",
    sizes: defaultSizes,
    availableExtras: ["pearls", "gold-beads", "crystals"],
  },
  {
    id: "lotus-baby-breath",
    name: "Lotus & Baby's Breath Garland",
    description: "Pink lotus flowers with abundant baby's breath sections",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2012.10.55%20PM-gkiqzpfGLBlIEU5OeKM2ZOuuvYWbm2.jpeg",
    sizes: defaultSizes,
    availableExtras: ["pearls", "gold-beads", "crystals"],
  },
  {
    id: "lotus-ushape",
    name: "Lotus U-Shape Garland",
    description: "Elegant lotus flowers with baby's breath in classic U-shape design",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2012.24.17%20PM-OhjJOZHUocCwe77QKKAc4HQyz8lUZ7.jpeg",
    sizes: defaultSizes,
    availableExtras: ["pearls", "gold-beads", "crystals"],
  },

  // ---------------------------------------------------------------------------------
  // WEDDING / TRADITIONAL VARMALAS
  // ---------------------------------------------------------------------------------
  {
    id: "traditional-wedding",
    name: "Traditional Wedding Varmala",
    description: "Classic red rose petal wedding garland with golden flowers",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.15%20PM-kVpNR74JlAHHD3gbNDpU6tvdaZcBoU.jpeg",
    sizes: [
      { id: "3ft", label: "3 ft", priceInCents: 5500 },
      { id: "4ft", label: "4 ft", priceInCents: 7500 },
      { id: "5ft", label: "5 ft", priceInCents: 9500 },
      { id: "10ft", label: "10 ft", priceInCents: 15000 },
    ],
    availableExtras: ["gold-beads", "crystals", "extra-flowers"],
  },
  {
    id: "traditional-wedding-couple",
    name: "Couple Wedding Varmala Set",
    description: "Matching bride and groom wedding garlands with jasmine",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.40.24%20PM-6UvjBY0Z0w2vJ9T8nv2bWe4sEyxQFH.jpeg",
    sizes: [
      { id: "3ft", label: "3 ft (Set of 2)", priceInCents: 12000 },
      { id: "4ft", label: "4 ft (Set of 2)", priceInCents: 15000 },
      { id: "5ft", label: "5 ft (Set of 2)", priceInCents: 18000 },
    ],
    availableExtras: ["gold-beads", "crystals", "extra-flowers"],
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
