'use client'

import Image from 'next/image'
import { useState } from 'react'
import { DBProduct } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { Phone, Calendar, Minus, Plus } from 'lucide-react'

interface RentalCardProps {
  product: DBProduct
}

export function RentalCard({ product }: RentalCardProps) {
  const [days, setDays] = useState(1)

  const incrementDays = () => setDays(prev => Math.min(prev + 1, 30))
  const decrementDays = () => setDays(prev => Math.max(prev - 1, 1))

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
        
        {/* Days Selector */}
        <div className="mt-4 rounded-lg bg-secondary p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Number of Days</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={decrementDays}
                disabled={days <= 1}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground disabled:opacity-50 disabled:hover:bg-card disabled:hover:text-foreground"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 text-center font-semibold text-foreground">{days}</span>
              <button
                onClick={incrementDays}
                disabled={days >= 30}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground disabled:opacity-50 disabled:hover:bg-card disabled:hover:text-foreground"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            {days === 1 ? '1 day rental' : `${days} days rental`}
          </p>
        </div>

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
