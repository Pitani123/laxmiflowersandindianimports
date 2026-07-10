import { Button } from "@/components/ui/button"
import { Clock, Phone } from "lucide-react"

interface ComingSoonProps {
  title?: string
  message?: string
  phone?: string
}

export function ComingSoon({
  title = "Coming Soon",
  message = "We're putting this collection together. Products will be available here soon. Call the store for current availability and pricing.",
  phone = "+14699889029",
}: ComingSoonProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Clock className="h-8 w-8 text-primary" />
        </div>
        <h2 className="mt-6 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">{title}</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">{message}</p>
        <Button asChild className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
          <a href={`tel:${phone}`}>
            <Phone className="mr-2 h-4 w-4" />
            Call for Details
          </a>
        </Button>
      </div>
    </section>
  )
}
