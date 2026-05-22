"use client"

import Image from "next/image"

interface CollageImage {
  src: string
  alt: string
}

interface DecorativeCoconutCollageProps {
  images: CollageImage[]
  className?: string
}

export function DecorativeCoconutCollage({ images, className = "" }: DecorativeCoconutCollageProps) {
  // Ensure we have exactly 3 images for the collage
  const collageImages = images.slice(0, 3)
  
  if (collageImages.length < 3) {
    // Fallback to single image if not enough images
    return (
      <div className={`relative h-full w-full ${className}`}>
        <Image
          src={collageImages[0]?.src || "/images/placeholder.jpg"}
          alt={collageImages[0]?.alt || "Decorative Coconuts"}
          fill
          className="object-cover"
          priority
        />
      </div>
    )
  }

  return (
    <div className={`relative h-full w-full ${className}`}>
      {/* Grid layout for 3 images */}
      <div className="grid h-full w-full grid-cols-3 gap-1">
        {/* Image 1 - Left */}
        <div className="relative h-full overflow-hidden">
          <Image
            src={collageImages[0].src}
            alt={collageImages[0].alt}
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        
        {/* Image 2 - Center */}
        <div className="relative h-full overflow-hidden">
          <Image
            src={collageImages[1].src}
            alt={collageImages[1].alt}
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        
        {/* Image 3 - Right */}
        <div className="relative h-full overflow-hidden">
          <Image
            src={collageImages[2].src}
            alt={collageImages[2].alt}
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </div>
  )
}
