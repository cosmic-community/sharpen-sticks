import { getCategories } from '@/lib/cosmic'
import CategoryCard from '@/components/CategoryCard'
import Link from 'next/link'

export const metadata = {
  title: 'Categories — Sharpen Sticks',
  description: 'Browse our stick pen categories. Find the perfect sustainable pen for your needs.'
}

export default async function CategoriesPage() {
  const categories = await getCategories()

  return (
    <div>
      {/* Page Header */}
      <div className="bg-gradient-to-br from-wood-600 to-wood-700">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <nav className="mb-4">
            <Link href="/" className="text-sm text-wood-200 hover:text-white transition-colors">
              ← Back to Home
            </Link>
          </nav>
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            🏷️ Categories
          </h1>
          <p className="mt-3 text-lg text-wood-200 max-w-2xl">
            Explore our collection of stick pens organized by type. There&apos;s a pen for every purpose!
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {categories.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🏷️</div>
            <h2 className="text-xl font-bold text-bark-700 mb-2">No categories yet</h2>
            <p className="text-bark-500">Categories are coming soon. Check back later!</p>
          </div>
        )}
      </div>
    </div>
  )
}