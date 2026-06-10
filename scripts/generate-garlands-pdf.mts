import { writeFileSync } from "node:fs"
import { resolve } from "node:path"
import puppeteer from "puppeteer"
import { garlands, formatPrice, type Garland } from "../lib/garlands-data"

// -------------------------------------------------------------------------------------
// Build the HTML for the catalog, styled to match the Laxmi Flowers website.
// Brand: rose/pink primary, Playfair Display headings, Lato body.
// -------------------------------------------------------------------------------------

function priceRange(garland: Garland): string {
  const prices = garland.sizes.map((s) => s.priceInCents)
  const min = Math.min(...prices)
  const max = Math.max(...prices)
  return min === max ? formatPrice(min) : `${formatPrice(min)} – ${formatPrice(max)}`
}

function sizeRows(garland: Garland): string {
  return garland.sizes
    .map(
      (s) => `
        <div class="size-row">
          <span class="size-label">${s.label}</span>
          <span class="size-price">${formatPrice(s.priceInCents)}</span>
        </div>`,
    )
    .join("")
}

function card(garland: Garland): string {
  const img = garland.images[0] || ""
  return `
    <div class="card">
      <div class="card-image">
        <img src="${img}" alt="${garland.name}" crossorigin="anonymous" />
      </div>
      <div class="card-body">
        <div class="card-id">${garland.name.replace("WeddingGarland_", "No. ")}</div>
        <h3 class="card-title">${garland.description}</h3>
        <div class="card-sizes">${sizeRows(garland)}</div>
        <div class="card-price-row">
          <span class="card-price-label">Price</span>
          <span class="card-price">${priceRange(garland)}</span>
        </div>
        <div class="card-note">Color customizations available</div>
      </div>
    </div>`
}

const today = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
})

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:wght@600;700;800&display=swap" rel="stylesheet" />
<style>
  :root {
    --primary: #b23a5b;
    --primary-soft: #fdf2f5;
    --foreground: #2b2b2b;
    --muted: #6f6f6f;
    --border: #ecdfe3;
    --gold: #b8860b;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Lato', sans-serif;
    color: var(--foreground);
    background: #fff;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  h1, h2, h3, .serif { font-family: 'Playfair Display', serif; }

  /* ---------- Cover ---------- */
  .cover {
    height: 1050px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: linear-gradient(160deg, #fdf2f5 0%, #ffffff 55%, #fbeef0 100%);
    page-break-after: always;
    padding: 60px;
    position: relative;
  }
  .cover::before, .cover::after {
    content: "";
    position: absolute;
    left: 80px; right: 80px;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--primary), transparent);
  }
  .cover::before { top: 90px; }
  .cover::after { bottom: 90px; }
  .cover .brand {
    text-transform: uppercase;
    letter-spacing: 8px;
    font-size: 16px;
    color: var(--primary);
    font-weight: 700;
    margin-bottom: 24px;
  }
  .cover h1 {
    font-size: 68px;
    font-weight: 800;
    color: var(--foreground);
    line-height: 1.1;
    margin-bottom: 20px;
  }
  .cover .accent { color: var(--primary); }
  .cover .subtitle {
    font-size: 20px;
    color: var(--muted);
    max-width: 560px;
    line-height: 1.6;
    margin-bottom: 40px;
  }
  .cover .pill {
    display: inline-block;
    background: var(--primary);
    color: #fff;
    padding: 12px 28px;
    border-radius: 999px;
    font-size: 15px;
    letter-spacing: 1px;
    font-weight: 700;
  }
  .cover .meta {
    margin-top: 28px;
    font-size: 14px;
    color: var(--muted);
    letter-spacing: 1px;
  }

  /* ---------- Section header ---------- */
  .page { padding: 48px 56px 40px; }
  .section-head {
    text-align: center;
    margin-bottom: 36px;
  }
  .section-head .eyebrow {
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 12px;
    color: var(--primary);
    font-weight: 700;
  }
  .section-head h2 {
    font-size: 34px;
    font-weight: 700;
    margin-top: 8px;
  }
  .section-head p {
    color: var(--muted);
    font-size: 15px;
    margin-top: 6px;
  }

  /* ---------- Grid ---------- */
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
  }
  .card {
    border: 1px solid var(--border);
    border-radius: 14px;
    overflow: hidden;
    background: #fff;
    page-break-inside: avoid;
    display: flex;
    flex-direction: column;
  }
  .card-image {
    width: 100%;
    aspect-ratio: 2 / 3;
    background: #f6f0f2;
    overflow: hidden;
  }
  .card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .card-body { padding: 14px 14px 16px; flex: 1; display: flex; flex-direction: column; }
  .card-id {
    font-size: 11px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--primary);
    font-weight: 700;
    margin-bottom: 4px;
  }
  .card-title {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.3;
    color: var(--foreground);
    min-height: 42px;
  }
  .card-sizes {
    margin-top: 10px;
    border-top: 1px dashed var(--border);
    padding-top: 8px;
  }
  .size-row {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    padding: 2px 0;
    color: var(--muted);
  }
  .size-label { font-weight: 700; color: var(--foreground); }
  .size-price { font-weight: 400; }
  .card-price-row {
    margin-top: 10px;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    border-top: 1px solid var(--border);
    padding-top: 10px;
  }
  .card-price-label { font-size: 12px; color: var(--muted); text-transform: uppercase; letter-spacing: 1px; }
  .card-price { font-size: 18px; font-weight: 700; color: var(--primary); }
  .card-note {
    margin-top: 6px;
    font-size: 11px;
    font-style: italic;
    color: #a98c93;
  }

  .footer-note {
    margin-top: 40px;
    text-align: center;
    font-size: 12px;
    color: var(--muted);
    border-top: 1px solid var(--border);
    padding-top: 18px;
    line-height: 1.7;
  }
  .footer-note strong { color: var(--primary); }
</style>
</head>
<body>
  <section class="cover">
    <div class="brand">Laxmi Flowers &amp; Indian Imports</div>
    <h1>Wedding <span class="accent">Garlands</span><br/>Collection</h1>
    <p class="subtitle">Traditional Indian garlands handcrafted with fresh flowers for weddings and celebrations.</p>
    <span class="pill">${garlands.length} Designs to Choose From</span>
    <div class="meta">Catalog &middot; ${today}</div>
  </section>

  <section class="page">
    <div class="section-head">
      <div class="eyebrow">Our Collection</div>
      <h2>Wedding Garland Collection</h2>
      <p>${garlands.length} beautiful garlands &middot; Prices shown per size &middot; Custom orders welcome</p>
    </div>
    <div class="grid">
      ${garlands.map(card).join("")}
    </div>
    <div class="footer-note">
      <strong>Color Customizations Available.</strong> Colors may vary slightly due to photographic lighting sources.<br/>
      Add extras like Pearls, Gold Beads, Silver Beads, Crystals and more. Contact us for special requests.<br/>
      Laxmi Flowers &amp; Indian Imports
    </div>
  </section>
</body>
</html>`

async function main() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  })
  const page = await browser.newPage()
  await page.setContent(html, { waitUntil: "networkidle0", timeout: 120000 })
  // Give remote images extra time to decode
  await page.evaluate(async () => {
    const imgs = Array.from(document.images)
    await Promise.all(
      imgs.map((img) =>
        img.complete && img.naturalHeight !== 0
          ? Promise.resolve()
          : new Promise((res) => {
              img.addEventListener("load", res)
              img.addEventListener("error", res)
            }),
      ),
    )
  })
  const outPath = resolve(process.cwd(), "public/wedding-garlands-catalog.pdf")
  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: { top: "0", bottom: "0", left: "0", right: "0" },
  })
  writeFileSync(outPath, pdf)
  if (process.env.SHOT) {
    await page.setViewport({ width: 900, height: 1200 })
    await page.screenshot({ path: "/tmp/catalog-preview.png", fullPage: true })
  }
  await browser.close()
  console.log("[v0] PDF written to", outPath)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
