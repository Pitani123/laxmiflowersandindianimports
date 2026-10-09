// India Wedding Garlands - Made in India, 15-day advance order required

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

// India Wedding Garlands - Made in India, 15-day advance order required
export const indiaGarland_001_Sizes: GarlandSize[] = [
  { id: "4ft", label: "4 ft", priceInCents: 11000 }, // $110.00
]

export const indiaGarland_002_Sizes: GarlandSize[] = [
  { id: "4ft", label: "4 ft", priceInCents: 12000 }, // $120.00
]

export const indiaGarland_003_Sizes: GarlandSize[] = [
  { id: "4ft", label: "4 ft", priceInCents: 11500 }, // $115.00
]

export const indiaGarland_004_Sizes: GarlandSize[] = [
  { id: "4ft", label: "4 ft", priceInCents: 12500 }, // $125.00
]

export const indiaGarland_005_Sizes: GarlandSize[] = [
  { id: "4ft", label: "4 ft", priceInCents: 13000 }, // $130.00
]

export const indiaGarland_006_Sizes: GarlandSize[] = [
  { id: "4ft", label: "4 ft", priceInCents: 12000 }, // $120.00
]

export const indiaGarland_007_Sizes: GarlandSize[] = [
  { id: "4ft", label: "4 ft", priceInCents: 11500 }, // $115.00
]

export const indiaGarland_008_Sizes: GarlandSize[] = [
  { id: "4ft", label: "4 ft", priceInCents: 12500 }, // $125.00
]

export const indiaGarland_009_Sizes: GarlandSize[] = [
  { id: "4ft", label: "4 ft", priceInCents: 13000 }, // $130.00
]

export const indiaGarland_010_Sizes: GarlandSize[] = [
  { id: "4ft", label: "4 ft", priceInCents: 12000 }, // $120.00
]


export const indiaWeddingGarlands: Garland[] = [
  {
    id: "india-garland-001",
    name: "IndiaWeddingGarland_001",
    description: "Deep magenta floral garland with gold bands and hanging floral tassels",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-18%20at%207.11.48%20PM-SJGn14oJfjY7NJ9zRdQUffZjNkQWNk.jpeg"],
    sizes: indiaGarland_001_Sizes,
  },
  {
    id: "india-garland-002",
    name: "IndiaWeddingGarland_002",
    description: "Rich red lily garland with diagonal gold detailing and ornate tassels",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-18%20at%207.11.54%20PM%20%283%29-cAkOucZh4AeMdNIkpQ7weoui9cKl84.jpeg"],
    sizes: indiaGarland_002_Sizes,
  },
  {
    id: "india-garland-003",
    name: "IndiaWeddingGarland_003",
    description: "White and pink floral garland with traditional gold separators",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-18%20at%207.11.55%20PM%20%284%29-lVdKrzW52ogwlOHp2yXq6SbOJFnlox.jpeg"],
    sizes: indiaGarland_003_Sizes,
  },
  {
    id: "india-garland-004",
    name: "IndiaWeddingGarland_004",
    description: "Bright orange marigold-style garland with silver spiral accents",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-18%20at%207.11.54%20PM%20%281%29-0zyYfh0UeM1f61jnO6cDulzy1j5l5r.jpeg"],
    sizes: indiaGarland_004_Sizes,
  },
  {
    id: "india-garland-005",
    name: "IndiaWeddingGarland_005",
    description: "White and red floral garland with green bands and gold trim",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-18%20at%207.11.54%20PM-cCpB3pluqDq91u49W2ve6yGbpSqW27.jpeg"],
    sizes: indiaGarland_005_Sizes,
  },
  {
    id: "india-garland-006",
    name: "IndiaWeddingGarland_006",
    description: "White floral garland with pink flower sections and rose tassels",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-18%20at%207.11.55%20PM%20%282%29-HX3PDIOgdRvpOllOoN1uVBThGoy2HC.jpeg"],
    sizes: indiaGarland_006_Sizes,
  },
  {
    id: "india-garland-007",
    name: "IndiaWeddingGarland_007",
    description: "Pink and burgundy segmented floral garland with gold accents",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-18%20at%207.11.55%20PM-QVXQjNtEAeCY8Fn1GUWZ4Teqs5gwzd.jpeg"],
    sizes: indiaGarland_007_Sizes,
  },
  {
    id: "india-garland-008",
    name: "IndiaWeddingGarland_008",
    description: "Pink lotus and red petal garland with delicate floral accents",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-18%20at%207.11.53%20PM-3VkIBYEZb21MoKR5CYKaeVZo1P9tgP.jpeg"],
    sizes: indiaGarland_008_Sizes,
  },
  {
    id: "india-garland-009",
    name: "IndiaWeddingGarland_009",
    description: "White garland with scattered purple rose accents and floral tassels",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-18%20at%207.11.55%20PM%20%283%29-nxK0nmokuWysgcVAPXF7cGVbzPPhDq.jpeg"],
    sizes: indiaGarland_009_Sizes,
  },
  {
    id: "india-garland-010",
    name: "IndiaWeddingGarland_010",
    description: "White, yellow, and red floral garland with a yellow hanging tassel",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-18%20at%207.11.54%20PM%20%282%29-UkmaIQD42sbOTSjj44z6YdMBMkHhCf.jpeg"],
    sizes: indiaGarland_010_Sizes,
  },
  {
    id: "india-garland-011",
    name: "IndiaWeddingGarland_011",
    description: "Coral pink petal garland with baby's breath clusters and rose tassels",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-06%20at%204.02.26%20PM%20%281%29-2pB3rgLiPGLMdRrw1354N8maRexSmo.jpeg"],
    sizes: indiaGarland_001_Sizes,
  },
  {
    id: "india-garland-012",
    name: "IndiaWeddingGarland_012",
    description: "Pink rose and cream jasmine garland with pearl strands and rose tassels",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-06%20at%204.02.26%20PM-O132GDM1vH2Cpnr2RB1zecd56ZEXOu.jpeg"],
    sizes: indiaGarland_001_Sizes,
  },
  {
    id: "india-garland-013",
    name: "IndiaWeddingGarland_013",
    description: "Deep red petal garland with pink lotus flowers and baby's breath accents",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-06%20at%204.02.27%20PM%20%282%29-mUq8smADQ7FnnhiWtxKHc0eb0rc2YF.jpeg"],
    sizes: indiaGarland_001_Sizes,
  },
  {
    id: "india-garland-014",
    name: "IndiaWeddingGarland_014",
    description: "Red and cream floral garland with green accents and hanging rose tassels",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-06%20at%204.02.27%20PM%20%281%29-HYn2eaketYSN8N8EHFXA2gklAbJwuC.jpeg"],
    sizes: indiaGarland_001_Sizes,
  },
  {
    id: "india-garland-015",
    name: "IndiaWeddingGarland_015",
    description: "White jasmine garland with baby's breath clusters and floral hanging details",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-06%20at%204.02.27%20PM-patEd2N8O4mBWsKRbDxNtlZIj5CmLB.jpeg"],
    sizes: indiaGarland_001_Sizes,
  },
  {
    id: "india-garland-016",
    name: "IndiaWeddingGarland_016",
    description: "White jasmine and baby's breath garland with a lush green floral pattern",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-06%20at%204.11.55%20PM-pnSPEyrtBEcGe8ZjFo7bncIqmbye0N.jpeg"],
    sizes: indiaGarland_001_Sizes,
  },
  {
    id: "india-garland-017",
    name: "IndiaWeddingGarland_017",
    description: "White jasmine and green floral garland with a pearl loop and hanging floral tassel",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-06%20at%204.11.40%20PM-lv2TnTqPDOFuaR2PFZ5Y05tft2b30i.jpeg"],
    sizes: indiaGarland_001_Sizes,
  },
  {
    id: "india-garland-018",
    name: "IndiaWeddingGarland_018",
    description: "Elegant pink and white floral garland with repeating rose-toned sections, cream accents, gold separators, and red rose tassels.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-03%20at%204.29.48%20PM%20%281%29-HQnbVxUyYeRmY9qxek3E8XbwU9TEkt.jpeg"],
    sizes: indiaGarland_001_Sizes,
  },
  {
    id: "india-garland-019",
    name: "IndiaWeddingGarland_019",
    description: "White jasmine-style garland with rich purple floral bands, pale pink rose accents, pearl strands, and matching purple tassels.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-03%20at%204.29.48%20PM-zK9dioNJVlH7B0c9qW34sxY7fIF5so.jpeg"],
    sizes: indiaGarland_001_Sizes,
  },
  {
    id: "india-garland-020",
    name: "IndiaWeddingGarland_020",
    description: "Pink lotus-inspired floral garland with baby's breath clusters, magenta accents, pearl strands, and a layered floral tassel.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-03%20at%204.29.49%20PM-9BdSxhS6O7Ge31r8ZvXHfLPwfgtL4U.jpeg"],
    sizes: indiaGarland_001_Sizes,
  },
  {
    id: "india-garland-021",
    name: "IndiaWeddingGarland_021",
    description: "Colorful red, cream, yellow, and pink floral garland with decorative gold bands and multicolor rose tassels.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-03%20at%204.29.50%20PM-VDQkThYYaWBtpGMCZt2PBCkpyorKqi.jpeg"],
    sizes: indiaGarland_001_Sizes,
  },
  {
    id: "india-garland-022",
    name: "IndiaWeddingGarland_022",
    description: "White jasmine garland with alternating green floral bands and a pearl-strand finish with a green floral tassel.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-03%20at%204.29.54%20PM%20%281%29-DyQ85Fqlrrh07nPFdWIavOF4Xvtfok.jpeg"],
    sizes: indiaGarland_001_Sizes,
  },
  {
    id: "india-garland-023",
    name: "IndiaWeddingGarland_023",
    description: "White and green floral garland with alternating dense sections and a compact floral hanging tassel.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-03%20at%204.29.55%20PM-L2RoPF8eGpkHSrndR846DksIqblofy.jpeg"],
    sizes: indiaGarland_001_Sizes,
  },
  {
    id: "india-garland-024",
    name: "IndiaWeddingGarland_024",
    description: "Deep red floral garland with cream and green accent bands, gold detailing, and a red rose hanging tassel.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-03%20at%204.29.56%20PM-2PYF7BHJtV8yjpBc0JNujM987UIQsZ.jpeg"],
    sizes: indiaGarland_001_Sizes,
  },
  {
    id: "india-garland-025",
    name: "IndiaWeddingGarland_025",
    description: "Cream jasmine garland with bright orange floral sections, delicate white accents, red roses, pearl strands, and a red rose tassel.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-03%20at%204.29.57%20PM%20%281%29-5X7N437yOWnEOX7YCzz0Ys4tNFfhde.jpeg"],
    sizes: indiaGarland_001_Sizes,
  },
  {
    id: "india-garland-026",
    name: "IndiaWeddingGarland_026",
    description: "Rose Petals Garland",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.40.24%20PM-68AsyoEQaQ8YfMIsWDsra1vtiM1xDe.jpeg"],
    sizes: [{ id: "4ft", label: "4 ft", priceInCents: 10000 }, ],
  },
  {
    id: "india-garland-027",
    name: "IndiaWeddingGarland_027",
    description: "Jasmine and Rose Petal Double Garland with Gold Accents",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-14%20at%208.51.36%20PM-NulcMENf90OZMBjKVRY3IdxDrQCP8L.jpeg"],
    sizes: [{ id: "4ft", label: "4 ft", priceInCents: 11000 }, ],
  },
  {
    id: "india-garland-028",
    name: "IndiaWeddingGarland_028",
    description: "Classic Rose Petal Garland in Deep Pink",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-14%20at%2010.10.46%20PM%20%281%29-DmerghZu0PPTd5yU6vzs84taoQbM9t.jpeg"],
    sizes: [{ id: "4ft", label: "4 ft", priceInCents: 10000 }, ],
  },
  {
    id: "india-garland-029",
    name: "IndiaWeddingGarland_029",
    description: "Deep Pink Ruffled Rose Petal Garland with Baby's Breath Clusters",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WeddingGarland_042-VAG6xoEDsZOU0dgWYkLqxSw3pblr4e.jpeg"],
    sizes: [{ id: "4ft", label: "4 ft", priceInCents: 11500 }, ],
  },
  {
    id: "india-garland-030",
    name: "IndiaWeddingGarland_030",
    description: "Pink Lotus Petal Garland with Delicate Baby's Breath",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WeddingGarland_044-lS7MvhJmsKXNSW3JBtq4IgT7QTQOWy.jpeg"],
    sizes: [{ id: "4ft", label: "4 ft", priceInCents: 18000 }, ],
  },
  {
    id: "india-garland-031",
    name: "IndiaWeddingGarland_031",
    description: "Lush Baby's Breath Garland with Soft Pink Floral Accents",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WeddingGarland_045-VTl4Jc5yQ3L4OURuRgKmpdRgeFBLFV.jpeg"],
    sizes: [{ id: "4ft", label: "4 ft", priceInCents: 18000 }, ],
  },
  {
    id: "india-garland-032",
    name: "IndiaWeddingGarland_032",
    description: "Red and Magenta Petal Garland with Yellow Rose Accents and Cream Flower Bands",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WeddingGarland_046-ABkmpsGmykII4wUSZQiEyghSOjBGZ5.jpeg"],
    sizes: [{ id: "4ft", label: "4 ft", priceInCents: 12000 }, ],
  },
  {
    id: "india-garland-033",
    name: "IndiaWeddingGarland_033",
    description: "Cream Jasmine Garland with Baby's Breath Clusters and Gold Ribbon",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WeddingGarland_047-FnWN7yH16YpAjmLol6MWFTenOkammU.jpeg"],
    sizes: [{ id: "4ft", label: "4 ft", priceInCents: 12000 }, ],
  },
  {
    id: "india-garland-034",
    name: "IndiaWeddingGarland_034",
    description: "Red Rose Petal Garland with Baby's Breath Clusters and Gold Beaded Tassel",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WeddingGarland_051-KSZjlxcixPrDJrSBjHUJIcIwkBJczT.jpeg"],
    sizes: [{ id: "4ft", label: "4 ft", priceInCents: 12000 }, ],
  },
]

