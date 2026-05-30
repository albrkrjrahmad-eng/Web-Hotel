'use client'

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import { Hotel } from '@/data/hotels'
import { useEffect } from 'react'

// Fix for default markers in Leaflet with Next.js
const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

const hotelIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

L.Marker.prototype.options.icon = defaultIcon

interface MapProps {
  hotels: Hotel[]
  selectedHotel?: Hotel | null
  onHotelClick?: (hotel: Hotel) => void
  center?: [number, number]
  zoom?: number
}

function FlyToHotel({ hotel }: { hotel: Hotel | null | undefined }) {
  const map = useMap()
  
  useEffect(() => {
    if (hotel) {
      map.flyTo([hotel.lat, hotel.lng], 16, { duration: 1.5 })
    }
  }, [hotel, map])

  return null
}

function StarRating({ stars }: { stars: number }) {
  return (
    <span className="stars">
      {'★'.repeat(stars)}{'☆'.repeat(5 - stars)}
    </span>
  )
}

export default function MapComponent({ hotels, selectedHotel, onHotelClick, center, zoom }: MapProps) {
  const mapCenter: [number, number] = center || [-3.2942, 102.8613]
  const mapZoom = zoom || 14

  return (
    <MapContainer
      center={mapCenter}
      zoom={mapZoom}
      scrollWheelZoom={true}
      className="w-full h-full rounded-xl"
      style={{ minHeight: '500px' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      <FlyToHotel hotel={selectedHotel} />

      {hotels.map((hotel) => (
        <Marker
          key={hotel.id}
          position={[hotel.lat, hotel.lng]}
          icon={hotelIcon}
          eventHandlers={{
            click: () => onHotelClick && onHotelClick(hotel)
          }}
        >
          <Popup className="custom-popup">
            <div className="hotel-popup">
              <h3>{hotel.name}</h3>
              <StarRating stars={hotel.stars} />
              <p>{hotel.address}</p>
              <p className="rating">Rating: {hotel.rating}/5.0</p>
              <p className="text-xs text-gray-500 mt-1">{hotel.priceRange}</p>
              <a
                href={`/Web-Hotel/hotel/${hotel.id}`}
                className="inline-block mt-2 text-xs bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition-colors"
              >
                Lihat Detail
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
