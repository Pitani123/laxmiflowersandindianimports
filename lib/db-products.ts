import 'server-only'
import { createClient } from '@/lib/supabase/server'
import { DBProduct } from '@/lib/types'

// Re-export DBProduct type for convenience
export type { DBProduct } from '@/lib/types'

export async function getProducts(): Promise<DBProduct[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_active', true)
    .order('category', { ascending: true })
    .order('name', { ascending: true })
  
  if (error) {
    console.error('Error fetching products:', error)
    return []
  }
  
  return data || []
}

export async function getProductsByCategory(category: string): Promise<DBProduct[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_active', true)
    .eq('category', category)
    .order('name', { ascending: true })
  
  if (error) {
    console.error('Error fetching products by category:', error)
    return []
  }
  
  return data || []
}

export async function getProductById(id: string): Promise<DBProduct | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) {
    console.error('Error fetching product:', error)
    return null
  }
  
  return data
}

export async function getProductsByIds(ids: string[]): Promise<DBProduct[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .in('id', ids)
  
  if (error) {
    console.error('Error fetching products by ids:', error)
    return []
  }
  
  return data || []
}


