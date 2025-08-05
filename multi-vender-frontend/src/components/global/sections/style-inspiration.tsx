"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { SectionTitle } from "@/components/ui/section-title"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

interface StyleInspirationProps {
  title: string
  description?: string
  images: Array<{
    id: string
    src: string
    alt: string
    products?: Array<{
      id: string
      name: string
      price: number
      href: string
    }>
  }>
  className?: string
  layout?: "grid" | "masonry" | "instagram"
}

export function StyleInspiration({ title, description, images, className, layout = "grid" }: StyleInspirationProps) {
  const [selectedImage, setSelectedImage] = useState<(typeof images)[0] | null>(null)

  return (
    <section className={cn("w-full py-12", className)}>
      <div className="container px-4 mx-auto">
        <SectionTitle title={title} description={description} />

        {layout === "grid" && (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {images.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src || "/placeholder.svg?height=300&width=300"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {image.products && image.products.length > 0 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/30 group-hover:opacity-100">
                    <Button variant="secondary" size="sm">
                      Shop the look
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {layout === "masonry" && (
          <div className="columns-2 gap-4 sm:columns-3 md:columns-4">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={cn(
                  "group relative mb-4 cursor-pointer overflow-hidden rounded-lg",
                  index % 3 === 0 ? "aspect-[3/4]" : index % 3 === 1 ? "aspect-square" : "aspect-[4/5]",
                )}
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src || "/placeholder.svg?height=400&width=300"}
                  alt={image.alt}
                  width={300}
                  height={400}
                  className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {image.products && image.products.length > 0 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/30 group-hover:opacity-100">
                    <Button variant="secondary" size="sm">
                      Shop the look
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {layout === "instagram" && (
          <div className="grid grid-cols-3 gap-1 md:gap-2">
            {images.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-square cursor-pointer overflow-hidden"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src || "/placeholder.svg?height=300&width=300"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {image.products && image.products.length > 0 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/30 group-hover:opacity-100">
                    <Button variant="secondary" size="sm" className="h-8 text-xs">
                      Shop
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Product Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Shop the look</DialogTitle>
              <DialogDescription>Products featured in this style inspiration.</DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                {selectedImage && (
                  <Image
                    src={selectedImage.src || "/placeholder.svg?height=300&width=300"}
                    alt={selectedImage.alt}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              <div>
                <h4 className="mb-4 font-medium">Featured Products</h4>
                <div className="space-y-4">
                  {selectedImage?.products?.map((product) => (
                    <div key={product.id} className="flex justify-between">
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-muted-foreground">${product.price.toFixed(2)}</p>
                      </div>
                      <Button asChild size="sm" variant="outline">
                        <Link href={product.href}>View</Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
