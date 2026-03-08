// app/products/[slug]/page.tsx
import { getProductBySlug, getReviewsByProduct, getMetafieldValue } from '@/lib/cosmic'
import StarRating from '@/components/StarRating'
import ReviewCard from '@/components/ReviewCard'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function ProductDetailPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const reviews = await getReviewsByProduct(product.id)

  const name = product.metadata?.name || product.title
  const description = product.metadata?.description || ''
  const price = product.metadata?.price
  const inventoryStatus = getMetafieldValue(product.metadata?.inventory_status)
  const featuredImage = product.metadata?.featured_image
  const gallery = product.metadata?.gallery
  const category = product.metadata?.category

  const isInStock = inventoryStatus.toLowerCase().includes('in') || inventoryStatus.toLowerCase().includes('stock') || inventoryStatus.toLowerCase().includes('available')

  // Changed: Extract numeric rating from select-dropdown object using getMetafieldValue
  const averageRating = reviews.length > 0
    ? reviews.reduce((sum, r) => {
        const ratingStr = getMetafieldValue(r.metadata?.rating)
        const ratingNum = Number(ratingStr)
        return sum + (isNaN(ratingNum) ? 0 : ratingNum)
      }, 0) / reviews.length
    : 0

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-bark-100">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-bark-500">
            <Link href="/" className="hover:text-forest-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-forest-600 transition-colors">Products</Link>
            <span>/</span>
            <span className="text-bark-800 font-medium">{name}</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Image Section */}
          <div>
            {featuredImage ? (
              <div className="overflow-hidden rounded-2xl bg-bark-50 border border-bark-100">
                <img
                  src={`${featuredImage.imgix_url}?w=1200&h=1200&fit=crop&auto=format,compress`}
                  alt={name}
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
            ) : (
              <div className="flex items-center justify-center rounded-2xl bg-bark-50 border border-bark-100 aspect-square">
                <span className="text-8xl">🖊️</span>
              </div>
            )}

            {/* Gallery */}
            {gallery && gallery.length > 0 && (
              <div className="mt-4 grid grid-cols-4 gap-3">
                {gallery.map((img, index) => (
                  <div key={index} className="overflow-hidden rounded-xl bg-bark-50 border border-bark-100">
                    <img
                      src={`${img.imgix_url}?w=300&h=300&fit=crop&auto=format,compress`}
                      alt={`${name} gallery ${index + 1}`}
                      width={150}
                      height={150}
                      className="w-full h-auto object-cover aspect-square"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            {category && (
              <Link
                href={`/categories/${category.slug}`}
                className="inline-flex items-center gap-1 rounded-full bg-forest-50 px-3 py-1 text-xs font-semibold text-forest-700 border border-forest-200 hover:bg-forest-100 transition-colors mb-4"
              >
                🏷️ {category.metadata?.name || category.title}
              </Link>
            )}

              <h1 className="text-3xl font-bold text-bark-900 sm:text-4xl">
                {name}
              </h1>

            {/* Rating Summary */}
            {reviews.length > 0 && (
              <div className="mt-3 flex items-center gap-3">
                <StarRating rating={Math.round(averageRating)} />
                <span className="text-sm text-bark-500">
                  {averageRating.toFixed(1)} out of 5 ({reviews.length} review{reviews.length !== 1 ? 's' : ''})
                </span>
              </div>
            )}

            {/* Price */}
            {price !== undefined && price !== null && (
              <div className="mt-6">
                <span className="text-4xl font-black text-forest-700">
                  ${Number(price).toFixed(2)}
                </span>
              </div>
            )}

            {/* Inventory Status */}
            {inventoryStatus && (
              <div className="mt-4">
                <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold ${
                  isInStock
                    ? 'bg-forest-50 text-forest-700 border border-forest-200'
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${isInStock ? 'bg-forest-500' : 'bg-red-500'}`} />
                  {inventoryStatus}
                </span>
              </div>
            )}

            {/* Description */}
            {description && (
              <div className="mt-8">
                <h2 className="text-lg font-bold text-bark-900 mb-3">About This Pen</h2>
                <div className="prose prose-bark text-bark-600 leading-relaxed">
                  <p>{description}</p>
                </div>
              </div>
            )}

            {/* Sustainability Callout */}
            <div className="mt-8 rounded-2xl bg-gradient-to-r from-forest-50 to-cream-50 border border-forest-100 p-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌿</span>
                <div>
                  <h3 className="font-bold text-forest-800">Sustainably Made</h3>
                  <p className="mt-1 text-sm text-forest-600">
                    This pen was handcrafted by our team of 3rd-5th graders using fallen sticks and eco-friendly materials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        {reviews.length > 0 && (
          <section className="mt-20">
            <h2 className="section-heading mb-8">
              Customer Reviews ({reviews.length})
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} showProduct={false} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}