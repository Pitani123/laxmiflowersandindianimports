"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const logoOptions = [
  {
    id: 1,
    name: "Style 1 - Traditional Seated",
    description: "Goddess Lakshmi seated on lotus with gold coins flowing. Classic traditional Indian art style with red saree.",
    image: "/images/logo-style-1.jpg",
  },
  {
    id: 2,
    name: "Style 2 - Circular Medallion",
    description: "Circular medallion design with Lakshmi Devi in center, surrounded by decorative lotus petals border.",
    image: "/images/logo-style-2.jpg",
  },
  {
    id: 3,
    name: "Style 3 - Standing Blessing",
    description: "Goddess Lakshmi standing in blessing pose with divine halo. Traditional Indian calendar art style.",
    image: "/images/logo-style-3.jpg",
  },
  {
    id: 4,
    name: "Style 4 - Modern Minimalist",
    description: "Modern stylized silhouette with flowing lines. Clean contemporary Indian art design.",
    image: "/images/logo-style-4.jpg",
  },
  {
    id: 5,
    name: "Style 5 - Portrait",
    description: "Beautiful portrait of Goddess Lakshmi with divine expression, golden crown and ornate jewelry.",
    image: "/images/logo-style-5.jpg",
  },
  {
    id: 6,
    name: "Style 6 - Four Arms (Original)",
    description: "Goddess Lakshmi with four arms holding lotus flowers. Rich traditional pooja art style with marigold garlands.",
    image: "/images/logo-style-6.jpg",
  },
  {
    id: 7,
    name: "Style 7 - Four Arms (Updated)",
    description: "Goddess Lakshmi with four arms. Ornate Indian font style with full name 'Laxmi Flowers and Indian Imports'.",
    image: "/images/logo-style-6-updated.jpg",
  },
]

export default function SelectLogoPage() {
  const [selectedLogo, setSelectedLogo] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card py-6">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">Choose Your Logo</h1>
          <p className="mt-2 text-muted-foreground">
            Select the logo you like best for Laxmi Flowers and Indian Imports
          </p>
          <p className="mt-1 text-sm italic text-primary">
            Tagline: &ldquo;Authentic Indian Traditions for your Life in the USA.&rdquo;
          </p>
        </div>
      </header>

      {/* Logo Grid */}
      <main className="py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {logoOptions.map((logo) => (
              <button
                key={logo.id}
                onClick={() => setSelectedLogo(logo.id)}
                className={`group relative overflow-hidden rounded-2xl border-4 bg-card p-6 text-left transition-all ${
                  selectedLogo === logo.id
                    ? "border-primary shadow-xl"
                    : "border-border hover:border-primary/50 hover:shadow-lg"
                }`}
              >
                {/* Selection Indicator */}
                {selectedLogo === logo.id && (
                  <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                    <Check className="h-5 w-5 text-primary-foreground" />
                  </div>
                )}

                {/* Logo Image */}
                <div className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-xl border border-border">
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Logo Info */}
                <div className="mt-6">
                  <h3 className="font-serif text-xl font-bold text-foreground">{logo.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{logo.description}</p>
                </div>

                {/* Selection State */}
                <div className="mt-4">
                  {selectedLogo === logo.id ? (
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                      <Check className="h-4 w-4" />
                      Selected
                    </span>
                  ) : (
                    <span className="text-sm text-muted-foreground group-hover:text-primary">
                      Click to select
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Selection Summary */}
          {selectedLogo && (
            <div className="mt-12 rounded-xl border border-border bg-card p-6">
              <h2 className="font-serif text-xl font-bold text-foreground">Your Selection</h2>
              <p className="mt-2 text-muted-foreground">
                You have selected <strong>{logoOptions.find(l => l.id === selectedLogo)?.name}</strong>. 
                Please let me know which option you prefer by telling me the option number (1, 2, 3, or 4), 
                and I will update your website with that logo.
              </p>
              <div className="mt-4 flex items-center gap-4">
                <div className="h-20 w-20 overflow-hidden rounded-lg border border-border">
                  <img
                    src={logoOptions.find(l => l.id === selectedLogo)?.image}
                    alt="Selected logo"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-foreground">Laxmi Flowers & Indian Imports</p>
                  <p className="text-sm italic text-muted-foreground">
                    Authentic Indian Traditions for your Life in the USA.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Instructions */}
          <div className="mt-8 rounded-xl bg-secondary p-6 text-center">
<p className="text-muted-foreground">
                <strong className="text-foreground">How to choose:</strong> Click on any logo above to select it. 
                Once you have decided, tell me which option number you like (1-7), and I will apply it to your website.
              </p>
          </div>
        </div>
      </main>
    </div>
  )
}
