import Image from "next/image"

const garlandImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%204.40.24%20PM-68AsyoEQaQ8YfMIsWDsra1vtiM1xDe.jpeg",
    alt: "IndiaWeddingGarland_001, a rose petal wedding garland",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2012.44.18%20AM%20%284%29-5eqzxWOFqQSmLSUrhBdvbPiEGPDPGc.jpeg",
    alt: "IndiaWeddingGarland_002, a white Lily and pink floral wedding garland",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-18%20at%207.11.55%20PM-QVXQjNtEAeCY8Fn1GUWZ4Teqs5gwzd.jpeg",
    alt: "IndiaWeddingGarland_009, a pink and burgundy wedding garland",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-18%20at%207.11.54%20PM%20%281%29-0zyYfh0UeM1f61jnO6cDulzy1j5l5r.jpeg",
    alt: "IndiaWeddingGarland_006, a bright orange marigold-style wedding garland",
  },
]

export function IndiaWeddingGarlandsCollage() {
  return (
    <div className="absolute inset-0 grid grid-cols-4 grid-rows-2 gap-0.5">
      <div className="relative col-span-2 row-span-2">
        <Image src={garlandImages[0].src} alt={garlandImages[0].alt} fill className="object-cover" priority />
      </div>
      <div className="relative">
        <Image src={garlandImages[1].src} alt={garlandImages[1].alt} fill className="object-cover" />
      </div>
      <div className="relative">
        <Image src={garlandImages[2].src} alt={garlandImages[2].alt} fill className="object-cover" />
      </div>
      <div className="relative">
        <Image src={garlandImages[3].src} alt={garlandImages[3].alt} fill className="object-cover" />
      </div>
      <div className="relative">
        <Image src={garlandImages[0].src} alt={garlandImages[0].alt} fill className="object-cover" />
      </div>
    </div>
  )
}
