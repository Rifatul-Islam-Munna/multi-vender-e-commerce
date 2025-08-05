import Link from "next/link"
import {
  Shirt,
  Baby,
  Smartphone,
  Laptop,
  Headphones,
  Gamepad,
  DrillIcon as Drone,
  Watch,
  Tv,
  Brush,
} from "lucide-react"

export default function Category() {
  const categories = [
    {
      name: "Fashion",
      icon: <Shirt className="h-10 w-10" />,
      href: "/category/fashion",
    },
    {
      name: "Kids",
      icon: <Baby className="h-10 w-10" />,
      href: "/category/kids",
    },
    {
      name: "Smartphones",
      icon: <Smartphone className="h-10 w-10" />,
      href: "/category/smartphones",
    },
    {
      name: "Laptops",
      icon: <Laptop className="h-10 w-10" />,
      href: "/category/laptops",
    },
    {
      name: "Audio",
      icon: <Headphones className="h-10 w-10" />,
      href: "/category/audio",
    },
    {
      name: "Gaming",
      icon: <Gamepad className="h-10 w-10" />,
      href: "/category/gaming",
    },
    {
      name: "Drones",
      icon: <Drone className="h-10 w-10" />,
      href: "/category/drones",
    },
    {
      name: "Smartwatches",
      icon: <Watch className="h-10 w-10" />,
      href: "/category/smartwatches",
    },
    {
      name: "TVs",
      icon: <Tv className="h-10 w-10" />,
      href: "/category/tvs",
    },
    {
      name: "Beauty",
      icon: <Brush className="h-10 w-10" />,
      href: "/category/beauty",
    },
  ]

  return (
    <section className="w-full py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Popular Categories
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gray-300 to-gray-100 rounded-full"></div>
          <p className="text-muted-foreground max-w-[700px] text-lg">
            Discover trending products from our trusted vendors
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="flex flex-col items-center justify-center p-8 rounded-xl bg-white hover:bg-gray-50 transition-all duration-300 border border-gray-200 hover:border-gray-100   hover:shadow-sm group"
            >
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-50 group-hover:bg-white mb-5 group-hover:scale-110 transition-all duration-300">
                <div className="text-gray-700 group-hover:text-primary transition-colors">{category.icon}</div>
              </div>
              <span className="text-base font-medium mt-2 group-hover:text-primary transition-colors">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
