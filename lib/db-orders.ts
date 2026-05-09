import 'server-only'
import { promises as fs } from 'fs'
import path from 'path'

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
  items?: OrderItem[]
}

interface OrdersData {
  orders: DBOrder[]
}

const ORDERS_FILE_PATH = path.join(process.cwd(), 'data', 'orders.json')

// Helper to read orders from file
async function readOrdersFile(): Promise<OrdersData> {
  try {
    const data = await fs.readFile(ORDERS_FILE_PATH, 'utf-8')
    return JSON.parse(data)
  } catch {
    // If file doesn't exist, return empty orders
    return { orders: [] }
  }
}

// Helper to write orders to file
async function writeOrdersFile(data: OrdersData): Promise<void> {
  // Ensure the data directory exists
  const dataDir = path.dirname(ORDERS_FILE_PATH)
  try {
    await fs.mkdir(dataDir, { recursive: true })
  } catch {
    // Directory already exists
  }
  await fs.writeFile(ORDERS_FILE_PATH, JSON.stringify(data, null, 2), 'utf-8')
}

// Generate a simple unique ID
function generateId(): string {
  return `order_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
}

export async function createOrder(input: CreateOrderInput): Promise<{ order: DBOrder | null; error: string | null }> {
  try {
    const ordersData = await readOrdersFile()
    
    const newOrder: DBOrder = {
      id: generateId(),
      customer_name: input.customer_name,
      customer_email: input.customer_email,
      customer_phone: input.customer_phone,
      shipping_address: input.shipping_address || null,
      total_in_cents: input.total_in_cents,
      stripe_session_id: input.stripe_session_id || null,
      notes: input.notes || null,
      status: 'pending',
      sms_sent: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      items: input.items,
    }
    
    ordersData.orders.push(newOrder)
    await writeOrdersFile(ordersData)
    
    return { order: newOrder, error: null }
  } catch (error) {
    console.error('Error creating order:', error)
    return { order: null, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

export async function updateOrderStatus(orderId: string, status: string): Promise<boolean> {
  try {
    const ordersData = await readOrdersFile()
    const orderIndex = ordersData.orders.findIndex(o => o.id === orderId)
    
    if (orderIndex === -1) {
      return false
    }
    
    ordersData.orders[orderIndex].status = status
    ordersData.orders[orderIndex].updated_at = new Date().toISOString()
    
    await writeOrdersFile(ordersData)
    return true
  } catch (error) {
    console.error('Error updating order status:', error)
    return false
  }
}

export async function markOrderSMSSent(orderId: string): Promise<boolean> {
  try {
    const ordersData = await readOrdersFile()
    const orderIndex = ordersData.orders.findIndex(o => o.id === orderId)
    
    if (orderIndex === -1) {
      return false
    }
    
    ordersData.orders[orderIndex].sms_sent = true
    ordersData.orders[orderIndex].updated_at = new Date().toISOString()
    
    await writeOrdersFile(ordersData)
    return true
  } catch (error) {
    console.error('Error marking SMS sent:', error)
    return false
  }
}

export async function getOrderById(orderId: string): Promise<DBOrder | null> {
  try {
    const ordersData = await readOrdersFile()
    return ordersData.orders.find(o => o.id === orderId) || null
  } catch (error) {
    console.error('Error fetching order:', error)
    return null
  }
}

export async function getOrderByStripeSession(sessionId: string): Promise<DBOrder | null> {
  try {
    const ordersData = await readOrdersFile()
    return ordersData.orders.find(o => o.stripe_session_id === sessionId) || null
  } catch (error) {
    console.error('Error fetching order by stripe session:', error)
    return null
  }
}
