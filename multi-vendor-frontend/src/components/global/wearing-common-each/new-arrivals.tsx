"use client";

import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ProductCard, ProductCardProps } from "../Common-Card/Card";

export interface NewArrivalsProps {
  title?: string;
  viewAllText?: string;
  viewAllLink?: string;
  products: ProductCardProps[];
  onAddToCart?: (id: string) => void;
}

export function NewArrivals({
  title = "New Arrivals",
  viewAllText = "View All",
  viewAllLink = "/new-arrivals",
  products = [],
  onAddToCart = (id) => console.log(`Added ${id} to cart`),
}: NewArrivalsProps) {
  if (products.length === 0) {
    return null;
  }

  return (
    <section className="py-12 ">
      <div className="container ">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-amber-500" />
            <h2 className="text-2xl md:text-3xl font-bold text-primary/90 tracking-tight">
              {title}
            </h2>
          </div>

          <Link href={viewAllLink}>
            <Button variant="outline">{viewAllText}</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
