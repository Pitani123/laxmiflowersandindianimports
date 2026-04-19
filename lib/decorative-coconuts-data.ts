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
// DECORATIVE COCONUTS - Named as DecorativeCoconuts_001, DecorativeCoconuts_002, etc.
// =================================================================================
export const decorativeCoconuts: DecorativeCoconut[] = [
  {
    id: "decorative-coconut-001",
    name: "DecorativeCoconuts_001",
    description: "Beautifully hand-decorated coconut with intricate red heart center, gold beadwork, pearl embellishments, and traditional Telugu script. Perfect for wedding ceremonies and religious rituals.",
    images: ["/images/products/decorative-coconut-1.jpg"],
    priceInCents: 5000, // $50.00
    customizable: true,
  },
  {
    id: "decorative-coconut-002",
    name: "DecorativeCoconuts_002",
    description: "Elegant decorated coconut featuring a stunning red lotus flower made with sparkling crystals on a silver crystal background. Adorned with golden top and pearl accents. Ideal for pujas and special occasions.",
    images: ["/images/products/decorative-coconut-2.jpg"],
    priceInCents: 5000, // $50.00
    customizable: true,
  },
  {
    id: "decorative-coconut-003",
    name: "DecorativeCoconuts_003",
    description: "Exquisite green coconut with red heart center decorated with gold and pearl beadwork, rhinestone embellishments, and Telugu blessing text. Traditional design with golden decorative top.",
    images: ["/images/products/decorative-coconut-3.jpg"],
    priceInCents: 5000, // $50.00
    customizable: true,
  },
  {
    id: "decorative-coconut-004",
    name: "DecorativeCoconuts_004",
    description: "Vibrant green coconut with personalized initials in gold crystals. Features elaborate Ganesha medallion surrounded by golden and clear crystal sunburst pattern with pearl embellishments.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%204.35.20%20PM-7LL5qBIo35DTtsn74AIib9S2CXlhba.jpeg"],
    priceInCents: 6500, // $65.00
    customizable: true,
  },
  {
    id: "decorative-coconut-005",
    name: "DecorativeCoconuts_005",
    description: "Elegant green coconut with beautiful Ganesha medallion centerpiece surrounded by pearl and crystal embellishments in a circular pattern. Perfect for traditional wedding ceremonies.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%204.35.04%20PM-vCPPivoLUFvpilgi9XUCQYwaRhBSVC.jpeg"],
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
