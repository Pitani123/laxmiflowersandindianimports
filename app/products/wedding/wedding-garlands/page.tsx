'use client'

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { GarlandGrid } from "@/components/garland-grid"
import { garlands as weddingGarlands } from "@/lib/garlands-data"
import { WeddingGarlandsCollage } from "@/components/wedding-garlands-collage"
import { ArrowLeft, Heart, Info } from "lucide-react"
import { ProductNotice } from "@/components/product-notice"

const featuredGarlandNames = [
  "LFUSWG011",
  "LFUSWG019",
  "LFUSWG022",
  "LFUSWG024",
  "LFUSWG028",
  "LFUSWG029",
  "LFUSWG048",
  "LFUSWG049",
]

const bottomGarlandNames = [
  "LFUSWG006",
  "LFUSWG008",
  "LFUSWG009",
  "LFUSWG017",
]

const orderedWeddingGarlands = [...weddingGarlands].sort((a, b) => {
  const aFeaturedIndex = featuredGarlandNames.indexOf(a.name)
  const bFeaturedIndex = featuredGarlandNames.indexOf(b.name)
  const aBottomIndex = bottomGarlandNames.indexOf(a.name)
  const bBottomIndex = bottomGarlandNames.indexOf(b.name)

  if (aFeaturedIndex !== -1 || bFeaturedIndex !== -1) {
    if (aFeaturedIndex === -1) return 1
    if (bFeaturedIndex === -1) return -1
    return aFeaturedIndex - bFeaturedIndex
  }

  if (aBottomIndex !== -1 || bBottomIndex !== -1) {
    if (aBottomIndex === -1) return -1
    if (bBottomIndex === -1) return 1
    return aBottomIndex - bBottomIndex
  }

  return 0
})

export default function WeddingGarlandsPage() {
  const batchSize = 12
  const [showFooter, setShowFooter] = useState(orderedWeddingGarlands.length <= batchSize)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px]">
          <WeddingGarlandsCollage />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
              <Link href="/products/wedding" className="mb-4 inline-flex items-center gap-2 text-sm text-card/80 hover:text-card">
                <ArrowLeft className="h-4 w-4" />
                Back to Wedding
              </Link>
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                  <Heart className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="font-serif text-4xl font-bold text-card sm:text-5xl">USA-Made Wedding Garlands</h1>
                  <p className="mt-1 text-lg text-card/80">Garlands made in the USA by expert artisans for Indian Weddings and Celebrations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProductNotice />

        {/* Info Banner */}
        <section className="border-b border-border bg-secondary/50 py-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Select your garland size and add extras like Pearls, Gold Beads, and more!
                  </p>
                  <p className="text-xs font-medium text-primary mt-1">
                    Please note: Price shown is for one garland. Some photos show two garlands for display purposes only.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Prices vary by size. Custom orders welcome - contact us for special requests.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className="font-medium">Color Customizations Available.</span> Colors may vary slightly due to photographic lighting sources.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Our Wedding Garland Collection
              </h2>
              <p className="mt-1 text-muted-foreground">
                {orderedWeddingGarlands.length} beautiful garlands to choose from
              </p>
            </div>

            <GarlandGrid
              garlands={orderedWeddingGarlands}
              batchSize={batchSize}
              onAllDisplayed={() => setShowFooter(true)}
            />
          </div>
        </section>
      </main>
      
      {showFooter && <Footer />}
    </div>
  )
}
