import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const teamMembers = [
  {
    name: "Praveen Kamuju",
    role: "Founder & Owner",
    bio: "Praveen founded Laxmi Flowers with a vision to bring authentic Indian flowers and traditions to the community. His passion and dedication have made this dream a reality.",
    image: "/images/team-praveen.jpg",
  },
  {
    name: "Sirisha Kamuju",
    role: "Co-Owner, Operations & Head Florist",
    bio: "Sirisha manages operations and is also a talented Head Florist & Garland Specialist. Her creativity and attention to detail ensure every arrangement is perfect.",
    image: "/images/team-sirisha.jpg",
  },
  {
    name: "Manju",
    role: "Head Florist & Garland Specialist",
    bio: "Manju is an expert in traditional Indian floristry and garland making. Her beautiful creations bring joy to weddings, pujas, and special ceremonies.",
    image: "/images/team-manju.jpg",
  },
  {
    name: "Roopa",
    role: "Events & Rentals Specialist",
    bio: "Roopa coordinates our event services and rental department, ensuring every celebration has the perfect decorations and arrangements.",
    image: "/images/team-roopa.jpg",
  },
]

export default function OurTeamPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">Our Team</p>
              <h1 className="font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                <span className="text-balance">Meet the Family Behind Laxmi Flowers</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Our dedicated team brings together years of experience, passion for flowers, 
                and a deep love for Indian culture. Together, we are committed to making 
                your celebrations beautiful.
              </p>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="group overflow-hidden rounded-xl border border-border bg-card"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-serif text-xl font-semibold text-white">{member.name}</h3>
                      <p className="text-sm text-white/80">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="bg-card py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="/images/team-together.jpg"
                    alt="Laxmi Flowers team working together"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-sm font-medium uppercase tracking-wider text-primary">Join Our Family</p>
                <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                  <span className="text-balance">We Are Always Looking for Passionate People</span>
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  Do you have a passion for flowers, customer service, or Indian culture? 
                  We are always looking for enthusiastic team members who want to be part of 
                  something special. Whether you are experienced or just starting out, we would 
                  love to hear from you.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/20">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <p className="text-foreground">Friendly and supportive work environment</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/20">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <p className="text-foreground">Opportunities to learn traditional Indian floristry</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/20">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <p className="text-foreground">Be part of joyful celebrations every day</p>
                  </div>
                </div>
                <Button asChild className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="mailto:laxmiflowers.aubrey@gmail.com">
                    Contact Us About Opportunities
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-6 text-center">
              <h2 className="font-serif text-3xl font-bold sm:text-4xl">
                Come Say Hello
              </h2>
              <p className="max-w-2xl text-primary-foreground/80">
                We would love to meet you in person. Stop by our store and let our team 
                help you find the perfect flowers or gifts for your needs.
              </p>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/locations">
                  Find Our Store
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
