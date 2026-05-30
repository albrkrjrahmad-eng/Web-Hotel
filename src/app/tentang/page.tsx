export default function TentangPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Tentang Aplikasi</h1>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Sistem Informasi Geografis (SIG) Hotel Kota Lubuklinggau Berbasis Web 
            Menggunakan Framework Next.js dan Leaflet
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Deskripsi */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Deskripsi Sistem
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sistem Informasi Geografis (SIG) Hotel Kota Lubuklinggau adalah sebuah aplikasi web yang dirancang untuk menyajikan informasi mengenai hotel-hotel yang tersedia di wilayah Kota Lubuklinggau, Provinsi Sumatera Selatan secara visual melalui peta digital interaktif.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Aplikasi ini memanfaatkan teknologi pemetaan modern (Leaflet.js) yang terintegrasi dengan framework React (Next.js) untuk memberikan pengalaman pengguna yang responsif dan interaktif.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Dengan SIG ini, pengguna dapat dengan mudah menemukan lokasi hotel, melihat informasi detail seperti fasilitas, harga, rating, dan kontak hotel, serta memvisualisasikan distribusi hotel berdasarkan kecamatan.
              </p>
            </div>

            {/* Tujuan */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Tujuan
              </h2>
              <ul className="space-y-3">
                {[
                  'Menyediakan informasi geografis hotel di Kota Lubuklinggau secara digital',
                  'Memudahkan wisatawan dan masyarakat dalam mencari lokasi hotel',
                  'Menyajikan data hotel secara visual melalui peta interaktif',
                  'Memberikan informasi detail mengenai fasilitas dan harga hotel',
                  'Mendukung digitalisasi informasi pariwisata Kota Lubuklinggau',
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-xs font-bold">{index + 1}</span>
                    </span>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Teknologi */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <svg className="w-6 h-6 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Teknologi yang Digunakan
              </h2>
              <div className="space-y-4">
                {[
                  {
                    name: 'Next.js',
                    desc: 'React framework untuk pengembangan web modern dengan fitur server-side rendering dan routing otomatis',
                    color: 'bg-black text-white'
                  },
                  {
                    name: 'Leaflet.js',
                    desc: 'Library JavaScript open-source untuk peta interaktif yang ringan dan mudah digunakan',
                    color: 'bg-green-600 text-white'
                  },
                  {
                    name: 'React-Leaflet',
                    desc: 'React components untuk Leaflet maps, memudahkan integrasi Leaflet dengan React/Next.js',
                    color: 'bg-blue-600 text-white'
                  },
                  {
                    name: 'TypeScript',
                    desc: 'Superset JavaScript dengan type safety untuk pengembangan yang lebih robust',
                    color: 'bg-blue-700 text-white'
                  },
                  {
                    name: 'Tailwind CSS',
                    desc: 'Utility-first CSS framework untuk styling yang cepat dan konsisten',
                    color: 'bg-cyan-600 text-white'
                  },
                  {
                    name: 'OpenStreetMap',
                    desc: 'Penyedia tile peta open-source untuk visualisasi geografis',
                    color: 'bg-green-700 text-white'
                  },
                ].map((tech, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className={`${tech.color} text-xs font-bold px-2 py-1 rounded-md flex-shrink-0`}>
                      {tech.name}
                    </span>
                    <p className="text-sm text-gray-600">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fitur */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <svg className="w-6 h-6 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                Fitur Aplikasi
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Peta interaktif',
                  'Pencarian hotel',
                  'Filter berdasarkan kecamatan',
                  'Filter berdasarkan bintang',
                  'Detail hotel lengkap',
                  'Responsive design',
                  'Popup informasi',
                  'Navigasi peta zoom',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-yellow-50 rounded-lg p-3">
                    <svg className="w-4 h-4 text-yellow-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Info Wilayah */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl shadow-sm p-8 text-white">
              <h2 className="text-xl font-bold mb-4">Kota Lubuklinggau</h2>
              <div className="space-y-3 text-blue-100 text-sm">
                <p><strong className="text-white">Provinsi:</strong> Sumatera Selatan</p>
                <p><strong className="text-white">Luas Wilayah:</strong> 401,50 km&sup2;</p>
                <p><strong className="text-white">Koordinat:</strong> 3&deg;17&apos;51&quot;S 102&deg;51&apos;41&quot;E</p>
                <p><strong className="text-white">Jumlah Kecamatan:</strong> 8 Kecamatan</p>
                <p><strong className="text-white">Ketinggian:</strong> 129 m di atas permukaan laut</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
