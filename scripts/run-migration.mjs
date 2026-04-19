import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function run() {
  // Create reviews table
  const { error: createError } = await supabase.rpc('exec', {
    query: `
      CREATE TABLE IF NOT EXISTS public.reviews (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name TEXT NOT NULL,
        email TEXT,
        phone TEXT,
        rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
        service TEXT NOT NULL,
        comment TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        is_approved BOOLEAN DEFAULT FALSE
      );
    `
  });
  
  if (createError) {
    // Table might already exist or RPC not available, try inserting a test record
    const { error: testError } = await supabase
      .from('reviews')
      .select('id')
      .limit(1);
    
    if (testError && testError.code === '42P01') {
      console.log('Table does not exist. Please run the SQL in scripts/001_create_reviews_table.sql manually in Supabase dashboard.');
      console.log('Or the table needs to be created via Supabase SQL editor.');
    } else if (testError) {
      console.log('Error checking table:', testError.message);
    } else {
      console.log('Reviews table already exists!');
    }
  } else {
    console.log('Migration successful - reviews table created');
  }
}

run();
