// Decorative Coconuts Data - Edit this file to change product names, prices, and details
// =================================================================================

export interface DecorativeCoconut {
  id: string
  name: string // Change this to update the product name
  description: string
  images: string[] // Array of image URLs (supports multiple images)
  priceInCents: number // Price in cents (e.g., 5000 = $50.00)
  customizable: boolean // Whether colors/decorations can be customized
}

// =================================================================================
// DECORATIVE COCONUTS - Named as DecorativeCoconut_001, DecorativeCoconut_002, etc.
// =================================================================================
export const decorativeCoconuts: DecorativeCoconut[] = [
  {
    id: "decorative-coconut-001",
    name: "DecorativeCoconut_001",
    description: "Beautifully hand-decorated coconut with intricate red heart center, gold beadwork, pearl embellishments, and traditional Telugu script. Perfect for wedding ceremonies and religious rituals.",
    images: ["/images/products/decorative-coconut-1.jpg"],
    priceInCents: 10000, // $50.00
    customizable: true,
  },
  {
    id: "decorative-coconut-002",
    name: "DecorativeCoconut_002",
    description: "Elegant decorated coconut featuring a stunning red lotus flower made with sparkling crystals on a silver crystal background. Adorned with golden top and pearl accents. Ideal for pujas and special occasions.",
    images: ["/images/products/decorative-coconut-2.jpg"],
    priceInCents: 12000, // $50.00
    customizable: true,
  },
  {
    id: "decorative-coconut-003",
    name: "DecorativeCoconut_003",
    description: "Exquisite green coconut with red heart center decorated with gold and pearl beadwork, rhinestone embellishments, and Telugu blessing text. Traditional design with golden decorative top.",
    images: ["/images/products/decorative-coconut-3.jpg"],
    priceInCents: 9500, // $50.00
    customizable: true,
  },
  {
    id: "decorative-coconut-004",
    name: "DecorativeCoconut_004",
    description: "Vibrant green coconut with personalized initials in gold crystals. Features elaborate Ganesha medallion surrounded by golden and clear crystal sunburst pattern with pearl embellishments.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%204.35.20%20PM-7LL5qBIo35DTtsn74AIib9S2CXlhba.jpeg"],
    priceInCents: 8500, // $65.00
    customizable: true,
  },
  {
    id: "decorative-coconut-005",
    name: "DecorativeCoconut_005",
    description: "Elegant green coconut with beautiful Ganesha medallion centerpiece surrounded by pearl and crystal embellishments in a circular pattern. Perfect for traditional wedding ceremonies.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%204.35.04%20PM-vCPPivoLUFvpilgi9XUCQYwaRhBSVC.jpeg"],
    priceInCents: 9000, // $55.00
    customizable: true,
  },
  {
    id: "decorative-coconut-006",
    name: "DecorativeCoconut_006",
    description: "Stunning green coconut with traditional Namam/Tilak design featuring white pearl borders, red crystal center, gold rhinestone accents, and decorative golden crown top with ornate rope details.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-29%20at%209.44.38%20PM%20%281%29-o7EY9pPFJHVMLSF260OsOoub70pI0z.jpeg"],
    priceInCents: 8000, // $55.00
    customizable: true,
  },
  {
    id: "decorative-coconut-007",
    name: "DecorativeCoconut_007",
    description: "Elegant green coconut with traditional Tirumala Namam design in silver and red rhinestones, scattered crystal accents, and decorative topper with gold trim. Perfect for religious ceremonies.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2012.44.10%20AM-XwMclB6qTwnaO3Gynp1bbYhJNw4rJ6.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2012.44.18%20AM%20%283%29-hwrXFqRp23wSRbfryUCAQcJHFhJOlF.jpeg"
    ],
    priceInCents: 10000, // $55.00
    customizable: true,
  },
  {
    id: "decorative-coconut-008",
    name: "DecorativeCoconut_008",
    description: "Vibrant green coconut featuring Om symbol in lotus mandala design with red center, golden Om lettering, crystal rhinestone petals, and pearl flower accents with decorative pearl bow topper.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2012.44.18%20AM%20%282%29-WA52eN3TJDtzWIHY8Qe44OHi9SczgU.jpeg"],
    priceInCents: 9000, // $55.00
    customizable: true,
  },
  {
    id: "decorative-coconut-010",
    name: "DecorativeCoconut_010",
    description: "Beautiful green coconut with red heart centerpiece featuring Telugu script names, pearl and gold bead border with rhinestone accents, and decorative pearl bow topper. Ideal for personalized wedding gifts.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2012.44.17%20AM%20%282%29-CVcTvMSxN48Jzwolel50s0aGqYwiF8.jpeg"],
    priceInCents: 5500, // $55.00
    customizable: true,
  },
]

// Helper function to format price
export function formatPrice(priceInCents: number): string {
  return `$${(priceInCents / 100).toFixed(2)}`
}

// Helper function to get a decorative coconut by ID
export function getDecorativeCoconutById(id: string): DecorativeCoconut | undefined {
  return decorativeCoconuts.find(coconut => coconut.id === id)
}
