import Image from "next/image"

export function WeddingCollage() {
  return (
    <div className="absolute inset-0">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MarriagePicture1-vAhSSQCdAPOkZqnkkMioDjIUh76HYB.jpeg"
        alt="South Indian wedding couple in traditional gold attire with white flower garlands under a floral mandap"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
        priority
      />
    </div>
  )
}
