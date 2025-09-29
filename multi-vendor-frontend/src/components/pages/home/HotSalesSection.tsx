import { ProductSection, type Product } from "./ProductSection"

interface HotSalesSectionProps {
  products: Product[]
  viewAllLink?: string
  onAddToCart?: (id: string) => void
}

export function HotSalesSection({ products, viewAllLink, onAddToCart }: HotSalesSectionProps) {
  return (
    <ProductSection
      title="Hot Sales"
      subtitle="Our most popular products at unbeatable prices"
      products={products}
      viewAllLink={viewAllLink}
      variant="hot-sales"
      onAddToCart={onAddToCart}
    />
  )
}
