import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Heart, Sparkles } from "lucide-react"

const features = [
  {
    icon: Star,
    title: "Trusted Quality",
    description: "Trusted by the community for beautiful celebrations",
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
                  <span>Fresh Flowers Daily</span>
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
                    <Link href="/products">View Products</Link>
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
                      <p className="text-2xl font-bold text-foreground">100%</p>
                      <p className="text-sm text-muted-foreground">Fresh Quality</p>
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
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/locations">Find Our Store</Link>
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
