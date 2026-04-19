import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Navigation as NavIcon, ArrowRight } from "lucide-react"

const locations = [
  {
    id: "main-store",
    name: "Aubrey, TX - Main Store",
    address: "2881 FM1385",
    city: "Aubrey, TX 76227, USA",
    phone: "682-439-6439",
    email: "laxmiflowers.aubrey@gmail.com",
    hours: {
      weekdays: "10:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "10:00 AM - 11:00 PM",
    },
    image: "/images/store-main.jpg",
    mapUrl: "https://maps.google.com/?q=2881+FM1385+Aubrey+TX+76227",
    isPrimary: true,
  },
  {
    id: "edison",
    name: "Edison, NJ Store",
    address: "1655 Oak Tree Rd",
    city: "Edison, NJ, USA",
    phone: "732-799-9567",
    email: "laxmiflowers.edison@gmail.com",
    hours: {
      weekdays: "10:00 AM - 8:30 PM",
      saturday: "10:00 AM - 8:30 PM",
      sunday: "10:00 AM - 8:30 PM",
    },
    image: "/images/store-downtown.jpg",
    mapUrl: "https://maps.google.com/?q=1655+Oak+Tree+Rd+Edison+NJ",
    isPrimary: false,
  },
]

export default function LocationsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">Visit Us</p>
              <h1 className="font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                <span className="text-balance">Our Store Locations</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                We would love to see you in person! Visit one of our stores to explore our full 
                selection of fresh flowers, garlands, Indian gifts, and more. Our friendly team 
                is ready to help you.
              </p>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {locations.map((location) => (
                <div
                  key={location.id}
                  className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg p-8 lg:p-12"
                >
                  {/* Store Images - Temporarily Disabled (will add later) */}
                      <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                        {location.name}
                      </h2>
                      
                      <div className="mt-8 space-y-6">
                        {/* Address */}
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20">
                            <MapPin className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">Address</p>
                            <p className="text-muted-foreground">{location.address}</p>
                            <p className="text-muted-foreground">{location.city}</p>
                          </div>
                        </div>
                        
                        {/* Phone */}
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20">
                            <Phone className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">Phone</p>
                            <a href={`tel:${location.phone}`} className="text-muted-foreground hover:text-primary">
                              {location.phone}
                            </a>
                          </div>
                        </div>
                        
                        {/* Email */}
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20">
                            <Mail className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">Email</p>
                            <a href={`mailto:${location.email}`} className="text-muted-foreground hover:text-primary">
                              {location.email}
                            </a>
                          </div>
                        </div>
                        
                        {/* Hours */}
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20">
                            <Clock className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">Store Hours</p>
                            <div className="mt-1 space-y-1 text-sm text-muted-foreground">
                              <p><span className="font-medium text-foreground">Mon - Fri:</span> {location.hours.weekdays}</p>
                              <p><span className="font-medium text-foreground">Saturday:</span> {location.hours.saturday}</p>
                              <p><span className="font-medium text-foreground">Sunday:</span> {location.hours.sunday}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                          <a href={location.mapUrl} target="_blank" rel="noopener noreferrer">
                            <NavIcon className="mr-2 h-4 w-4" />
                            Get Directions
                          </a>
                        </Button>
                        <Button asChild variant="outline" className="border-foreground/20">
                          <a href={`tel:${location.phone}`}>
                            <Phone className="mr-2 h-4 w-4" />
                            Call Store
                          </a>
                        </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section Placeholder */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">Find Us on the Map</h2>
              <p className="mt-4 text-muted-foreground">
                Click on any location above to get directions from your current location.
              </p>
            </div>
            
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-muted">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto h-12 w-12 text-muted-foreground/50" />
                  <p className="mt-4 text-lg font-medium text-muted-foreground">Interactive Map</p>
                  <p className="mt-2 text-sm text-muted-foreground/70">
                    Use the "Get Directions" buttons above to navigate to our stores
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <p className="text-sm font-medium uppercase tracking-wider text-primary">Get in Touch</p>
                <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                  <span className="text-balance">Have Questions? We Are Here to Help</span>
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  Whether you have questions about our products, need help planning an event, 
                  or want to place a custom order, our team is ready to assist you. Reach out 
                  to us and we will get back to you as soon as possible.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Call us anytime</p>
                      <a href="tel:+16824396439" className="font-medium text-foreground hover:text-primary">
                        682-439-6439
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email us at</p>
                      <a href="mailto:laxmiflowers.aubrey@gmail.com" className="font-medium text-foreground hover:text-primary">
                        laxmiflowers.aubrey@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-xl border border-border bg-card p-8">
                <form className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-foreground">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-foreground">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
