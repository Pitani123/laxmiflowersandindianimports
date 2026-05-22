import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { FreshFlowersCollage } from "@/components/fresh-flowers-collage"
import { LooseFlowersCollage } from "@/components/loose-flowers-collage"
import { PoojaGarlandsCollage } from "@/components/pooja-garlands-collage"
import { ArrowLeft, Flower2, ShoppingBag, Leaf, Heart } from "lucide-react"

const subcategories = [
  {
    id: "loose-flowers",
    name: "Loose Flowers",
    description: "Fresh loose flowers for daily pooja and home decoration",
    image: "/images/fresh-flowers.jpg",
    href: "/products/fresh-flowers/loose-flowers",
    icon: Leaf,
  },
  {
    id: "pooja-garlands",
    name: "Pooja Garlands",
    description: "Traditional garlands for temple and pooja ceremonies",
    image: "/images/pooja-garlands-collage.jpg",
    href: "/products/fresh-flowers/pooja-garlands",
    icon: Heart,
  },
]

export default function FreshFlowersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section with Product Image Collage */}
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <FreshFlowersCollage />
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

        {/* Subcategories Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">


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
                    {category.id === "loose-flowers" ? (
                      <LooseFlowersCollage />
                    ) : category.id === "pooja-garlands" ? (
                      <PoojaGarlandsCollage />
                    ) : (
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
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


      </main>
      
      <Footer />
    </div>
  )
}
