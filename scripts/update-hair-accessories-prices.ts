import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

const supabase = createClient(supabaseUrl, supabaseServiceKey)

// Prices in dollars - will be converted to cents
const priceUpdates = [
  { name: 'Hair_Accessories_001', priceInDollars: 45 },
  { name: 'Hair_Accessories_002', priceInDollars: 95 },
  { name: 'Hair_Accessories_003', priceInDollars: 45 },
  { name: 'Hair_Accessories_004', priceInDollars: 60 },
  { name: 'Hair_Accessories_005', priceInDollars: 75 },
  { name: 'Hair_Accessories_006', priceInDollars: 75 },
  { name: 'Hair_Accessories_007', priceInDollars: 75 },
  { name: 'Hair_Accessories_008', priceInDollars: 95 },
]

async function updatePrices() {
  console.log('Updating hair accessories prices...')
  
  for (const update of priceUpdates) {
    const priceInCents = update.priceInDollars * 100
    const { data, error } = await supabase
      .from('products')
      .update({ price_in_cents: priceInCents })
      .eq('name', update.name)
      .select()
    
    if (error) {
      console.error(`Error updating ${update.name}:`, error.message)
    } else if (data && data.length > 0) {
      console.log(`Updated ${update.name} to $${update.priceInDollars} (${priceInCents} cents)`)
    } else {
      console.log(`No product found with name: ${update.name}`)
    }
  }
  
  console.log('Done!')
}

updatePrices()
