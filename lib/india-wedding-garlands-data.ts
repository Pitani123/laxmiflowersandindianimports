import { garlands, type Garland } from "@/lib/garlands-data"

const indiaGarlandIds = [
  "garland-005",
  "garland-023",
  "garland-033",
  "garland-034",
  "garland-038",
  "garland-042",
  "garland-046",
  "garland-047",
  "garland-050",
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
]

const indiaGarlandIdSet = new Set(indiaGarlandIds)

export const indiaWeddingGarlands: Garland[] = indiaGarlandIds.flatMap((id, index) => {
  const garland = garlands.find((item) => item.id === id)
  return garland
    ? [{
        ...garland,
        name: `IndiaWeddingGarland_${String(index + 1).padStart(3, "0")}`,
      }]
    : []
})

export const weddingGarlands = garlands.filter(
  (garland) => !indiaGarlandIdSet.has(garland.id),
)
