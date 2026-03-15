-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  price_in_cents INTEGER NOT NULL,
  image TEXT,
  category TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Anyone can view products" ON products;
DROP POLICY IF EXISTS "Authenticated users can insert products" ON products;
DROP POLICY IF EXISTS "Authenticated users can update products" ON products;
DROP POLICY IF EXISTS "Authenticated users can delete products" ON products;

-- Anyone can view products
CREATE POLICY "Anyone can view products" ON products FOR SELECT USING (true);

-- Only authenticated users can insert products (admin)
CREATE POLICY "Authenticated users can insert products" ON products FOR INSERT 
  WITH CHECK (auth.uid() IS NOT NULL);

-- Only authenticated users can update products (admin)
CREATE POLICY "Authenticated users can update products" ON products FOR UPDATE 
  USING (auth.uid() IS NOT NULL);

-- Only authenticated users can delete products (admin)
CREATE POLICY "Authenticated users can delete products" ON products FOR DELETE 
  USING (auth.uid() IS NOT NULL);

-- Create index for category filtering
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
