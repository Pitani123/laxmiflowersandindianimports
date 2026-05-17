import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { WeddingGarlandsCollage } from "./wedding-garlands-collage"
import { FreshFlowersCollage } from "./fresh-flowers-collage"
import { FlowerBouquetCollage } from "./flower-bouquet-collage"

const categories = [
  {
    name: "Flower Bouquets",
    href: "/products/bouquets",
    image: "/images/bouquets.jpg",
    description: "Beautiful arrangements for gifting",
    subcategories: [],
  },
  {
    name: "Wedding",
    href: "/products/wedding",
    image: "/images/garlands.jpg",
    description: "Traditional wedding essentials",
    subcategories: [
      { name: "Wedding Garlands", href: "/products/wedding/wedding-garlands" },
      { name: "Camphor Garlands", href: "/products/wedding/camphor-garlands" },
      { name: "Decorative Coconuts", href: "/products/wedding/decorative-coconuts" },
      { name: "Wedding Accessories", href: "/products/wedding/wedding-accessories" },
      { name: "Hair Accessories", href: "/products/wedding/hair-accessories" },
    ],
  },
  {
    name: "Fresh Flowers",
    href: "/products/fresh-flowers",
    image: "/images/fresh-flowers.jpg",
    description: "Daily fresh flowers for all occasions",
    subcategories: [
      { name: "Loose Flowers", href: "/products/fresh-flowers/loose-flowers" },
      { name: "Pooja Garlands", href: "/products/fresh-flowers/pooja-garlands" },
    ],
  },
]

export function ProductCategories() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <div
          key={category.name}
          className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-lg"
        >
          {/* Category Image */}
          <Link href={category.href} className="block">
            <div className="relative aspect-[4/3] overflow-hidden">
              {category.name === "Wedding" ? (
                <WeddingGarlandsCollage />
              ) : category.name === "Fresh Flowers" ? (
                <FreshFlowersCollage />
              ) : category.name === "Flower Bouquets" ? (
                <FlowerBouquetCollage />
              ) : (
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-serif text-xl font-bold text-white">
                  {category.name}
                </h3>
                <p className="mt-1 text-sm text-white/80">{category.description}</p>
              </div>
            </div>
          </Link>

          {/* Subcategories */}
          <div className="p-4">
            {category.subcategories.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {category.subcategories.map((sub) => (
                  <Link
                    key={sub.name}
                    href={sub.href}
                    className="inline-flex items-center rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                href={category.href}
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                View Collection
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
