'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Garland, GarlandExtra, getExtrasByIds, formatPrice } from '@/lib/garlands-data'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { ShoppingBag, Check } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { cn } from '@/lib/utils'

interface GarlandCardProps {
  garland: Garland
}

export function GarlandCard({ garland }: GarlandCardProps) {
  const [selectedSizeId, setSelectedSizeId] = useState(garland.sizes[0]?.id || '')
  const [selectedExtras, setSelectedExtras] = useState<string[]>([])
  const [isAdded, setIsAdded] = useState(false)
  const { addItem } = useCart()

  const selectedSize = garland.sizes.find(s => s.id === selectedSizeId)
  const availableExtras = getExtrasByIds(garland.availableExtras || [])

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
      imageUrl: garland.image,
      category: 'garlands',
    }, 1)

    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg">
      {/* Image Container - Full image display */}
      <div className="relative aspect-[2/3] overflow-hidden bg-muted">
        <Image
          src={garland.image}
          alt={garland.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="p-5">
        {/* Name & Description */}
        <h3 className="font-serif text-lg font-bold text-foreground">{garland.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{garland.description}</p>

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
                  <span className="text-xs text-muted-foreground">{formatPrice(size.priceInCents)}</span>
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
                    +{formatPrice(extra.priceInCents)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

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
