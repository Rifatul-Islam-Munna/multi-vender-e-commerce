"use client"


import { Heart, Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { ProductCard, ProductCardProps } from "../Common-Card/Card"

export interface CustomerReview {
  id: string
  userName: string
  userAvatar?: string
  rating: number
  date: string
  comment: string
  images?: string[]
}

export interface CustomerFavoritesProps {
  title?: string
  products: ProductCardProps[]
  reviews: CustomerReview[]
  onAddToCart?: (id: string) => void
}

export function CustomerFavorites({
  title = "Customer Favorites",
  products = [],
  reviews = [],
  onAddToCart = (id) => console.log(`Added ${id} to cart`),
}: CustomerFavoritesProps) {
  if (products.length === 0 && reviews.length === 0) {
    return null
  }

  return (
    <section className="py-12 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex items-center gap-2 mb-8">
          <Heart className="h-5 w-5 text-rose-500" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Grid */}
          {products.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {products.slice(0, 4).map((product) => (
                <ProductCard key={product.id} {...product} onAddToCart={onAddToCart} />
              ))}
            </div>
          )}

          {/* Reviews */}
          {reviews.length > 0 && (
            <div className="space-y-4">
              {reviews.map((review) => (
                <Card key={review.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-10 w-10 border">
                        <AvatarImage
                          src={
                            review.userAvatar || `/placeholder.svg?height=40&width=40&text=${review.userName.charAt(0)}`
                          }
                          alt={review.userName}
                        />
                        <AvatarFallback>{review.userName.charAt(0)}</AvatarFallback>
                      </Avatar>

                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">{review.userName}</h4>
                            <div className="flex items-center mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < review.rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground"}`}
                                />
                              ))}
                            </div>
                          </div>
                          <span className="text-xs text-muted-foreground">{review.date}</span>
                        </div>

                        <p className="mt-2 text-sm text-muted-foreground">{review.comment}</p>

                        {review.images && review.images.length > 0 && (
                          <div className="mt-3 flex items-center gap-2">
                            {review.images.map((image, index) => (
                              <div key={index} className="relative h-16 w-16 overflow-hidden rounded-md">
                                <Image
                                  src={image || "/placeholder.svg?height=64&width=64"}
                                  alt={`Review image ${index + 1}`}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
