'use client'

import { useState } from 'react'
import Image from 'next/image'
import { DBProduct } from '@/lib/types'
import { AddToCartButton } from '@/components/add-to-cart-button'
import { Store, X, ZoomIn } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'

function formatPrice(priceInCents: number): string {
  return `$${(priceInCents / 100).toFixed(2)}`
}

interface ProductCardProps {
  product: DBProduct
  showCartButton?: boolean
}

export function ProductCard({ product, showCartButton = true }: ProductCardProps) {
  const [isImageOpen, setIsImageOpen] = useState(false)
  const canAddToCart = showCartButton && product.price_in_cents > 0

  return (
    <>
      <div className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg">
        <div 
          className="relative aspect-[4/3] cursor-pointer"
          onClick={() => setIsImageOpen(true)}
        >
          <Image
            src={product.image_url || '/images/placeholder.jpg'}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
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
            {product.price_in_cents > 0 ? (
              <span className="text-lg font-bold text-primary">{formatPrice(product.price_in_cents)}</span>
            ) : (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Store className="h-4 w-4" />
                <span className="text-sm">Contact for Price</span>
              </div>
            )}
          </div>
          {canAddToCart && (
            <AddToCartButton product={product} className="mt-3 w-full" />
          )}
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
          <div className="relative w-full aspect-square sm:aspect-[4/3] md:aspect-[16/10]">
            <Image
              src={product.image_url || '/images/placeholder.jpg'}
              alt={product.name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority
            />
          </div>
          <div className="p-4 bg-black/80">
            <h3 className="font-serif text-lg font-bold text-white">{product.name}</h3>
            <p className="mt-1 text-sm text-white/70">{product.description}</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
