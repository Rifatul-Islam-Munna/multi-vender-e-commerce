"use client"
import { BestRatedSection } from "./BestRatedSection"
import { HotSalesSection } from "./HotSalesSection"
import { LimitedTimeSection } from "./LimitedTimeSection"

export default function ProductDeals() {
  // Hot Sales Products
  const hotSalesProducts = [
    {
      id: "1",
      title: "Organic Honey - Pure Natural Raw Honey from Mountain Flowers",
      image: "https://placehold.co/600x400.png",
      price: 24.99,
      discountPrice: 19.99,
      quantity: "500",
      unit: "ml",
      badge: "hot-sale" as const,
      vendorName: "Nature's Best",
      stock: "in-stock" as const,
    },
    {
      id: "2",
      title: "Premium Coffee Beans - Medium Roast Arabica",
      image: "https://placehold.co/600x400.png",
      price: 18.99,
      discountPrice: 14.99,
      quantity: "250",
      unit: "g",
      badge: "hot-sale" as const,
      vendorName: "Coffee Masters",
      stock: "in-stock" as const,
    },
    {
      id: "3",
      title: "Vitamin C Serum for Face with Hyaluronic Acid",
      image: "https://placehold.co/600x400.png",
      price: 29.99,
      discountPrice: 22.99,
      quantity: "30",
      unit: "ml",
      badge: "hot-sale" as const,
      vendorName: "Beauty Essentials",
      stock: "in-stock" as const,
    },
    {
      id: "4",
      title: "Organic Quinoa - Premium Quality Superfood",
      image: "https://placehold.co/600x400.png",
      price: 12.99,
      discountPrice: 9.99,
      quantity: "500",
      unit: "g",
      badge: "hot-sale" as const,
      vendorName: "Healthy Harvest",
      stock: "in-stock" as const,
    },
    {
      id: "5",
      title: "Organic Quinoa - Premium Quality Superfood",
      image: "https://placehold.co/600x400.png",
      price: 12.99,
      discountPrice: 9.99,
      quantity: "500",
      unit: "g",
      badge: "hot-sale" as const,
      vendorName: "Healthy Harvest",
      stock: "in-stock" as const,
    },
    {
      id: "6",
      title: "Organic Quinoa - Premium Quality Superfood",
      image: "https://placehold.co/600x400.png",
      price: 12.99,
      discountPrice: 9.99,
      quantity: "500",
      unit: "g",
      badge: "hot-sale" as const,
      vendorName: "Healthy Harvest",
      stock: "in-stock" as const,
    },
  ]

  // Best Rated Products
  const bestRatedProducts = [
    {
      id: "5",
      title: "Wireless Noise Cancelling Headphones - Premium Sound Quality",
      image: "https://placehold.co/600x400.png",
      price: 199.99,
      quantity: "1",
      unit: "pc",
      badge: "unique" as const,
      vendorName: "Audio Pro",
      stock: "in-stock" as const,
    },
    {
      id: "6",
      title: "Organic Matcha Green Tea Powder - Ceremonial Grade",
      image: "https://placehold.co/600x400.png",
      price: 24.99,
      quantity: "100",
      unit: "g",
      badge: "unique" as const,
      vendorName: "Tea Masters",
      stock: "in-stock" as const,
    },
    {
      id: "7",
      title: "Handcrafted Ceramic Coffee Mug - Artisan Collection",
      image: "https://placehold.co/600x400.png",
      price: 18.99,
      quantity: "1",
      unit: "pc",
      badge: "unique" as const,
      vendorName: "Artisan Goods",
      stock: "low-stock" as const,
    },
    {
      id: "8",
      title: "Natural Bamboo Cutting Board Set - Eco-friendly Kitchen Essentials",
      image: "https://placehold.co/600x400.png",
      price: 34.99,
      quantity: "3",
      unit: "pcs",
      badge: "unique" as const,
      vendorName: "Eco Kitchen",
      stock: "in-stock" as const,
    },
  ]

  // Limited Time Deals Products
  const limitedTimeProducts = [
    {
      id: "9",
      title: "Smart Fitness Tracker with Heart Rate Monitor - 2025 Model",
      image: "https://placehold.co/600x400.png",
      price: 89.99,
      discountPrice: 59.99,
      quantity: "1",
      unit: "pc",
      badge: "discount" as const,
      vendorName: "Tech Gear",
      stock: "in-stock" as const,
    },
    {
      id: "10",
      title: "Luxury Scented Candle Set - 100% Soy Wax",
      image: "https://placehold.co/600x400.png",
      price: 45.99,
      discountPrice: 29.99,
      quantity: "3",
      unit: "pcs",
      badge: "discount" as const,
      vendorName: "ProductDeals Luxe",
      stock: "low-stock" as const,
    },
    {
      id: "11",
      title: "Professional Chef Knife - German Stainless Steel",
      image: "https://placehold.co/600x400.png",
      price: 79.99,
      discountPrice: 49.99,
      quantity: "1",
      unit: "pc",
      badge: "discount" as const,
      vendorName: "Kitchen Pro",
      stock: "in-stock" as const,
    },
    {
      id: "12",
      title: "Organic Skincare Gift Set - Natural Ingredients",
      image: "https://placehold.co/600x400.png",
      price: 65.99,
      discountPrice: 39.99,
      quantity: "1",
      unit: "set",
      badge: "discount" as const,
      vendorName: "Natural Beauty",
      stock: "out-of-stock" as const,
    },
  ]

  const handleAddToCart = (id: string) => {
    console.log(`Added product ${id} to cart`)
    // Implement your cart logic here
  }

  return (
    <main className=" px-2 sm:px-2 md:px-0">
     

      {/* Hot Sales Section */}
      <HotSalesSection products={hotSalesProducts} viewAllLink="/hot-sales" onAddToCart={handleAddToCart} />

      {/* Best Rated Section */}
      <BestRatedSection products={bestRatedProducts} viewAllLink="/best-rated" onAddToCart={handleAddToCart} />

      {/* Limited Time Deals Section */}
      <LimitedTimeSection
        products={limitedTimeProducts}
        viewAllLink="/limited-time-deals"
        onAddToCart={handleAddToCart}
      />
    </main>
  )
}
