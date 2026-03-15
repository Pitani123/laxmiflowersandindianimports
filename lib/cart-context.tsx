'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { CartProduct, CartItem } from '@/lib/types'

// Re-export types for convenience
export type { CartProduct, CartItem } from '@/lib/types'

interface CartContextType {
  items: CartItem[]
  addItem: (product: CartProduct, quantity?: number) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
  isCartOpen: boolean
  setIsCartOpen: (open: boolean) => void
  isCartEnabled: boolean
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  
  // Check if cart is enabled via environment variable
  const isCartEnabled = process.env.NEXT_PUBLIC_ENABLE_CART === 'true'

  // Load cart from localStorage on mount
  useEffect(() => {
    if (!isCartEnabled) return
    const savedCart = localStorage.getItem('laxmi-flowers-cart')
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch (e) {
        console.error('Failed to parse cart:', e)
      }
    }
  }, [isCartEnabled])

  // Save cart to localStorage when it changes
  useEffect(() => {
    if (!isCartEnabled) return
    localStorage.setItem('laxmi-flowers-cart', JSON.stringify(items))
  }, [items, isCartEnabled])

  const addItem = (product: CartProduct, quantity: number = 1) => {
    if (!isCartEnabled) return
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.product.id === product.id)
      if (existingItem) {
        return currentItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...currentItems, { product, quantity }]
    })
    setIsCartOpen(true)
  }

  const removeItem = (productId: string) => {
    if (!isCartEnabled) return
    setItems(currentItems => currentItems.filter(item => item.product.id !== productId))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (!isCartEnabled) return
    if (quantity <= 0) {
      removeItem(productId)
      return
    }
    setItems(currentItems =>
      currentItems.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    if (!isCartEnabled) return
    setItems([])
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.product.priceInCents * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isCartOpen,
        setIsCartOpen,
        isCartEnabled,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
