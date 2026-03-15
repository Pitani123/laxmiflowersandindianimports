import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const footerLinks = {
  company: [
    { href: "/our-story", label: "Our Story" },
    { href: "/our-team", label: "Our Team" },
    { href: "/services", label: "Our Services" },
    { href: "/locations", label: "Store Locations" },
    { href: "/reviews", label: "Reviews" },
  ],
  products: [
    { href: "/products/fresh-flowers", label: "Fresh Flowers" },
    { href: "/products/garlands", label: "Garlands" },
    { href: "/products/bouquets", label: "Flower Bouquets" },
    { href: "/products/wedding-decorations", label: "Wedding Decorations" },
    { href: "/products/gift-items", label: "Indian Gift Items" },
    { href: "/products/silver-items", label: "Silver Items" },
    { href: "/products/brass-items", label: "Brass Items" },
    { href: "/products/jewellery", label: "Low Cost Jewellery" },
    { href: "/products/traditional-dresses", label: "Traditional Dresses" },
    { href: "/products/snacks", label: "Indian Snacks" },
    { href: "/products/rentals", label: "Rentals" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo.png" 
                alt="Laxmi Flowers Logo" 
                width={60} 
                height={60}
                className="h-14 w-14 object-contain"
              />
              <div>
                <h3 className="font-serif text-2xl font-bold">Laxmi Flowers</h3>
                <p className="text-sm text-background/60">& Indian Imports</p>
              </div>
            </div>
            <p className="text-xs italic text-accent">Authentic Indian Traditions in the USA</p>
            <p className="text-sm leading-relaxed text-background/80">
              Over 20 years of bringing beauty and tradition to your celebrations. 
              Your trusted source for fresh flowers, garlands, and authentic Indian items.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-background/70 transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-4 font-semibold">Our Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-background/70 transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm text-background/70">
                  123 Main Street<br />
                  Your City, State 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href="tel:+1234567890" className="text-sm text-background/70 hover:text-accent">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href="mailto:info@laxmiflowers.com" className="text-sm text-background/70 hover:text-accent">
                  info@laxmiflowers.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm text-background/70">
                  Mon - Sat: 9AM - 7PM<br />
                  Sun: 10AM - 5PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} Laxmi Flowers and Indian Imports. All rights reserved.
            </p>
            <p className="text-sm text-background/60">
              Serving the community with love for over 20 years
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
