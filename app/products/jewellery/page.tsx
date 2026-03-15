import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ProductGrid } from "@/components/product-grid"
import { getProductsByCategory } from "@/lib/products"
import { Phone, Store, ArrowLeft } from "lucide-react"

export default async function JewelleryPage() {
  const products = await getProductsByCategory("jewellery")

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
                <Store className="h-6 w-6 text-primary" />
                <p className="font-medium text-foreground">Affordable elegance for every occasion.</p>
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
      </main>

      <Footer />
    </div>
  )
}
