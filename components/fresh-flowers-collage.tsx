import Image from "next/image"

const flowerImages = [
  {
    // Jasmine String
    src: "/images/loose-flowers/jasmine-string.jpg",
    alt: "Jasmine String",
  },
  {
    // Chamanthi - Yellow
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Chamanthi%20-%20Yellow-0EVckmwMtA0ccXmHITmfIEYKmPVOGs.jpeg",
    alt: "Chamanthi - Yellow",
  },
  {
    // Arali
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Arali-3PqnZqfqn12cnzt7BdDsEfI8y8Bjya.jpeg",
    alt: "Arali Flowers",
  },
  {
    // Chamanthi - White
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Chamanthi%20-%20White-s7h9jArOz1xdoE407EaHbhd8J0D1Ph.jpeg",
    alt: "Chamanthi - White",
  },
  {
    // Marigold String with Mango Leaves
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Marigold%20String%20with%20Mango%20Leaves-D8v8TbSp6eKRUiqkTxLHt8vsh9cv7a.jpeg",
    alt: "Marigold String with Mango Leaves",
  },
  {
    // Marigold String
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Marigold%20String-XImOEk20sMWhy6708HWh4F5fZB6CoC.jpeg",
    alt: "Marigold String",
  },
]

export function FreshFlowersCollage() {
  return (
    <div className="absolute inset-0 grid grid-cols-4 grid-rows-2 gap-0.5">
      {/* Large left panel - Jasmine String */}
      <div className="relative col-span-2 row-span-2">
        <Image
          src={flowerImages[0].src}
          alt={flowerImages[0].alt}
          fill
          className="object-cover"
        />
      </div>
      {/* Top right - Chamanthi Yellow */}
      <div className="relative">
        <Image
          src={flowerImages[1].src}
          alt={flowerImages[1].alt}
          fill
          className="object-cover"
        />
      </div>
      {/* Top far right - Arali */}
      <div className="relative">
        <Image
          src={flowerImages[2].src}
          alt={flowerImages[2].alt}
          fill
          className="object-cover"
        />
      </div>
      {/* Bottom right - Chamanthi White */}
      <div className="relative">
        <Image
          src={flowerImages[3].src}
          alt={flowerImages[3].alt}
          fill
          className="object-cover"
        />
      </div>
      {/* Bottom far right - Marigold String with Mango Leaves */}
      <div className="relative">
        <Image
          src={flowerImages[4].src}
          alt={flowerImages[4].alt}
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}
