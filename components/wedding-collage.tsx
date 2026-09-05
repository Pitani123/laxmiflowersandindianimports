import Image from "next/image"

export function WeddingCollage() {
  return (
    <div className="absolute inset-0">
      <Image
        src="/images/wedding/marriage-2.jpg"
        alt="South Indian wedding couple wearing red and white flower garlands under a floral wedding backdrop"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
        priority
      />
    </div>
  )
}
