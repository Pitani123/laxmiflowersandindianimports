export interface Product {
  id: string
  name: string
  description: string | null
  price_in_cents: number
  image: string | null
  category: string
  created_at: string
  updated_at: string
}

export interface CartItem {
  product: Product
  quantity: number
}

export const CATEGORIES = [
  { id: 'fresh-flowers', name: 'Fresh Flowers' },
  { id: 'garlands', name: 'Garlands' },
  { id: 'bouquets', name: 'Flower Bouquets' },
  { id: 'wedding-decorations', name: 'Wedding Decorations' },
  { id: 'gift-items', name: 'Indian Gift Items' },
  { id: 'silver-items', name: 'Silver Items' },
  { id: 'brass-items', name: 'Brass Items' },
  { id: 'jewellery', name: 'Low Cost Jewellery Items' },
  { id: 'traditional-dresses', name: 'Indian Traditional Dresses' },
  { id: 'snacks', name: 'Indian Snacks' },
  { id: 'rentals', name: 'Rentals' },
] as const

export function getCategoryName(categoryId: string): string {
  const category = CATEGORIES.find(c => c.id === categoryId)
  return category?.name || categoryId
}

export function formatPrice(priceInCents: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(priceInCents / 100)
}
