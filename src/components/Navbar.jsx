import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* Sol Kısım: Logo ve Enstitü Adı */}
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center gap-3">
              {/* Logo Placeholder */}
              <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold">
                MR
              </div>
              <span className="font-bold text-xl text-slate-800 leading-tight">
                Girişimsel MR <br className="hidden sm:block" />
                <span className="text-sm text-blue-600 font-medium">Klinik AR-GE Enstitüsü</span>
              </span>
            </a>
          </div>

          {/* Orta Kısım: Temel Navigasyon (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/hakkimizda" className="text-slate-600 hover:text-blue-700 font-medium transition-colors">
              Hakkımızda
            </a>
            <a href="/yayinlar" className="text-slate-600 hover:text-blue-700 font-medium transition-colors">
              Yayınlar
            </a>
            <a href="/etkinlikler" className="text-slate-600 hover:text-blue-700 font-medium transition-colors">
              Etkinlikler
            </a>
          </div>

          {/* Sağ Kısım: CTA Butonları (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/arastirmalar" className="text-blue-700 font-semibold hover:text-blue-800 transition-colors">
              Araştırmalarımız
            </a>
            <a href="/ekip" className="text-slate-600 font-semibold hover:text-blue-700 transition-colors">
              Ekip
            </a>
            <a 
              href="/iletisim" 
              className="bg-blue-700 text-white px-5 py-2.5 rounded-md font-medium hover:bg-blue-800 transition-colors shadow-sm"
            >
              İletişime Geçin
            </a>
            
            {/* Dil Seçeneği (İhtiyaç analizindeki TR/EN desteği) */}
            <div className="border-l border-gray-300 pl-4 ml-2 flex gap-2">
                <button className="text-sm font-bold text-blue-700">TR</button>
                <span className="text-gray-400">|</span>
                <button className="text-sm font-medium text-gray-500 hover:text-blue-700">EN</button>
            </div>
          </div>

          {/* Mobil Menü Butonu */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-700 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobil Menü (Açılır Kapanır Kısım) */}
      {isOpen && (
        <div className="md:hidden bg-slate-50 border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/hakkimizda" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-700 hover:bg-blue-50 rounded-md">Hakkımızda</a>
            <a href="/arastirmalar" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-700 hover:bg-blue-50 rounded-md">Araştırmalarımız</a>
            <a href="/ekip" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-700 hover:bg-blue-50 rounded-md">Ekip</a>
            <a href="/yayinlar" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-700 hover:bg-blue-50 rounded-md">Yayınlar</a>
            <a href="/iletisim" className="block px-3 py-2 text-base font-medium text-blue-700 hover:bg-blue-100 rounded-md">İletişime Geçin</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;