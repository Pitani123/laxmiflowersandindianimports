'use client'

import { useState, useEffect } from 'react'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/lib/cart-context'

export function CartIcon() {
  const { totalItems, setIsCartOpen, isCartEnabled } = useCart()
  const [mounted, setMounted] = useState(false)

  // Only render after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render on server or if cart is not enabled
  if (!mounted || !isCartEnabled) {
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
