export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Info */}
          <div>
            <h3 className="text-lg font-bold text-yellow-400 mb-3">SIG Hotel Lubuklinggau</h3>
            <p className="text-blue-200 text-sm leading-relaxed">
              Sistem Informasi Geografis (SIG) Hotel Kota Lubuklinggau berbasis web yang menyajikan informasi lokasi dan detail hotel secara interaktif menggunakan teknologi peta digital.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-yellow-400 mb-3">Navigasi</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><a href="/" className="hover:text-white transition-colors">Beranda</a></li>
              <li><a href="/peta" className="hover:text-white transition-colors">Peta Hotel</a></li>
              <li><a href="/daftar-hotel" className="hover:text-white transition-colors">Daftar Hotel</a></li>
              <li><a href="/tentang" className="hover:text-white transition-colors">Tentang</a></li>
            </ul>
          </div>

          {/* Teknologi */}
          <div>
            <h3 className="text-lg font-bold text-yellow-400 mb-3">Teknologi</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>Next.js (React Framework)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>Leaflet.js (Peta Interaktif)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>Tailwind CSS (Styling)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>TypeScript</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-blue-700 text-center">
          <p className="text-blue-300 text-sm">
            &copy; {new Date().getFullYear()} SIG Hotel Kota Lubuklinggau. Dibuat dengan Next.js dan Leaflet.
          </p>
        </div>
      </div>
    </footer>
  )
}
