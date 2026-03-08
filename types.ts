export interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata: Record<string, unknown>
  type: string
  created_at: string
  modified_at: string
}

export interface CosmicImage {
  url: string
  imgix_url: string
}

export interface Category extends CosmicObject {
  type: 'categories'
  metadata: {
    name?: string
    description?: string
    image?: CosmicImage
  }
}

export interface Product extends CosmicObject {
  type: 'products'
  metadata: {
    name?: string
    description?: string
    price?: number
    inventory_status?: string
    featured_image?: CosmicImage
    gallery?: CosmicImage[]
    category?: Category
  }
}

export interface Review extends CosmicObject {
  type: 'reviews'
  metadata: {
    reviewer_name?: string
    rating?: number
    comment?: string
    product?: Product
  }
}

export interface CosmicResponse<T> {
  objects: T[]
  total: number
  limit: number
  skip: number
}