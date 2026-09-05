import Link from "next/link"
import { ArrowLeft, Flower2 } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductNotice } from "@/components/product-notice"
import { GarlandGrid } from "@/components/garland-grid"
import { indiaWeddingGarlands } from "@/lib/india-wedding-garlands-data"

export default function IndiaWeddingGarlandsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        <section className="relative flex min-h-[400px] items-end overflow-hidden bg-primary py-16 sm:py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary" />
          <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/products/wedding"
              className="mb-8 inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Wedding
            </Link>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/15">
                <Flower2 className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-serif text-4xl font-bold text-primary-foreground sm:text-5xl">
                  India Wedding Garlands
                </h1>
                <p className="mt-2 text-lg text-primary-foreground/80">
                  Traditional Indian wedding garlands for your special celebration
                </p>
              </div>
            </div>
          </div>
        </section>

        <ProductNotice />
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                India Wedding Garland Collection
              </h2>
              <p className="mt-1 text-muted-foreground">
                {indiaWeddingGarlands.length} traditional garlands to choose from
              </p>
            </div>
            <GarlandGrid garlands={indiaWeddingGarlands} batchSize={12} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
