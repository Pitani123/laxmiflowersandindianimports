// Pooja Garlands Data - Traditional garlands for pooja and ceremonies
// =================================================================================

import { DBProduct } from '@/lib/types'

export const poojaGarlands: DBProduct[] = [
  {
    id: 'pooja-garland-001',
    name: 'PoojaGarland_001',
    description: 'Traditional red button roses pooja garland with white jasmine and green leaves. Perfect for deity worship and temple offerings. Flowers: Red Button Roses, White Jasmine, Green Leaves. Colors: Red, White, Green. Price: 1ft - $12, 2ft - $24',
    price_in_cents: 1200,
    image_url: '/images/pooja-garlands/pooja-garland-001.jpg',
    category: 'pooja-garlands',
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'pooja-garland-002',
    name: 'PoojaGarland_002',
    description: 'Elegant red roses pooja garland with white tuberose flowers and dark green foliage accents. Ideal for pooja ceremonies and special occasions. Flowers: Red Roses, White Tuberose, Green Foliage. Colors: Red, White, Green. Price: 1ft - $12, 2ft - $24',
    price_in_cents: 1200,
    image_url: '/images/pooja-garlands/pooja-garland-002.jpg',
    category: 'pooja-garlands',
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'pooja-garland-003',
    name: 'PoojaGarland_003',
    description: 'Vibrant yellow roses pooja garland with red rose accents. Traditional design perfect for Ganesh pooja, Lakshmi pooja and auspicious ceremonies. Flowers: Yellow Roses, Red Roses. Colors: Yellow, Red. Price: 1ft - $12, 2ft - $24',
    price_in_cents: 1200,
    image_url: '/images/pooja-garlands/pooja-garland-003.jpg',
    category: 'pooja-garlands',
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
]
