import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { GarlandCard } from "@/components/garland-card"
import { getProductsByCategory } from "@/lib/db-products"
import { garlands } from "@/lib/garlands-data"
import { ArrowLeft, Gem, ShoppingBag } from "lucide-react"

export default async function WeddingAccessoriesPage() {
  const products = await getProductsByCategory('wedding-accessories')
  
  // Get Garika Muntha products from local data
  const garikaMunthaProducts = garlands.filter(g => g.category === "wedding-accessories")

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px]">
          <Image
            src="/images/wedding-accessories.jpg"
            alt="Wedding Accessories"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
              <Link href="/products/wedding" className="mb-4 inline-flex items-center gap-2 text-sm text-card/80 hover:text-card">
                <ArrowLeft className="h-4 w-4" />
                Back to Wedding
              </Link>
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                  <Gem className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="font-serif text-4xl font-bold text-card sm:text-5xl">Wedding Accessories</h1>
                  <p className="mt-1 text-lg text-card/80">Essential accessories for traditional Indian weddings</p>
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
                <ShoppingBag className="h-6 w-6 text-primary" />
                <p className="font-medium text-foreground">Add items to your cart and checkout online!</p>
              </div>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/checkout">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  View Cart
                </Link>
              </Button>
            </div>

            {(products.length > 0 || garikaMunthaProducts.length > 0) ? (
              <>
                {/* Garika Muntha Section */}
                {garikaMunthaProducts.length > 0 && (
                  <div className="mb-12">
                    <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">Garika Muntha (Decorated Clay Pots)</h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {garikaMunthaProducts.map((garland) => (
                        <GarlandCard key={garland.id} garland={garland} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Other Products from Database */}
                {products.length > 0 && (
                  <div>
                    <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">Other Accessories</h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="rounded-xl bg-secondary p-12 text-center">
                <Gem className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">Coming Soon</h3>
                <p className="mt-2 text-muted-foreground">We are adding wedding accessories to our collection. Please check back soon or call us for availability.</p>
                <Button asChild className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="tel:+14699889029">Call for Availability</a>
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-12">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-primary-foreground sm:text-3xl">Complete Wedding Packages</h2>
            <p className="mt-2 text-primary-foreground/80">We offer complete wedding accessory packages. Contact us for custom orders.</p>
            <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="secondary" className="bg-card text-foreground hover:bg-card/90">
                <Link href="/locations">Find a Store</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href="tel:+14699889029">Call Us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
