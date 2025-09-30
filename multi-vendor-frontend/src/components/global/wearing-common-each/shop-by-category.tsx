"use client";

import Image from "next/image";
import Link from "next/link";

export interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  image: string;
}

export interface ShopByCategoryProps {
  title?: string;
  categories: CategoryItem[];
}

export function ShopByCategory({
  title = "Shop by Category",
  categories = [],
}: ShopByCategoryProps) {
  if (categories.length === 0) {
    return null;
  }

  return (
    <section className="py-12 ">
      <div className="container  mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-primary/90  tracking-tight mb-8">
          {title}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className="group flex flex-col items-center"
            >
              <div className="relative w-full aspect-square overflow-hidden rounded-lg mb-3 bg-white">
                <Image
                  src={
                    category.image || "/placeholder.svg?height=200&width=200"
                  }
                  alt={category.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105 duration-300"
                />
              </div>
              <h3 className="text-sm md:text-base font-medium text-center">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
