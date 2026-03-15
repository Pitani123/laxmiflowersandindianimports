import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Users, Sparkles, Award } from "lucide-react"

const milestones = [
  {
    year: "2003",
    title: "The Beginning",
    description: "Started as a small flower shop with a passion for bringing the beauty of Indian flowers to our community."
  },
  {
    year: "2008",
    title: "Growing Together",
    description: "Expanded our services to include wedding decorations and event planning, serving hundreds of families."
  },
  {
    year: "2015",
    title: "A New Home",
    description: "Moved to our larger location to accommodate our growing selection of Indian imports and gifts."
  },
  {
    year: "2020",
    title: "Expanding Horizons",
    description: "Added silver items, traditional dresses, and Indian snacks to better serve our community's needs."
  },
  {
    year: "Today",
    title: "Still Growing",
    description: "Continuing our legacy of bringing joy and tradition to celebrations, one flower at a time."
  },
]

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "Every arrangement we create is made with love and dedication to our craft."
  },
  {
    icon: Users,
    title: "Community",
    description: "We are proud to be part of this community and serve families through generations."
  },
  {
    icon: Sparkles,
    title: "Quality",
    description: "We source only the freshest flowers and highest quality products for our customers."
  },
  {
    icon: Award,
    title: "Tradition",
    description: "We honor Indian traditions while embracing modern celebrations."
  },
]

export default function OurStoryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-secondary py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <p className="text-sm font-medium uppercase tracking-wider text-primary">Our Story</p>
                <h1 className="font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                  <span className="text-balance">A Family Tradition of Beauty & Service</span>
                </h1>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  For over two decades, Laxmi Flowers and Indian Imports has been more than just a store. 
                  It is a family legacy, a community gathering place, and a celebration of Indian culture 
                  and traditions.
                </p>
              </div>
              
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="/images/story-hero.jpg"
                    alt="Laxmi Flowers store front"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Content */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl space-y-8 text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                How It All Started
              </h2>
              <div className="space-y-6 text-left leading-relaxed text-muted-foreground">
                <p>
                  In 2003, with a deep love for flowers and a dream to bring the beauty of Indian floristry 
                  to our local community, Laxmi Flowers opened its doors. What started as a small shop 
                  selling fresh flowers and traditional garlands quickly became a beloved destination for 
                  families celebrating weddings, pujas, and special occasions.
                </p>
                <p>
                  Our founders brought with them generations of knowledge about flower arrangements, 
                  traditional garland making, and the significance of flowers in Indian culture. 
                  Every marigold string, every rose petal, every jasmine garland carries with it 
                  the traditions passed down through our family.
                </p>
                <p>
                  Over the years, we listened to our customers and expanded our offerings. Today, 
                  alongside our beloved flowers, we offer a carefully curated selection of Indian 
                  gift items, silver pooja articles, traditional clothing, and authentic Indian snacks. 
                  We have become a one-stop shop for all things Indian.
                </p>
                <p>
                  But no matter how much we grow, our mission remains the same: to bring beauty, 
                  tradition, and joy to every celebration we are part of.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-card py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">Our Journey</p>
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">Milestones</h2>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-border md:left-1/2 md:block md:-translate-x-1/2" />
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`relative flex flex-col gap-4 md:flex-row md:gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="flex-1 md:text-right">
                      {index % 2 === 0 && (
                        <div className="rounded-xl bg-secondary p-6 md:ml-auto md:max-w-md">
                          <span className="mb-2 inline-block rounded-full bg-accent/20 px-3 py-1 text-sm font-semibold text-primary">
                            {milestone.year}
                          </span>
                          <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">{milestone.title}</h3>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </div>
                      )}
                    </div>
                    
                    {/* Center dot */}
                    <div className="absolute left-4 hidden h-4 w-4 rounded-full border-4 border-primary bg-background md:relative md:left-0 md:block" />
                    
                    <div className="flex-1">
                      {index % 2 !== 0 && (
                        <div className="rounded-xl bg-secondary p-6 md:mr-auto md:max-w-md">
                          <span className="mb-2 inline-block rounded-full bg-accent/20 px-3 py-1 text-sm font-semibold text-primary">
                            {milestone.year}
                          </span>
                          <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">{milestone.title}</h3>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">What Drives Us</p>
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">Our Values</h2>
            </div>
            
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="rounded-xl border border-border bg-card p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/20">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-6 text-center">
              <h2 className="font-serif text-3xl font-bold sm:text-4xl">
                Become Part of Our Story
              </h2>
              <p className="max-w-2xl text-primary-foreground/80">
                We would love to be part of your next celebration. Visit our store or meet 
                the wonderful team that makes Laxmi Flowers special.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/our-team">
                    Meet Our Team
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <Link href="/locations">Visit Our Store</Link>
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
