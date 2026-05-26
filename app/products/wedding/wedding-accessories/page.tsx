import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { GarikaMunthaluCard } from "@/components/garika-munthalu-card"
import { getProductsByCategory } from "@/lib/db-products"
import { garikaMunthaluProducts } from "@/lib/garika-munthalu-data"
import { ArrowLeft, Gem } from "lucide-react"
import { ProductNotice } from "@/components/product-notice"

export default async function WeddingAccessoriesPage() {
  const products = await getProductsByCategory('wedding-accessories')

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section with Garika Munthalu Collage */}
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          {/* 5-Image Collage Grid */}
          <div className="absolute inset-0 grid grid-cols-4 grid-rows-2 gap-1">
            {/* GarikaMunthalu_001 - Large left panel */}
            <div className="relative col-span-2 row-span-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-29%20at%209.41.55%20PM%20%281%29-1pLnn3gO4RISA7RitjPMWuRwevu2ea.jpeg"
                alt="Traditional Decorated Clay Pots"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* GarikaMunthalu_009 - Top right */}
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2012.44.15%20AM-vYJ3GzsMg6r9O1BXylLQjizjkimLWf.jpeg"
                alt="Golden Clay Pot with Green Leaf Design"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* GarikaMunthalu_010 - Top far right */}
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2012.44.09%20AM-oz8sUBVHywgtOqwXZZ0OS472DA6VeS.jpeg"
                alt="Maroon Clay Pot with Gold Accents"
                fill
                className="object-cover"
              />
            </div>
            {/* GarikaMunthalu_005 - Bottom right */}
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%204.35.04%20PM%20%283%29-0Kdha6raJGXNFMhERMXddHPaWTWa13.jpeg"
                alt="Red Clay Pot with Pearl Chains"
                fill
                className="object-cover"
              />
            </div>
            {/* GarikaMunthalu_006 - Bottom far right */}
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%204.35.04%20PM%20%282%29-kYD4ou5FYideu95eSIQwlE0kEuCOOr.jpeg"
                alt="Deep Red Clay Pot with Green Crystals"
                fill
                className="object-cover"
              />
            </div>
          </div>
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

        <ProductNotice />

        {/* Products Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {(products.length > 0 || garikaMunthaluProducts.length > 0) ? (
              <>
                {/* Garika Munthalu Section */}
                {garikaMunthaluProducts.length > 0 && (
                  <div className="mb-12">
                    <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">Garika Munthalu (Decorated Clay Pots)</h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {garikaMunthaluProducts.map((product) => (
                        <GarikaMunthaluCard key={product.id} product={product} />
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
      </main>
      
      <Footer />
    </div>
  )
}
