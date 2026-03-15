"use client"

import { useState } from "react"
import { ShoppingCart, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import type { Product } from "@/lib/types"

interface AddToCartButtonProps {
  product: Product
  className?: string
  size?: "default" | "sm" | "lg" | "icon"
}

export function AddToCartButton({
  product,
  className,
  size = "default",
}: AddToCartButtonProps) {
  const { addItem } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    addItem(product)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <Button
      onClick={handleAddToCart}
      className={className}
      size={size}
      disabled={isAdded}
    >
      {isAdded ? (
        <>
          <Check className="mr-2 h-4 w-4" />
          Added!
        </>
      ) : (
        <>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </>
      )}
    </Button>
  )
}
