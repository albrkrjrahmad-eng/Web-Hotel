'use client'

import { useState, useMemo } from 'react'
import HotelCard from '@/components/HotelCard'
import { hotels, kecamatanList, Hotel } from '@/data/hotels'

export default function DaftarHotelPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedKecamatan, setSelectedKecamatan] = useState('Semua Kecamatan')
  const [selectedStars, setSelectedStars] = useState(0)
  const [sortBy, setSortBy] = useState('name')

  const filteredHotels = useMemo(() => {
    let result = hotels.filter(hotel => {
      const matchesSearch = hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hotel.address.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesKecamatan = selectedKecamatan === 'Semua Kecamatan' || hotel.kecamatan === selectedKecamatan
      const matchesStars = selectedStars === 0 || hotel.stars === selectedStars
      return matchesSearch && matchesKecamatan && matchesStars
    })

    // Sort
    switch (sortBy) {
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'stars':
        result.sort((a, b) => b.stars - a.stars)
        break
    }

    return result
  }, [searchQuery, selectedKecamatan, selectedStars, sortBy])

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">Daftar Hotel Kota Lubuklinggau</h1>
          <p className="text-gray-500 text-sm">Informasi lengkap hotel yang terdaftar dalam sistem informasi geografis</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Search */}
            <div className="relative md:col-span-2">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Cari nama atau alamat hotel..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>

            {/* Kecamatan */}
            <select
              value={selectedKecamatan}
              onChange={(e) => setSelectedKecamatan(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-700"
            >
              {kecamatanList.map(kec => (
                <option key={kec} value={kec}>{kec}</option>
              ))}
            </select>

            {/* Stars */}
            <select
              value={selectedStars}
              onChange={(e) => setSelectedStars(Number(e.target.value))}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-700"
            >
              <option value={0}>Semua Bintang</option>
              <option value={1}>1 Bintang</option>
              <option value={2}>2 Bintang</option>
              <option value={3}>3 Bintang</option>
              <option value={4}>4 Bintang</option>
              <option value={5}>5 Bintang</option>
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-700"
            >
              <option value="name">Urut: Nama</option>
              <option value="rating">Urut: Rating Tertinggi</option>
              <option value="stars">Urut: Bintang Tertinggi</option>
            </select>
          </div>
        </div>

        {/* Results info */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-gray-500">
            Menampilkan <span className="font-semibold text-gray-700">{filteredHotels.length}</span> dari {hotels.length} hotel
          </p>
        </div>

        {/* Hotel Grid */}
        {filteredHotels.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHotels.map(hotel => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Hotel Tidak Ditemukan</h3>
            <p className="text-gray-500">Tidak ada hotel yang sesuai dengan filter yang dipilih. Coba ubah kriteria pencarian Anda.</p>
          </div>
        )}
      </div>
    </div>
  )
}
