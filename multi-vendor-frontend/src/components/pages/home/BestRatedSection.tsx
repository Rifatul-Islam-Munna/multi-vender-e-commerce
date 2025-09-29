import { ProductSection, type Product } from "./ProductSection"

interface BestRatedSectionProps {
  products: Product[]
  viewAllLink?: string
  onAddToCart?: (id: string) => void
}

export function BestRatedSection({ products, viewAllLink, onAddToCart }: BestRatedSectionProps) {
  return (
    <ProductSection
      title="Best Rated"
      subtitle="Top-rated products loved by our customers"
      products={products}
      viewAllLink={viewAllLink}
      variant="best-rated"
      onAddToCart={onAddToCart}
    />
  )
}
