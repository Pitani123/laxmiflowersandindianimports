import Image from "next/image"

const poojaGarlandImages = [
  {
    // PoojaGarland_004 - White Jasmine with Golden Rose Petals (main featured)
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-14%20at%2010.10.46%20PM%20%282%29-vIWkaxPNQAhARffrwtfn3oX4xmeaka.jpeg",
    alt: "White Jasmine Garland with Golden Rose Petal Accents",
  },
  {
    // PoojaGarland_001 - Red Button Roses with Jasmine
    src: "/images/pooja-garlands/pooja-garland-001.jpg",
    alt: "Red Button Roses Pooja Garland with White Jasmine",
  },
  {
    // PoojaGarland_002 - Red Roses with Tuberose
    src: "/images/pooja-garlands/pooja-garland-002.jpg",
    alt: "Red Roses Pooja Garland with White Tuberose",
  },
  {
    // PoojaGarland_003 - Yellow Roses with Red Rose Accents
    src: "/images/pooja-garlands/pooja-garland-003.jpg",
    alt: "Yellow Roses Pooja Garland with Red Rose Accents",
  },
]

export function PoojaGarlandsCollage() {
  return (
    <div className="absolute inset-0 grid grid-cols-4 grid-rows-2 gap-0.5">
      {/* Large left panel - PoojaGarland_004 White Jasmine with Golden Rose Petals */}
      <div className="relative col-span-2 row-span-2">
        <Image
          src={poojaGarlandImages[0].src}
          alt={poojaGarlandImages[0].alt}
          fill
          className="object-cover"
        />
      </div>
      {/* Top right - PoojaGarland_001 */}
      <div className="relative col-span-2">
        <Image
          src={poojaGarlandImages[1].src}
          alt={poojaGarlandImages[1].alt}
          fill
          className="object-cover"
        />
      </div>
      {/* Bottom middle - PoojaGarland_002 */}
      <div className="relative">
        <Image
          src={poojaGarlandImages[2].src}
          alt={poojaGarlandImages[2].alt}
          fill
          className="object-cover"
        />
      </div>
      {/* Bottom right - PoojaGarland_003 */}
      <div className="relative">
        <Image
          src={poojaGarlandImages[3].src}
          alt={poojaGarlandImages[3].alt}
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}
