"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Search, ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Common from "../Common"
import { SmallNav } from "../smallNav/SmallNav"
import { categories } from "@/Static-Data/NavBar"



export function BigNav() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
        
      <div className="container flex h-16 items-center justify-between">
        {/* Mobile menu */}
       
        {/* Logo */}
        <Link href="/" className="mr-6 pl-1 flex items-center space-x-2">
          <span className="text-xl font-bold">YourLogo</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex md:flex-1 md:items-center md:justify-center">
          <ul className="flex gap-6">
            {categories.map((category) => (
              <li key={category.name} className=" hover:bg-gray-200 px-2 rounded transition-colors">
                <Link href={category.href} className="text-sm font-medium transition-colors hover:text-primary">
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side icons */}
        <div className="flex items-center gap-2">
          {/* Search button and modal */}
          <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-1">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Search Products</DialogTitle>
                <DialogDescription>Enter a product name or description to search</DialogDescription>
              </DialogHeader>
              <div className="flex items-center space-x-2 pt-4">
                <div className="grid flex-1 gap-2">
                  <Input id="search" placeholder="Search for products..." className="w-full" autoFocus />
                </div>
                <Button type="submit">Search</Button>
              </div>
              <div className="mt-4">
                <h4 className="mb-2 text-sm font-medium">Popular Searches</h4>
                <div className="flex flex-wrap gap-2">
                  {["Shoes", "Laptops", "Phones", "Bestsellers"].map((term) => (
                    <Button
                      key={term}
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        // Handle popular search term click
                        setIsSearchOpen(false)
                      }}
                    >
                      {term}
                    </Button>
                  ))}
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Profile icon */}
          <Button variant="ghost" size="icon" className="mr-1">
            <User className="h-5 w-5" />
            <span className="sr-only">Profile</span>
          </Button>

          {/* Cart icon */}
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              3
            </span>
          </Button>
          <SmallNav/>
        </div>
      </div>
    </header>
  )
}
