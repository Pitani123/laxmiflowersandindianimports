import Image from "next/image"

const weddingImages = [
  {
    src: "/images/wedding/marriage-3.jpg",
    alt: "Wedding couple exchanging rings wearing pink lotus garlands",
  },
  {
    src: "/images/wedding/marriage-1.jpg",
    alt: "Wedding couple in gold attire with white rose and jasmine garlands",
  },
  {
    src: "/images/wedding/marriage-4.jpg",
    alt: "Wedding couple with red and white rose garlands at the temple",
  },
  {
    src: "/images/wedding/marriage-2.jpg",
    alt: "Wedding couple seated on a decorated mandap stage",
  },
]

export function WeddingCollage() {
  return (
    <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-0.5">
      {weddingImages.map((image) => (
        <div key={image.src} className="relative">
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  )
}
