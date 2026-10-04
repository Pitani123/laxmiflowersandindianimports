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
    name: "Pearl and Gold Rings Binde",
    description:
      "Beautifully embellished pearl and gold binde decorated with intricate beadwork, pearl detailing, and an ornate statement-vase design, used for wedding rituals and elegant pooja or event décor.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rings%20Binde-oVCMIfYIGWlx9URLF9GOdgzqtLF903.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-30%20at%206.21.03%20PM%20%283%29-IFKri0FmSzoY6nOQ2Usyp8b3fur2ni.jpeg",
    ],
    pricePerDayInCents: 4500, // $45.00 per day
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
      "Decorative Kanyadanam set featuring a tumbler and plate with vibrant red and gold meenakari patterns, plus an ornate red, gold, and green pooja thali with a matching decorated vessel for the wedding ritual and traditional ceremonies.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kanyadanam%20set2-cSttHcapOGiVzibv2t9iSLJHUt6dhl.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-30%20at%206.21.03%20PM%20%282%29-REpHplc9ii6FD6i7f07IISOAbdi9ZA.jpeg",
    ],
    pricePerDayInCents: 3000, // $30.00 per day
  },
  {
    id: "rental-010",
    name: "Yellow Pooja Mandap Table",
    description: "Bright yellow decorative pooja table with tiered shelves and traditional auspicious details.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-30%20at%206.20.36%20PM-3E7hvZhhQQzRjjdHBweWHMl6OidCC9.jpeg"],
    pricePerDayInCents: 0,
  },
  {
    id: "rental-011",
    name: "Decorative Meenakari Baskets",
    description: "Pair of richly patterned red and gold decorative baskets with detailed gold and maroon lattice work, perfect for wedding ceremonies, traditional arrangements, and cultural event displays.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-30%20at%206.21.03%20PM%20%281%29-YCZp3Ih5x2unhccTHRGOB0TS5SjaUO.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bowls-Z0f0bqcZM8bgHKoz3m6C5yuzIJNPY2.jpeg",
    ],
    pricePerDayInCents: 0,
  },
  {
    id: "rental-014",
    name: "Krishna Brass Idol",
    description: "Colorful embellished Krishna statue with flute, ideal for cultural celebrations and ceremonial décor.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-30%20at%206.29.15%20PM%20%281%29-oLeAR4hyeaHrFkHlnAUO6Eh5abjZS1.jpeg"],
    pricePerDayInCents: 0,
  },
  {
    id: "rental-015",
    name: "Artificial Tropical Plants",
    description: "Pair of tall artificial tropical plants in textured gold planters for event and venue décor.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-30%20at%206.29.14%20PM-Fg4d45HfQsmb5t2KNL7ynPHT38ZyKb.jpeg"],
    pricePerDayInCents: 0,
  },
  {
    id: "rental-016",
    name: "Kundulu Brass Oil Lamps",
    description: "Pair of 32-inch traditional brass kundulu oil lamps; smaller size also available.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-30%20at%207.17.04%20PM-VHOdtOHntckbq16XJNFD9LeqMJgjEl.jpeg"],
    pricePerDayInCents: 0,
  },
  {
    id: "rental-017",
    name: "Floral Arrangement Stands",
    description: "Pair of rose-gold square floral stands with coordinated artificial flower arrangements.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-30%20at%206.29.15%20PM-8avRxgbWcWkHAYmtygca4153DawDZ1.jpeg"],
    pricePerDayInCents: 0,
  },
  {
    id: "rental-018",
    name: "Ganesh Idol (2 Feet)",
    description: "Two-foot decorative Ganesh idol with an ornate silver finish for ceremonial and event décor.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-30%20at%207.17.19%20PM-8aeLMsvzE2qDP4ii6XBxcpY8oMsnqR.jpeg"],
    pricePerDayInCents: 0,
  },
  {
    id: "rental-019",
    name: "Rocket Bounce House",
    description: "Colorful rocket-themed inflatable bounce house with an enclosed jumping area and front slide, perfect for children's parties and outdoor celebrations.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-04%20at%202.56.12%20PM-JMCiX0A966GsbFftvdKKjSEEyus013.jpeg"],
    pricePerDayInCents: 0,
  },
]
