import { generateImage, gateway } from "ai"
import { writeFile } from "node:fs/promises"

const items = [
  {
    file: "public/images/car-wedding.jpg",
    prompt:
      "A luxury sedan car beautifully decorated for an Indian wedding, covered with fresh red roses, marigold garlands, white jasmine strings and ribbons across the hood and roof, festive and elegant, parked outdoors in daylight, professional photograph, high detail.",
  },
  {
    file: "public/images/car-funeral.jpg",
    prompt:
      "A car respectfully decorated for a funeral with tasteful white flower arrangements, white roses and white chrysanthemum garlands on the hood, solemn and dignified, muted tones, parked outdoors in soft daylight, professional photograph, high detail.",
  },
  {
    file: "public/images/car-event.jpg",
    prompt:
      "A car decorated with colorful fresh flowers and garlands for a festive celebration or special event, orange and yellow marigolds with pink roses and greenery draped across the front, cheerful and vibrant, parked outdoors in daylight, professional photograph, high detail.",
  },
]

for (const item of items) {
  console.log("Generating", item.file)
  const { image } = await generateImage({
    model: gateway.imageModel("google/imagen-4.0-generate-001"),
    prompt: item.prompt,
    aspectRatio: "4:3",
  })
  await writeFile(item.file, Buffer.from(image.uint8Array))
  console.log("Saved", item.file)
}

console.log("Done")
