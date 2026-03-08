import Link from 'next/link'
import { getProducts, getCategories, getReviews, getMetafieldValue } from '@/lib/cosmic'
import ProductCard from '@/components/ProductCard'
import CategoryCard from '@/components/CategoryCard'
import ReviewCard from '@/components/ReviewCard'

export default async function HomePage() {
  const [products, categories, reviews] = await Promise.all([
    getProducts(),
    getCategories(),
    getReviews()
  ])

  const featuredProducts = products.slice(0, 3)
  const featuredReviews = reviews.slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-forest-700 via-forest-600 to-forest-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl">🌿</div>
          <div className="absolute top-40 right-20 text-6xl">🌱</div>
          <div className="absolute bottom-20 left-1/3 text-7xl">🍃</div>
          <div className="absolute bottom-10 right-10 text-9xl">🪵</div>
          <div className="absolute top-20 left-1/2 text-5xl">✏️</div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-forest-100 backdrop-blur-sm mb-6">
              <span>🌍</span>
              <span>Made by kids, for the planet</span>
            </div>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
              Sharpen
              <span className="block text-cream-300">Sticks</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-forest-100 sm:text-xl max-w-2xl">
              We&apos;re a team of 3rd-5th graders on a mission to save the planet — one stick pen at a time.
              Every pen is handcrafted from real sticks for sustainable, eco-friendly office supplies.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/products" className="btn-primary !bg-white !text-forest-700 hover:!bg-cream-100 !px-8 !py-4 !text-base">
                🖊️ Shop Our Pens
              </Link>
              <Link href="/categories" className="btn-secondary !border-white/40 !text-white hover:!bg-white/10 !px-8 !py-4 !text-base">
                Browse Categories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-white border-b border-bark-100">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center p-6">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-forest-50 text-3xl">
                🌱
              </div>
              <h3 className="text-lg font-bold text-bark-900">Eco-Friendly</h3>
              <p className="mt-2 text-sm text-bark-500">
                Every pen is made from fallen sticks and branches — no trees harmed.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-wood-50 text-3xl">
                ✋
              </div>
              <h3 className="text-lg font-bold text-bark-900">Kid-Crafted</h3>
              <p className="mt-2 text-sm text-bark-500">
                Designed and built by 3rd-5th graders with creativity and care.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-cream-100 text-3xl">
                🌍
              </div>
              <h3 className="text-lg font-bold text-bark-900">Sustainable Mission</h3>
              <p className="mt-2 text-sm text-bark-500">
                Our goal: make office supplies that don&apos;t cost the Earth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-forest-600 mb-1">
                Our Collection
              </p>
              <h2 className="section-heading">Featured Pens</h2>
              <p className="section-subheading">Our most popular handcrafted stick pens</p>
            </div>
            <Link
              href="/products"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-forest-600 hover:text-forest-700 transition-colors"
            >
              View all products
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/products" className="btn-secondary">
              View all products →
            </Link>
          </div>
        </section>
      )}

      {/* Categories */}
      {categories.length > 0 && (
        <section className="bg-white border-y border-bark-100">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-wider text-wood-600 mb-1">
                Browse By Type
              </p>
              <h2 className="section-heading">Shop Categories</h2>
              <p className="section-subheading">Find the perfect stick pen for every need</p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Reviews */}
      {featuredReviews.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-cream-600 mb-1">
                What People Say
              </p>
              <h2 className="section-heading">Customer Reviews</h2>
              <p className="section-subheading">Hear from our happy pen lovers</p>
            </div>
            <Link
              href="/reviews"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-forest-600 hover:text-forest-700 transition-colors"
            >
              View all reviews
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/reviews" className="btn-secondary">
              View all reviews →
            </Link>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-wood-600 via-wood-500 to-wood-600">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Write Sustainably? ✏️
          </h2>
          <p className="mt-4 text-lg text-wood-100 max-w-2xl mx-auto">
            Join the Sharpen Sticks movement. Every pen you buy helps us prove that kids can make a difference.
          </p>
          <Link href="/products" className="mt-8 btn-primary !bg-white !text-wood-700 hover:!bg-cream-50 !px-8 !py-4 !text-base">
            Shop Now 🌿
          </Link>
        </div>
      </section>
    </div>
  )
}