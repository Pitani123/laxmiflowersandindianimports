import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

const services = [
  {
    id: "garlands",
    title: "Garlands",
    subtitle: "Traditional Malas for Every Occasion",
    description: "Our handcrafted garlands (malas) are made fresh daily using traditional techniques passed down through generations. Perfect for weddings, pujas, temple offerings, and special ceremonies.",
    image: "/images/garlands.jpg",
    productLink: "/products/garlands",
    features: [
      "Wedding Varmalas (bride & groom garlands)",
      "Pooja garlands for deities",
      "Temple offerings",
      "Fresh jasmine strings",
      "Marigold garlands",
      "Rose petal malas",
      "Custom designs available",
    ],
  },
  {
    id: "bouquets",
    title: "Flower Bouquets",
    subtitle: "Beautiful Arrangements for Every Moment",
    description: "From romantic roses to vibrant mixed arrangements, our bouquets are designed to convey your emotions perfectly. Fresh flowers arranged with care for birthdays, anniversaries, and everyday gifting.",
    image: "/images/bouquets.jpg",
    productLink: "/products/bouquets",
    features: [
      "Birthday bouquets",
      "Anniversary arrangements",
      "Get well soon flowers",
      "Sympathy arrangements",
      "Just because bouquets",
      "Custom color themes",
      "Same-day availability",
    ],
  },
  // Temporarily disabled - Wedding Decorations
  // {
  //   id: "weddings",
  //   title: "Wedding Decorations",
  //   subtitle: "Transform Your Special Day",
  //   description: "We specialize in traditional Indian wedding decorations that create a magical atmosphere. From mandap decorations to reception centerpieces, we bring your wedding vision to life.",
  //   image: "/images/wedding-decorations.jpg",
  //   productLink: "/products/wedding-decorations",
  //   features: [
  //     "Mandap decoration",
  //     "Stage & backdrop design",
  //     "Table centerpieces",
  //     "Entrance decorations",
  //     "Car decoration",
  //     "Mehendi & Sangeet setups",
  //     "Full wedding packages",
  //   ],
  // },
  {
    id: "fresh-flowers",
    title: "Fresh Flowers",
    subtitle: "Daily Fresh Blooms",
    description: "We source fresh flowers daily to ensure you get the best quality for your needs. Whether for home altar, special occasions, or daily offerings, our flowers are always fresh and fragrant.",
    image: "/images/fresh-flowers.jpg",
    productLink: "/products/fresh-flowers",
    features: [
      "Loose rose petals",
      "Fresh jasmine",
      "Marigold flowers",
      "Lotus flowers",
      "Mixed flower bunches",
      "Seasonal specials",
      "Bulk orders available",
    ],
  },
  // Temporarily disabled - Indian Gift Items
  // {
  //   id: "gifts",
  //   title: "Indian Gift Items",
  //   subtitle: "Authentic Gifts for Every Occasion",
  //   description: "Discover our curated collection of traditional Indian gift items. From decorative pieces to religious items, we have meaningful gifts that celebrate Indian culture and traditions.",
  //   image: "/images/gift-items.jpg",
  //   productLink: "/products/gift-items",
  //   features: [
  //     "Brass diyas & lamps",
  //     "Decorative idols",
  //     "Puja thalis & accessories",
  //     "Home decor items",
  //     "Festival gift sets",
  //     "Wedding gift items",
  //     "Return gift options",
  //   ],
  // },
  // Temporarily disabled - Silver Items
  // {
  //   id: "silver",
  //   title: "Silver Items",
  //   subtitle: "Elegant Silver for Pooja & Gifting",
  //   description: "Our collection of silver items includes traditional pooja articles and elegant gift pieces. Each item is crafted with attention to detail, perfect for religious ceremonies and special occasions.",
  //   image: "/images/silver-items.jpg",
  //   productLink: "/products/silver-items",
  //   features: [
  //     "Silver pooja thalis",
  //     "Silver kalash",
  //     "Silver diyas",
  //     "Silver idols",
  //     "Baby gifting silver",
  //     "Wedding silver items",
  //     "Pure silver articles",
  //   ],
  // },
  // Temporarily disabled - Traditional Dresses
  // {
  //   id: "dresses",
  //   title: "Traditional Dresses",
  //   subtitle: "Beautiful Indian Attire",
  //   description: "Explore our selection of traditional Indian clothing for men, women, and children. From elegant sarees to festive kurtas, we have the perfect outfit for your celebrations.",
  //   image: "/images/traditional-dresses.jpg",
  //   productLink: "/products/traditional-dresses",
  //   features: [
  //     "Sarees for all occasions",
  //     "Lehengas & Anarkalis",
  //     "Men's kurta sets",
  //     "Kids' ethnic wear",
  //     "Festival collections",
  //     "Wedding attire",
  //     "Accessories & jewelry",
  //   ],
  // },
  {
    id: "snacks",
    title: "Indian Festival Snacks",
    subtitle: "Authentic Flavors for Every Celebration",
    description: "Celebrate Indian festivals with our authentic snacks and sweets. From Diwali mithai to Holi gujiya, Navratri fasting foods to Pongal specials, we have traditional treats for every occasion.",
    image: "/images/snacks.jpg",
    productLink: "/products/snacks",
    features: [
      "Diwali sweets & mithai",
      "Holi gujiya & thandai",
      "Navratri fasting foods",
      "Pongal & Onam specials",
      "Rakhi gift boxes",
      "Ganesh Chaturthi modak",
      "Festival bulk orders",
    ],
  },
  {
    id: "rentals",
    title: "Event Rentals",
    subtitle: "Everything You Need for Your Event",
    description: "Make your events special with our rental collection. From traditional brass items to modern decoration pieces, we have everything you need to create the perfect setting.",
    image: "/images/rentals.jpg",
    productLink: "/products/rentals",
    features: [
      "Brass kalash & vessels",
      "Decorative umbrellas",
      "Traditional stands",
      "Ceremony items",
      "Table settings",
      "Stage props",
      "Package deals available",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">Our Services</p>
              <h1 className="font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                <span className="text-balance">Everything You Need for Your Celebrations</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                From fresh flowers and traditional garlands to Indian gifts, silver items, 
                traditional dresses, and authentic snacks. We are your one-stop shop for 
                all things Indian.
              </p>
            </div>
            
            {/* Quick Nav */}
            <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
              {services.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent/20 hover:text-primary"
                >
                  {service.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-32">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid items-center gap-12 lg:grid-cols-2 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div>
                      <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
                        {service.subtitle}
                      </p>
                      <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                        {service.title}
                      </h2>
                    </div>
                    <p className="leading-relaxed text-muted-foreground">{service.description}</p>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/30">
                            <Check className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                        <Link href={service.productLink}>
                          View All Products
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="border-primary/30">
                        <Link href="/locations">
                          Visit Store
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Orders */}
        <section className="bg-card py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">Custom Orders</p>
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                <span className="text-balance">Do Not See What You Need?</span>
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                We specialize in custom orders and can help you find or create exactly what you are looking for. 
                Whether it is a specific flower arrangement, custom garland design, or bulk order for an event, 
                our team is here to help.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="tel:+1234567890">
                    Call Us to Discuss
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-foreground/20">
                  <Link href="/locations">Visit Our Store</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-6 text-center">
              <h2 className="font-serif text-3xl font-bold sm:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="max-w-2xl text-primary-foreground/80">
                Visit our store to see our full selection of products and services. 
                Our friendly team is ready to help you find exactly what you need.
              </p>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/locations">
                  Find Our Store Location
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
