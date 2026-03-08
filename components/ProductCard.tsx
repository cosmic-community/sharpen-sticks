import Link from 'next/link'
import { getMetafieldValue } from '@/lib/cosmic'
import type { Product } from '@/types'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const name = product.metadata?.name || product.title
  const description = product.metadata?.description || ''
  const price = product.metadata?.price
  const inventoryStatus = getMetafieldValue(product.metadata?.inventory_status)
  const featuredImage = product.metadata?.featured_image
  const category = product.metadata?.category

  const isInStock = inventoryStatus.toLowerCase().includes('in') || inventoryStatus.toLowerCase().includes('stock') || inventoryStatus.toLowerCase().includes('available')

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <article className="card overflow-hidden h-full flex flex-col">
        {/* Image */}
        <div className="relative overflow-hidden bg-bark-50 aspect-[4/3]">
          {featuredImage ? (
            <img
              src={`${featuredImage.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
              alt={name}
              width={400}
              height={300}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="text-6xl opacity-50">🖊️</span>
            </div>
          )}

          {/* Inventory Badge */}
          {inventoryStatus && (
            <div className="absolute top-3 right-3">
              <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold backdrop-blur-sm ${
                isInStock
                  ? 'bg-forest-500/90 text-white'
                  : 'bg-red-500/90 text-white'
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${isInStock ? 'bg-green-200' : 'bg-red-200'}`} />
                {inventoryStatus}
              </span>
            </div>
          )}

          {/* Category Badge */}
          {category && (
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-bark-700">
                {category.metadata?.name || category.title}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5">
          <h3 className="text-lg font-bold text-bark-900 group-hover:text-forest-700 transition-colors line-clamp-1">
            {name}
          </h3>

          {description && (
            <p className="mt-2 text-sm text-bark-500 line-clamp-2 flex-1">
              {description}
            </p>
          )}

          {/* Price */}
          <div className="mt-4 flex items-center justify-between">
            {price !== undefined && price !== null ? (
              <span className="text-2xl font-black text-forest-700">
                ${Number(price).toFixed(2)}
              </span>
            ) : (
              <span className="text-sm text-bark-400">Price TBD</span>
            )}

            <span className="inline-flex items-center gap-1 text-sm font-medium text-forest-600 group-hover:gap-2 transition-all">
              View
              <span aria-hidden="true">→</span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}