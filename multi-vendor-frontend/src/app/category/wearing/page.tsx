
import { CategoryGrid } from '@/components/global/sections/category-grid'
import { CustomerReviews } from '@/components/global/sections/customer-reviews'
import { ExploreByCategory } from '@/components/global/sections/explore-by-category'
import { FeaturedCollections } from '@/components/global/sections/featured-collections'
import { HeroBanner } from '@/components/global/sections/hero-banner'
import { ProductCarousel } from '@/components/global/sections/product-carousel'
import { PromoBanner } from '@/components/global/sections/promo-banner'
import { StyleByOccasion } from '@/components/global/sections/style-by-occasion'
import { StyleInspiration } from '@/components/global/sections/style-inspiration'
import { SustainabilitySection } from '@/components/global/sections/sustainability-section'
import { bestSellersData, categoriesData, collectionsData, exploreCategoriesData, heroData, inspirationData, newArrivalsData, occasionsData, promoBannerData, reviewsData, sustainabilityData } from '@/Static-Data/wearable'
import React from 'react'

const page = () => {
  
  return (
     <main className="flex min-h-screen flex-col items-center">
      {/* Hero Banner */}
      <HeroBanner
        title={heroData.title}
        description={heroData.description}
        image={heroData.image}
        ctas={heroData.ctas}
        promotion={heroData.promotion}
      />

      {/* Top Categories */}
      <CategoryGrid
        title="Shop by Category"
        description="Find your perfect style in our curated collections"
        categories={categoriesData}
      />

      {/* Featured Collections */}
      <FeaturedCollections
        title="Featured Collections"
        description="Discover our latest curated collections for every style"
        collections={collectionsData}
      />

      {/* Promo Banner */}
      <PromoBanner
        text={promoBannerData[0].text}
        backgroundColor={promoBannerData[0].backgroundColor}
        textColor={promoBannerData[0].textColor}
      />

      {/* New Arrivals */}
      <ProductCarousel
        title="New Arrivals"
        description="The latest styles just landed"
        products={newArrivalsData}
        viewAllLink="/new-arrivals"
      />

      {/* Best Sellers */}
      <ProductCarousel
        title="Best Sellers"
        description="Our most popular styles loved by customers"
        products={bestSellersData}
        viewAllLink="/best-sellers"
        variant="grid"
      />

      {/* Promo Banner */}
      <PromoBanner
        text={promoBannerData[1].text}
        backgroundColor={promoBannerData[1].backgroundColor}
        textColor={promoBannerData[1].textColor}
      />

      {/* Style by Occasion */}
      <StyleByOccasion
        title="Style by Occasion"
        description="Curated outfits for every moment"
        occasions={occasionsData}
      />

      {/* Explore by Category */}
      <ExploreByCategory
        title="Explore by Category"
        description="Discover our extensive collection of styles"
        categories={exploreCategoriesData}
      />

      {/* Style Inspiration */}
      <StyleInspiration
        title="Style Inspiration"
        description="Get inspired by our lookbook and trending styles"
        images={inspirationData}
      />

      {/* Customer Reviews */}
      <CustomerReviews
        title="What Our Customers Say"
        description="Real feedback from our happy customers"
        reviews={reviewsData}
      />

      {/* Sustainability Section */}
      <SustainabilitySection
        title="Sustainable Fashion"
        description="Our commitment to ethical and eco-friendly practices"
        content={sustainabilityData}
      />
    </main>
  )
}

export default page