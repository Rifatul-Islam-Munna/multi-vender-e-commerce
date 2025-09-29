import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/types"
import { Badge } from "@/components/ui/badge"

interface BestSellersProps {
  products: Product[]
}

export default function BestSellers({ products }: BestSellersProps) {
  if (!products || products.length === 0) return null

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Best Sellers</h2>
        <Link href="/products" className="text-sm font-medium text-gray-600 hover:text-gray-900">
          View all
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.slug}`} className="group">
            <div className="relative aspect-square rounded-lg overflow-hidden mb-3">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              {product.isNew && <Badge className="absolute top-2 right-2">New</Badge>}
              {product.discount > 0 && (
                <Badge variant="destructive" className="absolute top-2 left-2">
                  {product.discount}% OFF
                </Badge>
              )}
            </div>
            <h3 className="font-medium text-gray-900 group-hover:text-gray-700 line-clamp-2">{product.name}</h3>
            <div className="mt-1 flex items-center gap-2">
              <span className="font-semibold">${product.price.toFixed(2)}</span>
              {product.originalPrice > product.price && (
                <span className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
