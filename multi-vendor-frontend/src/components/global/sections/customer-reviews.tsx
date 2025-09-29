"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CustomerReviewsProps {
  title: string
  description?: string
  reviews: Array<{
    id: string
    name: string
    avatar?: string
    rating: number
    date: string
    review: string
    productName?: string
    productImage?: string
  }>
  className?: string
  variant?: "carousel" | "grid" | "featured"
}

export function CustomerReviews({
  title,
  description,
  reviews,
  className,
  variant = "carousel",
}: CustomerReviewsProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section className={cn("w-full py-12", className)}>
      <div className="container px-4 mx-auto">
        <SectionTitle title={title} description={description} />

        {variant === "carousel" && (
          <div className="relative mx-auto max-w-4xl">
            <div className="overflow-hidden rounded-lg bg-muted/30 p-6 md:p-10">
              <div className="relative">
                <Quote className="absolute -left-2 -top-2 h-8 w-8 text-muted-foreground/20 md:h-12 md:w-12" />
                <blockquote className="px-4  text-center text-lg md:px-10">{reviews[activeIndex].review}</blockquote>
              </div>

              <div className="mt-6 flex flex-col items-center justify-center">
                {reviews[activeIndex].avatar && (
                  <div className="mb-3 overflow-hidden rounded-full">
                    <Image
                      src={reviews[activeIndex].avatar || "/placeholder.svg?height=60&width=60"}
                      alt={reviews[activeIndex].name}
                      width={60}
                      height={60}
                      className="h-12 w-12 object-cover"
                    />
                  </div>
                )}
                <div className="text-center">
                  <div className="mb-1 font-medium">{reviews[activeIndex].name}</div>
                  <div className="mb-2 flex items-center justify-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-4 w-4",
                          i < reviews[activeIndex].rating ? "fill-primary text-primary" : "fill-muted text-muted",
                        )}
                      />
                    ))}
                  </div>
                  <div className="text-xs text-muted-foreground">{reviews[activeIndex].date}</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-6 flex items-center justify-center space-x-2">
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" onClick={prevReview}>
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous review</span>
              </Button>
              <div className="flex space-x-1">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    className={cn("h-2 w-2 rounded-full", index === activeIndex ? "bg-primary" : "bg-muted")}
                    onClick={() => setActiveIndex(index)}
                  >
                    <span className="sr-only">Review {index + 1}</span>
                  </button>
                ))}
              </div>
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" onClick={nextReview}>
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next review</span>
              </Button>
            </div>
          </div>
        )}

        {variant === "grid" && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <div key={review.id} className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="mb-4 flex items-center">
                  {review.avatar && (
                    <div className="mr-3 overflow-hidden rounded-full">
                      <Image
                        src={review.avatar || "/placeholder.svg?height=40&width=40"}
                        alt={review.name}
                        width={40}
                        height={40}
                        className="h-10 w-10 object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <div className="font-medium">{review.name}</div>
                    <div className="text-xs text-muted-foreground">{review.date}</div>
                  </div>
                </div>

                <div className="mb-3 flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-4 w-4",
                        i < review.rating ? "fill-primary text-primary" : "fill-muted text-muted",
                      )}
                    />
                  ))}
                </div>

                <p className="flex-1 text-sm">{review.review}</p>

                {review.productName && review.productImage && (
                  <div className="mt-4 flex items-center border-t pt-4">
                    <div className="relative mr-3 h-12 w-12 overflow-hidden rounded">
                      <Image
                        src={review.productImage || "/placeholder.svg?height=48&width=48"}
                        alt={review.productName}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-sm font-medium">{review.productName}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {variant === "featured" && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-muted/30 p-6 md:p-8">
              <div className="mb-6">
                <Quote className="h-8 w-8 text-muted-foreground/20" />
              </div>
              <blockquote className="mb-6 text-lg font-medium">{reviews[0].review}</blockquote>
              <div className="flex items-center">
                {reviews[0].avatar && (
                  <div className="mr-3 overflow-hidden rounded-full">
                    <Image
                      src={reviews[0].avatar || "/placeholder.svg?height=48&width=48"}
                      alt={reviews[0].name}
                      width={48}
                      height={48}
                      className="h-12 w-12 object-cover"
                    />
                  </div>
                )}
                <div>
                  <div className="font-medium">{reviews[0].name}</div>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-4 w-4",
                          i < reviews[0].rating ? "fill-primary text-primary" : "fill-muted text-muted",
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {reviews.slice(1, 4).map((review) => (
                <div key={review.id} className="rounded-lg border bg-background p-4 shadow-sm">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="font-medium">{review.name}</div>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-3 w-3",
                            i < review.rating ? "fill-primary text-primary" : "fill-muted text-muted",
                          )}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm">{review.review}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
