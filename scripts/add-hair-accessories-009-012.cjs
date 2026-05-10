const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const newHairAccessories = [
  {
    name: "Hair_Accessories_009",
    description: "Luxurious golden flower garland veni with metallic gold painted buds. Perfect for traditional ceremonies and weddings. Features black thread ties for secure wear.",
    price_in_cents: 7500,
    image_url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-29%20at%209.44.37%20PM%20%284%29-RLRQ4PKeeHDLrWmoiIbxeOOw6S3vrf.jpeg",
    category: "hair-accessories",
    is_active: true,
  },
  {
    name: "Hair_Accessories_010",
    description: "Elegant three-layer flower veni with golden flowers on top, vibrant red flowers in the middle, and white jasmine buds at the bottom. Traditional tricolor design for special occasions.",
    price_in_cents: 7500,
    image_url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-29%20at%209.44.37%20PM%20%282%29-xbDRqKJWtTDXRxhwV0Up9xvNsy70gX.jpeg",
    category: "hair-accessories",
    is_active: true,
  },
  {
    name: "Hair_Accessories_011",
    description: "Beautiful red flower garland veni made with vibrant red tulip-shaped buds. Classic design with black thread ties. Perfect for weddings and traditional ceremonies.",
    price_in_cents: 7500,
    image_url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-29%20at%209.44.37%20PM%20%283%29-9kcCgxmY7HUz4xN2FDnvwRngpYWrHd.jpeg",
    category: "hair-accessories",
    is_active: true,
  },
  {
    name: "Hair_Accessories_012",
    description: "Classic white jasmine flower veni with delicate cream-colored buds. Traditional fragrant jasmine garland perfect for South Indian weddings and ceremonies.",
    price_in_cents: 7500,
    image_url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-29%20at%209.44.38%20PM-ezdX4kWsl6yeKQCYJ0vTL2LAnpRYTs.jpeg",
    category: "hair-accessories",
    is_active: true,
  },
];

async function addHairAccessories() {
  console.log('Adding new Hair Accessories (009-012) to database...');

  // Insert new hair accessories
  const { data, error } = await supabase
    .from('products')
    .insert(newHairAccessories)
    .select();

  if (error) {
    console.error('Error inserting hair accessories:', error);
    process.exit(1);
  }

  console.log(`Successfully added ${data.length} hair accessories!`);
  console.log('Hair Accessories added:');
  data.forEach(g => console.log(`  - ${g.name}: $${g.price_in_cents / 100}`));
}

addHairAccessories();
