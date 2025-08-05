// Hero Banner Data
export const heroData = {
  title: "Style for Every Body",
  description: "Discover our latest collections and seasonal looks you'll love",
  image: "https://placehold.co/600x400.png",
  promotion: {
    text: "Summer Sale - Up to 50% Off",
    highlight: true,
  },
  ctas: [
    {
      text: "Shop Men",
      href: "/category/wearing/men",
      variant: "default",
    },
    {
      text: "Shop Women",
      href: "/category/wearing/women",
      variant: "outline",
    },
    {
      text: "New Arrivals",
      href: "/category/wearing/new-arrivals",
      variant: "outline",
    },
  ],
}

// Top Categories Data
export const categoriesData = [
  {
    id: "cat-1",
    name: "Men",
    image: "https://placehold.co/600x400.png",
    href: "/categories/men",
  },
  {
    id: "cat-2",
    name: "Women",
    image: "https://placehold.co/600x400.png",
    href: "/categories/women",
  },
  {
    id: "cat-3",
    name: "Kids",
    image: "https://placehold.co/600x400.png",
    href: "/categories/kids",
  },
]

// Featured Collections Data
export const collectionsData = [
  {
    id: "col-1",
    title: "Spring Collection",
    description: "Fresh looks for the new season",
    image: "https://placehold.co/600x400.png",
    href: "/collections/spring",
    buttonText: "Explore",
  },
  {
    id: "col-2",
    title: "Work From Home Edit",
    description: "Comfortable styles for remote work",
    image: "https://placehold.co/600x400.png",
    href: "/collections/work-from-home",
    buttonText: "Shop Now",
  },
  {
    id: "col-3",
    title: "Formal Wear",
    description: "Elegant options for special occasions",
    image: "https://placehold.co/600x400.png",
    href: "/collections/formal",
    buttonText: "Discover",
  },
]

// New Arrivals Data
export const newArrivalsData = [
  {
    id: "prod-1",
    title: "Premium Cotton T-Shirt",
    image: "https://placehold.co/600x400.png",
    price: 29.99,
    discountPrice: 24.99,
    badge: "hot-sale" as const,
    vendorName: "Fashion Brand",
    stock: "in-stock" as const,
  },
  {
    id: "prod-2",
    title: "Slim Fit Jeans",
    image: "https://placehold.co/600x400.png",
    price: 59.99,
    vendorName: "Denim Co.",
    stock: "in-stock" as const,
  },
  {
    id: "prod-3",
    title: "Casual Sneakers",
    image: "https://placehold.co/600x400.png",
    price: 79.99,
    discountPrice: 69.99,
    vendorName: "Footwear Plus",
    stock: "low-stock" as const,
  },
  {
    id: "prod-4",
    title: "Summer Dress",
    image: "https://placehold.co/600x400.pngs",
    price: 49.99,
    vendorName: "Style Studio",
    stock: "in-stock" as const,
  },
  {
    id: "prod-5",
    title: "Leather Wallet",
    image: "https://placehold.co/600x400.png",
    price: 39.99,
    vendorName: "Accessories Co.",
    stock: "in-stock" as const,
  },
  {
    id: "prod-6",
    title: "Wireless Headphones",
    image: "https://placehold.co/600x400.png",
    price: 129.99,
    discountPrice: 99.99,
    badge: "discount" as const,
    vendorName: "Tech Gear",
    stock: "in-stock" as const,
  },
]

// Best Sellers Data
export const bestSellersData = [
  {
    id: "best-1",
    title: "Classic Oxford Shirt",
    image: "https://placehold.co/600x400.png",
    price: 49.99,
    vendorName: "Premium Apparel",
    stock: "in-stock" as const,
  },
  {
    id: "best-2",
    title: "Leather Crossbody Bag",
    image: "https://placehold.co/600x400.png",
    price: 89.99,
    discountPrice: 79.99,
    vendorName: "Luxury Accessories",
    stock: "in-stock" as const,
  },
  {
    id: "best-3",
    title: "Wool Blend Sweater",
    image: "https://placehold.co/600x400.png",
    price: 69.99,
    vendorName: "Cozy Knits",
    stock: "in-stock" as const,
  },
  {
    id: "best-4",
    title: "Aviator Sunglasses",
    image: "https://placehold.co/600x400.png",
    price: 129.99,
    badge: "unique" as const,
    vendorName: "Vision Trends",
    stock: "low-stock" as const,
  },
] 

// Style by Occasion Data
export const occasionsData = [
  {
    id: "occ-1",
    title: "Work",
    description: "Professional attire for the office",
    image: "https://placehold.co/600x400.png",
    href: "/occasions/work",
    buttonText: "Shop Workwear",
  },
  {
    id: "occ-2",
    title: "Casual",
    description: "Everyday comfort and style",
    image: "https://placehold.co/600x400.png",
    href: "/occasions/casual",
    buttonText: "Shop Casual",
  },
  {
    id: "occ-3",
    title: "Party",
    description: "Stand out at your next event",
    image: "https://placehold.co/600x400.png",
    href: "/occasions/party",
    buttonText: "Shop Party",
  },
  {
    id: "occ-4",
    title: "Athleisure",
    description: "Stylish activewear for every day",
    image: "https://placehold.co/600x400.png",
    href: "/occasions/athleisure",
    buttonText: "Shop Athleisure",
  },
]

// Explore by Category Data
export const exploreCategoriesData = [
  {
    id: "exp-1",
    name: "Men",
    image: "https://placehold.co/600x400.png",
    href: "/categories/men",
    subcategories: [
      { id: "men-1", name: "Tops", href: "/categories/men/tops" },
      { id: "men-2", name: "Bottoms", href: "/categories/men/bottoms" },
      { id: "men-3", name: "Shoes", href: "/categories/men/shoes" },
      { id: "men-4", name: "Accessories", href: "/categories/men/accessories" },
    ],
  },
  {
    id: "exp-2",
    name: "Women",
    image: "https://placehold.co/600x400.png",
    href: "/categories/women",
    subcategories: [
      { id: "women-1", name: "Dresses", href: "/categories/women/dresses" },
      { id: "women-2", name: "Tops", href: "/categories/women/tops" },
      { id: "women-3", name: "Bottoms", href: "/categories/women/bottoms" },
      { id: "women-4", name: "Footwear", href: "/categories/women/footwear" },
    ],
  },
  {
    id: "exp-3",
    name: "Kids",
    image: "https://placehold.co/600x400.png",
    href: "/categories/wearing/kids",
    subcategories: [
      { id: "kids-1", name: "Schoolwear", href: "/categories/kids/schoolwear" },
      { id: "kids-2", name: "Playwear", href: "/categories/kids/playwear" },
      { id: "kids-3", name: "Shoes", href: "/categories/kids/shoes" },
    ],
  },
  {
    id: "exp-4",
    name: "Accessories",
    image: "https://placehold.co/600x400.png",
    href: "/categories/categories/wearing/accessories",
    subcategories: [
      { id: "acc-1", name: "Bags", href: "/categories/accessories/bags" },
      { id: "acc-2", name: "Jewelry", href: "/categories/accessories/jewelry" },
      { id: "acc-3", name: "Hats", href: "/categories/accessories/hats" },
    ],
  },
  {
    id: "exp-5",
    name: "Footwear",
    image: "https://placehold.co/600x400.png",
    href: "/categories/footwear",
    subcategories: [
      { id: "foot-1", name: "Sneakers", href: "/categories/footwear/sneakers" },
      { id: "foot-2", name: "Boots", href: "/categories/footwear/boots" },
      { id: "foot-3", name: "Sandals", href: "/categories/footwear/sandals" },
    ],
  },
]

// Style Inspiration Data
export const inspirationData = [
  {
    id: "insp-1",
    src: "https://placehold.co/600x400.png",
    alt: "Summer casual outfit",
    products: [
      { id: "insp-prod-1", name: "Linen Shirt", price: 49.99, href: "/products/linen-shirt" },
      { id: "insp-prod-2", name: "Chino Shorts", price: 39.99, href: "/products/chino-shorts" },
      { id: "insp-prod-3", name: "Canvas Sneakers", price: 59.99, href: "/products/canvas-sneakers" },
    ],
  },
  {
    id: "insp-2",
    src: "https://placehold.co/600x400.png",
    alt: "Office attire",
    products: [
      { id: "insp-prod-4", name: "Blazer", price: 129.99, href: "/products/blazer" },
      { id: "insp-prod-5", name: "Dress Shirt", price: 59.99, href: "/products/dress-shirt" },
      { id: "insp-prod-6", name: "Dress Pants", price: 79.99, href: "/products/dress-pants" },
    ],
  },
  {
    id: "insp-3",
    src: "https://placehold.co/600x400.png",
    alt: "Weekend outfit",
    products: [
      { id: "insp-prod-7", name: "Denim Jacket", price: 89.99, href: "/products/denim-jacket" },
      { id: "insp-prod-8", name: "Graphic Tee", price: 29.99, href: "/products/graphic-tee" },
      { id: "insp-prod-9", name: "Jeans", price: 69.99, href: "/products/jeans" },
    ],
  },
  {
    id: "insp-4",
    src: "https://placehold.co/600x400.png",
    alt: "Evening look",
    products: [
      { id: "insp-prod-10", name: "Cocktail Dress", price: 119.99, href: "/products/cocktail-dress" },
      { id: "insp-prod-11", name: "Heels", price: 89.99, href: "/products/heels" },
      { id: "insp-prod-12", name: "Clutch", price: 49.99, href: "/products/clutch" },
    ],
  },
  {
    id: "insp-5",
    src: "https://placehold.co/600x400.png",
    alt: "Athleisure outfit",
    products: [
      { id: "insp-prod-13", name: "Hoodie", price: 59.99, href: "/products/hoodie" },
      { id: "insp-prod-14", name: "Joggers", price: 49.99, href: "/products/joggers" },
      { id: "insp-prod-15", name: "Running Shoes", price: 99.99, href: "/products/running-shoes" },
    ],
  },
  {
    id: "insp-6",
    src: "https://placehold.co/600x400.png",
    alt: "Beach outfit",
    products: [
      { id: "insp-prod-16", name: "Swimsuit", price: 39.99, href: "/products/swimsuit" },
      { id: "insp-prod-17", name: "Cover-up", price: 29.99, href: "/products/cover-up" },
      { id: "insp-prod-18", name: "Sandals", price: 34.99, href: "/products/sandals" },
    ],
  },
]

// Customer Reviews Data
export const reviewsData = [
  {
    id: "rev-1",
    name: "Alex Johnson",
    avatar: "https://placehold.co/600x400.png",
    rating: 5,
    date: "May 12, 2023",
    review:
      "I absolutely love the quality of these clothes! The fit is perfect and the material feels premium. Will definitely be ordering more items soon.",
    productName: "Premium Cotton T-Shirt",
    productImage: "/placeholder.svg?height=48&width=48&text=Tee",
  },
  {
    id: "rev-2",
    name: "Sarah Miller",
    avatar: "https://placehold.co/600x400.png",
    rating: 4,
    date: "April 28, 2023",
    review:
      "Great customer service and fast shipping. The dress I ordered fits well but the color is slightly different from what I expected.",
    productName: "Summer Dress",
    productImage: "https://placehold.co/600x400.png",
  },
  {
    id: "rev-3",
    name: "Michael Chen",
    avatar: "https://placehold.co/600x400.png",
    rating: 5,
    date: "June 3, 2023",
    review: "These are the most comfortable shoes I've ever owned. Perfect for long walks and they look stylish too!",
    productName: "Casual Sneakers",
    productImage: "https://placehold.co/600x400.png",
  },
  {
    id: "rev-4",
    name: "Emily Wilson",
    avatar: "https://placehold.co/600x400.png",
    rating: 3,
    date: "May 20, 2023",
    review: "The jacket is well-made but runs a bit small. I would recommend sizing up if you're between sizes.",
    productName: "Denim Jacket",
    productImage: "https://placehold.co/600x400.png",
  },
]

// Sustainability Data
export const sustainabilityData = {
  image: "https://placehold.co/600x400.png",
  features: [
    {
      id: "sus-1",
      title: "Eco-Friendly Materials",
      description: "We use organic cotton and recycled polyester in our products to reduce environmental impact.",
      icon: "leaf" as const,
    },
    {
      id: "sus-2",
      title: "Ethical Manufacturing",
      description: "All our factories adhere to fair labor practices and provide safe working conditions.",
      icon: "heart" as const,
    },
    {
      id: "sus-3",
      title: "Recycling Program",
      description: "Send back your worn items and we'll recycle them into new products.",
      icon: "recycle" as const,
    },
  ],
}

// Promo Banner Data
export const promoBannerData = [
  {
    text: "Free shipping on orders over $50",
    backgroundColor: "bg-primary",
    textColor: "text-primary-foreground",
  },
  {
    text: "Buy 2, Get 1 Free on Summer Wear",
    backgroundColor: "bg-rose-500",
    textColor: "text-white",
  },
]
