'use client'

import { useState } from 'react'
import Image from 'next/image'
import { GarikaMunthalu, formatGarikaMunthaluPrice } from '@/lib/garika-munthalu-data'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { ShoppingBag, Check, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { cn } from '@/lib/utils'

interface GarikaMunthaluCardProps {
  product: GarikaMunthalu
}

export function GarikaMunthaluCard({ product }: GarikaMunthaluCardProps) {
  const [selectedSizeId, setSelectedSizeId] = useState(product.sizes[0]?.id || '')
  const [isAdded, setIsAdded] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0)
  const { addItem } = useCart()

  const images = product.images || []
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

  const selectedSize = product.sizes.find(s => s.id === selectedSizeId)
  const totalPrice = selectedSize?.priceInCents || 0

  const handleAddToCart = () => {
    if (!selectedSize) return

    const productName = `${product.name} - ${selectedSize.label}`
    
    addItem({
      id: `${product.id}-${selectedSizeId}`,
      name: productName,
      description: product.description,
      priceInCents: totalPrice,
      imageUrl: images[0] || '',
      category: 'wedding-accessories',
    }, 1)

    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <button
          onClick={() => openLightbox(currentImageIndex)}
          className="absolute inset-0 z-10 cursor-zoom-in"
          aria-label="View enlarged image"
        >
          <span className="sr-only">Click to view enlarged image</span>
        </button>
        <Image
          src={images[currentImageIndex] || ''}
          alt={`${product.name} - Image ${currentImageIndex + 1}`}
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
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white opacity-0 transition-opacity hover:bg-black/70 group-hover:opacity-100 z-20"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => { e.preventDefault(); nextImage(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white opacity-0 transition-opacity hover:bg-black/70 group-hover:opacity-100 z-20"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            
            {/* Image indicators */}
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 z-20">
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
        <h3 className="font-serif text-lg font-bold text-foreground">{product.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{product.description}</p>
        
        {/* Pot Size & Customization Info */}
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
            {product.potSize}
          </span>
          {product.customizable && (
            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              Colors Customizable
            </span>
          )}
        </div>

        {/* Size Selection */}
        <div className="mt-4">
          <Label className="text-sm font-medium text-foreground">Select Option</Label>
          <RadioGroup 
            value={selectedSizeId} 
            onValueChange={setSelectedSizeId}
            className="mt-2 flex flex-wrap gap-2"
          >
            {product.sizes.map((size) => (
              <div key={size.id}>
                <RadioGroupItem
                  value={size.id}
                  id={`${product.id}-${size.id}`}
                  className="peer sr-only"
                />
                <Label
                  htmlFor={`${product.id}-${size.id}`}
                  className={cn(
                    "flex cursor-pointer flex-col items-center rounded-lg border-2 px-4 py-2 text-center transition-all",
                    selectedSizeId === size.id
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border hover:border-primary/50"
                  )}
                >
                  <span className="text-sm font-medium">{size.label}</span>
                  <span className="text-xs text-muted-foreground">{formatGarikaMunthaluPrice(size.priceInCents)}</span>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Total Price */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Price</span>
          <p className="text-xl font-bold text-primary">{formatGarikaMunthaluPrice(totalPrice)}</p>
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
                alt={`${product.name} - Enlarged Image ${lightboxImageIndex + 1}`}
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

            {/* Product name */}
            <div className="absolute top-4 left-4 rounded-lg bg-black/50 px-4 py-2">
              <h3 className="text-white font-semibold">{product.name}</h3>
              <p className="text-white/70 text-sm">{product.description}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
