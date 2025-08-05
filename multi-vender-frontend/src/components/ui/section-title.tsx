import { cn } from "@/lib/utils"

interface SectionTitleProps {
  title: string
  description?: string
  className?: string
  titleClassName?: string
  descriptionClassName?: string
  alignment?: "left" | "center" | "right"
  titleTag?: "h1" | "h2" | "h3" | "h4"
}

export function SectionTitle({
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
  alignment = "center",
  titleTag: TitleTag = "h2",
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-8 w-full",
        {
          "text-left": alignment === "left",
          "text-center": alignment === "center",
          "text-right": alignment === "right",
        },
        className,
      )}
    >
      <TitleTag className={cn("text-2xl font-bold tracking-tight md:text-3xl", titleClassName)}>{title}</TitleTag>
      {description && <p className={cn("mt-2 text-muted-foreground", descriptionClassName)}>{description}</p>}
    </div>
  )
}
