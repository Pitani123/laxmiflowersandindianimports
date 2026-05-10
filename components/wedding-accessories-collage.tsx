import Image from "next/image"

const collageImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-29%20at%209.41.55%20PM%20%281%29-1pLnn3gO4RISA7RitjPMWuRwevu2ea.jpeg",
    alt: "GarikaMunthalu_001 - Traditional Decorated Clay Pots",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2012.44.15%20AM-vYJ3GzsMg6r9O1BXylLQjizjkimLWf.jpeg",
    alt: "GarikaMunthalu_009 - Golden Clay Pot with Green Leaf Design",
    className: "",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2012.44.09%20AM-oz8sUBVHywgtOqwXZZ0OS472DA6VeS.jpeg",
    alt: "GarikaMunthalu_010 - Maroon Clay Pot with Gold Accents",
    className: "",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%204.35.04%20PM%20%283%29-0Kdha6raJGXNFMhERMXddHPaWTWa13.jpeg",
    alt: "GarikaMunthalu_005 - Red Clay Pot with Pearl Chains",
    className: "",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%204.35.04%20PM%20%282%29-kYD4ou5FYideu95eSIQwlE0kEuCOOr.jpeg",
    alt: "GarikaMunthalu_006 - Deep Red Clay Pot with Green Crystals",
    className: "",
  },
]

export function WeddingAccessoriesCollage() {
  return (
    <div className="absolute inset-0 grid grid-cols-4 grid-rows-2 gap-1">
      {collageImages.map((image, index) => (
        <div key={index} className={`relative ${image.className}`}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority={index < 2}
          />
        </div>
      ))}
    </div>
  )
}
