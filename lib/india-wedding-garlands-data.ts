import { garlands, type Garland, type GarlandSize } from "@/lib/garlands-data"

const indiaGarlandSize = (priceInCents: number): GarlandSize[] => [
  { id: "4ft", label: "4 ft", priceInCents },
]

const indiaGarlandSizesById: Record<string, GarlandSize[]> = {
  "india-garland-001": [{ id: "4ft", label: "4 ft", priceInCents: 10000 }],
  "india-garland-002": [{ id: "4ft", label: "4 ft", priceInCents: 10000 }],
  "india-garland-003": [{ id: "4ft", label: "4 ft", priceInCents: 11000 }],
  "india-garland-004": [{ id: "4ft", label: "4 ft", priceInCents: 10000 }],
  "india-garland-005": [{ id: "4ft", label: "4 ft", priceInCents: 10000 }],
  "india-garland-006": [{ id: "4ft", label: "4 ft", priceInCents: 10000 }],
  "india-garland-007": [{ id: "4ft", label: "4 ft", priceInCents: 10000 }],
  "india-garland-008": [{ id: "4ft", label: "4 ft", priceInCents: 10000 }],
  "india-garland-009": [{ id: "4ft", label: "4 ft", priceInCents: 10000 }],
  "india-garland-010": indiaGarlandSize(10000),
  "india-garland-011": indiaGarlandSize(10000),
  "india-garland-012": indiaGarlandSize(11000),
  "india-garland-013": indiaGarlandSize(10000),
  "india-garland-014": indiaGarlandSize(10000),
  "india-garland-015": indiaGarlandSize(10000),
  "india-garland-016": indiaGarlandSize(10000),
  "india-garland-017": indiaGarlandSize(10000),
  "india-garland-018": indiaGarlandSize(10000),
  "india-garland-019": indiaGarlandSize(10000),
  "india-garland-020": indiaGarlandSize(10000),
  "india-garland-021": indiaGarlandSize(11000),
  "india-garland-022": indiaGarlandSize(11000),
  "india-garland-023": indiaGarlandSize(10000),
  "india-garland-024": indiaGarlandSize(10000),
  "india-garland-025": indiaGarlandSize(10000),
  "india-garland-026": indiaGarlandSize(10000),
  "india-garland-027": indiaGarlandSize(10000),
  "india-garland-028": indiaGarlandSize(10000),
  "india-garland-029": indiaGarlandSize(10000),
  "india-garland-030": indiaGarlandSize(10000),
  "india-garland-031": indiaGarlandSize(10000),
  "india-garland-032": indiaGarlandSize(10000),
  "india-garland-033": indiaGarlandSize(10000),
  "india-garland-034": indiaGarlandSize(10000),
}

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
  const sizes = indiaGarlandSizesById[id]

  return garland && sizes
    ? [{
        ...garland,
        name: `IndiaWeddingGarland_${String(index + 1).padStart(3, "0")}`,
        sizes,
      }]
    : []
})

export const weddingGarlands: Garland[] = garlands
  .filter((garland) => !indiaGarlandIdSet.has(garland.id))
  .map((garland, index) => ({
    ...garland,
    name: `WeddingGarland_${String(index + 1).padStart(3, "0")}`,
  }))
