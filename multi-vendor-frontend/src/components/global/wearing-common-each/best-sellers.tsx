"use client"

import { Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ProductCard, ProductCardProps } from "../Common-Card/Card"

export interface BestSellersProps {
  title?: string
  viewAllText?: string
  viewAllLink?: string
  products: ProductCardProps[]
  onAddToCart?: (id: string) => void
}

export function BestSellers({
  title = "Best Sellers",
  viewAllText = "View All",
  viewAllLink = "/best-sellers",
  products = [],
  onAddToCart = (id) => console.log(`Added ${id} to cart`),
}: BestSellersProps) {
  if (products.length === 0) {
    return null
  }

  return (
    <section className="py-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-amber-500" />
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
          </div>

          <Link href={viewAllLink}>
            <Button variant="outline">{viewAllText}</Button>
          </Link>
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
