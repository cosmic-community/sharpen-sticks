export interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata: Record<string, unknown>
  type?: string
  created_at?: string
  modified_at?: string
}

export interface CosmicImage {
  url: string
  imgix_url: string
}

// Changed: Added CosmicFile alias to match types/index.ts usage
export type CosmicFile = CosmicImage

export interface Category extends CosmicObject {
  metadata: {
    name?: string
    description?: string
    image?: CosmicImage
  }
}

export interface Product extends CosmicObject {
  metadata: {
    name?: string
    description?: string
    price?: number
    inventory_status?: string | { key: string; value: string }
    featured_image?: CosmicImage
    gallery?: CosmicImage[]
    category?: Category
  }
}

export interface Review extends CosmicObject {
  metadata: {
    reviewer_name?: string
    rating?: number | string | { key: string; value: string }
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

// Changed: Added TeamMember type (merged from types/index.ts)
export interface TeamMember extends CosmicObject {
  metadata: {
    name: string
    role: string
    bio?: string
    photo?: CosmicImage
  }
}