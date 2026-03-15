"use server"

import { stripe } from "@/lib/stripe"
import type { CartItem } from "@/lib/types"

export async function createCheckoutSession(items: CartItem[]) {
  if (!items || items.length === 0) {
    throw new Error("Cart is empty")
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")

  const lineItems = items.map((item) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: item.product.name,
        description: item.product.description || undefined,
      },
      unit_amount: item.product.price_in_cents,
    },
    quantity: item.quantity,
  }))

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: lineItems,
    success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/checkout?canceled=true`,
    shipping_address_collection: {
      allowed_countries: ["US"],
    },
    billing_address_collection: "required",
  })

  return { url: session.url }
}

export async function getCheckoutSession(sessionId: string) {
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "customer"],
  })

  return {
    id: session.id,
    status: session.status,
    customerEmail: session.customer_details?.email,
    amountTotal: session.amount_total,
  }
}
