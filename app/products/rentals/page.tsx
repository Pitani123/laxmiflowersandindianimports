import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { RentalCard } from "@/components/rental-card"
import { getProductsByCategory } from "@/lib/db-products"
import { ArrowLeft, CalendarDays, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default async function RentalsPage() {
  const products = await getProductsByCategory("rentals")

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        <section className="relative bg-secondary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/products"
              className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Products
            </Link>
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_360px]">
              <div>
                <div className="mb-4 flex items-center gap-3 text-primary">
                  <CalendarDays className="h-7 w-7" />
                  <span className="text-sm font-semibold uppercase tracking-[0.2em]">Event Rentals</span>
                </div>
                <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">Rentals</h1>
                <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                  Browse our general event rental collection for celebrations, ceremonies, and special occasions.
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                <Image src="/images/rentals.jpg" alt="Event rental items" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-4 rounded-xl bg-secondary p-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl text-sm text-muted-foreground">
                Rental availability and pricing depend on the item and event date. Contact us to reserve what you need.
              </p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="tel:+14699889029">
                  <Phone className="mr-2 h-4 w-4" />
                  Call for Pricing
                </a>
              </Button>
            </div>

            {products.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => <RentalCard key={product.id} product={product} />)}
              </div>
            ) : (
              <div className="rounded-xl bg-secondary p-12 text-center">
                <h2 className="font-serif text-2xl font-semibold text-foreground">Rental collection coming soon</h2>
                <p className="mt-2 text-muted-foreground">Call us to ask about available event rental items.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
