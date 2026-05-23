import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ProductCategories } from "@/components/product-categories"
import { Star, Heart, Sparkles, Flower2, Gift } from "lucide-react"

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
        <section className="relative overflow-hidden py-6 lg:py-8">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero-background.png')" }}
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-white/95" />
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Desktop: badges on sides of heading */}
            <div className="hidden items-center justify-between lg:flex">
              {/* Left badges */}
              <div className="flex flex-col items-end gap-2">
                <div className="inline-flex w-44 items-center justify-center gap-1.5 rounded-full bg-accent/20 px-3 py-1.5 text-sm font-medium text-foreground">
                  <Sparkles className="h-3.5 w-3.5 text-accent" />
                  <span>Fresh Flowers Daily</span>
                </div>
                <div className="inline-flex w-44 items-center justify-center gap-1.5 rounded-full bg-accent/20 px-3 py-1.5 text-sm font-medium text-foreground">
                  <Flower2 className="h-3.5 w-3.5 text-accent" />
                  <span>Flower Bouquets</span>
                </div>
              </div>
              
              {/* Center heading */}
              <div className="max-w-lg text-center">
                <h1 className="font-serif text-4xl font-bold leading-tight text-foreground">
                  Bringing Beauty to Your Celebrations
                </h1>
              </div>
              
              {/* Right badges */}
              <div className="flex flex-col items-start gap-2">
                <div className="inline-flex w-44 items-center justify-center gap-1.5 rounded-full bg-accent/20 px-3 py-1.5 text-sm font-medium text-foreground">
                  <Heart className="h-3.5 w-3.5 text-accent" />
                  <span>Wedding Garlands</span>
                </div>
                <div className="inline-flex w-44 items-center justify-center gap-1.5 rounded-full bg-accent/20 px-3 py-1.5 text-sm font-medium text-foreground">
                  <Gift className="h-3.5 w-3.5 text-accent" />
                  <span>Traditional Gifts</span>
                </div>
              </div>
            </div>
            
            {/* Mobile: stacked layout */}
            <div className="text-center lg:hidden">
              <div className="mb-3 flex flex-wrap items-center justify-center gap-2">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/20 px-3 py-1.5 text-xs font-medium text-foreground">
                  <Sparkles className="h-3.5 w-3.5 text-accent" />
                  <span>Fresh Flowers Daily</span>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/20 px-3 py-1.5 text-xs font-medium text-foreground">
                  <Flower2 className="h-3.5 w-3.5 text-accent" />
                  <span>Flower Bouquets</span>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/20 px-3 py-1.5 text-xs font-medium text-foreground">
                  <Heart className="h-3.5 w-3.5 text-accent" />
                  <span>Wedding Garlands</span>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/20 px-3 py-1.5 text-xs font-medium text-foreground">
                  <Gift className="h-3.5 w-3.5 text-accent" />
                  <span>Traditional Gifts</span>
                </div>
              </div>
              <h1 className="font-serif text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                <span className="text-balance">Bringing Beauty to Your Celebrations</span>
              </h1>
            </div>
            
            <p className="mx-auto mt-3 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
              Your trusted source for fresh flowers, traditional garlands, Indian gifts, 
              and everything you need to make your special moments unforgettable.
            </p>
          </div>
          
          {/* Product Categories */}
          <div className="relative mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-center font-serif text-2xl font-bold text-foreground sm:text-3xl">
              Shop by Category
            </h2>
            <ProductCategories />
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



        




      </main>
      
      <Footer />
    </div>
  )
}
