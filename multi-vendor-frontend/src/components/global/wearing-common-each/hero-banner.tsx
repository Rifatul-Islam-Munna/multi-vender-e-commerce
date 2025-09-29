"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export interface HeroBannerProps {
  title?: string
  description?: string
  imageSrc?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
}

export function HeroBanner({
  title = "Summer Styles for Men",
  description = "Discover our latest collection of breathable fabrics and vibrant colors perfect for the season.",
  imageSrc = "/placeholder.svg?height=600&width=1200",
  primaryButtonText = "Shop Now",
  secondaryButtonText = "View Lookbook",
  onPrimaryClick = () => console.log("Primary button clicked"),
  onSecondaryClick = () => console.log("Secondary button clicked"),
}: HeroBannerProps) {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-slate-100">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
        <div className="container h-full flex flex-col justify-center px-4 md:px-6">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">{description}</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="font-medium" onClick={onPrimaryClick}>
                {primaryButtonText}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                onClick={onSecondaryClick}
              >
                {secondaryButtonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
