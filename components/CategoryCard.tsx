import Link from 'next/link'
import type { Category } from '@/types'

interface CategoryCardProps {
  category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const name = category.metadata?.name || category.title
  const description = category.metadata?.description || ''
  const image = category.metadata?.image

  return (
    <Link href={`/categories/${category.slug}`} className="group block">
      <article className="card overflow-hidden h-full">
        {/* Image */}
        <div className="relative overflow-hidden bg-gradient-to-br from-forest-100 to-wood-100 aspect-[16/9]">
          {image ? (
            <img
              src={`${image.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
              alt={name}
              width={400}
              height={225}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="text-5xl opacity-40">🏷️</span>
            </div>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-white">
              {name}
            </h3>
          </div>
        </div>

        {/* Content */}
        {description && (
          <div className="p-5">
            <p className="text-sm text-bark-500 line-clamp-2">
              {description}
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-forest-600 group-hover:gap-2 transition-all">
              Browse pens
              <span aria-hidden="true">→</span>
            </span>
          </div>
        )}

        {!description && (
          <div className="p-5">
            <span className="inline-flex items-center gap-1 text-sm font-medium text-forest-600 group-hover:gap-2 transition-all">
              Browse pens
              <span aria-hidden="true">→</span>
            </span>
          </div>
        )}
      </article>
    </Link>
  )
}