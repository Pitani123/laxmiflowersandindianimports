/**
 * Generates branded PDF product catalogs (one per category) into public/catalogs/.
 * Run with: npx tsx scripts/generate-catalogs.ts
 */
import fs from "node:fs"
import path from "node:path"
import PDFDocument from "pdfkit"

import { garlands } from "../lib/garlands-data"
import { decorativeCoconuts } from "../lib/decorative-coconuts-data"
import { garikaMunthaluProducts } from "../lib/garika-munthalu-data"
import { hairAccessories } from "../lib/hair-accessories-data"
import { weddingRentals } from "../lib/wedding-rentals-data"

const ROOT = process.cwd()
const OUT_DIR = path.join(ROOT, "public", "catalogs")
const PUBLIC_DIR = path.join(ROOT, "public")

// Brand palette
const MAROON = "#7A1F2B"
const ROSE = "#B03052"
const GOLD = "#B8860B"
const CREAM = "#FBF6EF"
const CARD = "#FFFFFF"
const INK = "#2B2020"
const MUTED = "#6B5B5B"
const LINE = "#E8DCCB"

const money = (cents: number) => `$${(cents / 100).toFixed(2)}`

interface CatItem {
  name: string
  description: string
  image?: string
  priceText: string
}

interface Category {
  slug: string
  title: string
  subtitle: string
  items: CatItem[]
}

const categories: Category[] = [
  {
    slug: "wedding-garlands",
    title: "Wedding Garlands",
    subtitle: "Handcrafted fresh flower garlands for your special day",
    items: garlands.map((g) => ({
      name: g.name,
      description: g.description,
      image: g.images[0],
      priceText: g.sizes.map((s) => `${s.label} ${money(s.priceInCents)}`).join("   "),
    })),
  },
  {
    slug: "decorative-coconuts",
    title: "Decorative Coconuts",
    subtitle: "Hand-decorated coconuts for weddings and traditional rituals",
    items: decorativeCoconuts.map((c) => ({
      name: c.name,
      description: c.description,
      image: c.images[0],
      priceText: money(c.priceInCents),
    })),
  },
  {
    slug: "wedding-accessories",
    title: "Wedding Accessories",
    subtitle: "Garika Munthalu — decorated clay pots for Indian weddings",
    items: garikaMunthaluProducts.map((p) => ({
      name: p.name,
      description: p.description,
      image: p.images[0],
      priceText: p.sizes.map((s) => `${s.label} ${money(s.priceInCents)}`).join("   "),
    })),
  },
  {
    slug: "hair-accessories",
    title: "Hair Accessories",
    subtitle: "Traditional venis, gajras and poolajadas for bridal hairstyles",
    items: hairAccessories.map((h) => ({
      name: h.name,
      description: h.description,
      image: h.images[0],
      priceText: money(h.priceInCents),
    })),
  },
  {
    slug: "wedding-rentals",
    title: "Wedding Rentals",
    subtitle: "Traditional ceremony items available for rent",
    items: weddingRentals.map((r) => ({
      name: r.name,
      description: r.description,
      image: r.images[0],
      priceText: `${money(r.pricePerDayInCents)} / day`,
    })),
  },
]

async function loadImage(src?: string): Promise<Buffer | null> {
  if (!src) return null
  try {
    if (src.startsWith("http")) {
      const res = await fetch(src)
      if (!res.ok) return null
      const ab = await res.arrayBuffer()
      return Buffer.from(ab)
    }
    const local = path.join(PUBLIC_DIR, src.replace(/^\//, ""))
    if (fs.existsSync(local)) return fs.readFileSync(local)
    return null
  } catch {
    return null
  }
}

const PAGE_W = 595.28
const PAGE_H = 841.89
const MARGIN = 40

function drawStoreDetails(doc: PDFKit.PDFDocument, y: number) {
  const boxX = MARGIN
  const boxW = PAGE_W - MARGIN * 2
  const boxH = 150
  doc.roundedRect(boxX, y, boxW, boxH, 8).fill(CARD)
  doc.roundedRect(boxX, y, boxW, boxH, 8).lineWidth(1).stroke(LINE)

  doc.fill(MAROON).font("Helvetica-Bold").fontSize(13)
  doc.text("Visit or Call Us", boxX + 20, y + 16)

  const colW = (boxW - 60) / 2
  const c1x = boxX + 20
  const c2x = boxX + 40 + colW
  const startY = y + 40

  const store = (x: number, name: string, addr: string, phone: string, email: string, hours: string) => {
    doc.fill(ROSE).font("Helvetica-Bold").fontSize(11).text(name, x, startY, { width: colW })
    doc.fill(INK).font("Helvetica").fontSize(9.5)
    doc.text(addr, x, startY + 18, { width: colW })
    doc.fill(MAROON).font("Helvetica-Bold").fontSize(10.5).text(phone, x, startY + 50, { width: colW })
    doc.fill(MUTED).font("Helvetica").fontSize(9).text(email, x, startY + 66, { width: colW })
    doc.fill(MUTED).font("Helvetica").fontSize(9).text(hours, x, startY + 82, { width: colW })
  }

  store(
    c1x,
    "Main Store — Aubrey, TX",
    "2881 FM1385, Aubrey, TX 76227, USA",
    "+1-469-988-9029",
    "laxmiflowers.aubrey@gmail.com",
    "Open Mon–Sun: 10AM – 11PM",
  )
  store(
    c2x,
    "Edison, NJ Store",
    "1655 Oak Tree Rd, Edison, NJ, USA",
    "+1-732-799-9567",
    "laxmiflowers.edison@gmail.com",
    "Open Mon–Sun: 10AM – 8:30PM",
  )
}

function drawFooter(doc: PDFKit.PDFDocument, title: string) {
  const savedBottom = doc.page.margins.bottom
  doc.page.margins.bottom = 0 // prevent pdfkit from auto-adding a page for near-edge text
  const y = PAGE_H - 26
  doc.fill(MUTED).font("Helvetica").fontSize(8)
  doc.text(
    `Laxmi Flowers  ·  ${title}  ·  Aubrey, TX: +1-469-988-9029  ·  Edison, NJ: +1-732-799-9567`,
    MARGIN,
    y,
    { width: PAGE_W - MARGIN * 2, align: "center", lineBreak: false },
  )
  doc.page.margins.bottom = savedBottom
}

async function buildCategory(cat: Category, logo: Buffer | null) {
  const doc = new PDFDocument({ size: "A4", margin: MARGIN, autoFirstPage: false, bufferPages: true })
  const outPath = path.join(OUT_DIR, `${cat.slug}.pdf`)
  const stream = fs.createWriteStream(outPath)
  doc.pipe(stream)

  // ---------- COVER PAGE ----------
  doc.addPage()
  doc.rect(0, 0, PAGE_W, PAGE_H).fill(CREAM)
  // top band
  doc.rect(0, 0, PAGE_W, 8).fill(MAROON)

  let y = 70
  if (logo) {
    const lw = 110
    doc.image(logo, (PAGE_W - lw) / 2, y, { width: lw, height: lw })
    y += lw + 18
  }
  doc.fill(MAROON).font("Times-Bold").fontSize(34).text("Laxmi Flowers", MARGIN, y, {
    width: PAGE_W - MARGIN * 2,
    align: "center",
  })
  y += 44
  doc.fill(GOLD).font("Times-Italic").fontSize(13).text("Authentic Indian Traditions in the USA", MARGIN, y, {
    width: PAGE_W - MARGIN * 2,
    align: "center",
  })
  y += 40

  // divider
  doc
    .moveTo(PAGE_W / 2 - 90, y)
    .lineTo(PAGE_W / 2 + 90, y)
    .lineWidth(1.5)
    .stroke(GOLD)
  y += 24

  doc.fill(INK).font("Times-Bold").fontSize(26).text(cat.title, MARGIN, y, {
    width: PAGE_W - MARGIN * 2,
    align: "center",
  })
  y += 38
  doc.fill(MUTED).font("Helvetica").fontSize(12).text(cat.subtitle, MARGIN, y, {
    width: PAGE_W - MARGIN * 2,
    align: "center",
  })
  y += 30
  doc.fill(ROSE).font("Helvetica-Bold").fontSize(11).text(`${cat.items.length} designs in this collection`, MARGIN, y, {
    width: PAGE_W - MARGIN * 2,
    align: "center",
  })

  drawStoreDetails(doc, PAGE_H - 210)
  doc.page.margins.bottom = 0 // prevent auto page break for the near-edge disclaimer line
  doc.fill(MUTED).font("Helvetica-Oblique").fontSize(8.5).text(
    "Prices are subject to change. Please call the store to confirm availability and custom orders.",
    MARGIN,
    PAGE_H - 44,
    { width: PAGE_W - MARGIN * 2, align: "center", lineBreak: false },
  )
  doc.page.margins.bottom = MARGIN

  // ---------- PRODUCT PAGES ----------
  const cols = 2
  const gap = 18
  const contentW = PAGE_W - MARGIN * 2
  const cardW = (contentW - gap * (cols - 1)) / cols
  const imgH = 140
  const textH = 82
  const cardH = imgH + textH
  const rowGap = 14
  const headerH = 54

  let images: (Buffer | null)[] = []
  for (const item of cat.items) {
    images.push(await loadImage(item.image))
  }

  let idx = 0
  while (idx < cat.items.length) {
    doc.addPage()
    doc.rect(0, 0, PAGE_W, PAGE_H).fill(CREAM)
    // page header
    doc.rect(0, 0, PAGE_W, 6).fill(MAROON)
    doc.fill(MAROON).font("Times-Bold").fontSize(18).text(cat.title, MARGIN, 22)
    doc.fill(GOLD).font("Times-Italic").fontSize(10).text("Laxmi Flowers", MARGIN, 22, {
      width: contentW,
      align: "right",
    })
    doc
      .moveTo(MARGIN, headerH)
      .lineTo(PAGE_W - MARGIN, headerH)
      .lineWidth(1)
      .stroke(LINE)

    const topY = headerH + 16
    const usableH = PAGE_H - topY - 40
    const rows = Math.max(1, Math.floor((usableH + rowGap) / (cardH + rowGap)))
    const perPage = rows * cols

    for (let p = 0; p < perPage && idx < cat.items.length; p++, idx++) {
      const item = cat.items[idx]
      const col = p % cols
      const row = Math.floor(p / cols)
      const x = MARGIN + col * (cardW + gap)
      const cy = topY + row * (cardH + rowGap)

      // card bg
      doc.roundedRect(x, cy, cardW, cardH, 8).fill(CARD)
      doc.roundedRect(x, cy, cardW, cardH, 8).lineWidth(1).stroke(LINE)

      // image area
      const img = images[idx]
      const pad = 8
      if (img) {
        try {
          doc.save()
          doc.roundedRect(x + pad, cy + pad, cardW - pad * 2, imgH - pad, 6).clip()
          doc.image(img, x + pad, cy + pad, {
            fit: [cardW - pad * 2, imgH - pad],
            align: "center",
            valign: "center",
          })
          doc.restore()
        } catch {
          doc.restore()
        }
      } else {
        doc.rect(x + pad, cy + pad, cardW - pad * 2, imgH - pad).fill(CREAM)
        doc.fill(MUTED).font("Helvetica").fontSize(9).text("Image available in store", x + pad, cy + imgH / 2, {
          width: cardW - pad * 2,
          align: "center",
        })
      }

      // text
      const tx = x + 12
      const tw = cardW - 24
      let ty = cy + imgH + 4
      doc.fill(INK).font("Helvetica-Bold").fontSize(11).text(item.name, tx, ty, { width: tw, ellipsis: true })
      ty += 15
      doc
        .fill(MUTED)
        .font("Helvetica")
        .fontSize(8)
        .text(item.description, tx, ty, { width: tw, height: 26, ellipsis: true, lineGap: 1 })
      ty += 30
      doc.fill(ROSE).font("Helvetica-Bold").fontSize(9).text(item.priceText, tx, ty, { width: tw, ellipsis: true })
    }

    drawFooter(doc, cat.title)
  }

  doc.end()
  await new Promise<void>((resolve) => stream.on("finish", () => resolve()))
  console.log(`[v0] Generated ${cat.slug}.pdf (${cat.items.length} items)`)
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true })
  const logoPath = path.join(PUBLIC_DIR, "images", "laxmi-logo.png")
  const logo = fs.existsSync(logoPath) ? fs.readFileSync(logoPath) : null
  for (const cat of categories) {
    await buildCategory(cat, logo)
  }
  console.log("[v0] All catalogs generated in public/catalogs/")
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
