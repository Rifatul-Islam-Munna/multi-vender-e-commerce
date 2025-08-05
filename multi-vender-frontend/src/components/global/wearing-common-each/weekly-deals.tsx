"use client"

import { Clock } from "lucide-react"
import { ProductCard, ProductCardProps } from "../Common-Card/Card"

export interface WeeklyDealsProps {
  title?: string
  subtitle?: string
  countdownText?: string
  products: ProductCardProps[]
  onAddToCart?: (id: string) => void
}

export function WeeklyDeals({
  title = "This Week's Deals",
  subtitle = "Limited time offers you don't want to miss",
  countdownText = "Ends in 3 days 12:45:30",
  products = [],
  onAddToCart = (id) => console.log(`Added ${id} to cart`),
}: WeeklyDealsProps) {
  if (products.length === 0) {
    return null
  }

  return (
    <section className="py-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
            <p className="text-muted-foreground mt-1">{subtitle}</p>
          </div>

          <div className="flex items-center gap-2 bg-rose-50 px-3 py-2 rounded-full">
            <Clock className="h-4 w-4 text-rose-600" />
            <span className="text-sm font-medium text-rose-600">{countdownText}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  )
}
