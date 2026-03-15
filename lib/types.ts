// Shared types that can be used in both client and server components

export interface DBProduct {
  id: string
  name: string
  description: string | null
  price_in_cents: number
  category: string
  image_url: string | null
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface CartProduct {
  id: string
  name: string
  description: string | null
  priceInCents: number
  imageUrl: string | null
  category: string
}

export interface CartItem {
  product: CartProduct
  quantity: number
}

export interface Order {
  id: string
  customer_name: string
  customer_email: string
  customer_phone: string
  shipping_address: string | null
  total_in_cents: number
  status: string
  stripe_session_id: string | null
  sms_sent: boolean
  notes: string | null
  created_at: string
  updated_at: string
}

export interface OrderItem {
  id: string
  order_id: string
  product_id: string
  product_name: string
  quantity: number
  price_in_cents: number
  created_at: string
}
