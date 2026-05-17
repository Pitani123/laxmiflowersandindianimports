import Image from "next/image"

const poojaGarlandImages = [
  {
    // PoojaGarland_003 - Yellow Roses with Red Rose Accents
    src: "/images/pooja-garlands/pooja-garland-003.jpg",
    alt: "Yellow Roses Pooja Garland with Red Rose Accents",
  },
  {
    // PoojaGarland_004 - White Jasmine with Golden Rose Petals
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-14%20at%2010.10.46%20PM%20%282%29-vIWkaxPNQAhARffrwtfn3oX4xmeaka.jpeg",
    alt: "White Jasmine Garland with Golden Rose Petal Accents",
  },
]

export function PoojaGarlandsCollage() {
  return (
    <div className="absolute inset-0 grid grid-cols-2 gap-0.5">
      {/* Left panel - PoojaGarland_003 Yellow Roses with Red Accents */}
      <div className="relative">
        <Image
          src={poojaGarlandImages[0].src}
          alt={poojaGarlandImages[0].alt}
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Right panel - PoojaGarland_004 White Jasmine with Golden Rose Petals */}
      <div className="relative">
        <Image
          src={poojaGarlandImages[1].src}
          alt={poojaGarlandImages[1].alt}
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
}
