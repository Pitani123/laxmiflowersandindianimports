const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

const looseFlowers = [
  {
    name: 'Jasmine String - 6ft',
    description: 'Fresh fragrant jasmine flower string, 6 feet long. Perfect for hair decoration, pooja, and special occasions.',
    price_in_cents: 1500,
    category: 'loose-flowers',
    image_url: '/images/loose-flowers/jasmine-string.jpg',
    is_active: true
  },
  {
    name: 'Mullai String - 6ft',
    description: 'Fresh mullai flower string, 6 feet long. Traditional South Indian flower string for hair and pooja.',
    price_in_cents: 1500,
    category: 'loose-flowers',
    image_url: '/images/loose-flowers/mullai-string.jpg',
    is_active: true
  },
  {
    name: 'Kadhambam String - 6ft',
    description: 'Fresh kadhambam flower string, 6 feet long. Fragrant golden flowers for temple offerings and decoration.',
    price_in_cents: 1500,
    category: 'loose-flowers',
    image_url: '/images/loose-flowers/kadhambam-string.jpg',
    is_active: true
  },
  {
    name: 'Kanakambaram String - 6ft',
    description: 'Fresh kanakambaram (crossandra) flower string, 6 feet long. Vibrant orange flowers for hair and pooja.',
    price_in_cents: 1500,
    category: 'loose-flowers',
    image_url: '/images/loose-flowers/kanakambaram-string.jpg',
    is_active: true
  },
  {
    name: 'Jasmine Loose',
    description: 'Fresh loose jasmine flowers (mogra). Fragrant white flowers perfect for pooja and garland making.',
    price_in_cents: 1000,
    category: 'loose-flowers',
    image_url: '/images/loose-flowers/jasmine-loose.jpg',
    is_active: true
  },
  {
    name: 'Mullai Loose',
    description: 'Fresh loose mullai flowers. Delicate white flowers for pooja and traditional ceremonies.',
    price_in_cents: 1000,
    category: 'loose-flowers',
    image_url: '/images/loose-flowers/mullai-loose.jpg',
    is_active: true
  },
  {
    name: 'Button Roses - Red',
    description: 'Fresh red button roses. Small miniature roses perfect for pooja, decoration, and garland making.',
    price_in_cents: 400,
    category: 'loose-flowers',
    image_url: '/images/loose-flowers/button-roses-red.jpg',
    is_active: true
  },
  {
    name: 'Button Roses - Yellow',
    description: 'Fresh yellow button roses. Small miniature roses perfect for pooja, decoration, and garland making.',
    price_in_cents: 400,
    category: 'loose-flowers',
    image_url: '/images/loose-flowers/button-roses-yellow.jpg',
    is_active: true
  },
  {
    name: 'Button Roses - Orange',
    description: 'Fresh orange button roses. Small miniature roses perfect for pooja, decoration, and garland making.',
    price_in_cents: 400,
    category: 'loose-flowers',
    image_url: '/images/loose-flowers/button-roses-orange.jpg',
    is_active: true
  },
  {
    name: 'Lily',
    description: 'Fresh lily flowers. Elegant and fragrant white lilies for pooja and special occasions.',
    price_in_cents: 500,
    category: 'loose-flowers',
    image_url: '/images/loose-flowers/lily.jpg',
    is_active: true
  },
  {
    name: 'Arali',
    description: 'Fresh arali (oleander) flowers. Traditional white flowers for South Indian pooja and temple offerings.',
    price_in_cents: 500,
    category: 'loose-flowers',
    image_url: '/images/loose-flowers/arali.jpg',
    is_active: true
  },
  {
    name: 'Chamanthi - Yellow',
    description: 'Fresh yellow chamanthi (chrysanthemum) flowers. Bright yellow sevanthi for pooja and decoration.',
    price_in_cents: 500,
    category: 'loose-flowers',
    image_url: '/images/loose-flowers/chamanthi-yellow.jpg',
    is_active: true
  },
  {
    name: 'Chamanthi - White',
    description: 'Fresh white chamanthi (chrysanthemum) flowers. Pure white sevanthi for pooja and decoration.',
    price_in_cents: 500,
    category: 'loose-flowers',
    image_url: '/images/loose-flowers/chamanthi-white.jpg',
    is_active: true
  },
  {
    name: 'Marigold Loose - Yellow',
    description: 'Fresh yellow marigold flowers. Bright golden genda phool for pooja, decoration, and garlands.',
    price_in_cents: 500,
    category: 'loose-flowers',
    image_url: '/images/loose-flowers/marigold-yellow.jpg',
    is_active: true
  },
  {
    name: 'Marigold Loose - Orange',
    description: 'Fresh orange marigold flowers. Vibrant orange genda phool for pooja, decoration, and garlands.',
    price_in_cents: 500,
    category: 'loose-flowers',
    image_url: '/images/loose-flowers/marigold-orange.jpg',
    is_active: true
  },
  {
    name: 'Panneer Rose',
    description: 'Fresh panneer (desi) roses. Fragrant pink roses traditional for Indian pooja and ceremonies.',
    price_in_cents: 500,
    category: 'loose-flowers',
    image_url: '/images/loose-flowers/panneer-rose.jpg',
    is_active: true
  },
  {
    name: 'Betel Leaves (5)',
    description: 'Fresh betel leaves (paan patta), pack of 5. Essential for Hindu pooja and traditional ceremonies.',
    price_in_cents: 100,
    category: 'loose-flowers',
    image_url: '/images/loose-flowers/betel-leaves.jpg',
    is_active: true
  },
  {
    name: 'Mango Leaves (5)',
    description: 'Fresh mango leaves, pack of 5. Auspicious green leaves for Hindu ceremonies and toran decoration.',
    price_in_cents: 100,
    category: 'loose-flowers',
    image_url: '/images/loose-flowers/mango-leaves.jpg',
    is_active: true
  },
  {
    name: 'Lotus',
    description: 'Fresh lotus flower (kamal). Sacred flower for Lakshmi pooja and special religious ceremonies.',
    price_in_cents: 200,
    category: 'loose-flowers',
    image_url: '/images/loose-flowers/lotus.jpg',
    is_active: true
  },
  {
    name: 'Banana Leaf',
    description: 'Fresh banana leaf. Traditional South Indian leaf for serving food and pooja ceremonies.',
    price_in_cents: 200,
    category: 'loose-flowers',
    image_url: '/images/loose-flowers/banana-leaf.jpg',
    is_active: true
  },
  {
    name: 'Marigold String - 1ft',
    description: 'Fresh marigold flower string, 1 foot long. Perfect for doorway decoration and small torans.',
    price_in_cents: 500,
    category: 'loose-flowers',
    image_url: '/images/loose-flowers/marigold-string.jpg',
    is_active: true
  },
  {
    name: 'Marigold String with Mango Leaves - 1ft',
    description: 'Fresh marigold string with mango leaves, 1 foot long. Traditional toran for doorway decoration.',
    price_in_cents: 600,
    category: 'loose-flowers',
    image_url: '/images/loose-flowers/marigold-mango-string.jpg',
    is_active: true
  }
]

async function addLooseFlowers() {
  console.log('Adding loose flowers products to database...')

  // First, delete existing loose-flowers products to avoid duplicates
  const { error: deleteError } = await supabase
    .from('products')
    .delete()
    .eq('category', 'loose-flowers')

  if (deleteError) {
    console.error('Error deleting existing products:', deleteError)
  } else {
    console.log('Cleared existing loose-flowers products')
  }

  // Insert new products
  const { data, error } = await supabase
    .from('products')
    .insert(looseFlowers)
    .select()

  if (error) {
    console.error('Error inserting products:', error)
    process.exit(1)
  }

  console.log(`Successfully added ${data.length} loose flowers products!`)
  console.log('Products added:')
  data.forEach(p => console.log(`  - ${p.name}: $${(p.price_in_cents / 100).toFixed(2)}`))
}

addLooseFlowers()
