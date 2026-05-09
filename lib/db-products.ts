import { DBProduct } from '@/lib/types'
import { rentals } from '@/lib/rentals-data'
import { poojaGarlands } from '@/lib/pooja-garlands-data'
import { looseFlowers } from '@/lib/loose-flowers-data'

// Re-export DBProduct type for convenience
export type { DBProduct } from '@/lib/types'

// Combine all products into one array
const allProducts: DBProduct[] = [
  ...rentals,
  ...poojaGarlands,
  ...looseFlowers,
]

export async function getProducts(): Promise<DBProduct[]> {
  // Return all active products, sorted by category then name
  return allProducts
    .filter(product => product.is_active)
    .sort((a, b) => {
      const categoryCompare = a.category.localeCompare(b.category)
      if (categoryCompare !== 0) return categoryCompare
      return a.name.localeCompare(b.name)
    })
}

export async function getProductsByCategory(category: string): Promise<DBProduct[]> {
  // Return active products for a specific category, sorted by name
  return allProducts
    .filter(product => product.is_active && product.category === category)
    .sort((a, b) => a.name.localeCompare(b.name))
}

export async function getProductById(id: string): Promise<DBProduct | null> {
  return allProducts.find(product => product.id === id) || null
}

export async function getProductsByIds(ids: string[]): Promise<DBProduct[]> {
  return allProducts.filter(product => ids.includes(product.id))
}
