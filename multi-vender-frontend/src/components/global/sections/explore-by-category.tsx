import Image from "next/image"
import Link from "next/link"
import { SectionTitle } from "@/components/ui/section-title"
import { cn } from "@/lib/utils"

interface Category {
  id: string
  name: string
  image?: string
  href: string
  subcategories?: Array<{
    id: string
    name: string
    href: string
  }>
}

interface ExploreByCategory {
  title: string
  description?: string
  categories: Category[]
  className?: string
  layout?: "grid" | "list" | "tabs"
}

export function ExploreByCategory({ title, description, categories, className, layout = "grid" }: ExploreByCategory) {
  return (
    <section className={cn("w-full py-12", className)}>
      <div className="container px-4 mx-auto">
        <SectionTitle title={title} description={description} />

        {layout === "grid" && (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {categories.map((category) => (
              <Link key={category.id} href={category.href} className="group flex flex-col items-center text-center">
                {category.image && (
                  <div className="mb-3 overflow-hidden rounded-full border p-2">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full sm:h-20 sm:w-20">
                      <Image
                        src={category.image || "/placeholder.svg?height=80&width=80"}
                        alt={category.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                )}
                <h3 className="font-medium group-hover:text-primary">{category.name}</h3>
                {category.subcategories && (
                  <p className="mt-1 text-xs text-muted-foreground">{category.subcategories.length} subcategories</p>
                )}
              </Link>
            ))}
          </div>
        )}

        {layout === "list" && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <div key={category.id} className="space-y-3">
                <Link href={category.href} className="inline-block text-lg font-bold hover:text-primary">
                  {category.name}
                </Link>
                {category.subcategories && (
                  <ul className="space-y-1">
                    {category.subcategories.map((subcategory) => (
                      <li key={subcategory.id}>
                        <Link
                          href={subcategory.href}
                          className="text-sm text-muted-foreground hover:text-primary hover:underline"
                        >
                          {subcategory.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {layout === "tabs" && (
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Link
                  key={category.id}
                  href={category.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    index === 0 ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80",
                  )}
                >
                  {category.name}
                </Link>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {categories[0].subcategories?.map((subcategory) => (
                <Link
                  key={subcategory.id}
                  href={subcategory.href}
                  className="group flex flex-col items-center text-center"
                >
                  <div className="mb-3 overflow-hidden rounded-lg">
                    <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                      <Image
                        src={`/placeholder.svg?height=120&width=120&text=${encodeURIComponent(subcategory.name)}`}
                        alt={subcategory.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <h3 className="text-sm font-medium group-hover:text-primary">{subcategory.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
