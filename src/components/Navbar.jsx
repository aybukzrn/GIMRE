import { useState } from "react";
import logo from "../../public/images/logo.jpg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header className="w-full bg-white border-b-4 border-sarı sticky top-0 z-50 px-0">
      <div className="mx-auto p-5 flex items-center justify-between h-[85px]">

        {/* Logo */}

        <div className="flex flex-row items-center mx-8">
          <img src={logo} alt="Logo" className=" h-20" />
        </div>



        {/* Hamburger sonra bakıcam buna */}
        <div
          className="lg:hidden flex flex-col gap-1 cursor-pointer"
          onClick={toggleMenu}
        >
          <span className="w-6 h-[2px] bg-gray-800"></span>
          <span className="w-6 h-[2px] bg-gray-800"></span>
          <span className="w-6 h-[2px] bg-gray-800"></span>
        </div>




        {/* Nav */}

        <nav
          className={`absolute lg:static top-[75px] left-0 w-full lg:w-auto bg-white lg:flex items-start lg:items-center gap-7 px-8 lg:px-0 py-6 lg:py-0 transition-all duration-300 
            ${menuOpen ? "flex flex-col" : "hidden lg:flex"
            }`}
        >
          <a href="/" className="text-sm font-medium text-gray-700 hover:text-[#1c2b4a] transition">
            Ana Sayfa
          </a>

          <a href="/hakkimizda" className="text-sm font-medium text-gray-700 hover:text-[#1c2b4a] transition">
            Hakkımızda
          </a>

          {/* Araştırma Alanları */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("research")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span
              onClick={() => handleDropdown("research")}
              className="text-sm font-medium text-gray-700 hover:text-[#1c2b4a] cursor-pointer"
            >
              Araştırma Alanları
            </span>

            <div
              className={`${activeDropdown === "research" ? "block" : "hidden"
                } absolute left-0 mt-4 w-56 bg-white border border-gray-200 shadow-lg py-3`}
            >
              <a href="/arastirma/nororadyoloji" className="block px-5 py-2 text-sm text-gray-600 hover:bg-gray-50">
                Girişimsel Nöroradyoloji
              </a>
              <a href="/arastirma/mr" className="block px-5 py-2 text-sm text-gray-600 hover:bg-gray-50">
                İleri MR Görüntüleme
              </a>
              <a href="/arastirma/yapay-zeka" className="block px-5 py-2 text-sm text-gray-600 hover:bg-gray-50">
                Yapay Zeka & Görüntüleme
              </a>
              <a href="/arastirma/translasyonel" className="block px-5 py-2 text-sm text-gray-600 hover:bg-gray-50">
                Translasyonel Araştırmalar
              </a>
            </div>
          </div>

          <a href="/projeler" className="text-sm font-medium text-gray-700 hover:text-[#1c2b4a] transition">
            Projeler
          </a>

          {/* Yayınlar */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("publications")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span
              onClick={() => handleDropdown("publications")}
              className="text-sm font-medium text-gray-700 hover:text-[#1c2b4a] cursor-pointer"
            >
              Yayınlar
            </span>

            <div
              className={`${activeDropdown === "publications" ? "block" : "hidden"
                } absolute left-0 mt-4 w-56 bg-white border border-gray-200 shadow-lg py-3`}
            >
              <a href="/yayinlar/sci" className="block px-5 py-2 text-sm text-gray-600 hover:bg-gray-50">
                SCI / SCI-E
              </a>
              <a href="/yayinlar/ulusal" className="block px-5 py-2 text-sm text-gray-600 hover:bg-gray-50">
                Ulusal Makaleler
              </a>
              <a href="/yayinlar/tezler" className="block px-5 py-2 text-sm text-gray-600 hover:bg-gray-50">
                Tezler
              </a>
              <a href="/yayinlar/bildiriler" className="block px-5 py-2 text-sm text-gray-600 hover:bg-gray-50">
                Bildiriler
              </a>
            </div>
          </div>

          <a href="/ekip" className="text-sm font-medium text-gray-700 hover:text-[#1c2b4a] transition">
            Ekip
          </a>

          <a href="/etkinlikler" className=" text-sm font-medium text-gray-700 hover:text-[#1c2b4a] transition">
            Etkinlikler
          </a>

          <a href="/is-birlikleri" className=" text-sm font-medium text-gray-700 hover:text-[#1c2b4a] transition">
            İş Birlikleri
          </a>

          <a
            href="/iletisim"
            className="text-sm font-medium border border-[#1c2b4a] px-4 py-2 rounded-md text-[#1c2b4a] hover:bg-[#1c2b4a] hover:text-white transition"
          >
            İletişim
          </a>

          <div className="lang-switch">
            <button className="lang-active">TR</button>
            <span className="lang-separator">|</span>
            <button>EN</button>
          </div>
        </nav>
      </div>
    </header>
  );
}