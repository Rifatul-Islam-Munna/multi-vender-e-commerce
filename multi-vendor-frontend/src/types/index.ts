export interface Brand {
  id: string
  name: string
  slug: string
  logo: string
}

export interface Subcategory {
  id: string
  name: string
  slug: string
  image: string
  productCount: number
}

export interface Product {
  id: string
  name: string
  slug: string
  image: string
  price: number
  originalPrice: number
  discount: number
  isNew: boolean
  categoryId: string
  brandId: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
}

export interface Category {
  id: string
  title: string
  slug: string
  description: string
  image: string
  brands: Brand[]
  subcategories: Subcategory[]
  bestSellers: Product[]
  faqs: FAQ[]
}
