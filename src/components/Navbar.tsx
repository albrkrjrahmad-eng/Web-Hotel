'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <span className="text-white font-bold text-lg">SIG Hotel</span>
                <span className="text-yellow-400 text-xs block -mt-1">Kota Lubuklinggau</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/" className="text-white hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium">
              Beranda
            </Link>
            <Link href="/peta" className="text-white hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium">
              Peta Hotel
            </Link>
            <Link href="/daftar-hotel" className="text-white hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium">
              Daftar Hotel
            </Link>
            <Link href="/tentang" className="text-white hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium">
              Tentang
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-yellow-400 p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-800 border-t border-blue-700">
          <div className="px-4 py-3 space-y-2">
            <Link href="/" className="block text-white hover:bg-blue-700 px-4 py-2 rounded-lg text-sm" onClick={() => setIsMenuOpen(false)}>
              Beranda
            </Link>
            <Link href="/peta" className="block text-white hover:bg-blue-700 px-4 py-2 rounded-lg text-sm" onClick={() => setIsMenuOpen(false)}>
              Peta Hotel
            </Link>
            <Link href="/daftar-hotel" className="block text-white hover:bg-blue-700 px-4 py-2 rounded-lg text-sm" onClick={() => setIsMenuOpen(false)}>
              Daftar Hotel
            </Link>
            <Link href="/tentang" className="block text-white hover:bg-blue-700 px-4 py-2 rounded-lg text-sm" onClick={() => setIsMenuOpen(false)}>
              Tentang
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
