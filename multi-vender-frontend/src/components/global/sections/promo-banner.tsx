import type React from "react"
import { cn } from "@/lib/utils"

interface PromoBannerProps {
  text: string
  backgroundColor?: string
  textColor?: string
  className?: string
  icon?: React.ReactNode
}

export function PromoBanner({
  text,
  backgroundColor = "bg-primary",
  textColor = "text-primary-foreground",
  className,
  icon,
}: PromoBannerProps) {
  return (
    <div className={cn("w-full py-3", backgroundColor, textColor, className)}>
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-center text-center">
          {icon && <span className="mr-2">{icon}</span>}
          <p className="text-sm font-medium md:text-base">{text}</p>
        </div>
      </div>
    </div>
  )
}
