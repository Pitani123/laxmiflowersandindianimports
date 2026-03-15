'use client'

// Product card component with local formatPrice
import Image from 'next/image'
import { DBProduct } from '@/lib/types'
import { AddToCartButton } from '@/components/add-to-cart-button'
import { Store } from 'lucide-react'

// Local format function to avoid server imports
function formatPrice(priceInCents: number): string {
  return `$${(priceInCents / 100).toFixed(2)}`
}

interface ProductCardProps {
  product: DBProduct
  showCartButton?: boolean
}

export function ProductCard({ product, showCartButton = true }: ProductCardProps) {
  // Only show Add to Cart if cart is enabled and product has a price
  const canAddToCart = showCartButton && product.price_in_cents > 0

  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg">
      <div className="relative aspect-[4/3]">
        <Image
          src={product.image_url || '/images/placeholder.jpg'}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
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
  )
}
