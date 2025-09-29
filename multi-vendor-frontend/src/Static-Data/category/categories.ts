import type { Category } from "@/types"

// Sample data for demonstration
const categories: Category[] = [
  {
    id: "mens-clothing",
    title: "Men's Clothing",
    slug: "mens-clothing",
    description: "Explore the Latest in Men's Tops – Tees, Shirts & More",
    image: "/placeholder.svg?height=600&width=1200",
    brands: [
      {
        id: "nike",
        name: "Nike",
        slug: "nike",
        logo: "/placeholder.svg?height=100&width=200",
      },
      {
        id: "adidas",
        name: "Adidas",
        slug: "adidas",
        logo: "/placeholder.svg?height=100&width=200",
      },
      {
        id: "hm",
        name: "H&M",
        slug: "hm",
        logo: "/placeholder.svg?height=100&width=200",
      },
      {
        id: "zara",
        name: "Zara",
        slug: "zara",
        logo: "/placeholder.svg?height=100&width=200",
      },
      {
        id: "levis",
        name: "Levi's",
        slug: "levis",
        logo: "/placeholder.svg?height=100&width=200",
      },
      {
        id: "gap",
        name: "GAP",
        slug: "gap",
        logo: "/placeholder.svg?height=100&width=200",
      },
    ],
    subcategories: [
      {
        id: "t-shirts",
        name: "T-Shirts",
        slug: "t-shirts",
        image: "/placeholder.svg?height=400&width=400",
        productCount: 120,
      },
      {
        id: "shirts",
        name: "Shirts",
        slug: "shirts",
        image: "/placeholder.svg?height=400&width=400",
        productCount: 85,
      },
      {
        id: "jackets",
        name: "Jackets",
        slug: "jackets",
        image: "/placeholder.svg?height=400&width=400",
        productCount: 64,
      },
      {
        id: "hoodies",
        name: "Hoodies",
        slug: "hoodies",
        image: "/placeholder.svg?height=400&width=400",
        productCount: 42,
      },
    ],
    bestSellers: [
      {
        id: "classic-tee",
        name: "Classic Cotton T-Shirt",
        slug: "classic-cotton-t-shirt",
        image: "/placeholder.svg?height=400&width=400",
        price: 29.99,
        originalPrice: 39.99,
        discount: 25,
        isNew: false,
        categoryId: "mens-clothing",
        brandId: "nike",
      },
      {
        id: "slim-fit-shirt",
        name: "Slim Fit Button-Down Shirt",
        slug: "slim-fit-button-down-shirt",
        image: "/placeholder.svg?height=400&width=400",
        price: 49.99,
        originalPrice: 49.99,
        discount: 0,
        isNew: true,
        categoryId: "mens-clothing",
        brandId: "zara",
      },
      {
        id: "denim-jacket",
        name: "Classic Denim Jacket",
        slug: "classic-denim-jacket",
        image: "/placeholder.svg?height=400&width=400",
        price: 89.99,
        originalPrice: 119.99,
        discount: 25,
        isNew: false,
        categoryId: "mens-clothing",
        brandId: "levis",
      },
      {
        id: "hoodie",
        name: "Fleece Pullover Hoodie",
        slug: "fleece-pullover-hoodie",
        image: "/placeholder.svg?height=400&width=400",
        price: 59.99,
        originalPrice: 59.99,
        discount: 0,
        isNew: true,
        categoryId: "mens-clothing",
        brandId: "adidas",
      },
    ],
    faqs: [
      {
        id: "size-guide",
        question: "How do I find my correct size?",
        answer:
          "<p>To find your correct size, refer to our size chart which provides measurements for chest, waist, and height. For t-shirts and shirts, the chest measurement is most important. For a comfortable fit, measure around the fullest part of your chest and compare to our chart.</p><p>If you're between sizes, we recommend sizing up for a more relaxed fit or sizing down for a slimmer fit.</p>",
      },
      {
        id: "materials",
        question: "What materials are used in your clothing?",
        answer:
          "<p>Our clothing is made from a variety of high-quality materials:</p><ul><li>T-shirts: 100% cotton or cotton-polyester blends</li><li>Shirts: Cotton, linen, or cotton-polyester blends</li><li>Jackets: Depending on style, materials include cotton, polyester, nylon, and leather</li><li>Hoodies: Cotton-polyester blends for comfort and durability</li></ul><p>All material information is listed on each product page under 'Specifications'.</p>",
      },
      {
        id: "care-instructions",
        question: "How should I care for my clothes?",
        answer:
          "<p>For most cotton items:</p><ul><li>Machine wash cold with similar colors</li><li>Use mild detergent</li><li>Tumble dry low or hang to dry</li><li>Iron on low heat if needed</li></ul><p>For specialty items like wool or silk, dry cleaning is recommended. Always check the care label on your specific garment for detailed instructions.</p>",
      },
    ],
  },
  {
    id: "electronics",
    title: "Electronics",
    slug: "electronics",
    description: "Discover the Latest Tech Gadgets, Laptops, Smartphones & More",
    image: "/placeholder.svg?height=600&width=1200",
    brands: [
      {
        id: "apple",
        name: "Apple",
        slug: "apple",
        logo: "/placeholder.svg?height=100&width=200",
      },
      {
        id: "samsung",
        name: "Samsung",
        slug: "samsung",
        logo: "/placeholder.svg?height=100&width=200",
      },
      {
        id: "sony",
        name: "Sony",
        slug: "sony",
        logo: "/placeholder.svg?height=100&width=200",
      },
      {
        id: "hp",
        name: "HP",
        slug: "hp",
        logo: "/placeholder.svg?height=100&width=200",
      },
      {
        id: "dell",
        name: "Dell",
        slug: "dell",
        logo: "/placeholder.svg?height=100&width=200",
      },
      {
        id: "lg",
        name: "LG",
        slug: "lg",
        logo: "/placeholder.svg?height=100&width=200",
      },
    ],
    subcategories: [
      {
        id: "laptops",
        name: "Laptops",
        slug: "laptops",
        image: "/placeholder.svg?height=400&width=400",
        productCount: 78,
      },
      {
        id: "smartphones",
        name: "Smartphones",
        slug: "smartphones",
        image: "/placeholder.svg?height=400&width=400",
        productCount: 92,
      },
      {
        id: "tablets",
        name: "Tablets",
        slug: "tablets",
        image: "/placeholder.svg?height=400&width=400",
        productCount: 45,
      },
      {
        id: "headphones",
        name: "Headphones",
        slug: "headphones",
        image: "/placeholder.svg?height=400&width=400",
        productCount: 63,
      },
    ],
    bestSellers: [
      {
        id: "macbook-air",
        name: "MacBook Air M2",
        slug: "macbook-air-m2",
        image: "/placeholder.svg?height=400&width=400",
        price: 999.99,
        originalPrice: 1199.99,
        discount: 17,
        isNew: false,
        categoryId: "electronics",
        brandId: "apple",
      },
      {
        id: "galaxy-s23",
        name: "Samsung Galaxy S23 Ultra",
        slug: "samsung-galaxy-s23-ultra",
        image: "/placeholder.svg?height=400&width=400",
        price: 1199.99,
        originalPrice: 1199.99,
        discount: 0,
        isNew: true,
        categoryId: "electronics",
        brandId: "samsung",
      },
      {
        id: "sony-wh1000xm5",
        name: "Sony WH-1000XM5 Wireless Headphones",
        slug: "sony-wh-1000xm5-wireless-headphones",
        image: "/placeholder.svg?height=400&width=400",
        price: 349.99,
        originalPrice: 399.99,
        discount: 13,
        isNew: false,
        categoryId: "electronics",
        brandId: "sony",
      },
      {
        id: "ipad-pro",
        name: "iPad Pro 12.9-inch",
        slug: "ipad-pro-12-9-inch",
        image: "/placeholder.svg?height=400&width=400",
        price: 1099.99,
        originalPrice: 1099.99,
        discount: 0,
        isNew: true,
        categoryId: "electronics",
        brandId: "apple",
      },
    ],
    faqs: [
      {
        id: "warranty",
        question: "What warranty comes with these products?",
        answer:
          "<p>Most electronics come with a manufacturer's warranty:</p><ul><li>Laptops: 1-2 year limited warranty</li><li>Smartphones: 1 year limited warranty</li><li>Tablets: 1 year limited warranty</li><li>Headphones: 1 year limited warranty</li></ul><p>Extended warranty options are available at checkout. All warranty details are listed on each product page.</p>",
      },
      {
        id: "specs",
        question: "How do I understand product specifications?",
        answer:
          "<p>When comparing electronics, focus on these key specifications:</p><ul><li>Laptops: Processor (CPU), RAM, storage, display resolution, battery life</li><li>Smartphones: Processor, RAM, storage, camera quality, battery capacity</li><li>Tablets: Display size and resolution, processor, storage, battery life</li><li>Headphones: Driver size, frequency response, noise cancellation, battery life (wireless)</li></ul><p>Our product pages include detailed specifications and comparison tools to help you make the right choice.</p>",
      },
      {
        id: "compatibility",
        question: "Are these products compatible with my existing devices?",
        answer:
          "<p>Compatibility varies by product:</p><ul><li>Apple products work best within the Apple ecosystem</li><li>Android devices are generally compatible with Windows and other Android products</li><li>Most headphones work with any device that has a 3.5mm jack or Bluetooth</li><li>USB-C devices are becoming the standard for charging and data transfer</li></ul><p>Check the 'Compatibility' section on each product page for specific details.</p>",
      },
    ],
  },
]

export function getAllCategories() {
  return categories
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug)
}
