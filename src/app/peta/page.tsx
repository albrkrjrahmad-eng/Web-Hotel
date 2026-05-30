'use client'

import { useState, useMemo } from 'react'
import Map from '@/components/Map'
import { hotels, kecamatanList, Hotel } from '@/data/hotels'

export default function PetaPage() {
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedKecamatan, setSelectedKecamatan] = useState('Semua Kecamatan')
  const [selectedStars, setSelectedStars] = useState(0)

  const filteredHotels = useMemo(() => {
    return hotels.filter(hotel => {
      const matchesSearch = hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hotel.address.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesKecamatan = selectedKecamatan === 'Semua Kecamatan' || hotel.kecamatan === selectedKecamatan
      const matchesStars = selectedStars === 0 || hotel.stars === selectedStars
      return matchesSearch && matchesKecamatan && matchesStars
    })
  }, [searchQuery, selectedKecamatan, selectedStars])

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">Peta Hotel Kota Lubuklinggau</h1>
          <p className="text-gray-500 text-sm">Temukan lokasi hotel melalui peta interaktif berbasis Leaflet</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Cari hotel..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>

            {/* Kecamatan Filter */}
            <select
              value={selectedKecamatan}
              onChange={(e) => setSelectedKecamatan(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-700"
            >
              {kecamatanList.map(kec => (
                <option key={kec} value={kec}>{kec}</option>
              ))}
            </select>

            {/* Stars Filter */}
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

            {/* Result Count */}
            <div className="flex items-center justify-center bg-blue-50 rounded-lg px-4 py-2.5">
              <span className="text-sm text-blue-700 font-medium">
                {filteredHotels.length} hotel ditemukan
              </span>
            </div>
          </div>
        </div>

        {/* Map & List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-3" style={{ height: '600px' }}>
            <Map
              hotels={filteredHotels}
              selectedHotel={selectedHotel}
              onHotelClick={(hotel) => setSelectedHotel(hotel)}
            />
          </div>

          {/* Hotel List Sidebar */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden" style={{ height: '600px' }}>
            <div className="p-4 bg-blue-600 text-white">
              <h2 className="font-bold">Daftar Hotel</h2>
              <p className="text-blue-100 text-xs mt-1">Klik hotel untuk melihat di peta</p>
            </div>
            <div className="overflow-y-auto" style={{ height: 'calc(100% - 72px)' }}>
              {filteredHotels.map(hotel => (
                <button
                  key={hotel.id}
                  onClick={() => setSelectedHotel(hotel)}
                  className={`w-full text-left p-4 border-b border-gray-100 hover:bg-blue-50 transition-colors ${
                    selectedHotel?.id === hotel.id ? 'bg-blue-50 border-l-4 border-l-blue-600' : ''
                  }`}
                >
                  <h3 className="font-semibold text-gray-800 text-sm">{hotel.name}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-yellow-500 text-xs">{'★'.repeat(hotel.stars)}</span>
                    <span className="text-xs text-gray-400">|</span>
                    <span className="text-xs text-green-600 font-medium">{hotel.rating}/5.0</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{hotel.address}</p>
                  <span className="inline-block mt-1 text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                    {hotel.kecamatan}
                  </span>
                </button>
              ))}
              {filteredHotels.length === 0 && (
                <div className="p-8 text-center text-gray-400">
                  <svg className="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm">Tidak ada hotel yang sesuai filter</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <h3 className="font-bold text-gray-800 text-sm mb-3">Keterangan Peta</h3>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
              <span className="text-sm text-gray-600">Lokasi Hotel</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Sumber Peta: OpenStreetMap</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Koordinat: Kota Lubuklinggau, Sumatera Selatan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
