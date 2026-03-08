import Link from 'next/link'
import StarRating from '@/components/StarRating'
import type { Review } from '@/types'

interface ReviewCardProps {
  review: Review
  showProduct?: boolean
}

export default function ReviewCard({ review, showProduct = true }: ReviewCardProps) {
  const reviewerName = review.metadata?.reviewer_name || 'Anonymous'
  const rating = review.metadata?.rating || 0
  const comment = review.metadata?.comment || ''
  const product = review.metadata?.product

  return (
    <article className="card p-6 h-full flex flex-col">
      {/* Stars */}
      <div className="mb-3">
        <StarRating rating={rating} />
      </div>

      {/* Comment */}
      {comment && (
        <p className="text-sm text-bark-600 leading-relaxed flex-1 line-clamp-4">
          &ldquo;{comment}&rdquo;
        </p>
      )}

      {/* Reviewer */}
      <div className="mt-4 pt-4 border-t border-bark-100">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-100 text-forest-700 font-bold text-sm">
            {reviewerName.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="text-sm font-semibold text-bark-800">{reviewerName}</p>
            {showProduct && product && (
              <Link
                href={`/products/${product.slug}`}
                className="text-xs text-forest-600 hover:text-forest-700 transition-colors"
              >
                on {product.metadata?.name || product.title}
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}