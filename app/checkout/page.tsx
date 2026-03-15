"use client"

import { useState, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/lib/cart-context"
import { createCheckoutSession } from "@/app/actions/stripe"
import { ArrowLeft, ShoppingBag, Trash2, Plus, Minus, CreditCard, AlertCircle } from "lucide-react"
import { Spinner } from "@/components/ui/spinner"

function CheckoutContent() {
  const { items, updateQuantity, removeItem, totalPrice, clearCart } = useCart()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const searchParams = useSearchParams()
  const canceled = searchParams.get("canceled")

  const formatPrice = (cents: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(cents / 100)
  }

  const handleCheckout = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const { url } = await createCheckoutSession(items)
      if (url) {
        window.location.href = url
      }
    } catch (err) {
      console.error("Checkout error:", err)
      setError("Failed to start checkout. Please try again.")
      setIsLoading(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navigation />
        <main className="flex-1">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center">
              <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground" />
              <h1 className="mt-4 font-serif text-3xl font-bold text-foreground">Your cart is empty</h1>
              <p className="mt-2 text-muted-foreground">
                Add some beautiful products to your cart and come back here to checkout.
              </p>
              <Button asChild className="mt-6">
                <Link href="/products">Browse Products</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Link href="/products" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" />
            Continue Shopping
          </Link>

          <h1 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">Checkout</h1>

          {canceled && (
            <div className="mt-4 flex items-center gap-2 rounded-lg bg-destructive/10 p-4 text-destructive">
              <AlertCircle className="h-5 w-5" />
              <p>Your checkout was canceled. Your cart items are still saved.</p>
            </div>
          )}

          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Cart Items ({items.length})</CardTitle>
                </CardHeader>
                <CardContent className="divide-y">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={item.product.image || "/placeholder.svg"}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-medium text-foreground">{item.product.name}</h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {formatPrice(item.product.price_in_cents)} each
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-destructive"
                            onClick={() => removeItem(item.product.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <span className="font-semibold text-foreground">
                            {formatPrice(item.product.price_in_cents * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="text-foreground">{formatPrice(totalPrice)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="text-foreground">Calculated at checkout</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tax</span>
                      <span className="text-foreground">Calculated at checkout</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span>{formatPrice(totalPrice)}</span>
                    </div>
                  </div>

                  {error && (
                    <div className="mt-4 flex items-center gap-2 rounded-lg bg-destructive/10 p-3 text-sm text-destructive">
                      <AlertCircle className="h-4 w-4" />
                      <p>{error}</p>
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    size="lg"
                    onClick={handleCheckout}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Spinner className="mr-2 h-4 w-4" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <CreditCard className="mr-2 h-4 w-4" />
                        Proceed to Payment
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                Secure checkout powered by Stripe
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function CheckoutLoading() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <Spinner className="h-8 w-8" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<CheckoutLoading />}>
      <CheckoutContent />
    </Suspense>
  )
}
