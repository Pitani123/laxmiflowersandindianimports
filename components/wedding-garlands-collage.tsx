import Image from "next/image"

const garlandImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.26%20PM-GvnZbx7l2HPTlDcRz4L8pUlFgdiAli.jpeg",
    alt: "WeddingGarland_003 - Carnations, Roses, and Baby's Breath Garland",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%202.49.05%20PM-P9f7xipVyz0MsqKU8qp4igjfeWEwyk.jpeg",
    alt: "WeddingGarland_019 - Roses and Baby's Breath Garland",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%202.49.05%20PM%20%283%29-mp4CxRYuSbIPUKYRqoaLMa7Mqgia9X.jpeg",
    alt: "WeddingGarland_020 - Roses and Baby's Breath Garland",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2012.44.18%20AM%20%284%29-5eqzxWOFqQSmLSUrhBdvbPiEGPDPGc.jpeg",
    alt: "WeddingGarland_023 - White Jasmine and Baby's Breath Garland with Pink Rose Accents",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-29%20at%209.44.38%20PM%20%283%29-i1gmWws6BoBwLwNmTIytZqjLn517GH.jpeg",
    alt: "WeddingGarland_024 - Pink and Red Roses with Baby's Breath Double Garland",
  },
]

export function WeddingGarlandsCollage() {
  return (
    <div className="absolute inset-0 grid grid-cols-4 grid-rows-2 gap-0.5">
      {/* Large left panel - WeddingGarland_003 */}
      <div className="relative col-span-2 row-span-2">
        <Image
          src={garlandImages[0].src}
          alt={garlandImages[0].alt}
          fill
          className="object-cover"
        />
      </div>
      {/* Top right - WeddingGarland_019 */}
      <div className="relative">
        <Image
          src={garlandImages[1].src}
          alt={garlandImages[1].alt}
          fill
          className="object-cover"
        />
      </div>
      {/* Top far right - WeddingGarland_020 */}
      <div className="relative">
        <Image
          src={garlandImages[2].src}
          alt={garlandImages[2].alt}
          fill
          className="object-cover"
        />
      </div>
      {/* Bottom right - WeddingGarland_023 */}
      <div className="relative">
        <Image
          src={garlandImages[3].src}
          alt={garlandImages[3].alt}
          fill
          className="object-cover"
        />
      </div>
      {/* Bottom far right - WeddingGarland_024 */}
      <div className="relative">
        <Image
          src={garlandImages[4].src}
          alt={garlandImages[4].alt}
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}
