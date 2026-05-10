import Image from "next/image"

export function HairAccessoriesCollage() {
  return (
    <div className="absolute inset-0 grid grid-cols-4 grid-rows-2 gap-1">
      {/* Hair_Accessories_014 - Large left panel */}
      <div className="relative col-span-2 row-span-2">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2012.44.19%20AM-TuE7NV5SCeRqPQHdS0cWLUMVqyKxfN.jpeg"
          alt="Three Layer Poolajada Veni"
          fill
          className="object-cover"
        />
      </div>
      {/* Hair_Accessories_008 - Top right */}
      <div className="relative">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-21%20at%2010.12.35%20PM-WIptFXF4teqzV72VilRUwcBOeIFFuZ.jpeg"
          alt="Traditional Hair Veni"
          fill
          className="object-cover"
        />
      </div>
      {/* Hair_Accessories_004 - Top far right */}
      <div className="relative">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-21%20at%2010.17.29%20PM-2D5tipAs3sRQ75dBGKLncpYpvN0M8E.jpeg"
          alt="Hair Accessory with Flowers"
          fill
          className="object-cover"
        />
      </div>
      {/* Hair_Accessories_005 - Bottom right */}
      <div className="relative">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-21%20at%2010.18.54%20PM-X2ZHlnqJlIRGFlZ2rTFMZ0Ll1LFLZP.jpeg"
          alt="Traditional Flower Veni"
          fill
          className="object-cover"
        />
      </div>
      {/* Hair_Accessories_006 - Bottom far right */}
      <div className="relative">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-21%20at%2010.12.23%20PM-m3vXIZyXjAHwFI8es0FWWR4drNI0kR.jpeg"
          alt="Jasmine Hair Garland"
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}
