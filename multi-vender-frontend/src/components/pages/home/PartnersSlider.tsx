"use client"
import { InfiniteSlider } from "./InfiniteSlider"
import Image from "next/image"

export function PartnersSlider() {
  const partners = [
    { name: "Acme Inc", logo: "https://placehold.co/600x400.png" },
    { name: "Globex", logo: "https://placehold.co/600x400.png" },
    { name: "Stark Industries", logo: "https://placehold.co/600x400.png" },
    { name: "Wayne Enterprises", logo: "https://placehold.co/600x400.png" },
    { name: "Umbrella Corporation", logo: "https://placehold.co/600x400.png" },
    { name: "Cyberdyne Systems", logo: "https://placehold.co/600x400.png" },
    { name: "Oscorp", logo: "https://placehold.co/600x400.png" },
    { name: "Massive Dynamic", logo: "https://placehold.co/600x400.png" },
  ]

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Partners</h2>
            <p className="max-w-[700px] text-slate-500 md:text-xl/relaxed dark:text-slate-400">
              We collaborate with industry leaders to deliver exceptional solutions
            </p>
          </div>
        </div>
        <div className="mt-16">
          <InfiniteSlider direction="left" speed={25} pauseOnHover={true} className="py-4">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center min-w-[200px] h-24 mx-8 rounded-lg bg-white dark:bg-slate-900 transition-shadow duration-200 "
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  className="max-h-12 max-w-[150px] object-contain"
                  width={150}
                  height={200}
                />
              </div>
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </section>
  )
}
