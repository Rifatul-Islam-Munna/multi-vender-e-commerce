interface HeroBannerProps {
  title: string
  description: string
  image: string
}

export default function HeroBanner({ title, description, image }: HeroBannerProps) {
  return (
    <div className="relative rounded-lg overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image || "/placeholder.svg?height=400&width=800"}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      </div>
      <div className="relative px-6 py-16 sm:px-12 sm:py-24 lg:py-32 z-10">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h1>
          <p className="mt-4 text-lg text-white/90 max-w-xl">{description}</p>
        </div>
      </div>
    </div>
  )
}
