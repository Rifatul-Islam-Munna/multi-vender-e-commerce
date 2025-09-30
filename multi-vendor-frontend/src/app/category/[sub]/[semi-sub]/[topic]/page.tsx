import BuyingGuide from "@/components/global/category/buying-guide";
import HeroBanner from "@/components/global/category/hero-banner";
import Section from "@/components/global/category/section";
import TopBrands from "@/components/global/category/top-brands";
import { samplePageData } from "@/Static-Data/category/sample-data";
import { categories } from "@/Static-Data/NavBar";

export async function generateStaticParams() {
  const params: { sub: string; "semi-sub": string; topic: string }[] = [];

  for (const main of categories) {
    for (const sub of main.submenu) {
      for (const topic of sub.submenu) {
        params.push({
          sub: main.name.toLocaleLowerCase(),
          "semi-sub": sub.label.toLocaleLowerCase(),
          topic: topic.label.toLocaleLowerCase(),
        });
      }
    }
  }

  return params;
}
export default async function CategoryPage({
  params,
}: {
  params: { sub: string; "semi-sub": string; topic: string };
}) {
  const { hero, brands, faqs } = samplePageData;
  console.log(await params);

  // Each category gets its own section with products
  const tshirtProducts = [
    {
      id: "tshirt-1",
      name: "Classic Cotton T-Shirt",
      slug: "classic-cotton-tshirt",
      image: "https://placehold.co/800@2x.png",
      price: 19.99,
      originalPrice: 24.99,
      discount: 20,
      isNew: false,
    },
    {
      id: "tshirt-2",
      name: "Premium Organic Tee",
      slug: "premium-organic-tee",
      image: "https://placehold.co/800@2x.png",
      price: 29.99,
      isNew: true,
    },
    {
      id: "tshirt-3",
      name: "Vintage Style T-Shirt",
      slug: "vintage-style-tshirt",
      image: "https://placehold.co/800@2x.png",
      price: 22.99,
      originalPrice: 27.99,
      discount: 18,
      isNew: false,
    },
    {
      id: "tshirt-4",
      name: "Athletic Performance Tee",
      slug: "athletic-performance-tee",
      image: "https://placehold.co/800@2x.png",
      price: 34.99,
      isNew: true,
    },
  ];

  const shirtProducts = [
    {
      id: "shirt-1",
      name: "Formal Button-Down Shirt",
      slug: "formal-button-down-shirt",
      image: "https://placehold.co/800@2x.png",
      price: 49.99,
      originalPrice: 59.99,
      discount: 17,
      isNew: false,
    },
    {
      id: "shirt-2",
      name: "Casual Linen Shirt",
      slug: "casual-linen-shirt",
      image: "https://placehold.co/800@2x.png",
      price: 39.99,
      isNew: true,
    },
    {
      id: "shirt-3",
      name: "Flannel Check Shirt",
      slug: "flannel-check-shirt",
      image: "https://placehold.co/800@2x.png",
      price: 44.99,
      originalPrice: 54.99,
      discount: 18,
      isNew: false,
    },
    {
      id: "shirt-4",
      name: "Oxford Cotton Shirt",
      slug: "oxford-cotton-shirt",
      image: "https://placehold.co/800@2x.png",
      price: 52.99,
      isNew: false,
    },
  ];

  const jacketProducts = [
    {
      id: "jacket-1",
      name: "Denim Jacket",
      slug: "denim-jacket",
      image: "https://placehold.co/800@2x.png",
      price: 79.99,
      originalPrice: 99.99,
      discount: 20,
      isNew: false,
    },
    {
      id: "jacket-2",
      name: "Leather Bomber Jacket",
      slug: "leather-bomber-jacket",
      image: "https://placehold.co/800@2x.png",
      price: 149.99,
      isNew: true,
    },
    {
      id: "jacket-3",
      name: "Windbreaker Jacket",
      slug: "windbreaker-jacket",
      image: "https://placehold.co/800@2x.png",
      price: 64.99,
      originalPrice: 79.99,
      discount: 19,
      isNew: false,
    },
  ];

  const hoodieProducts = [
    {
      id: "hoodie-1",
      name: "Fleece Pullover Hoodie",
      slug: "fleece-pullover-hoodie",
      image: "https://placehold.co/800@2x.png",
      price: 54.99,
      originalPrice: 64.99,
      discount: 15,
      isNew: false,
    },
    {
      id: "hoodie-2",
      name: "Zip-Up Hoodie",
      slug: "zip-up-hoodie",
      image: "https://placehold.co/800@2x.png",
      price: 59.99,
      isNew: true,
    },
  ];

  const bestSellers = [
    {
      id: "best-1",
      name: "Best Selling Cotton Tee",
      slug: "best-selling-cotton-tee",
      image: "https://placehold.co/800@2x.png",
      price: 24.99,
      originalPrice: 29.99,
      discount: 17,
      isNew: false,
    },
    {
      id: "best-2",
      name: "Popular Denim Shirt",
      slug: "popular-denim-shirt",
      image: "https://placehold.co/800@2x.png",
      price: 42.99,
      isNew: false,
    },
    {
      id: "best-3",
      name: "Top Rated Hoodie",
      slug: "top-rated-hoodie",
      image: "https://placehold.co/800@2x.png",
      price: 56.99,
      originalPrice: 69.99,
      discount: 19,
      isNew: false,
    },
    {
      id: "best-4",
      name: "Customer Favorite Jacket",
      slug: "customer-favorite-jacket",
      image: "https://placehold.co/800@2x.png",
      price: 89.99,
      isNew: false,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Hero Banner */}
      <HeroBanner
        title={hero.title}
        description={hero.description}
        image={hero.image}
      />

      {/* Top Brands */}
      <TopBrands brands={brands} />

      {/* T-Shirts Section */}
      <Section
        title="T-Shirts"
        items={tshirtProducts}
        type="cards"
        showPrice={true}
        viewAllLink="/t-shirts"
        columns={{ mobile: 2, tablet: 3, desktop: 4 }}
      />

      {/* Shirts Section */}
      <Section
        title="Shirts"
        items={shirtProducts}
        type="cards"
        showPrice={true}
        viewAllLink="/shirts"
        columns={{ mobile: 2, tablet: 3, desktop: 4 }}
      />

      {/* Jackets Section */}
      <Section
        title="Jackets"
        items={jacketProducts}
        type="cards"
        showPrice={true}
        viewAllLink="/jackets"
        columns={{ mobile: 2, tablet: 3, desktop: 3 }}
      />

      {/* Hoodies Section */}
      <Section
        title="Hoodies"
        items={hoodieProducts}
        type="cards"
        showPrice={true}
        viewAllLink="/hoodies"
        columns={{ mobile: 2, tablet: 2, desktop: 2 }}
      />

      {/* Best Sellers Section */}
      <Section
        title="Best Sellers"
        items={bestSellers}
        type="cards"
        showPrice={true}
        viewAllLink="/best-sellers"
        columns={{ mobile: 2, tablet: 3, desktop: 4 }}
      />

      {/* Buying Guide */}
      <BuyingGuide faqs={faqs} />
    </div>
  );
}
