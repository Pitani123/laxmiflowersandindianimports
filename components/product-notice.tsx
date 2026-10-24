import { Clock, Package, Settings } from "lucide-react"

type ProductNoticeVariant =
  | "local-wedding"
  | "india-wedding"
  | "pooja-garlands"
  | "wedding"
  | "wedding-accessories"
  | "wedding-rentals"
  | "hair-accessories"
  | "decorative-coconuts"
  | "car-decorations"
  | "camphor-garlands"
  | "fresh-flowers"
  | "loose-flowers"
  | "bouquets"
  | "products"

type ProductNoticeProps = {
  variant?: ProductNoticeVariant
}

const noticeCopy: Record<Exclude<ProductNoticeVariant, "india-wedding" | "pooja-garlands">, string> = {
  "local-wedding": "USA-Made Wedding Garlands are made in the USA by expert artisans for Indian weddings. Orders for USA-Made Wedding Garlands, Decorated Coconuts, and Hair Accessories must be placed at least 7 days in advance. For last-minute inquiries, please contact us directly to check availability.",
  wedding: "Wedding Accessories, Wedding Rentals, Car Decorations, Camphor Garlands, Decorated Coconuts, and Hair Accessories require at least 7 days advance notice. Contact us for last-minute availability.",
  "wedding-accessories": "Wedding Accessories and Garika Munthalu are prepared for wedding ceremonies and require at least 7 days advance notice. Contact us for last-minute availability.",
  "wedding-rentals": "Wedding rental items require at least 7 days advance notice so we can prepare and reserve them for your ceremony. Contact us for last-minute availability.",
  "hair-accessories": "Hair accessories for weddings and ceremonies require at least 7 days advance notice. Contact us for last-minute availability.",
  "decorative-coconuts": "Decorative coconuts are customized for wedding ceremonies and require at least 7 days advance notice. Contact us for last-minute availability.",
  "car-decorations": "Wedding car decorations require at least 7 days advance notice so we can prepare the floral arrangements for your event. Contact us for last-minute availability.",
  "camphor-garlands": "Camphor garlands for ceremonies require at least 7 days advance notice. Contact us for last-minute availability.",
  "fresh-flowers": "Fresh flower orders require at least 7 days advance notice so we can prepare the requested flowers for your ceremony or celebration. Contact us for last-minute availability.",
  "loose-flowers": "Loose flower orders require at least 7 days advance notice so we can source and prepare the flowers for your pooja or celebration. Contact us for last-minute availability.",
  bouquets: "Flower bouquet orders require at least 7 days advance notice so we can prepare the arrangement for your celebration. Contact us for last-minute availability.",
  products: "Product orders require at least 7 days advance notice so we can prepare and confirm availability. Contact us for last-minute availability.",
}

export function ProductNotice({ variant = "local-wedding" }: ProductNoticeProps) {
  const isIndiaWedding = variant === "india-wedding"
  const isPoojaGarlands = variant === "pooja-garlands"

  const title = isIndiaWedding || isPoojaGarlands
    ? "Made in India — 15-Day Advance Notice Required"
    : variant === "local-wedding"
      ? "Advance Notice Required"
      : "7-Day Advance Notice Required"
  const description = isIndiaWedding
    ? "Imported India Wedding Garlands are made in India and shipped to the USA. Orders must be placed at least 15 days before your event; we cannot accept last-minute orders for this collection."
    : isPoojaGarlands
      ? "Pooja Garlands are made in India and shipped to the USA. We may not have enough quantity in stock for bulk orders. Bulk orders must be placed at least 15 days before your event."
      : noticeCopy[variant]

  return (
    <section className="border-b border-border bg-secondary/50 py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">
                {title}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {description}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Package className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">
                Bulk &amp; Custom Orders
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                We welcome custom and bulk requests! Please contact us to discuss your specific requirements.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Settings className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">
                Customizations Available
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Customizations are available as per requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
