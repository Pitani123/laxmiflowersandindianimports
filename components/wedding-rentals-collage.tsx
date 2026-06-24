import Image from "next/image"

export function WeddingRentalsCollage() {
  return (
    <div className="absolute inset-0 grid grid-cols-4 grid-rows-2 gap-1">
      {/* Kashi Yatra Set - Large left panel */}
      <div className="relative col-span-2 row-span-2">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kashi%20yatra%20set-0AyQNDakKZBOFdqw5FptkHRPL9M3Hv.jpeg"
          alt="Kashi Yatra Set"
          fill
          className="object-cover"
        />
      </div>
      {/* Rings Binde - Top right */}
      <div className="relative">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rings%20Binde-oVCMIfYIGWlx9URLF9GOdgzqtLF903.jpeg"
          alt="Rings Binde"
          fill
          className="object-cover"
        />
      </div>
      {/* Bowls - Top far right */}
      <div className="relative">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bowls-Z0f0bqcZM8bgHKoz3m6C5yuzIJNPY2.jpeg"
          alt="Decorative Bowls"
          fill
          className="object-cover"
        />
      </div>
      {/* Sana Rayi 1 - Bottom right */}
      <div className="relative">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sana%20rayi-1-7LV2ZgvAKPvXXuIUeSk7PWGqScZXSO.jpeg"
          alt="Sana Rayi"
          fill
          className="object-cover"
        />
      </div>
      {/* Kanyadanam Set - Bottom far right */}
      <div className="relative">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kanyadanam%20set2-cSttHcapOGiVzibv2t9iSLJHUt6dhl.jpeg"
          alt="Kanyadanam Set"
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}
