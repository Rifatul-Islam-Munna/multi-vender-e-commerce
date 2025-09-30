"use client";
import React from "react";
import { NewArrivals } from "@/components/global/wearing-common-each/new-arrivals";
import { PromoBanner } from "@/components/global/wearing-common-each/promo-banner";
import { SeasonalPicks } from "@/components/global/wearing-common-each/seasonal-picks";
import { ShopByCategory } from "@/components/global/wearing-common-each/shop-by-category";
import { StyleByOccasion } from "@/components/global/wearing-common-each/style-by-occasion";
import { TrendingNow } from "@/components/global/wearing-common-each/trending-now";
import { WeeklyDeals } from "@/components/global/wearing-common-each/weekly-deals";
import { categories } from "@/Static-Data/wearing-common/categories";
import { BestSellers } from "@/components/global/wearing-common-each/best-sellers";
import { CustomerFavorites } from "@/components/global/wearing-common-each/customer-favorites";
import { occasions } from "@/Static-Data/wearing-common/occasions";
import {
  bestSellerProducts,
  customerFavoriteProducts,
  newArrivalsProducts,
  trendingProducts,
  weeklyDealsProducts,
} from "@/Static-Data/wearing-common/products";

import { customerReviews } from "@/Static-Data/wearing-common/reviews";
import { seasonalCollections } from "@/Static-Data/wearing-common/seasonal-collections";
const ClintWrapper = () => {
  return (
    <>
      <WeeklyDeals
        products={weeklyDealsProducts}
        onAddToCart={(id) =>
          console.log(`Added ${id} to cart from weekly deals`)
        }
      />

      <ShopByCategory categories={categories} />

      <TrendingNow
        products={trendingProducts}
        onAddToCart={(id) => console.log(`Added ${id} to cart from trending`)}
      />

      <NewArrivals
        products={newArrivalsProducts}
        onAddToCart={(id) =>
          console.log(`Added ${id} to cart from new arrivals`)
        }
      />

      <BestSellers
        products={bestSellerProducts}
        onAddToCart={(id) =>
          console.log(`Added ${id} to cart from best sellers`)
        }
      />

      <PromoBanner />

      <SeasonalPicks
        collections={seasonalCollections}
        onAddToCart={(id) =>
          console.log(`Added ${id} to cart from seasonal picks`)
        }
      />

      <StyleByOccasion occasions={occasions} />

      <CustomerFavorites
        products={customerFavoriteProducts}
        reviews={customerReviews}
        onAddToCart={(id) =>
          console.log(`Added ${id} to cart from customer favorites`)
        }
      />
    </>
  );
};

export default ClintWrapper;
