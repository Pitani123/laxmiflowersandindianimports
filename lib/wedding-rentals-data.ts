export interface WeddingRental {
  id: string
  name: string
  description: string
  images: string[]
  pricePerDayInCents: number
}

export const weddingRentals: WeddingRental[] = [
  {
    id: "rental-001",
    name: "Kashi Yatra Set",
    description:
      "Traditional Kashi Yatra set featuring a richly embroidered velvet umbrella, kamandalam, footwear, and accessories for the wedding ritual.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kashi%20yatra%20set-0AyQNDakKZBOFdqw5FptkHRPL9M3Hv.jpeg",
    ],
    pricePerDayInCents: 5000, // $50.00 per day
  },
  {
    id: "rental-002",
    name: "Sana Rayi 1",
    description:
      "Ornate decorative grinding stone (sana rayi) adorned with red, green, and white stone work in a traditional mandala design for wedding ceremonies.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sana%20rayi-1-7LV2ZgvAKPvXXuIUeSk7PWGqScZXSO.jpeg",
    ],
    pricePerDayInCents: 1000, // $10.00 per day
  },
  {
    id: "rental-003",
    name: "Sana Rayi 2",
    description:
      "Elegant decorative grinding stone (sana rayi) with a green base, pink crystal border, pearl detailing, and a velvet lotus centerpiece.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sana%20rayi-2-EEcMAomSAmILGfR39OiyryUbPFnhjr.jpeg",
    ],
    pricePerDayInCents: 1000, // $10.00 per day
  },
  {
    id: "rental-004",
    name: "Rings Binde",
    description:
      "Beautifully embellished pot (binde) decorated with intricate gold beadwork and pearl detailing, used to hold the rings during wedding rituals.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rings%20Binde-oVCMIfYIGWlx9URLF9GOdgzqtLF903.jpeg",
    ],
    pricePerDayInCents: 4500, // $45.00 per day
  },
  {
    id: "rental-005",
    name: "Bowls (Set of 2)",
    description:
      "Set of two ornate decorative bowls with detailed gold and maroon lattice work, perfect for traditional wedding ceremony arrangements.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bowls-Z0f0bqcZM8bgHKoz3m6C5yuzIJNPY2.jpeg",
    ],
    pricePerDayInCents: 3000, // $30.00 per day
  },
  {
    id: "rental-006",
    name: "Kanyadanam Set 1",
    description:
      "Polished silver-tone Kanyadanam set with a tumbler and plate, used in the sacred ritual of giving away the bride.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kanyadanam%20set1-IXLek7dD83KFlmus3OturaJPDJlSGD.jpeg",
    ],
    pricePerDayInCents: 3000, // $30.00 per day
  },
  {
    id: "rental-007",
    name: "Kanyadanam Set 2",
    description:
      "Decorative Kanyadanam set featuring a tumbler and plate with vibrant red and gold meenakari patterns for the wedding ritual.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kanyadanam%20set2-cSttHcapOGiVzibv2t9iSLJHUt6dhl.jpeg",
    ],
    pricePerDayInCents: 3000, // $30.00 per day
  },
]
