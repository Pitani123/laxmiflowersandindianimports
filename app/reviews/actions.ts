"use server"

import { promises as fs } from 'fs'
import path from 'path'

export type ReviewFormData = {
  name: string
  email: string
  phone: string
  rating: number
  service: string
  comment: string
}

interface Review {
  id: string
  name: string
  email: string | null
  phone: string | null
  rating: number
  service: string
  comment: string
  is_approved: boolean
  created_at: string
}

interface ReviewsData {
  reviews: Review[]
}

const REVIEWS_FILE_PATH = path.join(process.cwd(), 'data', 'reviews.json')

// Helper to read reviews from file
async function readReviewsFile(): Promise<ReviewsData> {
  try {
    const data = await fs.readFile(REVIEWS_FILE_PATH, 'utf-8')
    return JSON.parse(data)
  } catch {
    // If file doesn't exist, return empty reviews
    return { reviews: [] }
  }
}

// Helper to write reviews to file
async function writeReviewsFile(data: ReviewsData): Promise<void> {
  // Ensure the data directory exists
  const dataDir = path.dirname(REVIEWS_FILE_PATH)
  try {
    await fs.mkdir(dataDir, { recursive: true })
  } catch {
    // Directory already exists
  }
  await fs.writeFile(REVIEWS_FILE_PATH, JSON.stringify(data, null, 2), 'utf-8')
}

// Generate a simple unique ID
function generateId(): string {
  return `review_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
}

export async function submitReview(formData: ReviewFormData) {
  // Validate required fields
  if (!formData.name || !formData.service || !formData.comment) {
    return { success: false, error: "Please fill in all required fields" }
  }

  // Validate that at least email or phone is provided
  if (!formData.email && !formData.phone) {
    return { success: false, error: "Please provide either an email address or phone number" }
  }

  // Validate rating
  if (formData.rating < 1 || formData.rating > 5) {
    return { success: false, error: "Rating must be between 1 and 5" }
  }

  try {
    const reviewsData = await readReviewsFile()
    
    const newReview: Review = {
      id: generateId(),
      name: formData.name,
      email: formData.email || null,
      phone: formData.phone || null,
      rating: formData.rating,
      service: formData.service,
      comment: formData.comment,
      is_approved: false,
      created_at: new Date().toISOString(),
    }
    
    reviewsData.reviews.push(newReview)
    await writeReviewsFile(reviewsData)
    
    return { success: true }
  } catch (error) {
    console.error("Error submitting review:", error)
    return { success: false, error: "Failed to submit review. Please try again." }
  }
}
