import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ComingSoon } from "@/components/coming-soon"
import { ArrowLeft, Shirt } from "lucide-react"

export default function EthnicWearPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px]">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Indian ladies ethnic wear for festivals and parties"
            fill
            className="object-cover object-center"
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
                  <Shirt className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="font-serif text-4xl font-bold text-card sm:text-5xl">Ethnic Wear</h1>
                  <p className="mt-1 text-lg text-card/80">Indian ladies clothing for festivals & parties</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ComingSoon
          title="Ethnic Wear Coming Soon"
          message="Our festive & party collection of Indian ladies clothing — sarees, lehengas, kurtis, and salwar suits — is on its way. Call the store to check the current collection and pricing."
        />
      </main>

      <Footer />
    </div>
  )
}
