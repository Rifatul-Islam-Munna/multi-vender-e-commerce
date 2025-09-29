import Image from "next/image"
import Link from "next/link"
import { SectionTitle } from "@/components/ui/section-title"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface StyleByOccasionProps {
  title: string
  description?: string
  occasions: Array<{
    id: string
    title: string
    description?: string
    image: string
    href: string
    buttonText?: string
  }>
  className?: string
  layout?: "grid" | "featured" | "alternating"
}

export function StyleByOccasion({ title, description, occasions, className, layout = "grid" }: StyleByOccasionProps) {
  return (
    <section className={cn("w-full py-12", className)}>
      <div className="container px-4 mx-auto">
        <SectionTitle title={title} description={description} />

        {layout === "grid" && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {occasions.map((occasion) => (
              <OccasionCard key={occasion.id} occasion={occasion} className="h-full" />
            ))}
          </div>
        )}

        {layout === "featured" && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="md:col-span-2">
              <OccasionCard occasion={occasions[0]} featured className="h-full" />
            </div>
            {occasions.slice(1).map((occasion) => (
              <OccasionCard key={occasion.id} occasion={occasion} className="h-full" />
            ))}
          </div>
        )}

        {layout === "alternating" && (
          <div className="space-y-12">
            {occasions.map((occasion, index) => (
              <div
                key={occasion.id}
                className={cn("flex flex-col items-center gap-8 md:flex-row", index % 2 === 1 && "md:flex-row-reverse")}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                    <Image
                      src={occasion.image || "/placeholder.svg?height=400&width=600"}
                      alt={occasion.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="mb-3 text-2xl font-bold">{occasion.title}</h3>
                  {occasion.description && <p className="mb-6 text-muted-foreground">{occasion.description}</p>}
                  <Button asChild>
                    <Link href={occasion.href}>{occasion.buttonText || "Shop Now"}</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

interface OccasionCardProps {
  occasion: {
    id: string
    title: string
    description?: string
    image: string
    href: string
    buttonText?: string
  }
  className?: string
  featured?: boolean
}

function OccasionCard({ occasion, className, featured = false }: OccasionCardProps) {
  return (
    <div className={cn("group overflow-hidden rounded-lg border bg-background shadow-sm", className)}>
      <div className={cn("relative w-full overflow-hidden", featured ? "aspect-[21/9]" : "aspect-[3/4]")}>
        <Image
          src={occasion.image || "/placeholder.svg?height=500&width=400"}
          alt={occasion.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center text-white">
          <h3 className="mb-2 text-xl font-bold md:text-2xl">{occasion.title}</h3>
          {occasion.description && <p className="mb-4 max-w-md text-sm text-white/80">{occasion.description}</p>}
          <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black">
            <Link href={occasion.href}>{occasion.buttonText || "Shop Now"}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
