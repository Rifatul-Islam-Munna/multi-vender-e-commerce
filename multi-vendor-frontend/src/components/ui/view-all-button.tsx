import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface ViewAllButtonProps {
  href: string
  className?: string
  text?: string
}

export function ViewAllButton({ href, className, text = "View All" }: ViewAllButtonProps) {
  return (
    <Link
      href={href}
      className={cn(" flex justify-center items-center gap-1 text-sm font-medium text-primary hover:underline", className)}
    >
      <Button variant={"ghost"} className=" flex justify-center items-center gap-1">
            {text}
      <ArrowRight className="ml-1 h-4 w-4" />
      </Button>
    
    </Link>
  )
}
