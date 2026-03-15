import 'server-only'
import { createClient } from '@/lib/supabase/server'

export interface OrderItem {
  product_id: string
  product_name: string
  quantity: number
  price_in_cents: number
}

export interface CreateOrderInput {
  customer_name: string
  customer_email: string
  customer_phone: string
  shipping_address?: string
  total_in_cents: number
  items: OrderItem[]
  stripe_session_id?: string
  notes?: string
}

export interface DBOrder {
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

export async function createOrder(input: CreateOrderInput): Promise<{ order: DBOrder | null; error: string | null }> {
  const supabase = await createClient()
  
  // Create the order
  const { data: order, error: orderError } = await supabase
    .from('orders')
    .insert({
      customer_name: input.customer_name,
      customer_email: input.customer_email,
      customer_phone: input.customer_phone,
      shipping_address: input.shipping_address || null,
      total_in_cents: input.total_in_cents,
      stripe_session_id: input.stripe_session_id || null,
      notes: input.notes || null,
      status: 'pending',
    })
    .select()
    .single()
  
  if (orderError) {
    console.error('Error creating order:', orderError)
    return { order: null, error: orderError.message }
  }
  
  // Create order items
  const orderItems = input.items.map(item => ({
    order_id: order.id,
    product_id: item.product_id,
    product_name: item.product_name,
    quantity: item.quantity,
    price_in_cents: item.price_in_cents,
  }))
  
  const { error: itemsError } = await supabase
    .from('order_items')
    .insert(orderItems)
  
  if (itemsError) {
    console.error('Error creating order items:', itemsError)
    // Note: order was created, just items failed
  }
  
  return { order, error: null }
}

export async function updateOrderStatus(orderId: string, status: string): Promise<boolean> {
  const supabase = await createClient()
  
  const { error } = await supabase
    .from('orders')
    .update({ status, updated_at: new Date().toISOString() })
    .eq('id', orderId)
  
  if (error) {
    console.error('Error updating order status:', error)
    return false
  }
  
  return true
}

export async function markOrderSMSSent(orderId: string): Promise<boolean> {
  const supabase = await createClient()
  
  const { error } = await supabase
    .from('orders')
    .update({ sms_sent: true, updated_at: new Date().toISOString() })
    .eq('id', orderId)
  
  if (error) {
    console.error('Error marking SMS sent:', error)
    return false
  }
  
  return true
}

export async function getOrderById(orderId: string): Promise<DBOrder | null> {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .eq('id', orderId)
    .single()
  
  if (error) {
    console.error('Error fetching order:', error)
    return null
  }
  
  return data
}

export async function getOrderByStripeSession(sessionId: string): Promise<DBOrder | null> {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .eq('stripe_session_id', sessionId)
    .single()
  
  if (error) {
    console.error('Error fetching order by stripe session:', error)
    return null
  }
  
  return data
}
