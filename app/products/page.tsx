import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

import { ProductCard } from "@/components/product-card"
import { getProducts } from "@/lib/db-products"
import { Store } from "lucide-react"
import { ProductNotice } from "@/components/product-notice"

const productCategories = [
  {
    id: "fresh-flowers",
    name: "Fresh Flowers",
    description: "Daily fresh flowers for home and temple",
    image: "/images/loose-flowers/jasmine-string.jpg",
    href: "/products/fresh-flowers",
  },
  {
    id: "wedding",
    name: "Wedding",
    description: "Wedding garlands, decorative coconuts, and accessories for your special day",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-22%20at%2010.24.58%20PM-9s9uCjSrK2CYFijcNQxD84SlVqIOAJ.jpeg",
    href: "/products/wedding",
  },
  {
    id: "bouquets",
    name: "Flower Bouquets",
    description: "Beautiful arrangements for every occasion",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-21%20at%2010.21.26%20PM%20%281%29-UMR1pm60R9XMY7mWGZ2tMdpDaQoeSg.jpeg",
    href: "/products/bouquets",
  },
  // Temporarily disabled - Wedding Decorations
  // {
  //   id: "wedding-decorations",
  //   name: "Wedding Decorations",
  //   description: "Complete wedding decor solutions with fresh flowers",
  //   image: "/images/wedding-decorations.jpg",
  //   href: "/products/wedding-decorations",
  // },
  // Temporarily disabled - Indian Gift Items
  // {
  //   id: "gift-items",
  //   name: "Indian Gift Items",
  //   description: "Traditional Indian gifts and puja items",
  //   image: "/images/gift-items.jpg",
  //   href: "/products/gift-items",
  // },
  // Temporarily disabled - Silver Items
  // {
  //   id: "silver-items",
  //   name: "Silver Items",
  //   description: "Pure silver puja items and gifts",
  //   image: "/images/silver-items.jpg",
  //   href: "/products/silver-items",
  // },
  // Temporarily disabled - Brass Items
  // {
  //   id: "brass-items",
  //   name: "Brass Items",
  //   description: "Traditional brass items for pooja and home decor",
  //   image: "/images/gift-items.jpg",
  //   href: "/products/brass-items",
  // },
  // Temporarily disabled - Low Cost Jewellery Items
  // {
  //   id: "jewellery",
  //   name: "Low Cost Jewellery Items",
  //   description: "Affordable traditional Indian jewelry for all occasions",
  //   image: "/images/traditional-dresses.jpg",
  //   href: "/products/jewellery",
  // },
  // Temporarily disabled - Traditional Dresses
  // {
  //   id: "traditional-dresses",
  //   name: "Indian Traditional Dresses",
  //   description: "Beautiful ethnic wear for all occasions",
  //   image: "/images/traditional-dresses.jpg",
  //   href: "/products/traditional-dresses",
  // },
  // Temporarily disabled - Indian Snacks
  // {
  //   id: "snacks",
  //   name: "Indian Snacks",
  //   description: "Delicious traditional Indian snacks and sweets",
  //   image: "/images/snacks.jpg",
  //   href: "/products/snacks",
  // },
  // Temporarily disabled - Rentals
  // {
  //   id: "rentals",
  //   name: "Rentals",
  //   description: "Rental items for events and ceremonies",
  //   image: "/images/rentals.jpg",
  //   href: "/products/rentals",
  // },
]

export default async function ProductsPage() {
  const products = await getProducts()
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        <ProductNotice />

        {/* Categories Grid */}
        <section className="py-10 lg:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center font-serif text-2xl font-bold sm:text-3xl">Shop by Category</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {productCategories.map((category) => (
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
                    <h3 className="font-serif text-2xl font-bold text-card">{category.name}</h3>
                    <p className="mt-1 text-sm text-card/80">{category.description}</p>
                    <div className="mt-3 flex items-center gap-2 text-card">
                      <Store className="h-4 w-4" />
                      <span className="text-sm font-medium">View Products</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products - Temporarily Disabled */}
        {/* <section className="bg-secondary py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center font-serif text-3xl font-bold">Featured Products</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products.slice(0, 8).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <p className="text-muted-foreground">Showing {Math.min(8, products.length)} of {products.length} products</p>
            </div>
          </div>
        </section> */}


      </main>
      
      <Footer />
    </div>
  )
}
