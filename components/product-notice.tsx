import { Clock, Package, Settings } from "lucide-react"

export function ProductNotice() {
  return (
    <section className="border-b border-border bg-secondary/50 py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">
                Advance Notice Required
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Orders for Wedding Garlands, Decorated Coconuts, and Hair Accessories must be placed at least 7 days in advance. For last-minute inquiries, please contact us directly to check availability.
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
