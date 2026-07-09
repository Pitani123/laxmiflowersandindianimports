import { writeFile } from "node:fs/promises"
import { generateImage, gateway } from "ai"

const model = gateway.imageModel("google/imagen-4.0-generate-001")

const targets = [
  {
    file: "public/images/live-chaat-pani-puri.jpg",
    prompt:
      "Professional food photography of a vibrant live Indian chaat and pani puri counter at a festive wedding party. A chef in a clean apron serving freshly assembled pani puri (golgappa) and colorful chaat in steel bowls, garnished with chutneys, sev, onions and coriander. Bright, appetizing, warm event lighting, decorated stall, shallow depth of field.",
  },
  {
    file: "public/images/live-sugarcane-juice.jpg",
    prompt:
      "Professional food photography of a live sugarcane juice counter at an outdoor Indian celebration. A traditional sugarcane juice press machine extracting fresh green juice into glasses with lemon and mint, stalks of sugarcane stacked beside it, vendor serving guests. Refreshing, bright daylight, festive stall decoration, shallow depth of field.",
  },
  {
    file: "public/images/live-floral-bloom-bar.jpg",
    prompt:
      "Professional event photography of an elegant live floral bloom bar at a wedding. A beautifully arranged flower station with buckets of fresh colorful roses, marigolds, orchids and greenery, ribbons and wrapping paper, where guests create their own bouquets. Soft romantic lighting, luxurious decorated table, shallow depth of field.",
  },
]

for (const t of targets) {
  console.log(`[v0] Generating ${t.file} ...`)
  const { image } = await generateImage({
    model,
    prompt: t.prompt,
    aspectRatio: "4:3",
  })
  await writeFile(t.file, Buffer.from(image.uint8Array))
  console.log(`[v0] Saved ${t.file}`)
}

console.log("[v0] All images generated.")
