import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { getCheckoutSession } from '@/app/actions/checkout'
import { updateOrderStatus, getOrderByStripeSession } from '@/lib/db-orders'
import { sendOrderSMS } from '@/lib/sms'

interface SuccessPageProps {
  searchParams: Promise<{ session_id?: string }>
}

export default async function CheckoutSuccessPage({ searchParams }: SuccessPageProps) {
  const params = await searchParams
  const sessionId = params.session_id

  let customerEmail = ''
  let orderNumber = ''

  if (sessionId) {
    // Get session details from Stripe
    const { session } = await getCheckoutSession(sessionId)
    if (session) {
      customerEmail = session.customer_email || ''
      
      // Update order status to paid
      const order = await getOrderByStripeSession(sessionId)
      if (order) {
        orderNumber = order.id.slice(0, 8).toUpperCase()
        await updateOrderStatus(order.id, 'paid')
        
        // Send SMS notification if enabled
        await sendOrderSMS(order)
      }
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-20">
        <div className="text-center max-w-md">
          <CheckCircle className="mx-auto mb-6 h-20 w-20 text-green-500" />
          <h1 className="font-serif text-3xl font-bold text-foreground">Thank You for Your Order!</h1>
          
          {orderNumber && (
            <p className="mt-4 text-lg">
              Order Number: <span className="font-mono font-bold text-primary">#{orderNumber}</span>
            </p>
          )}
          
          <p className="mt-4 text-muted-foreground">
            Your order has been placed successfully. We will send updates to your mobile number.
          </p>
          
          {customerEmail && (
            <p className="mt-2 text-sm text-muted-foreground">
              Order confirmation sent to: <span className="font-medium">{customerEmail}</span>
            </p>
          )}
          
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild>
              <Link href="/products">Continue Shopping</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">Go to Home</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
