import Link from "next/link"

interface Brand {
  id: string
  name: string
  slug: string
  logo: string
}

interface TopBrandsProps {
  brands: Brand[]
}

export default function TopBrands({ brands }: TopBrandsProps) {
  if (!brands || brands.length === 0) return null

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Top Brands</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {brands.map((brand) => (
          <Link
            key={brand.id}
            href={`/brand/${brand.slug}`}
            className="group flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all hover:shadow-sm"
          >
            <div className="relative h-12 w-24 mb-2">
              <img
                src={brand.logo || "/placeholder.svg?height=48&width=96"}
                alt={brand.name}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{brand.name}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
