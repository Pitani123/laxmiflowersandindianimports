import fs from 'node:fs/promises'
import path from 'node:path'
import { createCanvas } from '@napi-rs/canvas'
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs'
import {
  AlignmentType,
  Document,
  HeadingLevel,
  ImageRun,
  Packer,
  Paragraph,
  TextRun,
} from 'docx'

const pdfPath = path.resolve('data/Laxmi-Flowers-Rentals-original.pdf')
const imageDir = path.resolve('public/images/rentals')
const docxPath = path.resolve('data/Laxmi-Flowers-Rentals.docx')
await fs.mkdir(imageDir, { recursive: true })

const pdf = await getDocument({ data: new Uint8Array(await fs.readFile(pdfPath)) }).promise
const children = [
  new Paragraph({ text: 'Laxmi Flowers Rentals', heading: HeadingLevel.TITLE, alignment: AlignmentType.CENTER }),
  new Paragraph({ text: 'Rental catalog converted from the supplied PDF.' }),
]

for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
  const page = await pdf.getPage(pageNumber)
  const viewport = page.getViewport({ scale: 2 })
  const canvas = createCanvas(Math.ceil(viewport.width), Math.ceil(viewport.height))
  await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise
  const imageBuffer = canvas.toBuffer('image/png')
  const imagePath = path.join(imageDir, `rental-catalog-page-${pageNumber}.png`)
  await fs.writeFile(imagePath, imageBuffer)
  children.push(
    new Paragraph({ text: `Catalog page ${pageNumber}`, heading: HeadingLevel.HEADING_1 }),
    new Paragraph({ children: [new ImageRun({ data: imageBuffer, transformation: { width: 612, height: 792 }, type: 'png' })] }),
  )
}

children.push(new Paragraph({ text: 'Rental items and prices', heading: HeadingLevel.HEADING_1 }))
const items = [
  ['Decor Diyas', '$25/pair/day'], ['Ganesh Idol with stand (2 ft)', '$25/day'], ['Laxmi Devi (1 ft)', '$10/day'], ['Elephants (1 ft)', '$10/day'], ['Urli Set', '$25/day'], ['Krishna Idol (3 ft)', '$50/day'], ['Plants', '$15/day'], ['Stands', '$15/day'], ['Vratam Peeta', '$25/day'], ['Brass Uris', '$10/day'], ['German Silver Trays (8, 10, 12 in)', '$5/day'], ['Housewarming Doll Set', '$20/day'], ['Baby Shower Doll Set', '$20/day'], ['Haldi Set', '$80/day'], ['Throne Chair', '$40/day'], ['Gold Wooden Cradle', '$30/day'], ['12 x 12 ft Heavy Duty Stand', '$30/day'], ['3 Metal Arch Stands (6, 6.5, 7 ft)', '$25/day'], ['White Metal Square Stand', '$25/day'], ['Cake Cylinders (3)', '$15/day'], ['Lighting Kit', '$30/day'], ['White Chairs', '$1/day'], ['White Table', '$5/day'], ['Biryani Handi (Big, 20 people)', '$25/day'], ['Biryani Handi (Medium, 15 people)', '$20/day'], ['Biryani Handi (Small, 10 people)', '$15/day'], ['Single Burner Stove', '$20/day'], ['Idly Cooker (54 idly)', '$30/day'], ['Coffee/Tea Insulated Dispenser', '$15/day'],]
for (const [name, price] of items) children.push(new Paragraph({ children: [new TextRun({ text: `${name}: `, bold: true }), new TextRun(price)] }))

await fs.writeFile(docxPath, await Packer.toBuffer(new Document({ sections: [{ children }] })))
console.log(`Created ${docxPath} and ${pdf.numPages} page images`)
