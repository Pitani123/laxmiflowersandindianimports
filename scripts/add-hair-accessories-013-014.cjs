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
    name: "Hair_Accessories_013",
    description: "Traditional cream jasmine gajra hair accessory in horseshoe shape with golden ribbon ties. Beautiful hand-strung jasmine buds perfect for bridal hairstyles and religious ceremonies.",
    price_in_cents: 7500,
    image_url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2012.44.18%20AM%20%281%29-k4nVi5pHpcBGIqnN43h2oMIHNjb1N8.jpeg",
    category: "hair-accessories",
    is_active: true,
  },
  {
    name: "Hair_Accessories_014",
    description: "Elegant three-layer poolajada veni with white jasmine buds, vibrant red flowers, and golden metallic flowers. Traditional tricolor design with black thread ties for secure wear. Perfect for South Indian weddings.",
    price_in_cents: 7500,
    image_url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2012.44.19%20AM-TuE7NV5SCeRqPQHdS0cWLUMVqyKxfN.jpeg",
    category: "hair-accessories",
    is_active: true,
  },
];

async function addHairAccessories() {
  console.log('Adding new Hair Accessories (013-014) to database...');

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
