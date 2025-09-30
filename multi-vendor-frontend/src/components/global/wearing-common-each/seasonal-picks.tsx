"use client";

import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductCard, ProductCardProps } from "../Common-Card/Card";

export interface SeasonalCollection {
  id: string;
  name: string;
  products: ProductCardProps[];
}

export interface SeasonalPicksProps {
  title?: string;
  viewAllText?: string;
  collections: SeasonalCollection[];
  onAddToCart?: (id: string) => void;
}

export function SeasonalPicks({
  title = "Seasonal Picks",
  viewAllText = "View All Collections",
  collections = [],
  onAddToCart = (id) => console.log(`Added ${id} to cart`),
}: SeasonalPicksProps) {
  if (collections.length === 0) {
    return null;
  }

  return (
    <section className="py-12 ">
      <div className="container ">
        <div className="flex items-center gap-2 mb-6">
          <Leaf className="h-5 w-5 text-emerald-500" />
          <h2 className="text-2xl md:text-3xl font-bold text-primary/90 tracking-tight">
            {title}
          </h2>
        </div>

        <Tabs defaultValue={collections[0]?.id} className="w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <TabsList className="h-auto bg-transparent flex flex-wrap">
              {collections.map((collection) => (
                <TabsTrigger
                  className=" bg-transparent shadow-none data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-t-0 text-primary/60 data-[state=active]:border-l-0  data-[state=active]:border-r-0 data-[state=active]:rounded-none data-[state=active]:text-primary/90 data-[state=active]:border-primary"
                  key={collection.id}
                  value={collection.id}
                >
                  {collection.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <Button variant="outline" size="sm">
              {viewAllText}
            </Button>
          </div>

          {collections.map((collection) => (
            <TabsContent
              key={collection.id}
              value={collection.id}
              className="mt-0"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                {collection.products.map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                    onAddToCart={onAddToCart}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
