import Image from "next/image"
import Link from "next/link"
import { SectionTitle } from "@/components/ui/section-title"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface FeaturedCollectionsProps {
  title: string
  description?: string
  collections: Array<{
    id: string
    title: string
    description?: string
    image: string
    href: string
    buttonText?: string
  }>
  className?: string
  layout?: "grid" | "carousel" | "featured"
  cardStyle?: "overlay" | "card" | "minimal"
}

export function FeaturedCollections({
  title,
  description,
  collections,
  className,
  layout = "grid",
  cardStyle = "overlay",
}: FeaturedCollectionsProps) {
  return (
    <section className={cn("w-full py-12", className)}>
      <div className="container px-4 mx-auto">
        <SectionTitle title={title} description={description} />

        {layout === "grid" && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {collections.map((collection) => (
              <CollectionCard key={collection.id} collection={collection} cardStyle={cardStyle} />
            ))}
          </div>
        )}

        {layout === "featured" && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {collections.slice(0, 1).map((collection) => (
              <CollectionCard
                key={collection.id}
                collection={collection}
                cardStyle={cardStyle}
                className="md:col-span-2 aspect-[21/9]"
                featured
              />
            ))}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {collections.slice(1, 5).map((collection) => (
                <CollectionCard key={collection.id} collection={collection} cardStyle={cardStyle} />
              ))}
            </div>
          </div>
        )}

        {layout === "carousel" && (
          <div className="flex space-x-4 overflow-x-auto pb-4 -mx-4 px-4">
            {collections.map((collection) => (
              <CollectionCard
                key={collection.id}
                collection={collection}
                cardStyle={cardStyle}
                className="min-w-[280px] md:min-w-[320px]"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

interface CollectionCardProps {
  collection: {
    id: string
    title: string
    description?: string
    image: string
    href: string
    buttonText?: string
  }
  cardStyle: "overlay" | "card" | "minimal"
  className?: string
  featured?: boolean
}

function CollectionCard({ collection, cardStyle, className, featured = false }: CollectionCardProps) {
  if (cardStyle === "overlay") {
    return (
      <Link
        href={collection.href}
        className={cn(
          "group relative overflow-hidden rounded-lg",
          featured ? "aspect-video" : "aspect-[4/5]",
          className,
        )}
      >
        <Image
          src={collection.image || "/placeholder.svg?height=500&width=400"}
          alt={collection.title}
          fill
          className="object-cover  transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
          <h3 className="mb-2 text-xl font-bold md:text-2xl">{collection.title}</h3>
          {collection.description && <p className="mb-4 max-w-md text-sm text-white/80">{collection.description}</p>}
          <Button variant="outline" className=" bg-gray-800 border border-gray-900 hover:bg-zinc-950 hover:text-zinc-50 transition-all">
            {collection.buttonText || "Shop Now"}
          </Button>
        </div>
      </Link>
    )
  }

  if (cardStyle === "card") {
    return (
      <div className={cn("group overflow-hidden rounded-lg border bg-background shadow-sm", className)}>
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={collection.image || "/placeholder.svg?height=300&width=400"}
            alt={collection.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="mb-2 text-lg font-bold">{collection.title}</h3>
          {collection.description && <p className="mb-4 text-sm text-muted-foreground">{collection.description}</p>}
          <Button asChild size="sm">
            <Link href={collection.href}>{collection.buttonText || "Shop Now"}</Link>
          </Button>
        </div>
      </div>
    )
  }

  // Minimal style
  return (
    <Link
      href={collection.href}
      className={cn("group flex flex-col overflow-hidden rounded-lg border bg-background shadow-sm", className)}
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={collection.image || "/placeholder.svg?height=200&width=400"}
          alt={collection.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex items-center justify-between p-4">
        <h3 className="font-medium">{collection.title}</h3>
        <span className="text-sm text-primary">Shop Now →</span>
      </div>
    </Link>
  )
}
