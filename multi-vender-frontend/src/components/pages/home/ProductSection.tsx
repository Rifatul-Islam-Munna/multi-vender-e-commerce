import { ProductCard } from "@/components/global/Common-Card/Card"
import { Button } from "@/components/ui/button"

import { ChevronRight } from "lucide-react"

export interface Product {
  id: string
  title: string
  image: string
  price: number
  discountPrice?: number
  quantity?: string
  unit?: string
  badge?: "hot-sale" | "discount" | "unique" | null
  vendorName: string
  stock?: "in-stock" | "low-stock" | "out-of-stock"
}

interface ProductSectionProps {
  title: string
  subtitle?: string
  products: Product[]
  viewAllLink?: string
  variant?: "default" | "hot-sales" | "best-rated" | "limited-time"
  onAddToCart?: (id: string) => void
}

export function ProductSection({
  title,
  subtitle,
  products,
  viewAllLink,
  variant = "default",
  onAddToCart,
}: ProductSectionProps) {
  return (
    <section className="py-8 border-t border-slate-100">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
            {subtitle && <p className="text-muted-foreground mt-1 text-sm">{subtitle}</p>}
          </div>
          {viewAllLink && (
            <Button variant="ghost" size="sm" className="mt-2 sm:mt-0" asChild>
              <a href={viewAllLink}>
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:[grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]
 gap-4 ">
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
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
