'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home', emoji: '🏠' },
    { href: '/products', label: 'Products', emoji: '🖊️' },
    { href: '/categories', label: 'Categories', emoji: '🏷️' },
    { href: '/reviews', label: 'Reviews', emoji: '⭐' }
  ]

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-bark-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="text-2xl group-hover:scale-110 transition-transform">🌿</span>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold leading-none text-bark-900 tracking-tight">
                Sharpen Sticks
              </span>
              <span className="text-[10px] font-medium uppercase tracking-widest text-forest-600 leading-none mt-0.5">
                Sustainable Pens
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-bark-600 hover:bg-forest-50 hover:text-forest-700 transition-colors"
              >
                <span className="text-xs">{link.emoji}</span>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-bark-600 hover:bg-bark-50 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5h16.5M3.75 12h16.5m-16.5 4.5h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-bark-100 mt-2 pt-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-bark-700 hover:bg-forest-50 hover:text-forest-700 transition-colors"
                >
                  <span>{link.emoji}</span>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}