"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { categories } from "@/Static-Data/NavBar"

// Sample data - replace with your actual categories


export function SmallNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="mr-2 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] border-l-0 bg-gradient-to-b from-white to-slate-50 p-0 sm:w-[400px] dark:from-slate-950 dark:to-slate-900"
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <SheetHeader className="border-b px-6 py-6">
            <div className="flex items-center justify-between">
              <SheetTitle className="text-xl font-bold">Menu</SheetTitle>
              
            </div>
            <SheetDescription className="mt-2 text-sm">Explore our offerings and learn more about us</SheetDescription>
          </SheetHeader>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto px-6 py-8">
            <div className="space-y-6">
              {categories.map((category, index) => (
                <div key={category.name} className="group">
                  <Link
                    href={category.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-lg px-3 py-2.5 text-lg font-medium transition-all hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{category.name}</span>
                    <ChevronRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                  {index < categories.length - 1 && <Separator className="my-2 opacity-30" />}
                </div>
              ))}
            </div>

            {/* Featured section */}
            <div className="mt-12 rounded-xl bg-slate-100 p-6 dark:bg-slate-800">
              <h3 className="mb-3 font-semibold">Featured</h3>
              <div className="space-y-3">
                <div className="rounded-lg bg-white p-3 shadow-sm transition-all hover:shadow-md dark:bg-slate-700">
                  <p className="font-medium">New Collection</p>
                  <p className="text-sm text-muted-foreground">Explore our latest items</p>
                </div>
                <div className="rounded-lg bg-white p-3 shadow-sm transition-all hover:shadow-md dark:bg-slate-700">
                  <p className="font-medium">Special Offer</p>
                  <p className="text-sm text-muted-foreground">Limited time discount</p>
                </div>
              </div>
            </div>
          </nav>

          {/* Footer */}
          <SheetFooter className="border-t px-6 py-4">
            <div className="flex flex-col space-y-3 text-center">
              <div className="flex justify-center space-x-4">
                <Button variant="outline" size="icon" className="rounded-full h-9 w-9">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-9 w-9">
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-9 w-9">
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">© 2025 Your Company. All rights reserved.</p>
            </div>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  )
}
