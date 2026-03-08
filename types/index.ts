export interface CosmicFile {
  url: string
  imgix_url: string
}

export interface CosmicObject {
  id: string
  title: string
  slug: string
  metadata: Record<string, unknown>
  created_at?: string
}

export interface Category extends CosmicObject {
  metadata: {
    name: string
    description?: string
    image?: CosmicFile
  }
}

export interface Product extends CosmicObject {
  metadata: {
    name: string
    description?: string
    price: number
    inventory_status: string | { key: string; value: string }
    featured_image?: CosmicFile
    gallery?: CosmicFile[]
    category?: Category
  }
}

export interface Review extends CosmicObject {
  metadata: {
    reviewer_name: string
    rating: string | { key: string; value: string }
    comment: string
    product?: Product
  }
}

// Changed: Added TeamMember type for the new team section
export interface TeamMember extends CosmicObject {
  metadata: {
    name: string
    role: string
    bio?: string
    photo?: CosmicFile
  }
}