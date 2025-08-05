import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface HeroBannerProps {
  title: string
  description?: string
  image: string
  ctas: Array<{
    text: string
    href: string
    
  }>
  promotion?: {
    text: string
    highlight?: boolean
  }
  className?: string
  imagePosition?: "left" | "right" | "center" | "background"
  textColor?: string
  overlayColor?: string
  overlayOpacity?: number
}

export function HeroBanner({
  title,
  description,
  image,
  ctas,
  promotion,
  className,
  imagePosition = "background",
  textColor = "text-white",
  overlayColor = "bg-black",
  overlayOpacity = 50,
}: HeroBannerProps) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden rounded-md",
        imagePosition === "background" ? "h-[500px] md:h-[600px]" : "py-12 md:py-16",
        className,
      )}
    >
      {/* Background Image */}
      {imagePosition === "background" && (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src={image || "/placeholder.svg?height=600&width=1200"}
              alt={title}
              fill
              priority
              className="object-cover rounded" 
            />
          </div>
          <div className={cn("absolute inset-0 z-10", overlayColor, `opacity-${overlayOpacity}`)}></div>
        </>
      )}

      <div className="container relative z-20 mx-auto px-4 h-full">
        <div
          className={cn("flex h-full items-center", {
            "justify-center text-center": imagePosition === "background" || imagePosition === "center",
            "justify-start text-left": imagePosition === "right",
            "justify-end text-right": imagePosition === "left",
          })}
        >
          <div className={cn("max-w-2xl", textColor)}>
            {/* Promotion Tag */}
            {promotion && (
              <div
                className={cn(
                  "mb-4 inline-block  rounded-full px-4 py-1 text-sm font-medium",
                  promotion.highlight ? "bg-primary text-primary-foreground" : "bg-muted",
                )}
              >
                {promotion.text}
              </div>
            )}

            {/* Title */}
            <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">{title}</h1>

            {/* Description */}
            {description && <p className="mb-6 max-w-md text-lg md:text-xl">{description}</p>}

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              {ctas.map((cta, index) => (
                <Button key={index} variant={"default"} size="lg" asChild>
                  <Link className="" href={cta.href}>{cta.text}</Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
