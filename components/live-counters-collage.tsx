import Image from "next/image"

const counterImages = [
  {
    // Live Floral Bloom Bar
    src: "/images/live-floral-bloom-bar.jpg",
    alt: "Live Floral Bloom Bar",
  },
  {
    // Live Chaat & Pani Puri
    src: "/images/live-chaat-pani-puri.jpg",
    alt: "Live Chaat & Pani Puri Counter",
  },
  {
    // Live Sugarcane Juice
    src: "/images/live-sugarcane-juice.jpg",
    alt: "Live Sugarcane Juice Counter",
  },
]

export function LiveCountersCollage() {
  return (
    <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-0.5">
      {/* Large left panel - Floral Bloom Bar */}
      <div className="relative col-span-2 row-span-2">
        <Image src={counterImages[0].src} alt={counterImages[0].alt} fill className="object-cover" />
      </div>
      {/* Top right - Chaat & Pani Puri */}
      <div className="relative">
        <Image src={counterImages[1].src} alt={counterImages[1].alt} fill className="object-cover" />
      </div>
      {/* Bottom right - Sugarcane Juice */}
      <div className="relative">
        <Image src={counterImages[2].src} alt={counterImages[2].alt} fill className="object-cover" />
      </div>
    </div>
  )
}
