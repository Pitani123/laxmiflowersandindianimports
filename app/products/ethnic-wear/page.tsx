import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shirt, Phone, Sparkles } from "lucide-react"
import { ProductNotice } from "@/components/product-notice"

const ethnicWear = [
  {
    id: "ethnic-wear-1",
    name: "Festive & Party Ethnic Wear",
    description:
      "Beautiful Indian ladies clothing for festivals and parties, including sarees, lehengas, kurtis, and salwar suits. Wide range of colors, fabrics, and styles available. Please call the store for current collection and pricing.",
    image: "/placeholder.svg?height=600&width=600",
  },
]

export default function EthnicWearPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px]">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Indian ladies ethnic wear for festivals and parties"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
              <Link
                href="/products"
                className="mb-4 inline-flex items-center gap-2 text-sm text-card/80 hover:text-card"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to All Products
              </Link>
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                  <Shirt className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="font-serif text-4xl font-bold text-card sm:text-5xl">Ethnic Wear</h1>
                  <p className="mt-1 text-lg text-card/80">Indian ladies clothing for festivals & parties</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProductNotice />

        {/* Products Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Customization Notice */}
            <div className="mb-10 flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
              <Sparkles className="h-6 w-6 flex-shrink-0 text-primary" />
              <p className="text-sm text-foreground">
                <span className="font-semibold">Festive &amp; Party Collection:</span> We offer a range of Indian ladies
                clothing for festivals and parties. Styles, sizes, and colors vary by season. Please call the store to
                check the current collection and pricing.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ethnicWear.map((item) => (
                <div
                  key={item.id}
                  className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg"
                >
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="font-serif text-lg font-bold text-foreground">{item.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Price</span>
                      <p className="text-base font-semibold text-primary">Call Store for Pricing</p>
                    </div>

                    <Button asChild className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      <a href="tel:+14699889029">
                        <Phone className="mr-2 h-4 w-4" />
                        Call for Pricing
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
