import Image from "next/image"

const garlandImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2012.44.18%20AM%20%284%29-5eqzxWOFqQSmLSUrhBdvbPiEGPDPGc.jpeg",
    alt: "Cream Jasmine with Baby's Breath Garland",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2012.44.12%20AM-DpHWd0jduD3thAxkLsIiMkJjYnyJsT.jpeg",
    alt: "White Carnations with Red Roses Garland",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-29%20at%209.46.06%20PM%20%281%29-DmsRYuiqrwbqJBDgA5hlh0ofJpg55Z.jpeg",
    alt: "Pink Lotus and Baby's Breath Double Garland",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.48.26%20PM-GvnZbx7l2HPTlDcRz4L8pUlFgdiAli.jpeg",
    alt: "Carnations, Roses, and Baby's Breath Garland",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.40.24%20PM-68AsyoEQaQ8YfMIsWDsra1vtiM1xDe.jpeg",
    alt: "Rose Petals Garland",
  },
]

export function WeddingGarlandsCollage() {
  return (
    <div className="absolute inset-0 grid grid-cols-4 grid-rows-2 gap-0.5">
      {/* Large left panel - WeddingGarland_034 */}
      <div className="relative col-span-2 row-span-2">
        <Image
          src={garlandImages[0].src}
          alt={garlandImages[0].alt}
          fill
          className="object-cover"
        />
      </div>
      {/* Top right - WeddingGarland_036 */}
      <div className="relative">
        <Image
          src={garlandImages[1].src}
          alt={garlandImages[1].alt}
          fill
          className="object-cover"
        />
      </div>
      {/* Top far right - WeddingGarland_028 */}
      <div className="relative">
        <Image
          src={garlandImages[2].src}
          alt={garlandImages[2].alt}
          fill
          className="object-cover"
        />
      </div>
      {/* Bottom right - WeddingGarland_003 */}
      <div className="relative">
        <Image
          src={garlandImages[3].src}
          alt={garlandImages[3].alt}
          fill
          className="object-cover"
        />
      </div>
      {/* Bottom far right - WeddingGarland_005 */}
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
