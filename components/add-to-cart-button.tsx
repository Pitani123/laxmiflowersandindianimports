'use client'

import { ShoppingCart, Check } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '@/lib/cart-context'
import { DBProduct, CartProduct } from '@/lib/types'
import { Button } from '@/components/ui/button'

interface AddToCartButtonProps {
  product: DBProduct
  className?: string
  variant?: 'default' | 'outline' | 'secondary'
}

export function AddToCartButton({ product, className, variant = 'default' }: AddToCartButtonProps) {
  const { addItem, isCartEnabled } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  // Don't render if cart is not enabled
  if (!isCartEnabled) {
    return null
  }

  const handleAddToCart = () => {
    // Convert DBProduct to CartProduct
    const cartProduct: CartProduct = {
      id: product.id,
      name: product.name,
      description: product.description,
      priceInCents: product.price_in_cents,
      imageUrl: product.image_url,
      category: product.category,
    }
    addItem(cartProduct)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <Button
      onClick={handleAddToCart}
      variant={variant}
      className={className}
      disabled={isAdded}
    >
      {isAdded ? (
        <>
          <Check className="mr-2 h-4 w-4" />
          Added to Cart
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
