'use server'

import { Resend } from 'resend'
import { createOrder } from '@/lib/db-orders'

const resend = new Resend(process.env.RESEND_API_KEY)

// Owner emails to receive order notifications (comma-separated for multiple owners)
const OWNER_EMAILS = (process.env.OWNER_EMAILS || process.env.OWNER_EMAIL || 'owner@example.com')
  .split(',')
  .map(email => email.trim())
  .filter(email => email.length > 0)
const FROM_EMAIL = process.env.FROM_EMAIL || 'orders@laxmiflowers.com'

interface CartItem {
  productId: string
  productName: string
  quantity: number
  priceInCents: number
  imageUrl?: string | null
}

interface PlaceOrderInput {
  customerName: string
  customerEmail: string
  customerPhone: string
  shippingAddress?: string
  pickupDate: string
  items: CartItem[]
}

function formatPrice(priceInCents: number): string {
  return `$${(priceInCents / 100).toFixed(2)}`
}

export async function placeOrder(input: PlaceOrderInput): Promise<{ success: boolean; orderId?: string; error?: string }> {
  try {
    // Calculate total
    const totalInCents = input.items.reduce(
      (sum, item) => sum + item.priceInCents * item.quantity, 
      0
    )

    // Create order items for database
    const orderItems = input.items.map(item => ({
      product_id: item.productId,
      product_name: item.productName,
      quantity: item.quantity,
      price_in_cents: item.priceInCents,
    }))

    // Create order in database
    const { order, error: orderError } = await createOrder({
      customer_name: input.customerName,
      customer_email: input.customerEmail,
      customer_phone: input.customerPhone,
      shipping_address: input.shippingAddress,
      total_in_cents: totalInCents,
      items: orderItems,
      status: 'pending',
    })

    if (orderError || !order) {
      console.error('Failed to create order:', orderError)
      return { success: false, error: 'Failed to create order. Please try again.' }
    }

    // Build order items HTML for email with product images
    const itemsHtml = input.items.map(item => `
      <tr>
        <td style="padding: 12px 8px; border-bottom: 1px solid #eee; vertical-align: middle;">
          <div style="display: flex; align-items: center; gap: 12px;">
            ${item.imageUrl ? `
              <img 
                src="${item.imageUrl}" 
                alt="${item.productName}" 
                width="60" 
                height="60" 
                style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px; flex-shrink: 0;"
              />
            ` : `
              <div style="width: 60px; height: 60px; background: #f5f5f5; border-radius: 8px; flex-shrink: 0;"></div>
            `}
            <span style="font-weight: 500;">${item.productName}</span>
          </div>
        </td>
        <td style="padding: 12px 8px; border-bottom: 1px solid #eee; text-align: center; vertical-align: middle;">${item.quantity}</td>
        <td style="padding: 12px 8px; border-bottom: 1px solid #eee; text-align: right; vertical-align: middle;">${formatPrice(item.priceInCents)}</td>
        <td style="padding: 12px 8px; border-bottom: 1px solid #eee; text-align: right; vertical-align: middle;">${formatPrice(item.priceInCents * item.quantity)}</td>
      </tr>
    `).join('')

    // Email HTML template for order notification
    const orderEmailHtml = (isCustomer: boolean) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333; border-bottom: 2px solid #e91e63; padding-bottom: 10px;">
          ${isCustomer ? 'Thank You for Your Order!' : 'New Order Received!'}
        </h1>
        
        <p style="color: #555; font-size: 14px;">
          Order #${order.id.slice(0, 8).toUpperCase()}
        </p>
        
        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="margin-top: 0; color: #555;">Customer Information</h2>
          <p><strong>Name:</strong> ${input.customerName}</p>
          <p><strong>Email:</strong> ${input.customerEmail}</p>
          <p><strong>Phone:</strong> ${input.customerPhone}</p>
          <p><strong>Pick up Date:</strong> ${new Date(input.pickupDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          ${input.shippingAddress ? `<p><strong>Address:</strong> ${input.shippingAddress}</p>` : ''}
        </div>
        
        <h2 style="color: #555;">Order Details</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="background: #f5f5f5;">
              <th style="padding: 10px; text-align: left;">Product</th>
              <th style="padding: 10px; text-align: center;">Qty</th>
              <th style="padding: 10px; text-align: right;">Price</th>
              <th style="padding: 10px; text-align: right;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHtml}
          </tbody>
          <tfoot>
            <tr style="background: #f5f5f5;">
              <td colspan="3" style="padding: 10px; text-align: right;"><strong>Order Total:</strong></td>
              <td style="padding: 10px; text-align: right;"><strong style="color: #e91e63;">${formatPrice(totalInCents)}</strong></td>
            </tr>
          </tfoot>
        </table>
        
        <div style="margin-top: 30px; padding: 15px; background: #fff3e0; border-radius: 8px;">
          <p style="margin: 0; color: #e65100;">
            ${isCustomer 
              ? '<strong>What\'s Next:</strong> We will contact you shortly to confirm your order and arrange payment/delivery.'
              : '<strong>Action Required:</strong> Please contact the customer to confirm the order and arrange payment.'
            }
          </p>
        </div>
        
        ${isCustomer ? `
        <div style="margin-top: 30px; padding: 20px; background: #fce4ec; border-radius: 8px;">
          <h3 style="margin-top: 0; color: #c2185b;">Contact Us (Main Store)</h3>
          <p style="margin: 0; color: #555; font-size: 14px;">
            <strong>Laxmi Flowers</strong><br>
            Phone: +1-469-988-9029<br>
            Email: laxmiflowers.aubrey@gmail.com<br>
            Address: 2881 FM1385, Aubrey, TX 76227, USA
          </p>
        </div>
        ` : ''}
        
        <p style="color: #999; font-size: 12px; margin-top: 30px;">
          Order ID: ${order.id}<br>
          Order Date: ${new Date().toLocaleString()}
        </p>
      </div>
    `

    console.log('[v0] Email config:', { FROM_EMAIL, OWNER_EMAILS, customerEmail: input.customerEmail })
    console.log('[v0] API Key exists:', !!process.env.RESEND_API_KEY)

    // Send email to all owners
    const ownerEmailPromises = OWNER_EMAILS.map(async (ownerEmail) => {
      const result = await resend.emails.send({
        from: FROM_EMAIL,
        to: ownerEmail,
        subject: `New Order #${order.id.slice(0, 8)} from ${input.customerName}`,
        html: orderEmailHtml(false),
      })
      console.log('[v0] Owner email result for', ownerEmail, ':', result)
      return result
    })

    // Send confirmation email to customer
    const customerEmailPromise = (async () => {
      const result = await resend.emails.send({
        from: FROM_EMAIL,
        to: input.customerEmail,
        subject: `Order Confirmation #${order.id.slice(0, 8)} - Laxmi Flowers`,
        html: orderEmailHtml(true),
      })
      console.log('[v0] Customer email result:', result)
      return result
    })()

    // Send all emails in parallel
    const emailResults = await Promise.allSettled([...ownerEmailPromises, customerEmailPromise])
    
    const failedEmails = emailResults.filter(result => result.status === 'rejected')
    if (failedEmails.length > 0) {
      console.error('[v0] Some emails failed to send:', failedEmails)
      // Order was created, but some emails failed - still return success
    }
    
    console.log('[v0] All email results:', emailResults)

    return { success: true, orderId: order.id }
  } catch (error) {
    console.error('Place order error:', error)
    return { success: false, error: 'Failed to place order. Please try again.' }
  }
}
