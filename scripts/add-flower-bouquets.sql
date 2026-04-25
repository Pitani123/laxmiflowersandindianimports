-- Add new flower bouquet products
-- Run this script against your Supabase database

INSERT INTO products (id, name, description, price_in_cents, category, image_url, is_active)
VALUES 
  (
    gen_random_uuid(),
    'Flower_Bouquet_001',
    'Elegant yellow roses bouquet with baby''s breath, gold butterflies, and magenta wrapping paper with gold trim.',
    0,
    'bouquets',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-21%20at%2010.21.25%20PM%20%281%29-t4KbuVeqzQKcrEiTgVNSt3kXdfpR9s.jpeg',
    true
  ),
  (
    gen_random_uuid(),
    'Flower_Bouquet_002',
    'Beautiful mixed arrangement with purple carnations, pink chrysanthemums, white flowers, and baby''s breath in a glass vase.',
    0,
    'bouquets',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-21%20at%2010.21.26%20PM%20%281%29-UMR1pm60R9XMY7mWGZ2tMdpDaQoeSg.jpeg',
    true
  ),
  (
    gen_random_uuid(),
    'Flower_Bouquet_003',
    'Classic red roses bouquet with baby''s breath and gold butterfly accent, wrapped in elegant white paper with gold heart patterns.',
    0,
    'bouquets',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-21%20at%2010.21.25%20PM%20%282%29-z64JsH09M2rFgT2fIH0Qgu3KJK7OZf.jpeg',
    true
  ),
  (
    gen_random_uuid(),
    'Flower_Bouquet_004',
    'Custom celebration bouquet with red roses, soccer ball decorations, and personalized banner - perfect for sports fans and special occasions.',
    0,
    'bouquets',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-21%20at%2010.21.25%20PM%20%283%29-AjhGTpcWYZQA5Wia5ob8BBowtY6D78.jpeg',
    true
  ),
  (
    gen_random_uuid(),
    'Flower_Bouquet_005',
    'Vibrant mixed bouquet featuring red and yellow roses with baby''s breath, wrapped in stunning pink/magenta paper with gold accents.',
    0,
    'bouquets',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-21%20at%2010.21.25%20PM-qzDboTpo4wnLuzpzMyHFjk4pOYCJTl.jpeg',
    true
  ),
  (
    gen_random_uuid(),
    'Flower_Bouquet_006',
    'Luxurious red roses bouquet with gold butterfly decorations and baby''s breath, elegantly wrapped in black paper with gold trim.',
    0,
    'bouquets',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-21%20at%2010.21.24%20PM%20%282%29-JidXjdVOAvLwnwJGBV7OlVsw6uFSy5.jpeg',
    true
  ),
  (
    gen_random_uuid(),
    'Flower_Bouquet_007',
    'Fresh red roses arrangement with baby''s breath and eucalyptus greenery - perfect for romantic occasions.',
    0,
    'bouquets',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-21%20at%2010.21.24%20PM%20%283%29-gNj4znO3zmtpPTvdcWKR2s4rfpwM1b.jpeg',
    true
  ),
  (
    gen_random_uuid(),
    'Flower_Bouquet_008',
    'Classic red roses and carnations arrangement in a glass vase with ribbon accent - timeless elegance for any occasion.',
    0,
    'bouquets',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-21%20at%2010.21.25%20PM%20%284%29-IzSQ8MlL0jHnLJmbzISyFV1qOBLcvk.jpeg',
    true
  );
