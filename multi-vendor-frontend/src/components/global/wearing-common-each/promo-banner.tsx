"use client"

import { Button } from "@/components/ui/button"
import { Tag } from "lucide-react"

export interface CountdownItem {
  value: number
  label: string
}

export interface PromoBannerProps {
  title?: string
  subtitle?: string
  buttonText?: string
  countdown?: CountdownItem[]
  onButtonClick?: () => void
  bgColor?: string
}

export function PromoBanner({
  title = "SUMMER SALE",
  subtitle = "Up to 50% off on selected items",
  buttonText = "Shop Now",
  countdown = [
    { value: 3, label: "Days" },
    { value: 12, label: "Hours" },
    { value: 45, label: "Minutes" },
    { value: 30, label: "Seconds" },
  ],
  onButtonClick = () => console.log("Promo button clicked"),
  bgColor = "bg-gradient-to-r from-rose-500 to-pink-500",
}: PromoBannerProps) {
  return (
    <section className={`py-8 ${bgColor} text-white`}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Tag className="h-6 w-6" />
            <div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-white/90">{subtitle}</p>
            </div>
          </div>

          {countdown && countdown.length > 0 && (
            <div className="flex items-center gap-4">
              {countdown.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold">{item.value}</div>
                  <div className="text-xs text-white/80">{item.label}</div>
                </div>
              ))}
            </div>
          )}

          <Button size="lg" className="bg-white text-rose-500 hover:bg-white/90" onClick={onButtonClick}>
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  )
}
