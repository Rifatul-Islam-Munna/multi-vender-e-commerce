"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"

export interface OccasionItem {
  id: string
  name: string
  slug: string
  description: string
  image: string
}

export interface StyleByOccasionProps {
  title?: string
  occasions: OccasionItem[]
}

export function StyleByOccasion({ title = "Style by Occasion", occasions = [] }: StyleByOccasionProps) {
  if (occasions.length === 0) {
    return null
  }

  return (
    <section className="py-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex items-center gap-2 mb-8">
          <Calendar className="h-5 w-5 text-violet-500" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {occasions.map((occasion) => (
            <Link
              key={occasion.id}
              href={`/occasion/${occasion.slug}`}
              className="group relative h-[240px] overflow-hidden rounded-xl"
            >
              <Image
                src={occasion.image || "/placeholder.svg?height=240&width=400"}
                alt={occasion.name}
                fill
                className="object-cover transition-transform group-hover:scale-105 duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{occasion.name}</h3>
                <p className="text-white/80 text-sm">{occasion.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
