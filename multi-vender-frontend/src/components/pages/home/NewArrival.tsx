import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function NewArrival() {
  const products = [
    { id: 1, name: "Half-Sleeve T-shirt", image: "https://placehold.co/600x400" },
    { id: 2, name: "Designer Short Sleeve", image: "https://placehold.co/600x400" },
    { id: 3, name: "Sports T-shirt", image: "https://placehold.co/600x400" },
    { id: 4, name: "Polo", image: "https://placehold.co/600x400" },
    { id: 5, name: "Cut & Stitch Polo", image: "https://placehold.co/600x400" },
    { id: 6, name: "Half Sleeve Raglan", image: "https://placehold.co/600x400" },
    { id: 7, name: "Half Sleeve Blanks", image: "https://placehold.co/600x400" },
    { id: 8, name: "Designer Full Sleeve", image: "https://placehold.co/600x400" },
    { id: 9, name: "Full Sleeve Raglan", image: "https://placehold.co/600x400" },
    { id: 10, name: "Full Sleeve Blanks", image: "https://placehold.co/600x400" },
    { id: 11, name: "Football Jerseys", image: "https://placehold.co/600x400" },
    { id: 12, name: "Hoodie", image: "https://placehold.co/600x400" },
  ]

  return (
    <div className="container mx-auto py-12 px-4 bg-zinc-50">
      {/* Enhanced New Arrival Section */}
      <div className="flex flex-col items-center justify-center mb-12">
        <div className="relative">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-800 mb-2">LATEST COLLECTION</h2>
          <Separator className="w-24 h-1 bg-zinc-400 mx-auto" />
        </div>
        <p className="text-zinc-500 mt-4 text-center max-w-md">Elevate your wardrobe with our premium essentials</p>
      </div>

      {/* Product Grid - Keeping the original layout */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden border-none p-0 transition-shadow  hover:shadow-sm bg-white">
            <CardContent className="p-0 relative">
              <div className="relative h-[200px] w-full">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="h-full w-full object-cover aspect-video"
                />
              </div>
              <Badge className="absolute top-2 left-2 bg-zinc-800/90 text-white font-medium">{product.name}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
