"use client"

import { useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/lib/cart-context"
import { CheckCircle, Package, ArrowRight } from "lucide-react"
import { Spinner } from "@/components/ui/spinner"

function SuccessContent() {
  const { clearCart } = useCart()
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")

  useEffect(() => {
    // Clear the cart after successful checkout
    if (sessionId) {
      clearCart()
    }
  }, [sessionId, clearCart])

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1 bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-10 w-10 text-primary" />
                </div>
                <h1 className="mt-6 font-serif text-3xl font-bold text-foreground">Order Confirmed!</h1>
                <p className="mt-2 text-lg text-muted-foreground">
                  Thank you for your purchase from Laxmi Flowers & Indian Imports.
                </p>
              </div>

              <div className="mt-8 rounded-lg bg-secondary p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Package className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">What happens next?</h3>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                      <li>You will receive an email confirmation shortly.</li>
                      <li>We will prepare your order with care and attention.</li>
                      <li>For flowers and perishable items, please pick up within 24 hours.</li>
                      <li>For any questions, please call us or visit our store.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild>
                  <Link href="/products">
                    Continue Shopping
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/locations">Find Our Store</Link>
                </Button>
              </div>

              {sessionId && (
                <p className="mt-6 text-center text-xs text-muted-foreground">
                  Order reference: {sessionId.slice(0, 20)}...
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function SuccessLoading() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1 bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <Spinner className="h-8 w-8" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={<SuccessLoading />}>
      <SuccessContent />
    </Suspense>
  )
}
