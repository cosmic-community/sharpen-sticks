import { getProducts, getCategories } from '@/lib/cosmic'
import ProductCard from '@/components/ProductCard'
import Link from 'next/link'

export const metadata = {
  title: 'Our Pens — Sharpen Sticks',
  description: 'Browse our full collection of handcrafted stick pens. Sustainable, eco-friendly, and made by kids.'
}

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories()
  ])

  return (
    <div>
      {/* Page Header */}
      <div className="bg-gradient-to-br from-forest-700 to-forest-800">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <nav className="mb-4">
            <Link href="/" className="text-sm text-forest-200 hover:text-white transition-colors">
              ← Back to Home
            </Link>
          </nav>
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            🖊️ Our Pens
          </h1>
          <p className="mt-3 text-lg text-forest-200 max-w-2xl">
            Every pen is unique — just like the stick it was made from. Browse our full collection below.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Category Quick Links */}
        {categories.length > 0 && (
          <div className="mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-bark-500 mb-4">
              Filter by Category
            </h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/categories/${category.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-forest-50 border border-forest-200 px-4 py-2 text-sm font-medium text-forest-700 hover:bg-forest-100 transition-colors"
                >
                  {category.metadata?.name || category.title}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🪵</div>
            <h2 className="text-xl font-bold text-bark-700 mb-2">No products yet</h2>
            <p className="text-bark-500">We&apos;re busy carving new pens. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  )
}