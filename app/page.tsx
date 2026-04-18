import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Heart, Sparkles } from "lucide-react"

const services = [
  {
    title: "Garlands",
    description: "Traditional flower garlands for weddings, pujas, and special occasions",
    image: "/images/garlands.jpg",
  },
  {
    title: "Flower Bouquets",
    description: "Beautifully arranged bouquets for every celebration",
    image: "/images/bouquets.jpg",
  },
  // Temporarily disabled - Wedding Decorations
  // {
  //   title: "Wedding Decorations",
  //   description: "Transform your venue with stunning floral arrangements",
  //   image: "/images/wedding-decorations.jpg",
  // },
  // Temporarily disabled - Indian Gift Items
  // {
  //   title: "Indian Gift Items",
  //   description: "Authentic Indian gifts for all occasions",
  //   image: "/images/gift-items.jpg",
  // },
  // Temporarily disabled - Silver Items
  // {
  //   title: "Silver Items",
  //   description: "Elegant silver pieces for pooja and gifting",
  //   image: "/images/silver-items.jpg",
  // },
  // Temporarily disabled - Traditional Dresses
  // {
  //   title: "Traditional Dresses",
  //   description: "Beautiful Indian attire for the whole family",
  //   image: "/images/traditional-dresses.jpg",
  // },
  {
    title: "Fresh Flowers",
    description: "Daily fresh flowers for home altar and special occasions",
    image: "/images/fresh-flowers.jpg",
  },
  {
    title: "Indian Snacks",
    description: "Delicious traditional Indian snacks and sweets",
    image: "/images/snacks.jpg",
  },
]

const features = [
  {
    icon: Star,
    title: "20+ Years Experience",
    description: "Trusted by the community for over two decades",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every arrangement crafted with care and attention",
  },
  {
    icon: Sparkles,
    title: "Fresh Daily",
    description: "Fresh flowers sourced and arranged daily",
  },
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-secondary py-20 lg:py-32">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent blur-3xl" />
          </div>
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm text-foreground">
                  <Sparkles className="h-4 w-4 text-accent" />
                  <span>Serving since 2003</span>
                </div>
                
                <h1 className="font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                  <span className="text-balance">Bringing Beauty & Tradition to Your Celebrations</span>
                </h1>
                
                <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
                  Your trusted source for fresh flowers, traditional garlands, Indian gifts, 
                  and everything you need to make your special moments unforgettable.
                </p>
                
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href="/services">
                      Explore Our Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-foreground/20">
                    <Link href="/our-story">Our Story</Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/images/hero-flowers.jpg"
                    alt="Beautiful flower arrangement by Laxmi Flowers"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 rounded-xl bg-card p-6 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                      <Star className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">20+</p>
                      <p className="text-sm text-muted-foreground">Years of Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="border-b border-border bg-card py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent/20">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">What We Offer</p>
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">Our Services</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                From fresh flowers to traditional Indian items, we have everything you need 
                for your celebrations, ceremonies, and everyday moments.
              </p>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-serif text-xl font-semibold text-white">{service.title}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                    <span className="mt-3 inline-flex items-center text-sm font-medium text-primary">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* New Offerings Banner */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
              <div className="max-w-2xl">
                <p className="mb-2 text-sm font-medium uppercase tracking-wider text-accent">New at Laxmi Flowers</p>
                <h2 className="font-serif text-3xl font-bold sm:text-4xl">
                  Now Offering Brass Items, Jewellery & Indian Snacks
                </h2>
                <p className="mt-4 text-primary-foreground/80">
                  We have expanded our collection to serve you better. Visit us to explore 
                  our range of authentic Indian products.
                </p>
              </div>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/locations">
                  Visit Our Store
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Fresh Flowers & Rentals */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative">
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src="/images/fresh-flowers.jpg"
                    alt="Fresh flowers at Laxmi Flowers"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 aspect-square w-1/2 overflow-hidden rounded-xl shadow-xl">
                  <Image
                    src="/images/rentals.jpg"
                    alt="Rental items for events"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="space-y-6 lg:pl-8">
                <p className="text-sm font-medium uppercase tracking-wider text-primary">Fresh & Beautiful</p>
                <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                  Fresh Flowers Daily & Event Rentals
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  We source the freshest flowers daily to ensure your arrangements are vibrant and long-lasting. 
                  Our rental collection includes everything you need for your events, from decorative items to 
                  traditional vessels.
                </p>
                <ul className="space-y-3">
                  {["Daily fresh flower deliveries", "Wide variety of Indian flowers", "Event rental equipment", "Custom arrangements available"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/services">
                    View All Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Ready to Make Your Celebration Special?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Visit our store or give us a call. Our friendly team is here to help you 
                find exactly what you need for your special occasions.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/locations">Find Our Store</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-foreground/20">
                  <a href="tel:+1234567890">Call (123) 456-7890</a>
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
