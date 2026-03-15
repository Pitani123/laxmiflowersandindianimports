'use server'

import Stripe from 'stripe'
import { createOrder } from '@/lib/db-orders'
import { headers } from 'next/headers'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

interface CartItem {
  productId: string
  productName: string
  quantity: number
  priceInCents: number
}

interface CheckoutInput {
  customerName: string
  customerEmail: string
  customerPhone: string
  shippingAddress?: string
  items: CartItem[]
}

export async function createCheckoutSession(input: CheckoutInput): Promise<{ clientSecret?: string; error?: string }> {
  try {
    // Calculate total
    const totalInCents = input.items.reduce(
      (sum, item) => sum + item.priceInCents * item.quantity, 
      0
    )

    // Create line items for Stripe
    const lineItems = input.items.map(item => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.productName,
        },
        unit_amount: item.priceInCents,
      },
      quantity: item.quantity,
    }))

    // Get the origin for return URL
    const headersList = await headers()
    const origin = headersList.get('origin') || process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

    // Create order in database first
    const orderItems = input.items.map(item => ({
      product_id: item.productId,
      product_name: item.productName,
      quantity: item.quantity,
      price_in_cents: item.priceInCents,
    }))

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      line_items: lineItems,
      mode: 'payment',
      return_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      customer_email: input.customerEmail,
      metadata: {
        customer_name: input.customerName,
        customer_phone: input.customerPhone,
        shipping_address: input.shippingAddress || '',
      },
      phone_number_collection: {
        enabled: true,
      },
    })

    // Create order in database with stripe session ID
    const { order, error: orderError } = await createOrder({
      customer_name: input.customerName,
      customer_email: input.customerEmail,
      customer_phone: input.customerPhone,
      shipping_address: input.shippingAddress,
      total_in_cents: totalInCents,
      items: orderItems,
      stripe_session_id: session.id,
    })

    if (orderError) {
      console.error('Failed to create order:', orderError)
      // Continue anyway - Stripe session was created
    }

    return { clientSecret: session.client_secret! }
  } catch (error) {
    console.error('Checkout error:', error)
    return { error: 'Failed to create checkout session. Please try again.' }
  }
}

export async function getCheckoutSession(sessionId: string) {
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    return { session }
  } catch (error) {
    console.error('Error retrieving session:', error)
    return { error: 'Failed to retrieve session' }
  }
}
