'use client'

import Image from 'next/image'
import { DBProduct } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'

interface RentalCardProps {
  product: DBProduct
}

export function RentalCard({ product }: RentalCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg">
      {/* Image Container - Better aspect ratio for rental items */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product.image_url || '/images/placeholder.jpg'}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Per Day Badge */}
        <div className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-md">
          Per Day Rental
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-serif text-lg font-bold text-foreground">{product.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{product.description}</p>
        
        {/* Contact for Price */}
        <Button asChild className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90">
          <a href="tel:+1234567890">
            <Phone className="mr-2 h-4 w-4" />
            Call for Pricing
          </a>
        </Button>
      </div>
    </div>
  )
}
