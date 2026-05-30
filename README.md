# Sistem Informasi Geografis (SIG) Hotel Kota Lubuklinggau

Aplikasi web berbasis **Next.js** dan **Leaflet** untuk menyajikan informasi geografis hotel-hotel di Kota Lubuklinggau, Sumatera Selatan secara interaktif.

## Fitur

- **Peta Interaktif** - Visualisasi lokasi hotel pada peta digital menggunakan Leaflet.js
- **Pencarian Hotel** - Cari hotel berdasarkan nama atau alamat
- **Filter** - Filter berdasarkan kecamatan dan klasifikasi bintang
- **Detail Hotel** - Informasi lengkap termasuk fasilitas, harga, kontak, dan lokasi pada peta
- **Responsive Design** - Tampilan optimal di desktop dan mobile
- **Popup Informasi** - Klik marker untuk melihat ringkasan hotel

## Teknologi

| Teknologi | Fungsi |
|-----------|--------|
| Next.js 14 | React Framework (App Router) |
| React 18 | UI Library |
| Leaflet.js | Peta Interaktif |
| React-Leaflet | React wrapper untuk Leaflet |
| TypeScript | Type Safety |
| Tailwind CSS | Styling |
| OpenStreetMap | Tile Provider |

## Instalasi

```bash
# Clone repository
git clone https://github.com/albrkrjrahmad-eng/Web-Hotel.git
cd Web-Hotel

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Struktur Halaman

- `/` - Beranda (landing page)
- `/peta` - Peta interaktif hotel
- `/daftar-hotel` - Daftar semua hotel
- `/hotel/[id]` - Detail hotel
- `/tentang` - Tentang aplikasi

## Struktur Folder

```
src/
├── app/
│   ├── layout.tsx          # Layout utama
│   ├── page.tsx            # Halaman beranda
│   ├── globals.css         # Global styles
│   ├── peta/
│   │   └── page.tsx        # Halaman peta interaktif
│   ├── daftar-hotel/
│   │   └── page.tsx        # Halaman daftar hotel
│   ├── hotel/
│   │   └── [id]/
│   │       └── page.tsx    # Halaman detail hotel
│   └── tentang/
│       └── page.tsx        # Halaman tentang
├── components/
│   ├── Navbar.tsx          # Navigasi
│   ├── Footer.tsx          # Footer
│   ├── Map.tsx             # Dynamic map wrapper
│   ├── MapComponent.tsx    # Leaflet map component
│   └── HotelCard.tsx       # Card hotel
└── data/
    └── hotels.ts           # Data hotel Lubuklinggau
```

## Data Hotel

Aplikasi ini memuat 12 hotel di Kota Lubuklinggau yang tersebar di berbagai kecamatan:
- Lubuklinggau Timur I
- Lubuklinggau Timur II
- Lubuklinggau Barat I
- Lubuklinggau Barat II
- Lubuklinggau Utara I
- Lubuklinggau Selatan I

## Lisensi

MIT License
