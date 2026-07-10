import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Package, Phone, Sparkles } from "lucide-react"

const rentals = [
  {
    id: "bounce-house",
    name: "Bounce House",
    description:
      "Inflatable bounce house for kids' parties, birthdays, and family events. A fun, safe attraction that keeps children entertained. Delivery and setup available.",
    image: "/images/products/bounce-house.jpg",
  },
  {
    id: "brass-ganesh-idol",
    name: "Brass Ganesh Idol",
    description:
      "Beautiful brass Lord Ganesha idol for pujas, weddings, and religious ceremonies. An auspicious centerpiece for your event's mandap or altar.",
    image: "/images/products/brass-ganesh-idol.jpg",
  },
  {
    id: "brass-srikrishna-idol",
    name: "Brass Sri Krishna Idol",
    description:
      "Elegant brass Lord Sri Krishna idol for festivals, pujas, and ceremonies. A graceful devotional piece to grace your celebration.",
    image: "/images/products/brass-srikrishna-idol.jpg",
  },
  {
    id: "idli-stand-54",
    name: "54 Idli Making Stand",
    description:
      "Large-capacity 54-cavity stainless steel idli making stand, perfect for catering big functions, weddings, and community events. Makes bulk fresh idlis with ease.",
    image: "/images/products/idli-stand.jpg",
  },
  {
    id: "biryani-handi-small",
    name: "Biryani Handi - Small",
    description:
      "Small biryani handi (degh) ideal for smaller gatherings. Traditional cooking pot for authentic biryani and bulk rice dishes.",
    image: "/images/products/biryani-handi-small.jpg",
  },
  {
    id: "biryani-handi-medium",
    name: "Biryani Handi - Medium",
    description:
      "Medium biryani handi (degh) for mid-size parties and functions. Cooks generous portions of biryani, pulao, and curries.",
    image: "/images/products/biryani-handi-medium.jpg",
  },
  {
    id: "biryani-handi-large",
    name: "Biryani Handi - Large",
    description:
      "Large biryani handi (degh) for weddings and large-scale catering. Handles big-batch biryani cooking for hundreds of guests.",
    image: "/images/products/biryani-handi-large.jpg",
  },
]

export default function RentalsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px]">
          <Image
            src="/images/rentals.jpg"
            alt="Rentals for events and ceremonies"
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
                  <Package className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="font-serif text-4xl font-bold text-card sm:text-5xl">Rentals</h1>
                  <p className="mt-1 text-lg text-card/80">Rental items for events, functions &amp; ceremonies</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Rental Notice */}
            <div className="mb-10 flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
              <Sparkles className="h-6 w-6 flex-shrink-0 text-primary" />
              <p className="text-sm text-foreground">
                <span className="font-semibold">Available for Rent:</span> All items are available to rent for your
                events and functions. Availability varies by date. Please call the store to check availability and
                pricing for your occasion.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rentals.map((item) => (
                <div
                  key={item.id}
                  className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg"
                >
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-md">
                      For Rent
                    </div>
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
