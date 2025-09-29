"use client"

import Image from "next/image"
import { Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export interface LookbookImage {
  src: string
  alt: string
  tag?: string
  featured?: boolean
}

export interface LookbookProps {
  title?: string
  viewAllText?: string
  viewAllLink?: string
  images: LookbookImage[]
}

export function Lookbook({
  title = "Style Inspiration",
  viewAllText = "View Full Lookbook",
  viewAllLink = "/lookbook",
  images = [],
}: LookbookProps) {
  if (images.length === 0) {
    return null
  }

  return (
    <section className="py-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex items-center gap-2">
            <Camera className="h-5 w-5 text-slate-700" />
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
          </div>

          <Link href={viewAllLink}>
            <Button>{viewAllText}</Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg ${image.featured ? "md:col-span-2 md:row-span-2" : ""}`}
            >
              <div className="aspect-square w-full">
                <Image
                  src={image.src || "/placeholder.svg?height=400&width=400"}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {image.tag && (
                <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
                  {image.tag}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
