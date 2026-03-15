'use client'

import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/lib/cart-context'

export function CartIcon() {
  const { totalItems, setIsCartOpen, isCartEnabled } = useCart()

  // Don't render if cart is not enabled
  if (!isCartEnabled) {
    return null
  }

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="relative flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary"
    >
      <ShoppingCart className="h-5 w-5" />
      {totalItems > 0 && (
        <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
          {totalItems > 99 ? '99+' : totalItems}
        </span>
      )}
    </button>
  )
}
