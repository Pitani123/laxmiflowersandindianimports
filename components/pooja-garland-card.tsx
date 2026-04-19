'use client'

import { useState } from 'react'
import Image from 'next/image'
import { DBProduct } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { ShoppingBag, Check } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { cn } from '@/lib/utils'

// Pooja Garland sizes with prices per foot ($12 per foot)
const poojaGarlandSizes = [
  { id: "1ft", label: "1 ft", priceInCents: 1200 }, // $12.00
  { id: "2ft", label: "2 ft", priceInCents: 2400 }, // $24.00
  { id: "3ft", label: "3 ft", priceInCents: 3600 }, // $36.00
  { id: "4ft", label: "4 ft", priceInCents: 4800 }, // $48.00
  { id: "5ft", label: "5 ft", priceInCents: 6000 }, // $60.00
]

function formatPrice(priceInCents: number): string {
  return `$${(priceInCents / 100).toFixed(2)}`
}

interface PoojaGarlandCardProps {
  product: DBProduct
}

export function PoojaGarlandCard({ product }: PoojaGarlandCardProps) {
  const [selectedSizeId, setSelectedSizeId] = useState(poojaGarlandSizes[0]?.id || '')
  const [isAdded, setIsAdded] = useState(false)
  const { addItem } = useCart()

  const selectedSize = poojaGarlandSizes.find(s => s.id === selectedSizeId)
  const totalPrice = selectedSize?.priceInCents || 0

  const handleAddToCart = () => {
    if (!selectedSize) return

    const productName = `${product.name} - ${selectedSize.label}`
    
    addItem({
      id: `${product.id}-${selectedSizeId}`,
      name: productName,
      description: product.description || '',
      priceInCents: selectedSize.priceInCents,
      imageUrl: product.image_url || '',
      category: 'pooja-garlands',
    }, 1)

    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <Image
          src={product.image_url || '/images/placeholder.jpg'}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="p-5">
        {/* Name & Description */}
        <h3 className="font-serif text-lg font-bold text-foreground">{product.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{product.description}</p>

        {/* Size Selection */}
        <div className="mt-4">
          <Label className="text-sm font-medium text-foreground">Select Size</Label>
          <RadioGroup 
            value={selectedSizeId} 
            onValueChange={setSelectedSizeId}
            className="mt-2 flex flex-wrap gap-2"
          >
            {poojaGarlandSizes.map((size) => (
              <div key={size.id}>
                <RadioGroupItem
                  value={size.id}
                  id={`${product.id}-${size.id}`}
                  className="peer sr-only"
                />
                <Label
                  htmlFor={`${product.id}-${size.id}`}
                  className={cn(
                    "flex cursor-pointer flex-col items-center rounded-lg border-2 px-3 py-2 text-center transition-all",
                    selectedSizeId === size.id
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border hover:border-primary/50"
                  )}
                >
                  <span className="text-sm font-medium">{size.label}</span>
                  <span className="text-xs text-muted-foreground">{formatPrice(size.priceInCents)}</span>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Total Price */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Price</span>
          <p className="text-xl font-bold text-primary">{formatPrice(totalPrice)}</p>
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
    </div>
  )
}
