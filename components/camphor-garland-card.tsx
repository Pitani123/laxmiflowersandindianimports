'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CamphorGarland, CamphorGarlandExtra, getCamphorExtrasByIds, formatCamphorPrice } from '@/lib/camphor-garlands-data'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { ShoppingBag, Check, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { cn } from '@/lib/utils'

interface CamphorGarlandCardProps {
  garland: CamphorGarland
}

export function CamphorGarlandCard({ garland }: CamphorGarlandCardProps) {
  const [selectedSizeId, setSelectedSizeId] = useState(garland.sizes[0]?.id || '')
  const [selectedExtras, setSelectedExtras] = useState<string[]>([])
  const [isAdded, setIsAdded] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0)
  const { addItem } = useCart()

  const images = garland.images || []
  const hasMultipleImages = images.length > 1

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const openLightbox = (index: number) => {
    setLightboxImageIndex(index)
    setLightboxOpen(true)
  }

  const nextLightboxImage = () => {
    setLightboxImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevLightboxImage = () => {
    setLightboxImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const selectedSize = garland.sizes.find(s => s.id === selectedSizeId)
  const availableExtras: CamphorGarlandExtra[] = []

  const extrasTotal = selectedExtras.reduce((total, extraId) => {
    const extra = availableExtras.find(e => e.id === extraId)
    return total + (extra?.priceInCents || 0)
  }, 0)

  const basePrice = selectedSize?.priceInCents || 0
  const totalPrice = basePrice + extrasTotal

  const toggleExtra = (extraId: string) => {
    setSelectedExtras(prev => 
      prev.includes(extraId) 
        ? prev.filter(id => id !== extraId)
        : [...prev, extraId]
    )
  }

  const handleAddToCart = () => {
    if (!selectedSize) return

    const extraNames = selectedExtras
      .map(id => availableExtras.find(e => e.id === id)?.name)
      .filter(Boolean)
      .join(', ')

    const productName = `${garland.name} - ${selectedSize.label}${extraNames ? ` + ${extraNames}` : ''}`
    
    addItem({
      id: `${garland.id}-${selectedSizeId}-${selectedExtras.sort().join('-')}`,
      name: productName,
      description: garland.description,
      priceInCents: basePrice + extrasTotal,
      imageUrl: images[0] || '',
      category: 'camphor-garlands',
    }, 1)

    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg">
      {/* Image Container - Scrollable images */}
      <div className="relative aspect-[2/3] overflow-hidden bg-muted">
        <button
          onClick={() => openLightbox(currentImageIndex)}
          className="absolute inset-0 z-10 cursor-zoom-in"
          aria-label="View enlarged image"
        >
          <span className="sr-only">Click to view enlarged image</span>
        </button>
        <Image
          src={images[currentImageIndex] || ''}
          alt={`${garland.name} - Image ${currentImageIndex + 1}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        
        {/* Zoom indicator */}
        <div className="absolute bottom-3 right-3 rounded-full bg-black/50 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100 z-20 pointer-events-none">
          <ZoomIn className="h-4 w-4" />
        </div>
        
        {/* Navigation arrows for multiple images */}
        {hasMultipleImages && (
          <>
            <button
              onClick={(e) => { e.preventDefault(); prevImage(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white opacity-0 transition-opacity hover:bg-black/70 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => { e.preventDefault(); nextImage(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white opacity-0 transition-opacity hover:bg-black/70 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            
            {/* Image indicators */}
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.preventDefault(); setCurrentImageIndex(index); }}
                  className={cn(
                    "h-2 w-2 rounded-full transition-all",
                    index === currentImageIndex
                      ? "bg-white w-4"
                      : "bg-white/50 hover:bg-white/80"
                  )}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-5">
        {/* Name & Description */}
        <h3 className="font-serif text-lg font-bold text-foreground">{garland.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{garland.description}</p>
        <p className="mt-1 text-xs italic text-muted-foreground/70">Color customizations available</p>

        {/* Size Selection */}
        <div className="mt-4">
          <Label className="text-sm font-medium text-foreground">Select Size</Label>
          <RadioGroup 
            value={selectedSizeId} 
            onValueChange={setSelectedSizeId}
            className="mt-2 flex flex-wrap gap-2"
          >
            {garland.sizes.map((size) => (
              <div key={size.id}>
                <RadioGroupItem
                  value={size.id}
                  id={`${garland.id}-${size.id}`}
                  className="peer sr-only"
                />
                <Label
                  htmlFor={`${garland.id}-${size.id}`}
                  className={cn(
                    "flex cursor-pointer flex-col items-center rounded-lg border-2 px-3 py-2 text-center transition-all",
                    selectedSizeId === size.id
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border hover:border-primary/50"
                  )}
                >
                  <span className="text-sm font-medium">{size.label}</span>
                  <span className="text-xs text-muted-foreground">{formatCamphorPrice(size.priceInCents)}</span>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Extras Selection */}
        {availableExtras.length > 0 && (
          <div className="mt-4">
            <Label className="text-sm font-medium text-foreground">Add Extras</Label>
            <div className="mt-2 space-y-2">
              {availableExtras.map((extra) => (
                <div
                  key={extra.id}
                  className={cn(
                    "flex items-center justify-between rounded-lg border px-3 py-2 transition-all cursor-pointer",
                    selectedExtras.includes(extra.id)
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  )}
                  onClick={() => toggleExtra(extra.id)}
                >
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id={`${garland.id}-extra-${extra.id}`}
                      checked={selectedExtras.includes(extra.id)}
                      onCheckedChange={() => toggleExtra(extra.id)}
                    />
                    <Label 
                      htmlFor={`${garland.id}-extra-${extra.id}`}
                      className="cursor-pointer text-sm"
                    >
                      {extra.name}
                    </Label>
                  </div>
                  <span className="text-sm font-medium text-primary">
                    +{formatCamphorPrice(extra.priceInCents)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Total Price */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Price</span>
          <p className="text-xl font-bold text-primary">{formatCamphorPrice(totalPrice)}</p>
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          className={cn(
            "mt-4 w-full transition-all",
            isAdded 
              ? "bg-green-600 hover:bg-green-600" 
              : "bg-primary hover:bg-primary/90"
          )}
          disabled={!selectedSize}
        >
          {isAdded ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Added to Cart
            </>
          ) : (
            <>
              <ShoppingBag className="mr-2 h-4 w-4" />
              Add to Cart
            </>
          )}
        </Button>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent 
          className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none sm:max-w-[90vw]"
          showCloseButton={false}
        >
          <div className="relative w-full h-[90vh] flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 z-50 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Main image */}
            <div className="relative w-full h-full flex items-center justify-center p-4">
              <Image
                src={images[lightboxImageIndex] || ''}
                alt={`${garland.name} - Enlarged Image ${lightboxImageIndex + 1}`}
                fill
                className="object-contain"
                sizes="95vw"
                priority
              />
            </div>

            {/* Navigation for multiple images */}
            {hasMultipleImages && (
              <>
                <button
                  onClick={prevLightboxImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                  onClick={nextLightboxImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>

                {/* Image counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-white text-sm">
                  {lightboxImageIndex + 1} / {images.length}
                </div>

                {/* Thumbnail indicators */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setLightboxImageIndex(index)}
                      className={cn(
                        "h-2 w-2 rounded-full transition-all",
                        index === lightboxImageIndex
                          ? "bg-white w-6"
                          : "bg-white/50 hover:bg-white/80"
                      )}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Garland name */}
            <div className="absolute top-4 left-4 rounded-lg bg-black/50 px-4 py-2">
              <h3 className="text-white font-semibold">{garland.name}</h3>
              <p className="text-white/70 text-sm">{garland.description}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
