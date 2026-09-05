import { garlands, type Garland } from "@/lib/garlands-data"

export const indiaWeddingGarlands: Garland[] = garlands
  .filter((garland) => garland.id === "garland-005" || garland.id === "garland-023")
  .map((garland, index) => ({
    ...garland,
    name: `IndiaWeddingGarland_00${index + 1}`,
  }))

export const weddingGarlands = garlands.filter(
  (garland) => garland.id !== "garland-005" && garland.id !== "garland-023",
)
