import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ProductGrid } from "@/components/product-grid"
import { getProductsByCategory } from "@/lib/products"
import { Phone, Store, ArrowLeft, Flower2 } from "lucide-react"

export default async function FreshFlowersPage() {
  const products = await getProductsByCategory("fresh-flowers")

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px]">
          <Image
            src="/images/fresh-flowers.jpg"
            alt="Fresh Flowers"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
              <Link href="/products" className="mb-4 inline-flex items-center gap-2 text-sm text-card/80 hover:text-card">
                <ArrowLeft className="h-4 w-4" />
                Back to All Products
              </Link>
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                  <Flower2 className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="font-serif text-4xl font-bold text-card sm:text-5xl">Fresh Flowers</h1>
                  <p className="mt-1 text-lg text-card/80">Daily fresh flowers for home and temple</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-4 rounded-xl bg-secondary p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <Store className="h-6 w-6 text-primary" />
                <p className="font-medium text-foreground">Shop online or visit our store for more selection.</p>
              </div>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="tel:+1234567890">
                  <Phone className="mr-2 h-4 w-4" />
                  Call for Custom Orders
                </a>
              </Button>
            </div>

            <ProductGrid products={products} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-12">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-primary-foreground sm:text-3xl">Fresh Daily Delivery</h2>
            <p className="mt-2 text-primary-foreground/80">We receive fresh flower shipments daily. Visit our store for the freshest selection.</p>
            <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="secondary" className="bg-card text-foreground hover:bg-card/90">
                <Link href="/locations">Find a Store</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href="tel:+1234567890">Call Us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
