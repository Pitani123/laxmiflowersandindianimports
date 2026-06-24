import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { WeddingAccessoriesCollage } from "@/components/wedding-accessories-collage"
import { HairAccessoriesCollage } from "@/components/hair-accessories-collage"
import { WeddingGarlandsCollage } from "@/components/wedding-garlands-collage"
import { DecorativeCoconutCollage } from "@/components/decorative-coconut-collage"
import { WeddingRentalsCollage } from "@/components/wedding-rentals-collage"

// Collage images for decorative coconuts
const decorativeCoconutCollageImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%204.35.20%20PM-7LL5qBIo35DTtsn74AIib9S2CXlhba.jpeg",
    alt: "DecorativeCoconut_004 - Green coconut with R & N initials and Ganesha medallion"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%204.35.04%20PM-vCPPivoLUFvpilgi9XUCQYwaRhBSVC.jpeg",
    alt: "DecorativeCoconut_005 - Green coconut with Ganesha medallion and pearl embellishments"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2012.44.18%20AM%20%282%29-WA52eN3TJDtzWIHY8Qe44OHi9SczgU.jpeg",
    alt: "DecorativeCoconut_008 - Green coconut with Om symbol lotus mandala design"
  }
]
import { ArrowLeft, Heart, Palmtree, Gem, Sparkles, Flame, Package } from "lucide-react"
import { ProductNotice } from "@/components/product-notice"

const subcategories = [
  {
    id: "wedding-garlands",
    name: "Wedding Garlands",
    description: "Traditional Indian garlands for weddings and celebrations",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-22%20at%2010.24.58%20PM-9s9uCjSrK2CYFijcNQxD84SlVqIOAJ.jpeg",
    href: "/products/wedding/wedding-garlands",
    icon: Heart,
  },
  {
    id: "camphor-garlands",
    name: "Camphor Garlands",
    description: "Beautiful camphor garlands for traditional ceremonies",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%204.36.59%20PM-FRRNJgBs7q27lot0ETR5tdY62Yw71t.jpeg",
    href: "/products/wedding/camphor-garlands",
    icon: Flame,
  },
  {
    id: "decorative-coconuts",
    name: "Decorative Coconuts",
    description: "Beautifully decorated coconuts for wedding ceremonies",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%204.35.04%20PM-vCPPivoLUFvpilgi9XUCQYwaRhBSVC.jpeg",
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
    id: "hair-accessories",
    name: "Hair Accessories",
    description: "Traditional hair accessories for religious ceremonies",
    image: "/images/hair-accessories.jpg",
    href: "/products/wedding/hair-accessories",
    icon: Sparkles,
  },
  {
    id: "rentals",
    name: "Rentals",
    description: "Traditional wedding ritual items available to rent per day",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kashi%20yatra%20set-0AyQNDakKZBOFdqw5FptkHRPL9M3Hv.jpeg",
    href: "/products/wedding/rentals",
    icon: Package,
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
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-22%20at%2010.24.58%20PM-9s9uCjSrK2CYFijcNQxD84SlVqIOAJ.jpeg"
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

        <ProductNotice />

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
                    {category.id === "wedding-garlands" ? (
                      <WeddingGarlandsCollage />
                    ) : category.id === "wedding-accessories" ? (
                      <WeddingAccessoriesCollage />
                    ) : category.id === "hair-accessories" ? (
                      <HairAccessoriesCollage />
                    ) : category.id === "decorative-coconuts" ? (
                      <DecorativeCoconutCollage images={decorativeCoconutCollageImages} />
                    ) : category.id === "rentals" ? (
                      <WeddingRentalsCollage />
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
