"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface InfiniteSliderProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "left" | "right"
  speed?: number
  pauseOnHover?: boolean
  className?: string
}

export const InfiniteSlider = React.forwardRef<HTMLDivElement, InfiniteSliderProps>(
  ({ direction = "left", speed = 50, pauseOnHover = true, className, children, ...props }, ref) => {
    const [isHovering, setIsHovering] = React.useState(false)
    const sliderRef = React.useRef<HTMLDivElement>(null)
    const contentRef = React.useRef<HTMLDivElement>(null)
    const [contentWidth, setContentWidth] = React.useState(0)
    const [duplicateContent, setDuplicateContent] = React.useState<React.ReactNode>(null)

    React.useEffect(() => {
      if (contentRef.current) {
        setContentWidth(contentRef.current.offsetWidth)
        setDuplicateContent(children)
      }
    }, [children])

    const handleMouseEnter = React.useCallback(() => {
      if (pauseOnHover) {
        setIsHovering(true)
      }
    }, [pauseOnHover])

    const handleMouseLeave = React.useCallback(() => {
      if (pauseOnHover) {
        setIsHovering(false)
      }
    }, [pauseOnHover])

    const animationDuration = React.useMemo(() => {
      if (!contentWidth) return 0
      return contentWidth / speed
    }, [contentWidth, speed])

    const animationDirection = direction === "left" ? "forwards" : "backwards"
    const animationPlayState = isHovering ? "paused" : "running"

    return (
      <div
        ref={ref}
        className={cn("overflow-hidden w-full", className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <div
          ref={sliderRef}
          className="flex whitespace-nowrap"
          style={{
            animation: contentWidth > 0 ? `scroll ${animationDuration}s linear infinite ${animationDirection}` : "none",
            animationPlayState,
          }}
        >
          <div ref={contentRef} className="flex items-center">
            {children}
          </div>
          {contentWidth > 0 && <div className="flex items-center">{duplicateContent}</div>}
        </div>
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(${direction === "left" ? -contentWidth : contentWidth}px);
            }
          }
        `}</style>
      </div>
    )
  },
)

InfiniteSlider.displayName = "InfiniteSlider"
