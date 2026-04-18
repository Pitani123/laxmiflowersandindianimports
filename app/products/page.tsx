import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { getProducts } from "@/lib/db-products"
import { Phone, Store, ShoppingBag } from "lucide-react"

const productCategories = [
  {
    id: "fresh-flowers",
    name: "Fresh Flowers",
    description: "Daily fresh flowers for home and temple",
    image: "/images/fresh-flowers.jpg",
    href: "/products/fresh-flowers",
  },
  {
    id: "garlands",
    name: "Garlands",
    description: "Traditional Indian garlands for weddings, pooja, and celebrations",
    image: "/images/garlands.jpg",
    href: "/products/garlands",
  },
  {
    id: "bouquets",
    name: "Flower Bouquets",
    description: "Beautiful arrangements for every occasion",
    image: "/images/bouquets.jpg",
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
  {
    id: "rentals",
    name: "Rentals",
    description: "Rental items for events and ceremonies",
    image: "/images/rentals.jpg",
    href: "/products/rentals",
  },
]

export default async function ProductsPage() {
  const products = await getProducts()
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">Our Products</p>
              <h1 className="font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                <span className="text-balance">Explore Our Collection</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Browse our wide selection of fresh flowers, garlands, Indian gifts, traditional dresses, 
                silver items, and more. Add items to your cart and checkout online!
              </p>
            </div>
            
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <div className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-accent-foreground">
                <ShoppingBag className="h-5 w-5" />
                <span className="font-medium">Shop Online</span>
              </div>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/checkout">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  View Cart
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center font-serif text-3xl font-bold">Shop by Category</h2>
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

        {/* Featured Products */}
        <section className="bg-secondary py-20 lg:py-28">
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
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
              <div>
                <h2 className="font-serif text-2xl font-bold text-primary-foreground sm:text-3xl">
                  Ready to Place an Order?
                </h2>
                <p className="mt-2 text-primary-foreground/80">
                  Visit our store or call us to enquire about pricing and availability.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" variant="secondary" className="bg-card text-foreground hover:bg-card/90">
                  <a href="tel:+1234567890">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <Link href="/locations">
                    <Store className="mr-2 h-5 w-5" />
                    Store Locations
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
