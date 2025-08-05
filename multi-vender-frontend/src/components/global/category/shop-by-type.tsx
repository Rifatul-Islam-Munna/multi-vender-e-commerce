import Image from "next/image"
import Link from "next/link"
import type { Subcategory } from "@/types"

interface ShopByTypeProps {
  title: string
  types: Subcategory[]
}

export default function ShopByType({ title, types }: ShopByTypeProps) {
  if (!types || types.length === 0) return null

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {types.map((type) => (
          <Link key={type.id} href={`/category/${type.slug}`} className="group relative overflow-hidden rounded-lg">
            <div className="aspect-square relative">
              <Image
                src={type.image || "/placeholder.svg"}
                alt={type.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-lg font-medium text-white">{type.name}</h3>
              <span className="text-sm text-white/80 mt-1 inline-block">{type.productCount} products</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
