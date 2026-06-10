import { writeFileSync } from "node:fs"
import { resolve } from "node:path"
import puppeteer from "puppeteer"
import { decorativeCoconuts, formatPrice, type DecorativeCoconut } from "../lib/decorative-coconuts-data"

// -------------------------------------------------------------------------------------
// Build the HTML for the catalog, styled to match the Laxmi Flowers website.
// Brand: rose/pink primary, Playfair Display headings, Lato body.
// -------------------------------------------------------------------------------------

function card(coconut: DecorativeCoconut): string {
  const img = coconut.images[0] || ""
  return `
    <div class="card">
      <div class="card-image">
        <img src="${img}" alt="${coconut.name}" crossorigin="anonymous" />
      </div>
      <div class="card-body">
        <div class="card-id">${coconut.name.replace("DecorativeCoconut_", "No. ")}</div>
        <p class="card-title">${coconut.description}</p>
        <div class="card-price-row">
          <span class="card-price-label">Price</span>
          <span class="card-price">${formatPrice(coconut.priceInCents)}</span>
        </div>
        ${coconut.customizable ? `<div class="card-note">Color &amp; decoration customizations available</div>` : ""}
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
    font-size: 64px;
    font-weight: 800;
    color: var(--foreground);
    line-height: 1.1;
    margin-bottom: 20px;
  }
  .cover .accent { color: var(--primary); }
  .cover .subtitle {
    font-size: 20px;
    color: var(--muted);
    max-width: 580px;
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
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
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
    aspect-ratio: 1 / 1;
    background: #f6f0f2;
    overflow: hidden;
  }
  .card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .card-body { padding: 16px 16px 18px; flex: 1; display: flex; flex-direction: column; }
  .card-id {
    font-size: 11px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--primary);
    font-weight: 700;
    margin-bottom: 6px;
  }
  .card-title {
    font-size: 13.5px;
    font-weight: 400;
    line-height: 1.5;
    color: var(--muted);
    flex: 1;
  }
  .card-price-row {
    margin-top: 14px;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    border-top: 1px solid var(--border);
    padding-top: 12px;
  }
  .card-price-label { font-size: 12px; color: var(--muted); text-transform: uppercase; letter-spacing: 1px; }
  .card-price { font-size: 22px; font-weight: 700; color: var(--primary); }
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
    <h1>Decorative <span class="accent">Coconuts</span><br/>Collection</h1>
    <p class="subtitle">Hand-decorated coconuts with crystals, pearls, and traditional motifs for weddings, pujas, and special occasions.</p>
    <span class="pill">${decorativeCoconuts.length} Designs to Choose From</span>
    <div class="meta">Catalog &middot; ${today}</div>
  </section>

  <section class="page">
    <div class="section-head">
      <div class="eyebrow">Our Collection</div>
      <h2>Decorative Coconut Collection</h2>
      <p>${decorativeCoconuts.length} unique designs &middot; Custom orders welcome</p>
    </div>
    <div class="grid">
      ${decorativeCoconuts.map(card).join("")}
    </div>
    <div class="footer-note">
      <strong>Color &amp; Decoration Customizations Available.</strong> Colors may vary slightly due to photographic lighting sources.<br/>
      Add extras like Pearls, Gold Beads, Silver Beads, Crystals and personalized names or initials. Contact us for special requests.<br/>
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
  await page.setContent(html, { waitUntil: "domcontentloaded", timeout: 120000 })
  // Give remote images time to decode, but never wait forever per image
  await page.evaluate(async () => {
    const imgs = Array.from(document.images)
    await Promise.all(
      imgs.map((img) =>
        img.complete && img.naturalHeight !== 0
          ? Promise.resolve()
          : new Promise((res) => {
              const done = () => res(null)
              img.addEventListener("load", done)
              img.addEventListener("error", done)
              setTimeout(done, 15000)
            }),
      ),
    )
  })
  const outPath = resolve(process.cwd(), "public/decorative-coconuts-catalog.pdf")
  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: { top: "0", bottom: "0", left: "0", right: "0" },
  })
  writeFileSync(outPath, pdf)
  if (process.env.SHOT) {
    await page.setViewport({ width: 900, height: 1200 })
    await page.screenshot({ path: "/tmp/coconut-preview.png", fullPage: true })
  }
  await browser.close()
  console.log("[v0] PDF written to", outPath)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
