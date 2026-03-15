'use client'

import { useCallback, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { ArrowLeft, ShoppingBag, CheckCircle, User, Mail, Phone, MapPin } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { createCheckoutSession } from '@/app/actions/checkout'

// Local format function to avoid server imports
function formatPrice(priceInCents: number): string {
  return `$${(priceInCents / 100).toFixed(2)}`
}
import { Button } from '@/components/ui/button'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function CheckoutPage() {
  const { items, totalPrice, clearCart, isCartEnabled } = useCart()
  const [checkoutComplete, setCheckoutComplete] = useState(false)
  const [showStripeCheckout, setShowStripeCheckout] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  // Customer information form state
  const [customerName, setCustomerName] = useState('')
  const [customerEmail, setCustomerEmail] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')
  const [shippingAddress, setShippingAddress] = useState('')

  // Validate phone number (basic validation - at least 10 digits)
  const isValidPhone = (phone: string) => {
    const digits = phone.replace(/\D/g, '')
    return digits.length >= 10
  }

  // Validate email
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = () => {
    if (!customerName.trim()) {
      setError('Please enter your full name')
      return false
    }
    if (!customerEmail.trim() || !isValidEmail(customerEmail)) {
      setError('Please enter a valid email address')
      return false
    }
    if (!customerPhone.trim() || !isValidPhone(customerPhone)) {
      setError('Please enter a valid mobile number (at least 10 digits)')
      return false
    }
    setError(null)
    return true
  }

  const handleProceedToPayment = () => {
    if (validateForm()) {
      setShowStripeCheckout(true)
    }
  }

  const fetchClientSecret = useCallback(async () => {
    const cartItems = items.map(item => ({
      productId: item.product.id,
      productName: item.product.name,
      quantity: item.quantity,
      priceInCents: item.product.priceInCents,
    }))
    
    const result = await createCheckoutSession({
      customerName: customerName.trim(),
      customerEmail: customerEmail.trim(),
      customerPhone: customerPhone.trim(),
      shippingAddress: shippingAddress.trim() || undefined,
      items: cartItems,
    })
    
    if (result.error) {
      setError(result.error)
      throw new Error(result.error)
    }
    
    return result.clientSecret!
  }, [items, customerName, customerEmail, customerPhone, shippingAddress])

  const handleComplete = useCallback(() => {
    setCheckoutComplete(true)
    clearCart()
  }, [clearCart])

  // Cart not enabled
  if (!isCartEnabled) {
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <Navigation />
        <main className="flex flex-1 flex-col items-center justify-center px-4 py-20">
          <ShoppingBag className="mb-4 h-20 w-20 text-muted-foreground/30" />
          <h1 className="font-serif text-2xl font-bold">Online Shopping Not Available</h1>
          <p className="mt-2 text-muted-foreground">Please visit our store or contact us for orders</p>
          <Button asChild className="mt-6">
            <Link href="/locations">Visit Store</Link>
          </Button>
        </main>
        <Footer />
      </div>
    )
  }

  // Empty cart
  if (items.length === 0 && !checkoutComplete) {
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <Navigation />
        <main className="flex flex-1 flex-col items-center justify-center px-4 py-20">
          <ShoppingBag className="mb-4 h-20 w-20 text-muted-foreground/30" />
          <h1 className="font-serif text-2xl font-bold">Your cart is empty</h1>
          <p className="mt-2 text-muted-foreground">Add some products to proceed with checkout</p>
          <Button asChild className="mt-6">
            <Link href="/products">Browse Products</Link>
          </Button>
        </main>
        <Footer />
      </div>
    )
  }

  // Order complete
  if (checkoutComplete) {
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <Navigation />
        <main className="flex flex-1 flex-col items-center justify-center px-4 py-20">
          <div className="text-center">
            <CheckCircle className="mx-auto mb-6 h-20 w-20 text-green-500" />
            <h1 className="font-serif text-3xl font-bold text-foreground">Thank You for Your Order!</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Your order has been placed successfully. We will send updates to your mobile number.
            </p>
            <p className="mt-2 text-muted-foreground">
              Order confirmation sent to: {customerEmail}
            </p>
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

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      <main className="flex-1 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link 
            href="/products" 
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>

          <h1 className="font-serif text-3xl font-bold mb-8">Checkout</h1>

          {error && (
            <div className="mb-6 rounded-lg bg-destructive/10 border border-destructive/20 p-4 text-sm text-destructive">
              {error}
            </div>
          )}

          <div className="grid gap-10 lg:grid-cols-5">
            {/* Customer Information & Payment */}
            <div className="lg:col-span-3">
              {!showStripeCheckout ? (
                <div className="rounded-xl border border-border bg-card p-6">
                  <h2 className="font-serif text-xl font-bold mb-6">Contact Information</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="mb-2 flex items-center gap-2 text-sm font-medium">
                        <User className="h-4 w-4 text-muted-foreground" />
                        Full Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-2 flex items-center gap-2 text-sm font-medium">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        Email Address <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="mb-2 flex items-center gap-2 text-sm font-medium">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        Mobile Number <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        required
                      />
                      <p className="mt-1 text-xs text-muted-foreground">
                        We&apos;ll send order updates to this number
                      </p>
                    </div>

                    <div>
                      <label htmlFor="address" className="mb-2 flex items-center gap-2 text-sm font-medium">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        Shipping Address (Optional)
                      </label>
                      <textarea
                        id="address"
                        value={shippingAddress}
                        onChange={(e) => setShippingAddress(e.target.value)}
                        placeholder="Enter your delivery address"
                        rows={3}
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <Button 
                    onClick={handleProceedToPayment}
                    className="mt-6 w-full"
                    size="lg"
                  >
                    Continue to Payment
                  </Button>
                </div>
              ) : (
                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="font-serif text-xl font-bold">Payment</h2>
                    <button
                      onClick={() => setShowStripeCheckout(false)}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Edit Contact Info
                    </button>
                  </div>
                  <div className="mb-4 rounded-lg bg-secondary p-3 text-sm">
                    <p><strong>Name:</strong> {customerName}</p>
                    <p><strong>Email:</strong> {customerEmail}</p>
                    <p><strong>Phone:</strong> {customerPhone}</p>
                    {shippingAddress && <p><strong>Address:</strong> {shippingAddress}</p>}
                  </div>
                  <EmbeddedCheckoutProvider
                    stripe={stripePromise}
                    options={{ 
                      fetchClientSecret,
                      onComplete: handleComplete,
                    }}
                  >
                    <EmbeddedCheckout />
                  </EmbeddedCheckoutProvider>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-border bg-card p-6 sticky top-24">
                <h2 className="font-serif text-xl font-bold">Order Summary</h2>
                <div className="mt-6 space-y-4 max-h-80 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex gap-4">
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md">
                        <Image
                          src={item.product.imageUrl || '/images/placeholder.jpg'}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <h3 className="text-sm font-medium">{item.product.name}</h3>
                        <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                        <p className="mt-auto text-sm font-semibold text-primary">
                          {formatPrice(item.product.priceInCents * item.quantity)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 border-t border-border pt-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Subtotal</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm text-muted-foreground">
                    <span>Shipping</span>
                    <span>Calculated at pickup</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                    <span className="text-lg font-medium">Total</span>
                    <span className="text-xl font-bold text-primary">{formatPrice(totalPrice)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
