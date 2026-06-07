import { DBProduct } from '@/lib/types'

// File-based flower bouquet products
// To update prices, change the price_in_cents value for each bouquet below.
// price_in_cents uses cents: e.g. 2999 = $29.99, 4999 = $49.99, 0 = "Contact for Price"

export const bouquetProducts: DBProduct[] = [
  {
    id: 'bouquet-001',
    name: 'Flower_Bouquet_001',
    description:
      "Elegant yellow roses bouquet with baby's breath, gold butterflies, and magenta wrapping paper with gold trim.",
    price_in_cents: 6000,
    category: 'bouquets',
    image_url:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-21%20at%2010.21.25%20PM%20%281%29-t4KbuVeqzQKcrEiTgVNSt3kXdfpR9s.jpeg',
    is_active: true,
    created_at: '2026-04-21T00:00:00Z',
    updated_at: '2026-04-21T00:00:00Z',
  },
  {
    id: 'bouquet-002',
    name: 'Flower_Bouquet_002',
    description:
      "Beautiful mixed arrangement with purple carnations, pink chrysanthemums, white flowers, and baby's breath in a glass vase.",
    price_in_cents: 10000,
    category: 'bouquets',
    image_url:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-21%20at%2010.21.26%20PM%20%281%29-UMR1pm60R9XMY7mWGZ2tMdpDaQoeSg.jpeg',
    is_active: true,
    created_at: '2026-04-21T00:00:00Z',
    updated_at: '2026-04-21T00:00:00Z',
  },
  {
    id: 'bouquet-003',
    name: 'Flower_Bouquet_003',
    description:
      "Classic red roses bouquet with baby's breath and gold butterfly accent, wrapped in elegant white paper with gold heart patterns.",
    price_in_cents: 6000,
    category: 'bouquets',
    image_url:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-21%20at%2010.21.25%20PM%20%282%29-z64JsH09M2rFgT2fIH0Qgu3KJK7OZf.jpeg',
    is_active: true,
    created_at: '2026-04-21T00:00:00Z',
    updated_at: '2026-04-21T00:00:00Z',
  },
  {
    id: 'bouquet-004',
    name: 'Flower_Bouquet_004',
    description:
      'Custom celebration bouquet with red roses, soccer ball decorations, and personalized banner - perfect for sports fans and special occasions.',
    price_in_cents: 7500,
    category: 'bouquets',
    image_url:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-21%20at%2010.21.25%20PM%20%283%29-AjhGTpcWYZQA5Wia5ob8BBowtY6D78.jpeg',
    is_active: true,
    created_at: '2026-04-21T00:00:00Z',
    updated_at: '2026-04-21T00:00:00Z',
  },
  {
    id: 'bouquet-005',
    name: 'Flower_Bouquet_005',
    description:
      "Vibrant mixed bouquet featuring red and yellow roses with baby's breath, wrapped in stunning pink/magenta paper with gold accents.",
    price_in_cents: 7500,
    category: 'bouquets',
    image_url:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-21%20at%2010.21.25%20PM-qzDboTpo4wnLuzpzMyHFjk4pOYCJTl.jpeg',
    is_active: true,
    created_at: '2026-04-21T00:00:00Z',
    updated_at: '2026-04-21T00:00:00Z',
  },
  {
    id: 'bouquet-006',
    name: 'Flower_Bouquet_006',
    description:
      "Luxurious red roses bouquet with gold butterfly decorations and baby's breath, elegantly wrapped in black paper with gold trim.",
    price_in_cents: 8500,
    category: 'bouquets',
    image_url:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-21%20at%2010.21.24%20PM%20%282%29-JidXjdVOAvLwnwJGBV7OlVsw6uFSy5.jpeg',
    is_active: true,
    created_at: '2026-04-21T00:00:00Z',
    updated_at: '2026-04-21T00:00:00Z',
  },
  {
    id: 'bouquet-007',
    name: 'Flower_Bouquet_007',
    description:
      "Fresh red roses arrangement with baby's breath and eucalyptus greenery - perfect for romantic occasions.",
    price_in_cents: 8500,
    category: 'bouquets',
    image_url:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-21%20at%2010.21.24%20PM%20%283%29-gNj4znO3zmtpPTvdcWKR2s4rfpwM1b.jpeg',
    is_active: true,
    created_at: '2026-04-21T00:00:00Z',
    updated_at: '2026-04-21T00:00:00Z',
  },
  {
    id: 'bouquet-008',
    name: 'Flower_Bouquet_008',
    description:
      'Classic red roses and carnations arrangement in a glass vase with ribbon accent - timeless elegance for any occasion.',
    price_in_cents: 9500,
    category: 'bouquets',
    image_url:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-21%20at%2010.21.25%20PM%20%284%29-IzSQ8MlL0jHnLJmbzISyFV1qOBLcvk.jpeg',
    is_active: true,
    created_at: '2026-04-21T00:00:00Z',
    updated_at: '2026-04-21T00:00:00Z',
  },
  {
    id: 'bouquet-009',
    name: 'Flower_Bouquet_009',
    description:
      'Luxurious deep red roses bouquet with personalized white floral lettering and ornate gold filigree butterflies, elegantly wrapped in black marble paper with gold accents.',
    price_in_cents: 15000,
    category: 'bouquets',
    image_url:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-06%20at%205.07.54%20PM-l5tX0gewd0ltP22SkiIUf9STjTuSr6.jpeg',
    is_active: true,
    created_at: '2026-06-06T00:00:00Z',
    updated_at: '2026-06-06T00:00:00Z',
  },
  {
    id: 'bouquet-010',
    name: 'Flower_Bouquet_010',
    description:
      "Elegant funeral and memorial wreaths featuring yellow and white roses with chrysanthemums and baby's breath, beautifully arranged with lush greenery for heartfelt tributes.",
    price_in_cents: 18000,
    category: 'bouquets',
    image_url:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flower_Bouquet_010-AL14FVCB5PpHUIojlqvbRUc6Hc8aeo.jpeg',
    is_active: true,
    created_at: '2026-06-07T00:00:00Z',
    updated_at: '2026-06-07T00:00:00Z',
  },
  {
    id: 'bouquet-011',
    name: 'Flower_Bouquet_011',
    description:
      "Charming bridal bouquet with pink and white roses, accented with baby's breath and fresh greenery, finished with a satin ribbon wrap.",
    price_in_cents: 8500,
    category: 'bouquets',
    image_url:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flower_Bouquet_011-7VeGNdV8CgszJZxK6Tc4Txiy0rDTvw.jpeg',
    is_active: true,
    created_at: '2026-06-07T00:00:00Z',
    updated_at: '2026-06-07T00:00:00Z',
  },
  {
    id: 'bouquet-012',
    name: 'Flower_Bouquet_012',
    description:
      'Lovely round bouquet of pink carnations and white chrysanthemums with glossy green leaves, wrapped in white marble paper with gold accents.',
    price_in_cents: 7500,
    category: 'bouquets',
    image_url:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flower_Bouquet_012-IhS8S7MkZ1AQG09OfvFzvbJwbFdKB1.jpeg',
    is_active: true,
    created_at: '2026-06-07T00:00:00Z',
    updated_at: '2026-06-07T00:00:00Z',
  },
  {
    id: 'bouquet-013',
    name: 'Flower_Bouquet_013',
    description:
      "Striking bouquet of red roses and pink stargazer lilies with baby's breath and ornate gold filigree butterfly accents, wrapped in soft pink paper with gold trim.",
    price_in_cents: 10000,
    category: 'bouquets',
    image_url:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flower_Bouquet_013-rbv07U3DLjUeEwF3yllS51wJhb2nQf.jpeg',
    is_active: true,
    created_at: '2026-06-07T00:00:00Z',
    updated_at: '2026-06-07T00:00:00Z',
  },
  {
    id: 'bouquet-014',
    name: 'Flower_Bouquet_014',
    description:
      "Romantic bouquet of red and cream roses with baby's breath and fresh greenery, featuring an elegant gold filigree butterfly centerpiece.",
    price_in_cents: 9500,
    category: 'bouquets',
    image_url:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flower_Bouquet_014-V6xjcPEspIA4T3LMFsZrRilRuAWkBh.jpeg',
    is_active: true,
    created_at: '2026-06-07T00:00:00Z',
    updated_at: '2026-06-07T00:00:00Z',
  },
]
