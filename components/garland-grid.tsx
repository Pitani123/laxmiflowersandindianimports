'use client'

import { useState } from 'react'
import { GarlandCard } from '@/components/garland-card'
import { Button } from '@/components/ui/button'
import type { Garland } from '@/lib/garlands-data'

interface GarlandGridProps {
  garlands: Garland[]
  /** How many cards to show initially and to reveal on each "Load More" click. */
  batchSize?: number
}

export function GarlandGrid({ garlands, batchSize = 12 }: GarlandGridProps) {
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
          <p className="text-sm text-muted-foreground">
            Showing {visibleGarlands.length} of {garlands.length} garlands
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={() => setVisibleCount((count) => Math.min(count + batchSize, garlands.length))}
          >
            Load More ({Math.min(batchSize, remaining)} more)
          </Button>
        </div>
      )}
    </>
  )
}
