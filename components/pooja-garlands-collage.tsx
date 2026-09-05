import Image from "next/image"

const poojaGarlandImage = {
  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-12%20at%203.17.07%20PM%20%281%29-90f6rWtTdXXEhyzbCXawBpkCFnwWYI.jpeg",
  alt: "Colorful floral decoration surrounding Hindu deities for a pooja ceremony",
}

export function PoojaGarlandsCollage() {
  return (
    <div className="absolute inset-0">
      <Image
        src={poojaGarlandImage.src}
        alt={poojaGarlandImage.alt}
        fill
        className="object-cover"
        priority
      />
    </div>
  )
}
