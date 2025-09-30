"use client";
import Image from "next/image";
import { Tag, ShoppingCart, Flame, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export type BadgeType = "hot-sale" | "discount" | "unique";

export interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
  discountPrice?: number;
  quantity?: string;
  unit?: string;
  badge?: BadgeType;
  vendorName: string;
  stock?: "in-stock" | "low-stock" | "out-of-stock";
  onAddToCart?: (id: string) => void;
}

export function ProductCard({
  id,
  title,
  image,
  price,
  discountPrice,
  quantity,
  unit,
  badge,
  vendorName,
  stock,
  onAddToCart,
}: ProductCardProps) {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(id);
    }
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-accent bg-background shadow-none transition-all  w-full h-[360px] hover:border-primary/10">
      {/* Badge */}
      {badge && <ProductBadge type={badge} />}

      {/* Product Image */}
      <div className="relative h-[180px] w-full overflow-hidden bg-slate-50">
        <Image
          src={image || "/placeholder.svg?height=180&width=320"}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105 duration-300"
        />
      </div>

      {/* Product Content */}
      <div className="flex flex-1 flex-col p-3">
        {/* Vendor Badge */}
        <div className="mb-2">
          <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 t text-xs font-medium text-slate-700 transition-colors hover:bg-slate-200">
            {vendorName}
          </span>
        </div>

        {/* Product Title */}
        <h3
          className=" line-clamp-1 text-sm font-medium leading-tight mb-1"
          title={title}
        >
          {title}
        </h3>

        {/* Quantity/Unit */}
        {(quantity || unit) && (
          <div className="mb-1">
            <span className="inline-flex items-center text-xs text-muted-foreground">
              <Tag className="mr-1 h-3 w-3" />
              {quantity} {unit}
            </span>
          </div>
        )}

        {/* Price */}
        <ProductPrice price={price} discountPrice={discountPrice} />

        {/* Stock Indicator */}
        {stock && (
          <div className="mb-2">
            <span
              className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                stock === "in-stock"
                  ? "bg-green-50 text-green-700"
                  : stock === "low-stock"
                  ? "bg-amber-50 text-amber-700"
                  : "bg-red-50 text-red-700"
              }`}
            >
              {stock === "in-stock"
                ? "In Stock"
                : stock === "low-stock"
                ? "Low Stock"
                : "Out of Stock"}
            </span>
          </div>
        )}

        {/* Add to Cart Button */}
        <div className="mt-auto pt-3">
          <Button
            onClick={handleAddToCart}
            size="sm"
            className="w-full font-medium transition-all hover:shadow-sm"
            disabled={stock === "out-of-stock"}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            {stock === "out-of-stock" ? "Out of Stock" : "Add to cart"}
          </Button>
        </div>
      </div>
    </div>
  );
}

function ProductBadge({ type }: { type: BadgeType }) {
  if (!type) return null;

  const badges = {
    "hot-sale": {
      label: "Hot Sale",
      variant: "destructive" as const,
      icon: <Flame className="mr-1 h-3 w-3" />,
    },
    discount: {
      label: "Best Deal",
      variant: "default" as const,
      icon: <Tag className="mr-1 h-3 w-3" />,
    },
    unique: {
      label: "Unique",
      variant: "secondary" as const,
      icon: <Award className="mr-1 h-3 w-3" />,
    },
  };

  const { label, variant, icon } = badges[type];

  return (
    <Badge
      variant={variant}
      className="absolute left-2 top-2 z-10 flex items-center"
    >
      {icon}
      {label}
    </Badge>
  );
}

function ProductPrice({
  price,
  discountPrice,
}: {
  price: number;
  discountPrice?: number;
}) {
  const hasDiscount = discountPrice !== undefined && discountPrice < price;
  const discountPercentage = hasDiscount
    ? Math.round(((price - discountPrice!) / price) * 100)
    : 0;

  return (
    <div className="flex items-center gap-2 mb-1">
      {hasDiscount ? (
        <>
          <span className="font-semibold text-primary text-base">
            ${discountPrice?.toFixed(2)}
          </span>
          <span className="text-sm text-muted-foreground line-through">
            ${price.toFixed(2)}
          </span>
          <span className="inline-flex items-center rounded-full bg-rose-50 px-1.5 py-0.5 text-xs font-medium text-rose-600">
            {discountPercentage}% off
          </span>
        </>
      ) : (
        <span className="font-semibold text-base">${price.toFixed(2)}</span>
      )}
    </div>
  );
}
