"use client"

import { useState } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Star, Quote, Send, User, Mail, MessageSquare, CheckCircle } from "lucide-react"

// Sample reviews - these would come from database later
const existingReviews = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    date: "February 2024",
    comment: "Absolutely beautiful garlands for my daughter's wedding! The team at Laxmi Flowers went above and beyond to make sure everything was perfect. Highly recommend!",
    service: "Wedding Decorations",
  },
  {
    id: 2,
    name: "Rajesh Patel",
    rating: 5,
    date: "January 2024",
    comment: "Best place for fresh flowers and puja items. The quality is always excellent and the staff is very helpful. Been a customer for over 5 years!",
    service: "Fresh Flowers",
  },
  {
    id: 3,
    name: "Anita Reddy",
    rating: 5,
    date: "December 2023",
    comment: "Purchased silver items for Diwali and they were stunning. Great quality and fair prices. The traditional dresses collection is also amazing!",
    service: "Silver Items",
  },
  {
    id: 4,
    name: "Suresh Kumar",
    rating: 4,
    date: "November 2023",
    comment: "Good selection of Indian snacks and gift items. Perfect for sending gifts to family. Quick service and friendly staff.",
    service: "Gift Items",
  },
  {
    id: 5,
    name: "Meena Iyer",
    rating: 5,
    date: "October 2023",
    comment: "The jasmine garlands are always fresh and fragrant. I buy them every week for our home temple. Laxmi Flowers never disappoints!",
    service: "Garlands",
  },
  {
    id: 6,
    name: "Vikram Singh",
    rating: 5,
    date: "September 2023",
    comment: "Rented decorations for our anniversary party. Everything looked amazing and the rental process was smooth. Great value for money!",
    service: "Rentals",
  },
]

function StarRating({ rating, interactive = false, onRate }: { rating: number; interactive?: boolean; onRate?: (rating: number) => void }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type={interactive ? "button" : undefined}
          onClick={() => interactive && onRate?.(star)}
          className={interactive ? "cursor-pointer transition-transform hover:scale-110" : "cursor-default"}
          disabled={!interactive}
        >
          <Star
            className={`h-5 w-5 ${
              star <= rating
                ? "fill-primary text-primary"
                : "fill-muted text-muted"
            }`}
          />
        </button>
      ))}
    </div>
  )
}

export default function ReviewsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 5,
    service: "",
    comment: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In the future, this will save to database
    console.log("Review submitted:", formData)
    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        rating: 5,
        service: "",
        comment: "",
      })
    }, 3000)
  }

  const averageRating = existingReviews.reduce((acc, r) => acc + r.rating, 0) / existingReviews.length

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">Customer Reviews</p>
              <h1 className="font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                <span className="text-balance">What Our Customers Say</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                We value your feedback! Read what our customers have to say about their experience 
                with Laxmi Flowers and Indian Imports, and share your own story.
              </p>
              
              {/* Overall Rating */}
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-4xl font-bold text-foreground">{averageRating.toFixed(1)}</span>
                  <div className="flex flex-col items-start">
                    <StarRating rating={Math.round(averageRating)} />
                    <span className="text-sm text-muted-foreground">{existingReviews.length} reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex items-center justify-between">
              <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Recent Reviews</h2>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {existingReviews.map((review) => (
                <div
                  key={review.id}
                  className="relative rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
                >
                  <Quote className="absolute right-6 top-6 h-8 w-8 text-muted/30" />
                  
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{review.name}</h3>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                  
                  <StarRating rating={review.rating} />
                  
                  <span className="mt-3 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                    {review.service}
                  </span>
                  
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {review.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Submit Review Form */}
        <section className="bg-card py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <p className="text-sm font-medium uppercase tracking-wider text-primary">Share Your Experience</p>
                <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                  <span className="text-balance">We Would Love to Hear From You</span>
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  Your feedback helps us improve and helps other customers make informed decisions. 
                  Share your experience shopping with us - whether it is about our flowers, garlands, 
                  gifts, or any other products and services.
                </p>
                
                <div className="space-y-4 rounded-xl bg-secondary p-6">
                  <h3 className="font-medium text-foreground">Why Leave a Review?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-muted-foreground">Help other customers discover great products</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-muted-foreground">Share your special moments with our community</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-muted-foreground">Help us serve you better with your feedback</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="rounded-xl border border-border bg-background p-8">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground">Thank You!</h3>
                    <p className="mt-2 text-muted-foreground">
                      Your review has been submitted successfully. We appreciate your feedback!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                        <User className="h-4 w-4" />
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                        <Mail className="h-4 w-4" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">
                        Your Rating
                      </label>
                      <StarRating 
                        rating={formData.rating} 
                        interactive 
                        onRate={(rating) => setFormData({ ...formData, rating })}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="mb-2 block text-sm font-medium text-foreground">
                        Service / Product
                      </label>
                      <select
                        id="service"
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      >
<option value="">Select a category</option>
                        <option value="Garlands">Garlands</option>
                        <option value="Flower Bouquets">Flower Bouquets</option>
                        <option value="Fresh Flowers">Fresh Flowers</option>
                        <option value="Brass Items">Brass Items</option>
                        <option value="Low Cost Jewellery">Low Cost Jewellery</option>
                        <option value="Indian Snacks">Indian Snacks</option>
                        <option value="Rentals">Rentals</option>
                        <option value="General">General Experience</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="comment" className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                        <MessageSquare className="h-4 w-4" />
                        Your Review
                      </label>
                      <textarea
                        id="comment"
                        required
                        rows={4}
                        value={formData.comment}
                        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Tell us about your experience..."
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      <Send className="mr-2 h-4 w-4" />
                      Submit Review
                    </Button>
                    
                    <p className="text-center text-xs text-muted-foreground">
                      By submitting a review, you agree to our terms of service and privacy policy.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
