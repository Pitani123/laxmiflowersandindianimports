import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { HairAccessoryCard } from "@/components/hair-accessory-card"
import { HairAccessoriesCollage } from "@/components/hair-accessories-collage"
import { hairAccessories } from "@/lib/hair-accessories-data"
import { ArrowLeft, Sparkles } from "lucide-react"

export default function HairAccessoriesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section with Product Image Collage */}
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <HairAccessoriesCollage />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
              <Link href="/products/wedding" className="mb-4 inline-flex items-center gap-2 text-sm text-card/80 hover:text-card">
                <ArrowLeft className="h-4 w-4" />
                Back to Wedding
              </Link>
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                  <Sparkles className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="font-serif text-4xl font-bold text-card sm:text-5xl">Hair Accessories</h1>
                  <p className="mt-1 text-lg text-card/80">Traditional hair accessories for religious ceremonies</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {hairAccessories.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {hairAccessories.map((product) => (
                  <HairAccessoryCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="rounded-xl bg-secondary p-12 text-center">
                <Sparkles className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">Coming Soon</h3>
                <p className="mt-2 text-muted-foreground">We are adding hair accessories to our collection. Please check back soon or call us for availability.</p>
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
