'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { WeddingRental } from '@/lib/wedding-rentals-data'
import { X, ZoomIn, ChevronLeft, ChevronRight, Phone } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

function formatPricePerDay(priceInCents: number): string {
  return `$${(priceInCents / 100).toFixed(2)} / day`
}

interface WeddingRentalCardProps {
  product: WeddingRental
}

export function WeddingRentalCard({ product }: WeddingRentalCardProps) {
  const [isImageOpen, setIsImageOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const allImages = useMemo(() => {
    return product.images.length > 0 ? product.images : ['/images/placeholder.jpg']
  }, [product.images])

  const hasMultipleImages = allImages.length > 1

  const handleOpenImage = () => {
    setCurrentImageIndex(0)
    setIsImageOpen(true)
  }

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
      <div className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg">
        <div
          className="relative aspect-[4/3] cursor-pointer"
          onClick={handleOpenImage}
        >
          <Image
            src={allImages[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
            For Rent
          </span>
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/20 group-hover:opacity-100">
            <div className="rounded-full bg-white/90 p-2">
              <ZoomIn className="h-5 w-5 text-foreground" />
            </div>
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-serif text-lg font-bold text-foreground">{product.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{product.description}</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-lg font-bold text-primary">{formatPricePerDay(product.pricePerDayInCents)}</span>
          </div>

          {/* Call to Reserve Button */}
          <Button
            asChild
            className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href="tel:+14699889029">
              <Phone className="mr-2 h-4 w-4" />
              Call to Reserve
            </a>
          </Button>
        </div>
      </div>

      <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black/95 border-none" showCloseButton={false}>
          <DialogTitle className="sr-only">{product.name} - Full Image</DialogTitle>
          <button
            onClick={() => setIsImageOpen(false)}
            className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </button>
          {hasMultipleImages && (
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous image</span>
            </button>
          )}
          {hasMultipleImages && (
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next image</span>
            </button>
          )}
          <div className="relative w-full aspect-square sm:aspect-[4/3] md:aspect-[16/10]">
            <Image
              src={allImages[currentImageIndex]}
              alt={`${product.name} - Image ${currentImageIndex + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority
            />
          </div>
          <div className="p-4 bg-black/80">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-lg font-bold text-white">{product.name}</h3>
                <p className="mt-1 text-sm text-white/70">{product.description}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-sm font-semibold text-white">{formatPricePerDay(product.pricePerDayInCents)}</span>
                {hasMultipleImages && (
                  <span className="text-sm text-white/50">{currentImageIndex + 1} / {allImages.length}</span>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
