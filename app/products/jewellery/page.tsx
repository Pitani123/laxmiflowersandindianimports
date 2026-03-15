import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { getProductsByCategory } from "@/lib/db-products"
import { ArrowLeft, ShoppingBag } from "lucide-react"

export default async function JewelleryPage() {
  const products = await getProductsByCategory('jewellery')

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-secondary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link 
              href="/products" 
              className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Products
            </Link>
            <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">Low Cost Jewellery Items</h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Beautiful and affordable traditional Indian jewelry for all occasions. Perfect for weddings, festivals, and everyday wear.
            </p>
          </div>
        </section>

        {/* Products Grid */}
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

            <div className="grid gap-8 lg:grid-cols-3">
              {/* Category Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl lg:aspect-auto lg:row-span-2">
                <Image
                  src="/images/traditional-dresses.jpg"
                  alt="Jewellery Items"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-2xl font-bold text-card">Traditional Jewelry</h3>
                  <p className="mt-2 text-sm text-card/80">Affordable elegance for every occasion</p>
                </div>
              </div>
              
              {/* Products List */}
              <div className="lg:col-span-2">
                <div className="grid gap-6 sm:grid-cols-2">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                <div className="mt-8 rounded-xl bg-secondary p-6">
                  <h3 className="font-serif text-lg font-bold text-foreground">Looking for the perfect jewelry?</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Visit our store to see our full collection of affordable traditional jewelry. We have pieces for weddings, festivals, and everyday wear.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-4">
                    <Button asChild>
                      <Link href="/locations">Visit Store</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="tel:+1234567890">Call Us</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
