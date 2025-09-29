import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { SectionTitle } from "@/components/ui/section-title"
import { cn } from "@/lib/utils"

interface CategoryGridProps {
  title: string
  description?: string
  categories: Array<{
    id: string
    name: string
    image: string
    href: string
    icon?: React.ReactNode
  }>
  className?: string
  columns?: 2 | 3 | 4
  aspectRatio?: "square" | "video" | "wide"
  hoverEffect?: "zoom" | "lift" | "glow" | "none"
}

export function CategoryGrid({
  title,
  description,
  categories,
  className,
  columns = 3,
  aspectRatio = "square",
  hoverEffect = "zoom",
}: CategoryGridProps) {
  // Define aspect ratio class
  const aspectRatioClass = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[16/9]",
  }[aspectRatio]

  // Define hover effect classes
  const getHoverEffectClasses = () => {
    switch (hoverEffect) {
      case "zoom":
        return "group-hover:scale-105"
      case "lift":
        return ""
      case "glow":
        return ""
      default:
        return ""
    }
  }

  return (
    <section className={cn("w-full py-12", className)}>
      <div className="container    px-4 mx-auto">
        <SectionTitle title={title} description={description} />

        <div
          className={cn("grid gap-4 md:gap-6", {
            "grid-cols-1 sm:grid-cols-2": columns === 2,
            "grid-cols-1 sm:grid-cols-2 md:grid-cols-3": columns === 3,
            "grid-cols-2 sm:grid-cols-2 md:grid-cols-4": columns === 4,
          })}
        >
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className={cn(
                "group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all",
                hoverEffect === "lift" && "hover:-translate-y-1 hover:shadow-md",
                hoverEffect === "glow" && "hover:shadow-lg hover:shadow-primary/20",
              )}
            >
              <div className={cn("relative w-full overflow-hidden", aspectRatioClass)}>
                <Image
                  src={category.image || "/placeholder.svg?height=300&width=300"}
                  alt={category.name}
                  fill
                  className={cn("object-cover transition-transform duration-300", getHoverEffectClasses())}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
                  {category.icon && <div className="mb-2">{category.icon}</div>}
                  <h3 className="text-xl font-bold">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
