'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { hotels } from '@/data/hotels'
import Map from '@/components/Map'

export default function HotelDetailPage() {
  const params = useParams()
  const hotelId = Number(params.id)
  const hotel = hotels.find(h => h.id === hotelId)

  if (!hotel) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Hotel Tidak Ditemukan</h1>
          <p className="text-gray-500 mb-6">Hotel dengan ID {hotelId} tidak tersedia dalam sistem.</p>
          <Link href="/daftar-hotel" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Kembali ke Daftar Hotel
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600">Beranda</Link>
            <span className="text-gray-300">/</span>
            <Link href="/daftar-hotel" className="text-gray-500 hover:text-blue-600">Daftar Hotel</Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-800 font-medium">{hotel.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hotel Header */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Image */}
              <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-700 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-24 h-24 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <span className="text-sm font-bold text-blue-800">{hotel.stars} Bintang</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">{hotel.name}</h1>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg key={i} className={`w-5 h-5 ${i < hotel.stars ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                    Rating: {hotel.rating}/5.0
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed">{hotel.description}</p>
              </div>
            </div>

            {/* Facilities */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Fasilitas
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {hotel.facilities.map((facility, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-blue-50 rounded-lg p-3">
                    <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">{facility}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Lokasi pada Peta
              </h2>
              <div className="h-80 rounded-xl overflow-hidden">
                <Map
                  hotels={[hotel]}
                  selectedHotel={hotel}
                  center={[hotel.lat, hotel.lng]}
                  zoom={16}
                />
              </div>
              <div className="mt-3 text-sm text-gray-500">
                Koordinat: {hotel.lat}, {hotel.lng}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Informasi Kontak</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Alamat</p>
                    <p className="text-sm text-gray-500">{hotel.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Telepon</p>
                    <p className="text-sm text-gray-500">{hotel.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Kecamatan</p>
                    <p className="text-sm text-gray-500">{hotel.kecamatan}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-sm p-6 text-white">
              <h2 className="text-lg font-bold mb-2">Rentang Harga</h2>
              <p className="text-2xl font-bold text-yellow-300">{hotel.priceRange}</p>
              <p className="text-blue-200 text-sm mt-2">per malam</p>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Aksi Cepat</h2>
              <div className="space-y-3">
                <Link
                  href="/peta"
                  className="w-full flex items-center justify-center space-x-2 bg-blue-50 text-blue-700 py-3 px-4 rounded-lg hover:bg-blue-100 transition-colors font-medium text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <span>Lihat di Peta Lengkap</span>
                </Link>
                <Link
                  href="/daftar-hotel"
                  className="w-full flex items-center justify-center space-x-2 bg-gray-50 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                  <span>Lihat Hotel Lainnya</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
