const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const poojaGarlands = [
  {
    name: "PoojaGarland_001",
    description: "Traditional red button roses pooja garland with white jasmine and green leaves. Perfect for deity worship and temple offerings. Flowers: Red Button Roses, White Jasmine, Green Leaves. Colors: Red, White, Green. Price: 1ft - $12, 2ft - $24",
    price_in_cents: 1200,
    image_url: "/images/pooja-garlands/pooja-garland-001.jpg",
    category: "pooja-garlands",
    is_active: true,
  },
  {
    name: "PoojaGarland_002",
    description: "Elegant red roses pooja garland with white tuberose flowers and dark green foliage accents. Ideal for pooja ceremonies and special occasions. Flowers: Red Roses, White Tuberose, Green Foliage. Colors: Red, White, Green. Price: 1ft - $12, 2ft - $24",
    price_in_cents: 1200,
    image_url: "/images/pooja-garlands/pooja-garland-002.jpg",
    category: "pooja-garlands",
    is_active: true,
  },
  {
    name: "PoojaGarland_003",
    description: "Vibrant yellow roses pooja garland with red rose accents. Traditional design perfect for Ganesh pooja, Lakshmi pooja and auspicious ceremonies. Flowers: Yellow Roses, Red Roses. Colors: Yellow, Red. Price: 1ft - $12, 2ft - $24",
    price_in_cents: 1200,
    image_url: "/images/pooja-garlands/pooja-garland-003.jpg",
    category: "pooja-garlands",
    is_active: true,
  },
];

async function addPoojaGarlands() {
  console.log('Adding Pooja Garlands to database...');
  
  // First, delete existing pooja garlands
  const { error: deleteError } = await supabase
    .from('products')
    .delete()
    .eq('category', 'pooja-garlands');
  
  if (deleteError) {
    console.error('Error deleting existing pooja garlands:', deleteError);
  } else {
    console.log('Cleared existing pooja garlands');
  }

  // Insert new pooja garlands
  const { data, error } = await supabase
    .from('products')
    .insert(poojaGarlands)
    .select();

  if (error) {
    console.error('Error inserting pooja garlands:', error);
    process.exit(1);
  }

  console.log(`Successfully added ${data.length} pooja garlands!`);
  console.log('Pooja Garlands added:');
  data.forEach(g => console.log(`  - ${g.name}: $${g.price_in_cents / 100} (1ft)`));
}

addPoojaGarlands();
