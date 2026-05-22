import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { DecorativeCoconutCard } from "@/components/decorative-coconut-card"
import { DecorativeCoconutCollage } from "@/components/decorative-coconut-collage"
import { decorativeCoconuts } from "@/lib/decorative-coconuts-data"
import { ArrowLeft, Palmtree, Palette } from "lucide-react"

// Collage images using actual product images
const collageImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%204.35.20%20PM-7LL5qBIo35DTtsn74AIib9S2CXlhba.jpeg",
    alt: "DecorativeCoconut_004 - Green coconut with R & N initials and Ganesha medallion"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%204.35.04%20PM-vCPPivoLUFvpilgi9XUCQYwaRhBSVC.jpeg",
    alt: "DecorativeCoconut_005 - Green coconut with Ganesha medallion and pearl embellishments"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2012.44.18%20AM%20%282%29-WA52eN3TJDtzWIHY8Qe44OHi9SczgU.jpeg",
    alt: "DecorativeCoconut_008 - Green coconut with Om symbol lotus mandala design"
  }
]

export default function DecorativeCoconutsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px]">
          <DecorativeCoconutCollage images={collageImages} />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
              <Link href="/products/wedding" className="mb-4 inline-flex items-center gap-2 text-sm text-card/80 hover:text-card">
                <ArrowLeft className="h-4 w-4" />
                Back to Wedding
              </Link>
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                  <Palmtree className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="font-serif text-4xl font-bold text-card sm:text-5xl">Decorative Coconuts</h1>
                  <p className="mt-1 text-lg text-card/80">Beautifully decorated coconuts for wedding ceremonies</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Customization Notice */}
            <div className="mb-10 flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
              <Palette className="h-6 w-6 text-primary flex-shrink-0" />
              <p className="text-sm text-foreground">
                <span className="font-semibold">Custom Orders Available:</span> We can customize colors, decorations, initials, and designs to match your preferences. Contact us for personalized options!
              </p>
            </div>

            {decorativeCoconuts.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {decorativeCoconuts.map((coconut) => (
                  <DecorativeCoconutCard key={coconut.id} coconut={coconut} />
                ))}
              </div>
            ) : (
              <div className="rounded-xl bg-secondary p-12 text-center">
                <Palmtree className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">Coming Soon</h3>
                <p className="mt-2 text-muted-foreground">We are adding decorative coconuts to our collection. Please check back soon or call us for availability.</p>
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
            <h2 className="font-serif text-2xl font-bold text-primary-foreground sm:text-3xl">Custom Decorated Coconuts</h2>
            <p className="mt-2 text-primary-foreground/80">We create beautifully decorated coconuts for your wedding. Colors, initials, and decorations can be customized. Order in advance.</p>
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
