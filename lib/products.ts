import { createClient } from "@/lib/supabase/server"
import type { Product } from "./types"

// Fallback products when database is not available
const fallbackProducts: Product[] = [
  // Fresh Flowers
  { id: "fresh-jasmine", name: "Fresh Jasmine Flowers", description: "Fragrant white jasmine flowers, perfect for garlands and pooja", price_in_cents: 899, image: "/images/products/fresh-jasmine.jpg", category: "fresh-flowers" },
  { id: "fresh-marigolds", name: "Fresh Marigolds", description: "Vibrant orange and yellow marigolds for decorations and worship", price_in_cents: 699, image: "/images/products/fresh-marigolds.jpg", category: "fresh-flowers" },
  { id: "fresh-rose-petals", name: "Fresh Rose Petals", description: "Delicate rose petals in red and pink varieties", price_in_cents: 799, image: "/images/products/fresh-rose-petals.jpg", category: "fresh-flowers" },
  { id: "fresh-pooja-mix", name: "Pooja Flower Mix", description: "Assorted fresh flowers perfect for daily pooja", price_in_cents: 1299, image: "/images/products/fresh-pooja-mix.jpg", category: "fresh-flowers" },
  
  // Garlands
  { id: "garland-jasmine", name: "Jasmine Garland", description: "Traditional jasmine garland, handcrafted with fresh flowers", price_in_cents: 1499, image: "/images/products/garland-jasmine.jpg", category: "garlands" },
  { id: "garland-marigold", name: "Marigold Garland", description: "Vibrant marigold garland for festivals and decorations", price_in_cents: 1299, image: "/images/products/garland-marigold.jpg", category: "garlands" },
  { id: "garland-varmala", name: "Wedding Varmala", description: "Beautiful wedding garland with roses and jasmine", price_in_cents: 4999, image: "/images/products/garland-varmala.jpg", category: "garlands" },
  
  // Bouquets
  { id: "bouquet-roses", name: "Red Rose Bouquet", description: "Elegant arrangement of 12 fresh red roses", price_in_cents: 3999, image: "/images/products/bouquet-roses.jpg", category: "bouquets" },
  { id: "bouquet-mixed", name: "Mixed Flower Bouquet", description: "Colorful assortment of seasonal flowers", price_in_cents: 2999, image: "/images/products/bouquet-mixed.jpg", category: "bouquets" },
  { id: "bouquet-birthday", name: "Birthday Celebration Bouquet", description: "Festive bouquet perfect for birthdays", price_in_cents: 3499, image: "/images/products/bouquet-birthday.jpg", category: "bouquets" },
  
  // Gift Items
  { id: "gift-puja-thali", name: "Decorative Puja Thali", description: "Beautiful brass puja thali with intricate designs", price_in_cents: 2499, image: "/images/products/gift-puja-thali.jpg", category: "gift-items" },
  { id: "gift-ganesh-idol", name: "Ganesh Idol", description: "Handcrafted brass Ganesh idol for prosperity", price_in_cents: 3499, image: "/images/products/gift-ganesh-idol.jpg", category: "gift-items" },
  { id: "gift-brass-diya", name: "Brass Diya Set", description: "Set of 5 traditional brass diyas", price_in_cents: 1999, image: "/images/products/gift-brass-diya.jpg", category: "gift-items" },
  
  // Silver Items
  { id: "silver-puja-thali", name: "Silver Puja Thali", description: "Pure silver puja thali with traditional engravings", price_in_cents: 15999, image: "/images/products/silver-puja-thali.jpg", category: "silver-items" },
  { id: "silver-kalash", name: "Silver Kalash", description: "Auspicious silver kalash for ceremonies", price_in_cents: 12999, image: "/images/products/silver-kalash.jpg", category: "silver-items" },
  { id: "silver-diya", name: "Silver Diya", description: "Elegant silver diya for special occasions", price_in_cents: 4999, image: "/images/products/silver-diya.jpg", category: "silver-items" },
  
  // Brass Items
  { id: "brass-kalash", name: "Brass Kalash", description: "Traditional brass kalash with coconut holder", price_in_cents: 2999, image: "/images/products/brass-kalash.jpg", category: "brass-items" },
  { id: "brass-bell", name: "Temple Bell", description: "Resonant brass temple bell for pooja", price_in_cents: 1499, image: "/images/products/brass-bell.jpg", category: "brass-items" },
  { id: "brass-aarti", name: "Brass Aarti Stand", description: "5-lamp brass aarti stand", price_in_cents: 1999, image: "/images/products/brass-aarti.jpg", category: "brass-items" },
  
  // Jewellery
  { id: "jewellery-jhumka", name: "Traditional Jhumka", description: "Gold-plated jhumka earrings with pearl drops", price_in_cents: 1499, image: "/images/products/jewellery-jhumka.jpg", category: "jewellery" },
  { id: "jewellery-bangles", name: "Bangle Set", description: "Set of 12 colorful glass bangles", price_in_cents: 999, image: "/images/products/jewellery-bangles.jpg", category: "jewellery" },
  { id: "jewellery-necklace", name: "Temple Necklace Set", description: "Traditional temple jewelry necklace with earrings", price_in_cents: 2999, image: "/images/products/jewellery-necklace.jpg", category: "jewellery" },
  
  // Traditional Dresses
  { id: "dress-silk-saree", name: "Kanchipuram Silk Saree", description: "Authentic Kanchipuram silk saree with gold zari", price_in_cents: 24999, image: "/images/products/dress-silk-saree.jpg", category: "traditional-dresses" },
  { id: "dress-lehenga", name: "Bridal Lehenga", description: "Elegant bridal lehenga with intricate embroidery", price_in_cents: 34999, image: "/images/products/dress-lehenga.jpg", category: "traditional-dresses" },
  { id: "dress-kurta", name: "Men's Kurta Set", description: "Cotton kurta pajama set with embroidery", price_in_cents: 4999, image: "/images/products/dress-kurta.jpg", category: "traditional-dresses" },
  
  // Snacks
  { id: "diwali-sweets", name: "Diwali Sweet Box", description: "Assorted traditional Indian sweets", price_in_cents: 2999, image: "/images/products/diwali-sweets.jpg", category: "snacks" },
  { id: "holi-gujiya", name: "Holi Gujiya Box", description: "Fresh gujiyas for Holi celebration", price_in_cents: 1999, image: "/images/products/holi-gujiya.jpg", category: "snacks" },
  { id: "navratri-fasting", name: "Navratri Fasting Kit", description: "Complete fasting snacks for Navratri", price_in_cents: 2499, image: "/images/products/navratri-fasting.jpg", category: "snacks" },
  { id: "rakhi-gift-box", name: "Rakhi Gift Box", description: "Sweets and gifts for Raksha Bandhan", price_in_cents: 3499, image: "/images/products/rakhi-gift-box.jpg", category: "snacks" },
  { id: "pongal-sweets", name: "Pongal Sweet Box", description: "Traditional South Indian Pongal sweets", price_in_cents: 1999, image: "/images/products/pongal-sweets.jpg", category: "snacks" },
  
  // Wedding Decorations
  { id: "wedding-mandap", name: "Mandap Decoration Package", description: "Complete mandap decoration with flowers", price_in_cents: 149999, image: "/images/products/wedding-mandap.jpg", category: "wedding-decorations" },
  { id: "wedding-stage", name: "Stage Decoration", description: "Beautiful stage decoration for reception", price_in_cents: 99999, image: "/images/products/wedding-stage.jpg", category: "wedding-decorations" },
  { id: "wedding-car", name: "Wedding Car Decoration", description: "Elegant car decoration with flowers", price_in_cents: 14999, image: "/images/products/wedding-car.jpg", category: "wedding-decorations" },
  
  // Rentals
  { id: "rental-mandap", name: "Mandap Rental", description: "Traditional mandap for ceremonies (per day)", price_in_cents: 29999, image: "/images/products/rental-mandap.jpg", category: "rentals" },
  { id: "rental-brass-set", name: "Brass Puja Set Rental", description: "Complete brass puja set for events", price_in_cents: 4999, image: "/images/products/rental-brass-set.jpg", category: "rentals" },
  { id: "rental-umbrella", name: "Ceremonial Umbrella Rental", description: "Traditional umbrella for processions", price_in_cents: 1999, image: "/images/products/rental-umbrella.jpg", category: "rentals" },
]

export async function getProducts(): Promise<Product[]> {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      console.log("[v0] Database error, using fallback products:", error.message)
      return fallbackProducts
    }

    return data && data.length > 0 ? data : fallbackProducts
  } catch {
    console.log("[v0] Using fallback products (database not available)")
    return fallbackProducts
  }
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("category", category)
      .order("created_at", { ascending: false })

    if (error) {
      console.log("[v0] Database error, using fallback products:", error.message)
      return fallbackProducts.filter(p => p.category === category)
    }

    return data && data.length > 0 ? data : fallbackProducts.filter(p => p.category === category)
  } catch {
    console.log("[v0] Using fallback products (database not available)")
    return fallbackProducts.filter(p => p.category === category)
  }
}

export async function getProductById(id: string): Promise<Product | null> {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single()

    if (error) {
      console.log("[v0] Database error, using fallback product:", error.message)
      return fallbackProducts.find(p => p.id === id) || null
    }

    return data
  } catch {
    console.log("[v0] Using fallback product (database not available)")
    return fallbackProducts.find(p => p.id === id) || null
  }
}

export { fallbackProducts }
