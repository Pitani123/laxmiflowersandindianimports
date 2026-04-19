// Script to update rentals products in Supabase
const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

const rentals = [
  {
    name: 'Kundulu (32 inches)',
    description: 'Traditional brass Kundulu, 32 inches tall. Small size also available. Perfect for pooja and ceremonies.',
    price_in_cents: 0, // Contact for price
    category: 'rentals',
    image_url: '/images/rentals/kundulu.jpg',
    is_active: true
  },
  {
    name: 'Ganesh Idol (2 Feet)',
    description: 'Beautiful 2 feet Ganesh idol for religious ceremonies and festivals. Ideal for Ganesh Chaturthi and special poojas.',
    price_in_cents: 0,
    category: 'rentals',
    image_url: '/images/rentals/ganesh-idol.jpg',
    is_active: true
  },
  {
    name: 'Brass Urli',
    description: 'Traditional brass Urli for floating flowers and diyas. Multiple sizes available. Creates beautiful centerpiece for events.',
    price_in_cents: 0,
    category: 'rentals',
    image_url: '/images/rentals/brass-urli.jpg',
    is_active: true
  },
  {
    name: 'Brass Diya Urli (Medium)',
    description: 'Medium size brass Diya Urli for traditional lighting. Perfect for weddings, poojas and festival decorations.',
    price_in_cents: 0,
    category: 'rentals',
    image_url: '/images/rentals/brass-diya-urli.jpg',
    is_active: true
  },
  {
    name: 'German Silver Trays',
    description: 'Elegant German silver trays for serving and decoration. Perfect for weddings, engagements and special occasions.',
    price_in_cents: 0,
    category: 'rentals',
    image_url: '/images/rentals/german-silver-trays.jpg',
    is_active: true
  },
  {
    name: 'House Warming Decor Dolls',
    description: 'Traditional decor dolls for Griha Pravesh (house warming) ceremonies. Brings auspicious blessings to your new home.',
    price_in_cents: 0,
    category: 'rentals',
    image_url: '/images/rentals/housewarming-dolls.jpg',
    is_active: true
  },
  {
    name: 'Seemantham Decor Dolls',
    description: 'Beautiful decor dolls for Seemantham (baby shower) ceremonies. Traditional South Indian baby shower decoration.',
    price_in_cents: 0,
    category: 'rentals',
    image_url: '/images/rentals/seemantham-dolls.jpg',
    is_active: true
  },
  {
    name: 'Mangalasnanam Set',
    description: 'Complete Mangalasnanam set for traditional wedding rituals. Includes all essential items for the sacred bathing ceremony.',
    price_in_cents: 0,
    category: 'rentals',
    image_url: '/images/rentals/mangalasnanam-set.jpg',
    is_active: true
  },
  {
    name: 'Idli Stand (54 Idlis)',
    description: 'Large idli stand that makes 54 idlis at once. Perfect for parties, events and large gatherings.',
    price_in_cents: 0,
    category: 'rentals',
    image_url: '/images/rentals/idli-stand.jpg',
    is_active: true
  },
  {
    name: 'Biryani Handi',
    description: 'Traditional Biryani Handi for authentic dum biryani. Available in small, medium and large sizes.',
    price_in_cents: 0,
    category: 'rentals',
    image_url: '/images/rentals/biryani-handi.jpg',
    is_active: true
  }
]

async function updateRentals() {
  console.log('Deleting existing rentals...')
  
  // Delete existing rentals
  const { error: deleteError } = await supabase
    .from('products')
    .delete()
    .eq('category', 'rentals')
  
  if (deleteError) {
    console.error('Error deleting existing rentals:', deleteError)
    return
  }
  
  console.log('Inserting new rentals...')
  
  // Insert new rentals
  const { data, error } = await supabase
    .from('products')
    .insert(rentals)
    .select()
  
  if (error) {
    console.error('Error inserting rentals:', error)
    return
  }
  
  console.log(`Successfully inserted ${data.length} rental items:`)
  data.forEach(item => {
    console.log(`  - ${item.name}`)
  })
}

updateRentals()
