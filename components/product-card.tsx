"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { AddToCartButton } from "@/components/add-to-cart-button"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (cents: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(cents / 100)
  }

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-foreground line-clamp-1">{product.name}</h3>
        {product.description && (
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
        )}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-primary">
            {formatPrice(product.price_in_cents)}
          </span>
          <AddToCartButton product={product} size="sm" />
        </div>
      </CardContent>
    </Card>
  )
}
