import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { getProductsByCategory } from "@/lib/db-products"
import { ArrowLeft, Sparkles, ShoppingBag } from "lucide-react"

export default async function HariAccessoriesPage() {
  const products = await getProductsByCategory('hair-accessories')

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section with Product Image Collage */}
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          {/* 5-Image Collage Grid */}
          <div className="absolute inset-0 grid grid-cols-4 grid-rows-2 gap-1">
            {/* Hair_Accessories_014 - Large left panel */}
            <div className="relative col-span-2 row-span-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2012.44.19%20AM-TuE7NV5SCeRqPQHdS0cWLUMVqyKxfN.jpeg"
                alt="Three Layer Poolajada Veni"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Hair_Accessories_008 - Top right */}
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-21%20at%2010.12.35%20PM-WIptFXF4teqzV72VilRUwcBOeIFFuZ.jpeg"
                alt="Traditional Hair Veni"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Hair_Accessories_004 - Top far right */}
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-21%20at%2010.17.29%20PM-2D5tipAs3sRQ75dBGKLncpYpvN0M8E.jpeg"
                alt="Hair Accessory with Flowers"
                fill
                className="object-cover"
              />
            </div>
            {/* Hair_Accessories_005 - Bottom right */}
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-21%20at%2010.18.54%20PM-X2ZHlnqJlIRGFlZ2rTFMZ0Ll1LFLZP.jpeg"
                alt="Traditional Flower Veni"
                fill
                className="object-cover"
              />
            </div>
            {/* Hair_Accessories_006 - Bottom far right */}
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-21%20at%2010.12.23%20PM-m3vXIZyXjAHwFI8es0FWWR4drNI0kR.jpeg"
                alt="Jasmine Hair Garland"
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
            <div className="mb-10 flex flex-col gap-4 rounded-xl bg-secondary p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="h-6 w-6 text-primary" />
                <p className="font-medium text-foreground">Add items to your cart and checkout online!</p>
              </div>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/checkout">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  View Cart
                </Link>
              </Button>
            </div>

            {products.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
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

        {/* CTA Section */}
        <section className="bg-primary py-12">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-primary-foreground sm:text-3xl">Traditional Hair Accessories</h2>
            <p className="mt-2 text-primary-foreground/80">We offer authentic hair accessories for all religious ceremonies.</p>
            <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="secondary" className="bg-card text-foreground hover:bg-card/90">
                <Link href="/locations">Find a Store</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="bg-card text-foreground hover:bg-card/90">
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
