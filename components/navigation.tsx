"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CartIcon } from "@/components/cart-icon"

const productLinks = [
  { href: "/products/fresh-flowers", label: "Fresh Flowers" },
  { href: "/products/garlands", label: "Garlands" },
  { href: "/products/bouquets", label: "Flower Bouquets" },
  { href: "/products/wedding-decorations", label: "Wedding Decorations" },
  { href: "/products/gift-items", label: "Indian Gift Items" },
  { href: "/products/silver-items", label: "Silver Items" },
  { href: "/products/brass-items", label: "Brass Items" },
  { href: "/products/jewellery", label: "Low Cost Jewellery Items" },
  { href: "/products/traditional-dresses", label: "Indian Traditional Dresses" },
  { href: "/products/snacks", label: "Indian Snacks" },
  { href: "/products/rentals", label: "Rentals" },
]

const aboutLinks = [
  { href: "/our-story", label: "Our Story" },
  { href: "/our-team", label: "Our Team" },
  { href: "/services", label: "Our Services" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <img 
            src="/images/logo.png" 
            alt="Laxmi Flowers Logo" 
            width={60} 
            height={60}
            className="h-14 w-14 object-contain"
          />
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold text-primary sm:text-2xl">Laxmi Flowers & Indian Imports</span>
            <span className="hidden text-[10px] italic text-muted-foreground sm:block">Authentic Indian Traditions in the USA</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          <Link
            href="/"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            Home
          </Link>

          {/* Products Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="flex items-center gap-1 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
              Products
              <ChevronDown className={`h-4 w-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
            </button>
            <div 
              className={`absolute left-0 top-full z-50 w-64 rounded-lg border border-border bg-background p-2 shadow-lg transition-all ${productsOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
            >
              <Link
                href="/products"
                className="block rounded-md px-3 py-2 text-sm font-medium text-primary hover:bg-secondary"
                onClick={() => setProductsOpen(false)}
              >
                View All Products
              </Link>
              <div className="my-2 border-t border-border" />
              {productLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-secondary hover:text-primary"
                  onClick={() => setProductsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* About Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button className="flex items-center gap-1 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
              About Us
              <ChevronDown className={`h-4 w-4 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
            </button>
            <div 
              className={`absolute left-0 top-full z-50 w-48 rounded-lg border border-border bg-background p-2 shadow-lg transition-all ${aboutOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
            >
              {aboutLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-secondary hover:text-primary"
                  onClick={() => setAboutOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/locations"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            Locations
          </Link>

          <Link
            href="/reviews"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            Reviews
          </Link>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            <Phone className="h-4 w-4" />
            <span>Call Us</span>
          </a>
          <CartIcon />
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/locations">Visit Store</Link>
          </Button>
        </div>

        {/* Mobile Cart & Menu */}
        <div className="flex items-center gap-3 lg:hidden">
          <CartIcon />
          <button
            className="flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="flex flex-col px-4 py-4">
            <Link
              href="/"
              className="py-3 text-base font-medium text-foreground/80 transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Products Dropdown */}
            <div>
              <button
                className="flex w-full items-center justify-between py-3 text-base font-medium text-foreground/80"
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              >
                Products
                <ChevronDown className={`h-5 w-5 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileProductsOpen && (
                <div className="ml-4 border-l border-border pl-4">
                  <Link
                    href="/products"
                    className="block py-2 text-sm font-medium text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    View All Products
                  </Link>
                  {productLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block py-2 text-sm text-foreground/70 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile About Dropdown */}
            <div>
              <button
                className="flex w-full items-center justify-between py-3 text-base font-medium text-foreground/80"
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              >
                About Us
                <ChevronDown className={`h-5 w-5 transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileAboutOpen && (
                <div className="ml-4 border-l border-border pl-4">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block py-2 text-sm text-foreground/70 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/locations"
              className="py-3 text-base font-medium text-foreground/80 transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Locations
            </Link>

            <Link
              href="/reviews"
              className="py-3 text-base font-medium text-foreground/80 transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Reviews
            </Link>

            <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4">
              <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>Call Us</span>
              </a>
              <Button asChild className="w-full bg-primary text-primary-foreground">
                <Link href="/locations">Visit Store</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
