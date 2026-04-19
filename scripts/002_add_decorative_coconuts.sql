-- Add decorative coconut products
INSERT INTO products (name, description, price_in_cents, category, image_url, is_active)
VALUES 
  (
    'Decorative Coconut - Traditional Heart Design',
    'Beautifully hand-decorated coconut with intricate red heart center, gold beadwork, pearl embellishments, and traditional Telugu script. Perfect for wedding ceremonies and religious rituals.',
    5000,
    'decorative-coconuts',
    '/images/products/decorative-coconut-1.jpg',
    true
  ),
  (
    'Decorative Coconut - Lotus Crystal Design',
    'Elegant decorated coconut featuring a stunning red lotus flower made with sparkling crystals on a silver crystal background. Adorned with golden top and pearl accents. Ideal for pujas and special occasions.',
    5000,
    'decorative-coconuts',
    '/images/products/decorative-coconut-2.jpg',
    true
  ),
  (
    'Decorative Coconut - Pearl & Gold Heart',
    'Exquisite green coconut with red heart center decorated with gold and pearl beadwork, rhinestone embellishments, and Telugu blessing text. Traditional design with golden decorative top.',
    5000,
    'decorative-coconuts',
    '/images/products/decorative-coconut-3.jpg',
    true
  )
ON CONFLICT DO NOTHING;
