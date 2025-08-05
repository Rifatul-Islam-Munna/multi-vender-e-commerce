import { Product, ProductSection } from "./ProductSection"


interface LimitedTimeSectionProps {
  products: Product[]
  viewAllLink?: string
  onAddToCart?: (id: string) => void
}

export function LimitedTimeSection({ products, viewAllLink, onAddToCart }: LimitedTimeSectionProps) {
  return (
    <ProductSection
      title="Limited Time Deals"
      subtitle="Special offers available for a short time only"
      products={products}
      viewAllLink={viewAllLink}
      variant="limited-time"
      onAddToCart={onAddToCart}
    />
  )
}
