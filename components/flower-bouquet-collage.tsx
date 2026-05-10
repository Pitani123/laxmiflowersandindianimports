import Image from "next/image"

const bouquetImages = [
  {
    // Flower_Bouquet_002 - Large left panel
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-21%20at%2010.21.26%20PM%20%281%29-UMR1pm60R9XMY7mWGZ2tMdpDaQoeSg.jpeg",
    alt: "Flower Bouquet 002",
  },
  {
    // Flower_Bouquet_005 - Top right
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-21%20at%2010.21.25%20PM-qzDboTpo4wnLuzpzMyHFjk4pOYCJTl.jpeg",
    alt: "Flower Bouquet 005",
  },
  {
    // Flower_Bouquet_006 - Bottom left of right grid
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-21%20at%2010.21.24%20PM%20%282%29-JidXjdVOAvLwnwJGBV7OlVsw6uFSy5.jpeg",
    alt: "Flower Bouquet 006",
  },
  {
    // Flower_Bouquet_007 - Bottom right
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-21%20at%2010.21.24%20PM%20%283%29-gNj4znO3zmtpPTvdcWKR2s4rfpwM1b.jpeg",
    alt: "Flower Bouquet 007",
  },
]

export function FlowerBouquetCollage() {
  return (
    <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-0.5">
      {/* Large left panel - Flower_Bouquet_002 */}
      <div className="relative col-span-2 row-span-2">
        <Image
          src={bouquetImages[0].src}
          alt={bouquetImages[0].alt}
          fill
          className="object-cover"
        />
      </div>
      {/* Top right - Flower_Bouquet_005 */}
      <div className="relative">
        <Image
          src={bouquetImages[1].src}
          alt={bouquetImages[1].alt}
          fill
          className="object-cover"
        />
      </div>
      {/* Bottom right top - Flower_Bouquet_006 */}
      <div className="relative row-span-1 grid grid-cols-2 gap-0.5">
        <div className="relative">
          <Image
            src={bouquetImages[2].src}
            alt={bouquetImages[2].alt}
            fill
            className="object-cover"
          />
        </div>
        {/* Bottom right bottom - Flower_Bouquet_007 */}
        <div className="relative">
          <Image
            src={bouquetImages[3].src}
            alt={bouquetImages[3].alt}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}
