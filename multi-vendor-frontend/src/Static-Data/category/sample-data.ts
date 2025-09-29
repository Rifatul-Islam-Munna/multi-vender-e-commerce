// Sample data structure - completely flexible and reusable

export const samplePageData = {
  hero: {
    title: "Discover Quality Clothing",
    description: "Explore our collection of premium apparel - from casual tees to stylish jackets",
    image: "/placeholder.svg?height=400&width=800",
  },

  brands: [
    {
      id: "brand-1",
      name: "Premium Brand",
      slug: "premium-brand",
      logo: "https://placehold.co/800@2x.png",
    },
    {
      id: "brand-2",
      name: "Quality Co",
      slug: "quality-co",
      logo: "https://placehold.co/800@2x.png",
    },
    {
      id: "brand-3",
      name: "Best Choice",
      slug: "best-choice",
      logo: "https://placehold.co/800@2x.png",
    },
    {
      id: "brand-4",
      name: "Top Tier",
      slug: "top-tier",
      logo: "https://placehold.co/800@2x.png",
    },
    {
      id: "brand-5",
      name: "Elite Brand",
      slug: "elite-brand",
      logo: "https://placehold.co/800@2x.png",
    },
    {
      id: "brand-6",
      name: "Superior",
      slug: "superior",
      logo: "https://placehold.co/800@2x.png",
    },
  ],

  // This could be T-Shirts, Shirts, Jackets, etc. - completely flexible
  categories: [
    {
      id: "cat-1",
      name: "Category One",
      slug: "category-one",
      image: "https://placehold.co/800@2x.png",
      count: 120,
    },
    {
      id: "cat-2",
      name: "Category Two",
      slug: "category-two",
      image: "https://placehold.co/800@2x.png",
      count: 85,
    },
    {
      id: "cat-3",
      name: "Category Three",
      slug: "category-three",
      image: "https://placehold.co/800@2x.png",
      count: 64,
    },
    {
      id: "cat-4",
      name: "Category Four",
      slug: "category-four",
      image: "https://placehold.co/800@2x.png",
      count: 42,
    },
  ],

  // Best sellers, new arrivals, featured products - same component, different data
  products: [
    {
      id: "prod-1",
      name: "Premium Product One",
      slug: "premium-product-one",
      image: "https://placehold.co/800@2x.png",
      price: 29.99,
      originalPrice: 39.99,
      discount: 25,
      isNew: false,
    },
    {
      id: "prod-2",
      name: "Quality Product Two",
      slug: "quality-product-two",
      image: "https://placehold.co/800@2x.png",
      price: 49.99,
      originalPrice: 49.99,
      discount: 0,
      isNew: true,
    },
    {
      id: "prod-3",
      name: "Best Seller Three",
      slug: "best-seller-three",
      image: "https://placehold.co/800@2x.png",
      price: 89.99,
      originalPrice: 119.99,
      discount: 25,
      isNew: false,
    },
    {
      id: "prod-4",
      name: "Featured Product Four",
      slug: "featured-product-four",
      image: "https://placehold.co/800@2x.png",
      price: 59.99,
      originalPrice: 59.99,
      discount: 0,
      isNew: true,
    },
  ],

  faqs: [
    {
      id: "faq-1",
      question: "How do I find the right size?",
      answer:
        "<p>Check our size guide for detailed measurements. Measure your chest, waist, and compare with our chart. If between sizes, size up for comfort or down for a fitted look.</p>",
    },
    {
      id: "faq-2",
      question: "What materials do you use?",
      answer:
        "<p>We use high-quality materials including 100% cotton, cotton blends, linen, and performance fabrics. Material details are listed on each product page.</p>",
    },
    {
      id: "faq-3",
      question: "How should I care for my clothes?",
      answer:
        "<p>Most items are machine washable in cold water. Check the care label on each garment. For best results, wash similar colors together and tumble dry on low heat.</p>",
    },
    {
      id: "faq-4",
      question: "What is your return policy?",
      answer:
        "<p>We offer a 30-day return policy for unworn items with original tags. Items must be in original condition for a full refund.</p>",
    },
  ],
}
