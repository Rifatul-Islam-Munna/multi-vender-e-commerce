"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function Hero() {
  const images = Array(31).fill("https://placehold.co/600x400");

  return (
    <div className=" w-full my-10  rounded-xl bg-gray-950/1 py-2 ring-1 ring-neutral-700/1 dark:bg-neutral-800">
      <ThreeDMarquee images={images} />
    </div>
  );
}
