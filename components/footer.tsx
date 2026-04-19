import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const footerLinks = {
  company: [
    { href: "/services", label: "Our Services" },
    { href: "/locations", label: "Store Locations" },
    { href: "/reviews", label: "Reviews" },
  ],
  products: [
    { href: "/products/fresh-flowers", label: "Fresh Flowers" },
    { href: "/products/wedding", label: "Wedding" },
    { href: "/products/bouquets", label: "Flower Bouquets" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <h3 className="font-serif text-2xl font-bold">Laxmi Flowers</h3>
            </div>
            <p className="text-xs italic text-accent">Authentic Indian Traditions in the USA</p>
            <p className="text-sm leading-relaxed text-background/80">
              A long-standing tradition of bringing beauty to your celebrations. 
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
            <h4 className="mb-4 font-semibold">Contact Us (Main Store)</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm text-background/70">
                  2881 FM1385<br />
                  Aubrey, TX 76227, USA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href="tel:+14699889029" className="text-sm text-background/70 hover:text-accent">
                  +1-469-988-9029
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href="mailto:laxmiflowers.aubrey@gmail.com" className="text-sm text-background/70 hover:text-accent">
                  laxmiflowers.aubrey@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm text-background/70">
                  Mon - Sun: 10AM - 11PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} Laxmi Flowers. All rights reserved.
            </p>
            <p className="text-sm text-background/60">
              Serving the community with love and tradition
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
