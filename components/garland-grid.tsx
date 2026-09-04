'use client'

import { useState } from 'react'
import { GarlandCard } from '@/components/garland-card'
import { Button } from '@/components/ui/button'
import type { Garland } from '@/lib/garlands-data'

interface GarlandGridProps {
  garlands: Garland[]
  /** How many cards to show initially and to reveal on each "Load More" click. */
  batchSize?: number
  onAllDisplayed?: () => void
}

export function GarlandGrid({ garlands, batchSize = 12, onAllDisplayed }: GarlandGridProps) {
  const [visibleCount, setVisibleCount] = useState(batchSize)

  const visibleGarlands = garlands.slice(0, visibleCount)
  const remaining = garlands.length - visibleCount
  const hasMore = remaining > 0

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleGarlands.map((garland) => (
          <GarlandCard key={garland.id} garland={garland} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-10 flex flex-col items-center gap-3">
          <p className="text-base text-muted-foreground">
            Showing {visibleGarlands.length} of {garlands.length} garlands
          </p>
          <Button
            size="lg"
            className="min-w-52 px-8 py-5 text-lg bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => {
              const nextCount = Math.min(visibleCount + batchSize, garlands.length)
              setVisibleCount(nextCount)
              if (nextCount >= garlands.length) onAllDisplayed?.()
            }}
          >
            Load More ({Math.min(batchSize, remaining)} more)
          </Button>
        </div>
      )}
    </>
  )
}
