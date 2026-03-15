-- Seed products for Laxmi Flowers & Indian Imports

-- Fresh Flowers
INSERT INTO products (name, description, price_in_cents, image, category) VALUES
('Fresh Marigolds (per lb)', 'Bright orange and yellow marigolds, perfect for puja and decorations', 899, '/images/products/fresh-marigolds.jpg', 'fresh-flowers'),
('Fresh Jasmine String', 'Fragrant jasmine flowers strung fresh daily', 599, '/images/products/fresh-jasmine.jpg', 'fresh-flowers'),
('Fresh Rose Petals', 'Soft rose petals for ceremonies and decorations', 799, '/images/products/fresh-rose-petals.jpg', 'fresh-flowers'),
('Pooja Flower Mix', 'Assorted flowers perfect for daily worship', 1299, '/images/products/fresh-pooja-mix.jpg', 'fresh-flowers');

-- Garlands
INSERT INTO products (name, description, price_in_cents, image, category) VALUES
('Varmala - Wedding Garland', 'Traditional wedding garlands for bride and groom exchange ceremony', 4999, '/images/products/garland-varmala.jpg', 'garlands'),
('Jasmine Mala', 'Pure white jasmine garland with heavenly fragrance', 1999, '/images/products/garland-jasmine.jpg', 'garlands'),
('Marigold Garland', 'Bright orange and yellow marigold strings for auspicious occasions', 1499, '/images/products/garland-marigold.jpg', 'garlands');

-- Bouquets
INSERT INTO products (name, description, price_in_cents, image, category) VALUES
('Classic Rose Bouquet', 'Elegant arrangement of premium red roses', 3999, '/images/products/bouquet-roses.jpg', 'bouquets'),
('Mixed Flower Bouquet', 'Colorful assortment of seasonal flowers', 2999, '/images/products/bouquet-mixed.jpg', 'bouquets'),
('Birthday Special Bouquet', 'Festive arrangement perfect for celebrations', 4499, '/images/products/bouquet-birthday.jpg', 'bouquets');

-- Gift Items
INSERT INTO products (name, description, price_in_cents, image, category) VALUES
('Brass Diya Set', 'Traditional brass oil lamps for puja', 2499, '/images/products/gift-brass-diya.jpg', 'gift-items'),
('Ganesh Idol', 'Beautiful decorative Ganesh statue', 3999, '/images/products/gift-ganesh-idol.jpg', 'gift-items'),
('Puja Thali Set', 'Complete decorated thali for religious ceremonies', 2999, '/images/products/gift-puja-thali.jpg', 'gift-items');

-- Silver Items
INSERT INTO products (name, description, price_in_cents, image, category) VALUES
('Silver Puja Thali', 'Pure silver thali for special religious occasions', 14999, '/images/products/silver-puja-thali.jpg', 'silver-items'),
('Silver Diya', 'Traditional silver oil lamp', 7999, '/images/products/silver-diya.jpg', 'silver-items'),
('Silver Kalash', 'Auspicious silver pot for ceremonies', 12999, '/images/products/silver-kalash.jpg', 'silver-items');

-- Brass Items
INSERT INTO products (name, description, price_in_cents, image, category) VALUES
('Brass Aarti Set', 'Complete brass aarti set with bells', 3499, '/images/products/brass-aarti.jpg', 'brass-items'),
('Brass Temple Bell', 'Traditional hanging bell for home temple', 1999, '/images/products/brass-bell.jpg', 'brass-items'),
('Brass Kalash', 'Sacred brass pot for puja ceremonies', 2999, '/images/products/brass-kalash.jpg', 'brass-items');

-- Jewellery
INSERT INTO products (name, description, price_in_cents, image, category) VALUES
('Traditional Jhumka Earrings', 'Beautiful gold-tone jhumka earrings', 1499, '/images/products/jewellery-jhumka.jpg', 'jewellery'),
('Bangles Set (6 pieces)', 'Colorful glass bangles set', 999, '/images/products/jewellery-bangles.jpg', 'jewellery'),
('Temple Necklace Set', 'Traditional South Indian style necklace', 2999, '/images/products/jewellery-necklace.jpg', 'jewellery');

-- Traditional Dresses
INSERT INTO products (name, description, price_in_cents, image, category) VALUES
('Silk Saree', 'Premium Kanchipuram silk saree', 19999, '/images/products/dress-silk-saree.jpg', 'traditional-dresses'),
('Mens Kurta Pajama', 'Elegant cotton kurta pajama set', 4999, '/images/products/dress-kurta.jpg', 'traditional-dresses'),
('Bridal Lehenga', 'Stunning bridal lehenga choli set', 34999, '/images/products/dress-lehenga.jpg', 'traditional-dresses');

-- Snacks
INSERT INTO products (name, description, price_in_cents, image, category) VALUES
('Diwali Mithai Box', 'Assorted sweets including kaju katli, ladoo, and barfi', 2499, '/images/products/diwali-sweets.jpg', 'snacks'),
('Holi Gujiya Pack', 'Traditional sweet dumplings filled with khoya', 1499, '/images/products/holi-gujiya.jpg', 'snacks'),
('Navratri Fasting Pack', 'Sabudana, kuttu flour, singhare atta for vrat', 1299, '/images/products/navratri-fasting.jpg', 'snacks'),
('Pongal Sweet Pack', 'Traditional sakkarai pongal ingredients', 999, '/images/products/pongal-sweets.jpg', 'snacks'),
('Rakhi Gift Box', 'Sweets and dry fruits combo for Raksha Bandhan', 1999, '/images/products/rakhi-gift-box.jpg', 'snacks');

-- Rentals
INSERT INTO products (name, description, price_in_cents, image, category) VALUES
('Wedding Mandap Decoration', 'Complete mandap setup with flowers (per day)', 49999, '/images/products/rental-mandap.jpg', 'rentals'),
('Ceremonial Umbrella', 'Traditional umbrella for ceremonies (per day)', 4999, '/images/products/rental-umbrella.jpg', 'rentals'),
('Brass Puja Set Rental', 'Complete brass puja items set (per day)', 2999, '/images/products/rental-brass-set.jpg', 'rentals');

-- Wedding Decorations
INSERT INTO products (name, description, price_in_cents, image, category) VALUES
('Wedding Stage Decoration', 'Complete stage setup with flowers and drapes', 79999, '/images/products/wedding-stage.jpg', 'wedding-decorations'),
('Wedding Mandap Setup', 'Traditional mandap with flower decoration', 59999, '/images/products/wedding-mandap.jpg', 'wedding-decorations'),
('Wedding Car Decoration', 'Floral decoration for wedding car', 9999, '/images/products/wedding-car.jpg', 'wedding-decorations');
