import Image from "next/image"
import { Leaf, Recycle, Heart } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"
import { cn } from "@/lib/utils"

interface SustainabilitySectionProps {
  title: string
  description?: string
  content: {
    image?: string
    features: Array<{
      id: string
      title: string
      description: string
      icon?: "leaf" | "recycle" | "heart"
    }>
  }
  className?: string
  layout?: "side-by-side" | "image-top" | "features-only"
}

export function SustainabilitySection({
  title,
  description,
  content,
  className,
  layout = "side-by-side",
}: SustainabilitySectionProps) {
  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case "leaf":
        return <Leaf className="h-5 w-5" />
      case "recycle":
        return <Recycle className="h-5 w-5" />
      case "heart":
        return <Heart className="h-5 w-5" />
      default:
        return <Leaf className="h-5 w-5" />
    }
  }

  return (
    <section className={cn("w-full py-12", className)}>
      <div className="container px-4 mx-auto">
        <SectionTitle title={title} description={description} />

        {layout === "side-by-side" && (
          <div className="flex flex-col gap-8 md:flex-row">
            {content.image && (
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <Image
                    src={content.image || "/placeholder.svg?height=400&width=600"}
                    alt="Sustainability"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            <div className={content.image ? "w-full md:w-1/2" : "w-full"}>
              <div className="grid gap-6">
                {content.features.map((feature) => (
                  <div key={feature.id} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      {getIcon(feature.icon)}
                    </div>
                    <div>
                      <h3 className="mb-2 font-medium">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {layout === "image-top" && (
          <div className="space-y-8">
            {content.image && (
              <div className="mx-auto max-w-3xl">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                  <Image
                    src={content.image || "/placeholder.svg?height=400&width=800"}
                    alt="Sustainability"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            <div className="grid gap-6 md:grid-cols-3">
              {content.features.map((feature) => (
                <div key={feature.id} className="rounded-lg border bg-background p-6 shadow-sm">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {getIcon(feature.icon)}
                  </div>
                  <h3 className="mb-2 font-medium">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {layout === "features-only" && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {content.features.map((feature) => (
              <div key={feature.id} className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {getIcon(feature.icon)}
                </div>
                <h3 className="mb-2 font-medium">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
