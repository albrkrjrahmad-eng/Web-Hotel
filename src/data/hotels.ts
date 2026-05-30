export interface Hotel {
  id: number;
  name: string;
  address: string;
  lat: number;
  lng: number;
  rating: number;
  stars: number;
  phone: string;
  description: string;
  facilities: string[];
  priceRange: string;
  image: string;
  kecamatan: string;
}

export const hotels: Hotel[] = [
  {
    id: 1,
    name: "Hotel Linggau Transito",
    address: "Jl. Yos Sudarso No. 1, Lubuklinggau",
    lat: -3.2942,
    lng: 102.8613,
    rating: 4.2,
    stars: 3,
    phone: "(0733) 321001",
    description: "Hotel berbintang 3 yang terletak di pusat kota Lubuklinggau dengan akses mudah ke berbagai destinasi wisata dan pusat bisnis.",
    facilities: ["WiFi Gratis", "Restoran", "Kolam Renang", "Parkir Luas", "AC", "TV Kabel", "Room Service"],
    priceRange: "Rp 350.000 - Rp 800.000",
    image: "/images/hotel1.jpg",
    kecamatan: "Lubuklinggau Timur I"
  },
  {
    id: 2,
    name: "Hotel Premier Lubuklinggau",
    address: "Jl. Garuda No. 15, Lubuklinggau",
    lat: -3.2965,
    lng: 102.8558,
    rating: 4.0,
    stars: 3,
    phone: "(0733) 322100",
    description: "Hotel modern dengan fasilitas lengkap yang cocok untuk perjalanan bisnis maupun liburan keluarga.",
    facilities: ["WiFi Gratis", "Restoran", "Meeting Room", "Parkir Luas", "AC", "Laundry", "Room Service"],
    priceRange: "Rp 300.000 - Rp 700.000",
    image: "/images/hotel2.jpg",
    kecamatan: "Lubuklinggau Timur I"
  },
  {
    id: 3,
    name: "Hotel Mutiara",
    address: "Jl. Sultan Mahmud Badaruddin No. 45, Lubuklinggau",
    lat: -3.2890,
    lng: 102.8520,
    rating: 3.8,
    stars: 2,
    phone: "(0733) 323456",
    description: "Hotel dengan suasana nyaman dan harga terjangkau, strategis dekat dengan pusat perbelanjaan.",
    facilities: ["WiFi Gratis", "Parkir", "AC", "TV", "Restoran"],
    priceRange: "Rp 200.000 - Rp 450.000",
    image: "/images/hotel3.jpg",
    kecamatan: "Lubuklinggau Timur II"
  },
  {
    id: 4,
    name: "Hotel Mahkota",
    address: "Jl. Merdeka No. 88, Lubuklinggau",
    lat: -3.3010,
    lng: 102.8640,
    rating: 3.5,
    stars: 2,
    phone: "(0733) 324567",
    description: "Hotel budget yang bersih dan nyaman, ideal untuk wisatawan yang mencari penginapan ekonomis.",
    facilities: ["WiFi Gratis", "Parkir", "AC", "TV", "Kamar Mandi Dalam"],
    priceRange: "Rp 150.000 - Rp 350.000",
    image: "/images/hotel4.jpg",
    kecamatan: "Lubuklinggau Barat I"
  },
  {
    id: 5,
    name: "Hotel Grand Lubuklinggau",
    address: "Jl. Depati Said No. 12, Lubuklinggau",
    lat: -3.2870,
    lng: 102.8680,
    rating: 4.5,
    stars: 4,
    phone: "(0733) 325000",
    description: "Hotel mewah terbaik di Lubuklinggau dengan fasilitas premium dan pelayanan berkelas internasional.",
    facilities: ["WiFi Gratis", "Restoran", "Kolam Renang", "Spa", "Gym", "Meeting Room", "Ballroom", "Parkir Luas", "Room Service 24 Jam"],
    priceRange: "Rp 500.000 - Rp 1.500.000",
    image: "/images/hotel5.jpg",
    kecamatan: "Lubuklinggau Timur II"
  },
  {
    id: 6,
    name: "Hotel Wisata Linggau",
    address: "Jl. Letkol Sukirno No. 30, Lubuklinggau",
    lat: -3.2920,
    lng: 102.8480,
    rating: 3.7,
    stars: 2,
    phone: "(0733) 326789",
    description: "Hotel dengan konsep wisata yang menawarkan pemandangan alam kota Lubuklinggau.",
    facilities: ["WiFi Gratis", "Restoran", "Taman", "Parkir", "AC", "TV"],
    priceRange: "Rp 180.000 - Rp 400.000",
    image: "/images/hotel6.jpg",
    kecamatan: "Lubuklinggau Barat II"
  },
  {
    id: 7,
    name: "Hotel Nusantara",
    address: "Jl. A. Yani No. 55, Lubuklinggau",
    lat: -3.2985,
    lng: 102.8590,
    rating: 3.9,
    stars: 3,
    phone: "(0733) 327890",
    description: "Hotel yang mengusung konsep budaya Nusantara dengan suasana hangat dan pelayanan ramah.",
    facilities: ["WiFi Gratis", "Restoran", "Meeting Room", "Parkir", "AC", "Laundry", "TV Kabel"],
    priceRange: "Rp 280.000 - Rp 600.000",
    image: "/images/hotel7.jpg",
    kecamatan: "Lubuklinggau Timur I"
  },
  {
    id: 8,
    name: "Hotel Bukit Sulap",
    address: "Jl. Bukit Sulap No. 10, Lubuklinggau",
    lat: -3.2835,
    lng: 102.8550,
    rating: 4.1,
    stars: 3,
    phone: "(0733) 328901",
    description: "Hotel dengan view Bukit Sulap yang indah, menawarkan pengalaman menginap yang dekat dengan alam.",
    facilities: ["WiFi Gratis", "Restoran", "Taman", "Kolam Renang", "Parkir Luas", "AC", "Room Service"],
    priceRange: "Rp 320.000 - Rp 750.000",
    image: "/images/hotel8.jpg",
    kecamatan: "Lubuklinggau Utara I"
  },
  {
    id: 9,
    name: "Penginapan Sederhana",
    address: "Jl. Ki Hajar Dewantara No. 22, Lubuklinggau",
    lat: -3.3050,
    lng: 102.8510,
    rating: 3.3,
    stars: 1,
    phone: "(0733) 329012",
    description: "Penginapan ekonomis dengan fasilitas dasar yang bersih dan nyaman untuk persinggahan singkat.",
    facilities: ["Parkir", "AC", "Kamar Mandi Dalam", "TV"],
    priceRange: "Rp 100.000 - Rp 200.000",
    image: "/images/hotel9.jpg",
    kecamatan: "Lubuklinggau Selatan I"
  },
  {
    id: 10,
    name: "Hotel Panorama",
    address: "Jl. Panorama No. 5, Lubuklinggau",
    lat: -3.2900,
    lng: 102.8710,
    rating: 3.6,
    stars: 2,
    phone: "(0733) 330123",
    description: "Hotel dengan pemandangan kota yang indah, menyediakan kenyamanan dengan harga terjangkau.",
    facilities: ["WiFi Gratis", "Parkir", "AC", "TV Kabel", "Restoran", "Kamar Mandi Dalam"],
    priceRange: "Rp 200.000 - Rp 450.000",
    image: "/images/hotel10.jpg",
    kecamatan: "Lubuklinggau Timur II"
  },
  {
    id: 11,
    name: "Hotel Sriwijaya",
    address: "Jl. Sriwijaya No. 78, Lubuklinggau",
    lat: -3.2955,
    lng: 102.8450,
    rating: 3.4,
    stars: 2,
    phone: "(0733) 331234",
    description: "Hotel dengan nuansa sejarah Sriwijaya yang memberikan pengalaman menginap yang berbeda.",
    facilities: ["WiFi Gratis", "Parkir", "AC", "TV", "Restoran", "Laundry"],
    priceRange: "Rp 175.000 - Rp 380.000",
    image: "/images/hotel11.jpg",
    kecamatan: "Lubuklinggau Barat I"
  },
  {
    id: 12,
    name: "Guest House Linggau Permai",
    address: "Jl. Permai No. 33, Lubuklinggau",
    lat: -3.3025,
    lng: 102.8570,
    rating: 3.8,
    stars: 2,
    phone: "(0733) 332345",
    description: "Guest house yang asri dan tenang, cocok untuk keluarga yang menginginkan suasana seperti di rumah.",
    facilities: ["WiFi Gratis", "Parkir", "AC", "Dapur Bersama", "Taman", "TV"],
    priceRange: "Rp 200.000 - Rp 400.000",
    image: "/images/hotel12.jpg",
    kecamatan: "Lubuklinggau Barat II"
  }
];

export const kecamatanList = [
  "Semua Kecamatan",
  "Lubuklinggau Timur I",
  "Lubuklinggau Timur II",
  "Lubuklinggau Barat I",
  "Lubuklinggau Barat II",
  "Lubuklinggau Utara I",
  "Lubuklinggau Utara II",
  "Lubuklinggau Selatan I",
  "Lubuklinggau Selatan II"
];
