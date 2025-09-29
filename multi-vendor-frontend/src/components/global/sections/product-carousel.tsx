"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"
import { ViewAllButton } from "@/components/ui/view-all-button"
import { Button } from "@/components/ui/button"

import { cn } from "@/lib/utils"
import {  ProductCard, ProductCardProps } from "../Common-Card/Card"

interface ProductCarouselProps {
  title: string
  description?: string
  products: ProductCardProps[]
  viewAllLink?: string
  className?: string
  variant?: "carousel" | "grid"
  columns?: 3 | 4 | 5
}

export function ProductCarousel({
  title,
  description,
  products,
  viewAllLink,
  className,
  variant = "carousel",
  columns = 4,
}: ProductCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    if (!scrollRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10) // 10px buffer
  }

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return

    const scrollAmount = 320 // Approximate card width + gap
    const currentScroll = scrollRef.current.scrollLeft

    scrollRef.current.scrollTo({
      left: direction === "left" ? currentScroll - scrollAmount : currentScroll + scrollAmount,
      behavior: "smooth",
    })

    // Update button states after scrolling
    setTimeout(checkScrollButtons, 300)
  }

  const handleAddToCart = (id: string) => {
    console.log(`Added product ${id} to cart`)
    // Implement your cart logic here
  }

  return (
    <section className={cn("w-full  py-12", className)}>
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-center mb-14">
          <SectionTitle title={title} description={description} alignment="left" className="mb-0" />

          {viewAllLink && <ViewAllButton href={viewAllLink} />}
        </div>

        {variant === "carousel" ? (
          <div className="relative  ">
            {/* Carousel Navigation */}
            <div className="absolute -top-16 right-0 flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Scroll left</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Scroll right</span>
              </Button>
            </div>

            {/* Products Carousel */}
            <div
              ref={scrollRef}
              className="flex space-x-4  overflow-x-auto pb-4 -mx-4 px-4 scroll-hide scrollbar-hide"
              onScroll={checkScrollButtons}
            >
              {products.map((product) => (
                <div key={product.id} className="min-w-[280px] max-w-[280px]">
                  <ProductCard
                    id={product.id}
                    title={product.title}
                    image={product.image}
                    price={product.price}
                    discountPrice={product.discountPrice}
                    quantity={product.quantity}
                    unit={product.unit}
                    badge={product.badge}
                    vendorName={product.vendorName}
                    stock={product.stock}
                    onAddToCart={handleAddToCart}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div
            className={cn("grid gap-4", {
              "grid-cols-1 sm:grid-cols-2 md:grid-cols-3": columns === 3,
              "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4": columns === 4,
              "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5": columns === 5,
            })}
          >
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                discountPrice={product.discountPrice}
                quantity={product.quantity}
                unit={product.unit}
                badge={product.badge}
                vendorName={product.vendorName}
                stock={product.stock}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
