"use server"

import { createClient } from "@/lib/supabase/server"

export type ReviewFormData = {
  name: string
  email: string
  phone: string
  rating: number
  service: string
  comment: string
}

export async function submitReview(formData: ReviewFormData) {
  const supabase = await createClient()

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

  const { error } = await supabase.from("reviews").insert({
    name: formData.name,
    email: formData.email || null,
    phone: formData.phone || null,
    rating: formData.rating,
    service: formData.service,
    comment: formData.comment,
    is_approved: false,
  })

  if (error) {
    console.error("Error submitting review:", error)
    return { success: false, error: "Failed to submit review. Please try again." }
  }

  return { success: true }
}
