import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function checkSchema() {
  // Get a sample product to see its structure
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('category', 'hair-accessories')
    .limit(3)
  
  if (error) {
    console.error('Error:', error.message)
    return
  }
  
  console.log('Sample hair-accessories products:')
  console.log(JSON.stringify(data, null, 2))
}

checkSchema()
