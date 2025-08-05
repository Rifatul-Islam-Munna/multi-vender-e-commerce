"use client"

import { Button } from "@/components/ui/button"
import { Compass } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export interface RecommendationItem {
  id: string
  title: string
  description: string
  image: string
  badge?: string
  url: string
}

export interface ExploreMoreProps {
  title?: string
  recommendations: RecommendationItem[]
}

export function ExploreMore({ title = "Recommended for You", recommendations = [] }: ExploreMoreProps) {
  if (recommendations.length === 0) {
    return null
  }

  return (
    <section className="py-12 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex items-center gap-2 mb-8">
          <Compass className="h-5 w-5 text-teal-500" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className="group flex flex-col overflow-hidden rounded-lg border bg-background shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative h-[200px] w-full overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg?height=200&width=400"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105 duration-300"
                />
                {item.badge && (
                  <div className="absolute top-3 left-3 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
                    {item.badge}
                  </div>
                )}
              </div>

              <div className="flex flex-col p-4">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                <Button variant="outline" className="mt-auto">
                  Explore
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
