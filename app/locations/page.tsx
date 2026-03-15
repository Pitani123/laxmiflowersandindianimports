import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Navigation as NavIcon, ArrowRight, Package } from "lucide-react"

const pickupLocations = [
  {
    id: "pickup-1",
    name: "North Side Pickup Point",
    address: "789 North Avenue",
    city: "North District, State 12347",
    phone: "(123) 456-7892",
    hours: "Mon - Sat: 8:00 AM - 6:00 PM",
    mapUrl: "https://maps.google.com/?q=789+North+Avenue",
  },
  {
    id: "pickup-2",
    name: "East End Pickup Point",
    address: "321 East Boulevard",
    city: "East Side, State 12348",
    phone: "(123) 456-7893",
    hours: "Mon - Fri: 9:00 AM - 5:00 PM",
    mapUrl: "https://maps.google.com/?q=321+East+Boulevard",
  },
  {
    id: "pickup-3",
    name: "West Market Pickup",
    address: "555 West Market Street",
    city: "West Town, State 12349",
    phone: "(123) 456-7894",
    hours: "Daily: 7:00 AM - 7:00 PM",
    mapUrl: "https://maps.google.com/?q=555+West+Market+Street",
  },
  {
    id: "pickup-4",
    name: "South Plaza Pickup",
    address: "888 South Plaza",
    city: "South Area, State 12350",
    phone: "(123) 456-7895",
    hours: "Mon - Sat: 10:00 AM - 8:00 PM",
    mapUrl: "https://maps.google.com/?q=888+South+Plaza",
  },
]

const locations = [
  {
    id: "main-store",
    name: "Main Store",
    address: "123 Main Street",
    city: "Your City, State 12345",
    phone: "(123) 456-7890",
    email: "main@laxmiflowers.com",
    hours: {
      weekdays: "9:00 AM - 7:00 PM",
      saturday: "9:00 AM - 7:00 PM",
      sunday: "10:00 AM - 5:00 PM",
    },
    image: "/images/store-main.jpg",
    mapUrl: "https://maps.google.com/?q=123+Main+Street",
    isPrimary: true,
  },
  {
    id: "downtown",
    name: "Downtown Location",
    address: "456 Center Avenue",
    city: "Downtown, State 12346",
    phone: "(123) 456-7891",
    email: "downtown@laxmiflowers.com",
    hours: {
      weekdays: "10:00 AM - 6:00 PM",
      saturday: "10:00 AM - 6:00 PM",
      sunday: "Closed",
    },
    image: "/images/store-downtown.jpg",
    mapUrl: "https://maps.google.com/?q=456+Center+Avenue",
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
              {locations.map((location, index) => (
                <div
                  key={location.id}
                  className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg"
                >
                  <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    <div className={`relative aspect-[4/3] lg:aspect-auto ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                      <Image
                        src={location.image}
                        alt={`${location.name} storefront`}
                        fill
                        className="object-cover"
                      />
                      {location.isPrimary && (
                        <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                          Main Location
                        </div>
                      )}
                    </div>
                    
                    <div className={`p-8 lg:p-12 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pickup Locations Section */}
        <section className="bg-card py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Package className="h-7 w-7 text-primary" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">Pickup Locations</h2>
              <p className="mt-4 text-muted-foreground">
                Convenient pickup points across the city. Order ahead and pick up at your nearest location.
              </p>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {pickupLocations.map((pickup) => (
                <div
                  key={pickup.id}
                  className="rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-lg"
                >
                  <h3 className="font-serif text-lg font-bold text-foreground">{pickup.name}</h3>
                  
                  <div className="mt-4 space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <div className="text-sm text-muted-foreground">
                        <p>{pickup.address}</p>
                        <p>{pickup.city}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 shrink-0 text-primary" />
                      <a href={`tel:${pickup.phone}`} className="text-sm text-muted-foreground hover:text-primary">
                        {pickup.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">{pickup.hours}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <a href={pickup.mapUrl} target="_blank" rel="noopener noreferrer">
                        <NavIcon className="mr-2 h-4 w-4" />
                        Get Directions
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 rounded-xl bg-secondary p-6 text-center">
              <p className="text-muted-foreground">
                <strong className="text-foreground">How Pickup Works:</strong> Place your order by phone or in-store, 
                select your preferred pickup location, and we will have your items ready for collection.
              </p>
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
                      <a href="tel:+1234567890" className="font-medium text-foreground hover:text-primary">
                        (123) 456-7890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email us at</p>
                      <a href="mailto:info@laxmiflowers.com" className="font-medium text-foreground hover:text-primary">
                        info@laxmiflowers.com
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
