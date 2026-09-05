import { garlands, type Garland } from "@/lib/garlands-data"

const indiaGarlandIds = new Set([
  "garland-005",
  "garland-023",
  "india-garland-001",
  "india-garland-002",
  "india-garland-003",
  "india-garland-004",
  "india-garland-005",
  "india-garland-006",
  "india-garland-007",
  "india-garland-008",
  "india-garland-009",
  "india-garland-010",
])

export const indiaWeddingGarlands: Garland[] = garlands
  .filter((garland) => indiaGarlandIds.has(garland.id))
  .map((garland, index) => ({
    ...garland,
    name: `IndiaWeddingGarland_${String(index + 1).padStart(3, "0")}`,
  }))

export const weddingGarlands = garlands.filter(
  (garland) => !indiaGarlandIds.has(garland.id),
)
