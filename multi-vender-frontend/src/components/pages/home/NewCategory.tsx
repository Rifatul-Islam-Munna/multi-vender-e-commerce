"use client"

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Cat, Sun, Gift, Shield, Calendar } from "lucide-react"

export default function NewCategory() {
  const categories = [
    {
      name: "Unilever",
      icon: <ShoppingBag className="h-6 w-6" />,
      description: "Explore our range of Unilever products including personal care, home care, and food brands.",
      isNew: true,
    },
    {
      name: "Pet Shop",
      icon: <Cat className="h-6 w-6" />,
      description: "Find everything your furry friends need - from premium food to toys and accessories.",
      isNew: false,
    },
    {
      name: "Summer Item",
      icon: <Sun className="h-6 w-6" />,
      description: "Beat the heat with our summer essentials - cooling appliances, refreshing drinks, and more.",
      isNew: true,
    },
    {
      name: "Buy & Get Free",
      icon: <Gift className="h-6 w-6" />,
      description: "Special promotions where you buy selected items and get complementary products for free.",
      isNew: true,
    },
    {
      name: "Dengue Corner",
      icon: <Shield className="h-6 w-6" />,
      description: "Protect your family with our range of mosquito repellents and dengue prevention products.",
      isNew: true,
    },
    {
      name: "Weekend Deals",
      icon: <Calendar className="h-6 w-6" />,
      description: "Limited-time offers available only on weekends. Grab the best deals before they're gone!",
      isNew: true,
    },
  ]

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  gap-4  justify-center items-center">
        {categories.map((category, index) => (
          <HoverCard key={index}>
            <HoverCardTrigger className="w-full">
              <div className="relative  flex items-center border rounded-lg p-4 cursor-pointer hover:border-primary transition-colors">
                {category.isNew && (
                  <Badge className="absolute -top-2 -right-2 bg-yellow-400 text-black font-medium hover:bg-yellow-500">
                    New
                  </Badge>
                )}
                <div className="mr-3 text-primary text-xs sm:text-sm lg:text-base">{category.icon}</div>
                <span className=" text-xs sm:text-sm lg:text-base font-medium">{category.name}</span>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 p-5">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="text-primary">{category.icon}</div>
                  <h4 className="text-xl font-bold">{category.name}</h4>
                  {category.isNew && (
                    <Badge className="bg-yellow-400 text-black font-medium hover:bg-yellow-500">New</Badge>
                  )}
                </div>
                <p className="text-base text-muted-foreground">{category.description}</p>
                <div className="pt-2">
                  <a href="#" className="text-primary font-medium hover:underline">
                    View all products →
                  </a>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  )
}
