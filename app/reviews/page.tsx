import { getReviews } from '@/lib/cosmic'
import ReviewCard from '@/components/ReviewCard'
import Link from 'next/link'

export const metadata = {
  title: 'Customer Reviews — Sharpen Sticks',
  description: 'See what our customers are saying about our handcrafted stick pens.'
}

export default async function ReviewsPage() {
  const reviews = await getReviews()

  const averageRating = reviews.length > 0
    ? reviews.reduce((sum, r) => sum + (r.metadata?.rating || 0), 0) / reviews.length
    : 0

  return (
    <div>
      {/* Page Header */}
      <div className="bg-gradient-to-br from-cream-500 to-cream-600">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <nav className="mb-4">
            <Link href="/" className="text-sm text-cream-900/70 hover:text-cream-900 transition-colors">
              ← Back to Home
            </Link>
          </nav>
          <h1 className="text-3xl font-bold text-cream-950 sm:text-4xl lg:text-5xl">
            ⭐ Customer Reviews
          </h1>
          <p className="mt-3 text-lg text-cream-800 max-w-2xl">
            Hear from people who love their Sharpen Sticks pens!
          </p>
          {reviews.length > 0 && (
            <div className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-white/30 backdrop-blur-sm px-6 py-3">
              <span className="text-2xl font-black text-cream-950">{averageRating.toFixed(1)}</span>
              <div>
                <div className="flex text-cream-900">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={`text-lg ${i < Math.round(averageRating) ? '' : 'opacity-30'}`}>
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-xs text-cream-800">{reviews.length} review{reviews.length !== 1 ? 's' : ''}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {reviews.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} showProduct={true} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">⭐</div>
            <h2 className="text-xl font-bold text-bark-700 mb-2">No reviews yet</h2>
            <p className="text-bark-500">Be the first to tell us what you think!</p>
          </div>
        )}
      </div>
    </div>
  )
}