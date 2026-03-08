import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-bark-900 text-bark-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-2xl">🌿</span>
              <span className="text-lg font-extrabold text-white tracking-tight">
                Sharpen Sticks
              </span>
            </div>
            <p className="text-sm leading-relaxed text-bark-400 max-w-sm">
              We&apos;re 3rd-5th graders on a mission: sustainable office supplies. Every pen is handcrafted from
              real sticks because we believe even small hands can make a big difference.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-forest-400 font-medium">
              <span>🌍</span>
              Saving the planet, one pen at a time
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-bark-200 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-bark-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-bark-400 hover:text-white transition-colors">
                  Our Pens
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-sm text-bark-400 hover:text-white transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-sm text-bark-400 hover:text-white transition-colors">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Mission */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-bark-200 mb-4">
              Our Mission
            </h3>
            <ul className="space-y-3 text-sm text-bark-400">
              <li className="flex items-center gap-2">
                <span>♻️</span> Zero-waste pens
              </li>
              <li className="flex items-center gap-2">
                <span>🌳</span> No trees harmed
              </li>
              <li className="flex items-center gap-2">
                <span>👧</span> Kid-powered business
              </li>
              <li className="flex items-center gap-2">
                <span>🌎</span> Earth-first supplies
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-bark-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-bark-500">
            © {new Date().getFullYear()} Sharpen Sticks. Made with ❤️ by kids who care.
          </p>
          <p className="text-xs text-bark-500">
            Powered by{' '}
            <a
              href="https://www.cosmicjs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest-400 hover:text-forest-300 transition-colors"
            >
              Cosmic
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}