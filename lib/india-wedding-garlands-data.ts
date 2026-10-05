import { garlands, type Garland } from "@/lib/garlands-data"

const indiaGarlandIds = [
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
  "india-garland-011",
  "india-garland-012",
  "india-garland-013",
  "india-garland-014",
  "india-garland-015",
  "india-garland-016",
  "india-garland-017",
  "india-garland-018",
  "india-garland-019",
  "india-garland-020",
  "india-garland-021",
  "india-garland-022",
  "india-garland-023",
  "india-garland-024",
  "india-garland-025",
  "india-garland-026",
  "india-garland-027",
  "india-garland-028",
  "india-garland-029",
  "india-garland-030",
  "india-garland-031",
  "india-garland-032",
  "india-garland-033",
  "india-garland-034",
]

const indiaGarlandIdSet = new Set(indiaGarlandIds)

export const indiaWeddingGarlands: Garland[] = indiaGarlandIds.flatMap((id, index) => {
  const garland = garlands.find((item) => item.id === id)
  return garland
    ? [{
        ...garland,
        name: `IndiaWeddingGarland_${String(index + 1).padStart(3, "0")}`,
        sizes: garland.sizes.filter((size) => size.id !== "3ft"),
      }]
    : []
})

export const weddingGarlands: Garland[] = garlands
  .filter((garland) => !indiaGarlandIdSet.has(garland.id))
  .map((garland, index) => ({
    ...garland,
    name: `WeddingGarland_${String(index + 1).padStart(3, "0")}`,
  }))
