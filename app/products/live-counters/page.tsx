import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Phone, Store, Sparkles, PartyPopper } from "lucide-react"

const liveCounters = [
  {
    id: "live-chaat-pani-puri",
    name: "Live Chaat & Pani Puri Counter",
    description:
      "A crowd-favorite live station serving freshly assembled chaat and pani puri on the spot. Perfect for parties, functions, and weddings.",
    image: "/placeholder.svg?height=800&width=1000",
  },
  {
    id: "live-sugarcane-juice",
    name: "Live Sugarcane Juice Counter",
    description:
      "Freshly pressed sugarcane juice served live at your event. A refreshing, traditional treat for guests of all ages.",
    image: "/placeholder.svg?height=800&width=1000",
  },
  {
    id: "live-floral-bloom-bar",
    name: "Live Floral Bloom Bar",
    description:
      "An interactive floral station where guests create their own fresh flower arrangements. A beautiful, hands-on experience for any celebration.",
    image: "/placeholder.svg?height=800&width=1000",
  },
]

export default function LiveCountersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px]">
          <Image
            src="/placeholder.svg?height=900&width=1600"
            alt="Live counters and interactive stations for events"
            fill
            className="object-cover"
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
                  <PartyPopper className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="font-serif text-4xl font-bold text-card sm:text-5xl">Live Counters</h1>
                  <p className="mt-1 text-lg text-card/80">
                    Live food, beverage &amp; floral stations for parties, functions &amp; weddings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Call for pricing banner */}
            <div className="mb-10 flex flex-col gap-4 rounded-xl bg-secondary p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <Store className="h-6 w-6 flex-shrink-0 text-primary" />
                <p className="font-medium text-foreground">
                  Live counters are custom-arranged for your event. Call the store for pricing and availability.
                </p>
              </div>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="tel:+14699889029">
                  <Phone className="mr-2 h-4 w-4" />
                  Call for Pricing
                </a>
              </Button>
            </div>

            <div className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-foreground">Our Live Counters</h2>
              <p className="mt-1 text-muted-foreground">
                Interactive stations that bring energy and flavor to your celebration
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {liveCounters.map((counter) => (
                <div
                  key={counter.id}
                  className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={counter.image || "/placeholder.svg"}
                      alt={counter.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      <Sparkles className="h-3.5 w-3.5" />
                      Live Station
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-serif text-xl font-bold text-foreground">{counter.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{counter.description}</p>
                    <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                      <span className="text-sm font-medium text-primary">Call Store for Pricing</span>
                      <Button
                        asChild
                        size="sm"
                        className="bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <a href="tel:+14699889029">
                          <Phone className="mr-1.5 h-3.5 w-3.5" />
                          Call
                        </a>
                      </Button>
                    </div>
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
