import Link from "next/link"

interface SectionItem {
  id: string
  name: string
  slug: string
  image: string
  count?: number
  price?: number
  originalPrice?: number
  discount?: number
  isNew?: boolean
  badge?: string
}

interface SectionProps {
  title: string
  items: SectionItem[]
  type: "grid" | "cards" | "list"
  showCount?: boolean
  showPrice?: boolean
  viewAllLink?: string
  columns?: {
    mobile: number
    tablet: number
    desktop: number
  }
}

export default function Section({
  title,
  items,
  type = "grid",
  showCount = false,
  showPrice = false,
  viewAllLink,
  columns = { mobile: 2, tablet: 3, desktop: 4 },
}: SectionProps) {
  if (!items || items.length === 0) return null

  const getGridClasses = () => {
    return `grid grid-cols-${columns.mobile} md:grid-cols-${columns.tablet} lg:grid-cols-${columns.desktop} gap-4`
  }

  const renderGridItem = (item: SectionItem) => (
    <Link key={item.id} href={`/category/${item.slug}`} className="group relative overflow-hidden rounded-lg">
      <div className="aspect-square relative">
        <img
          src={item.image || "/placeholder.svg?height=300&width=300"}
          alt={item.name}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        {item.badge && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">{item.badge}</div>
        )}
        {item.isNew && (
          <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">New</div>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-lg font-medium text-white">{item.name}</h3>
        {showCount && item.count && <span className="text-sm text-white/80 mt-1 inline-block">{item.count} items</span>}
        {showPrice && item.price && (
          <div className="mt-1 flex items-center gap-2">
            <span className="font-semibold text-white">${item.price.toFixed(2)}</span>
            {item.originalPrice && item.originalPrice > item.price && (
              <span className="text-sm text-white/70 line-through">${item.originalPrice.toFixed(2)}</span>
            )}
          </div>
        )}
      </div>
    </Link>
  )

  const renderCardItem = (item: SectionItem) => (
    <Link key={item.id} href={`/product/${item.slug}`} className="group">
      <div className="relative aspect-square rounded-lg overflow-hidden mb-3">
        <img
          src={item.image || "/placeholder.svg?height=300&width=300"}
          alt={item.name}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        {item.isNew && (
          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">New</div>
        )}
        {item.discount && item.discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {item.discount}% OFF
          </div>
        )}
      </div>
      <h3 className="font-medium text-gray-900 group-hover:text-gray-700 line-clamp-2">{item.name}</h3>
      {showPrice && item.price && (
        <div className="mt-1 flex items-center gap-2">
          <span className="font-semibold">${item.price.toFixed(2)}</span>
          {item.originalPrice && item.originalPrice > item.price && (
            <span className="text-sm text-gray-500 line-through">${item.originalPrice.toFixed(2)}</span>
          )}
        </div>
      )}
      {showCount && item.count && (
        <span className="text-sm text-gray-500 mt-1 inline-block">{item.count} available</span>
      )}
    </Link>
  )

  const renderListItem = (item: SectionItem) => (
    <Link
      key={item.id}
      href={`/category/${item.slug}`}
      className="group flex items-center p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all hover:shadow-sm"
    >
      <div className="relative h-16 w-16 rounded-lg overflow-hidden mr-4">
        <img
          src={item.image || "/placeholder.svg?height=64&width=64"}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-gray-900 group-hover:text-gray-700">{item.name}</h3>
        {showCount && item.count && <span className="text-sm text-gray-500">{item.count} items</span>}
        {showPrice && item.price && (
          <div className="mt-1 flex items-center gap-2">
            <span className="font-semibold">${item.price.toFixed(2)}</span>
            {item.originalPrice && item.originalPrice > item.price && (
              <span className="text-sm text-gray-500 line-through">${item.originalPrice.toFixed(2)}</span>
            )}
          </div>
        )}
      </div>
      {item.badge && <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{item.badge}</div>}
    </Link>
  )

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">{title}</h2>
        {viewAllLink && (
          <Link href={viewAllLink} className="text-sm font-medium text-gray-600 hover:text-gray-900">
            View all
          </Link>
        )}
      </div>

      {type === "grid" && <div className={getGridClasses()}>{items.map(renderGridItem)}</div>}

      {type === "cards" && <div className={getGridClasses()}>{items.map(renderCardItem)}</div>}

      {type === "list" && <div className="space-y-3">{items.map(renderListItem)}</div>}
    </section>
  )
}
