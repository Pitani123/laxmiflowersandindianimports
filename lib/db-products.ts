import { bouquetProducts } from '@/data/bouquets'
import { looseFlowerProducts } from '@/data/loose-flowers'
import { poojaGarlandProducts } from '@/data/pooja-garlands'
import type { DBProduct } from '@/lib/types'

export type { DBProduct } from '@/lib/types'

const localProducts: DBProduct[] = [
  ...looseFlowerProducts,
  ...poojaGarlandProducts,
  ...bouquetProducts,
]

export async function getProducts(): Promise<DBProduct[]> {
  return localProducts
    .filter((product) => product.is_active)
    .sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name))
}

export async function getProductsByCategory(category: string): Promise<DBProduct[]> {
  return localProducts
    .filter((product) => product.is_active && product.category === category)
    .sort((a, b) => a.name.localeCompare(b.name))
}

export async function getProductById(id: string): Promise<DBProduct | null> {
  return localProducts.find((product) => product.is_active && product.id === id) ?? null
}

export async function getProductsByIds(ids: string[]): Promise<DBProduct[]> {
  const requestedIds = new Set(ids)
  return localProducts.filter((product) => product.is_active && requestedIds.has(product.id))
}
