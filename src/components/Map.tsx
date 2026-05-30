'use client'

import dynamic from 'next/dynamic'
import { Hotel } from '@/data/hotels'

const MapComponent = dynamic(() => import('./MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[500px] bg-blue-50 rounded-xl flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-blue-600 font-medium">Memuat peta...</p>
      </div>
    </div>
  )
})

interface MapProps {
  hotels: Hotel[]
  selectedHotel?: Hotel | null
  onHotelClick?: (hotel: Hotel) => void
  center?: [number, number]
  zoom?: number
}

export default function Map({ hotels, selectedHotel, onHotelClick, center, zoom }: MapProps) {
  return <MapComponent hotels={hotels} selectedHotel={selectedHotel} onHotelClick={onHotelClick} center={center} zoom={zoom} />
}
