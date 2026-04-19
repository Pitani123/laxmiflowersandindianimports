import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Heart, ShoppingBag, Palmtree, Gem, Sparkles } from "lucide-react"

const subcategories = [
  {
    id: "wedding-garlands",
    name: "Wedding Garlands",
    description: "Traditional Indian garlands for weddings and celebrations",
    image: "/images/garlands.jpg",
    href: "/products/wedding/wedding-garlands",
    icon: Heart,
  },
  {
    id: "decorative-coconuts",
    name: "Decorative Coconuts",
    description: "Beautifully decorated coconuts for wedding ceremonies",
    image: "/images/decorative-coconuts.jpg",
    href: "/products/wedding/decorative-coconuts",
    icon: Palmtree,
  },
  {
    id: "wedding-accessories",
    name: "Wedding Accessories",
    description: "Essential accessories for traditional Indian weddings",
    image: "/images/wedding-accessories.jpg",
    href: "/products/wedding/wedding-accessories",
    icon: Gem,
  },
  {
    id: "hari-accessories",
    name: "Hari Accessories",
    description: "Traditional Hari accessories for religious ceremonies",
    image: "/images/hari-accessories.jpg",
    href: "/products/wedding/hari-accessories",
    icon: Sparkles,
  },
]

export default function WeddingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px]">
          <Image
            src="/images/garlands.jpg"
            alt="Wedding Collection"
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
                  <Heart className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="font-serif text-4xl font-bold text-card sm:text-5xl">Wedding</h1>
                  <p className="mt-1 text-lg text-card/80">Everything you need for your special day</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subcategories Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-4 rounded-xl bg-secondary p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="h-6 w-6 text-primary" />
                <p className="font-medium text-foreground">Browse our wedding categories below</p>
              </div>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/checkout">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  View Cart
                </Link>
              </Button>
            </div>

            <h2 className="mb-8 font-serif text-2xl font-bold text-foreground">Shop by Category</h2>

            <div className="grid gap-6 sm:grid-cols-2">
              {subcategories.map((category) => {
                const IconComponent = category.icon
                return (
                  <Link
                    key={category.id}
                    href={category.href}
                    className="group relative aspect-[4/3] overflow-hidden rounded-xl"
                  >
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                        <IconComponent className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-card">{category.name}</h3>
                      <p className="mt-1 text-sm text-card/80">{category.description}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-12">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-primary-foreground sm:text-3xl">Custom Wedding Orders</h2>
            <p className="mt-2 text-primary-foreground/80">We create custom wedding decorations and garlands. Order in advance for best results.</p>
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
