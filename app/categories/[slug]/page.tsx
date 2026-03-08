// app/categories/[slug]/page.tsx
import { getCategoryBySlug, getProductsByCategory } from '@/lib/cosmic'
import ProductCard from '@/components/ProductCard'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function CategoryDetailPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  const products = await getProductsByCategory(category.id)

  const name = category.metadata?.name || category.title
  const description = category.metadata?.description || ''
  const image = category.metadata?.image

  return (
    <div>
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-forest-700 to-forest-800">
        {image && (
          <div className="absolute inset-0 opacity-20">
            <img
              src={`${image.imgix_url}?w=1920&h=600&fit=crop&auto=format,compress`}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <nav className="mb-4 flex items-center gap-2 text-sm text-forest-200">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/categories" className="hover:text-white transition-colors">Categories</Link>
            <span>/</span>
            <span className="text-white font-medium">{name}</span>
          </nav>
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {name}
          </h1>
          {description && (
            <p className="mt-3 text-lg text-forest-200 max-w-2xl">{description}</p>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm text-bark-500">
            {products.length} product{products.length !== 1 ? 's' : ''} in this category
          </p>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🔍</div>
            <h2 className="text-xl font-bold text-bark-700 mb-2">No products in this category yet</h2>
            <p className="text-bark-500 mb-6">We&apos;re still crafting pens for this category.</p>
            <Link href="/products" className="btn-primary">
              Browse All Products
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}