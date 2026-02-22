import { useState, useEffect } from "react";
import logo from "../../public/images/logo.jpg";

const NAV_ITEMS = [
  { label: "Hakkımızda", href: "/hakkimizda" },
  {
    label: "Araştırma Alanları",
    children: [
      { label: "Girişimsel Nöroradyoloji", href: "/arastirma/nororadyoloji" },
      { label: "İleri MR Görüntüleme", href: "/arastirma/mr" },
      { label: "Yapay Zeka & Görüntüleme", href: "/arastirma/yapay-zeka" },
      { label: "Translasyonel Araştırmalar", href: "/arastirma/translasyonel" },
    ],
  },
  { label: "Projeler", href: "/projeler" },
  {
    label: "Yayınlar",
    children: [
      { label: "SCI / SCI-E", href: "/yayinlar/sci" },
      { label: "Ulusal Makaleler", href: "/yayinlar/ulusal" },
      { label: "Tezler", href: "/yayinlar/tezler" },
      { label: "Bildiriler", href: "/yayinlar/bildiriler" },
    ],
  },
  { label: "Ekip", href: "/ekip" },
  { label: "Etkinlikler", href: "/etkinlikler" },
  { label: "İş Birlikleri", href: "/is-birlikleri" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeLang, setActiveLang] = useState("TR");

  // LocalStorage'dan dili yükle
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      setActiveLang(savedLang);
    }
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const changeLanguage = (lang) => {
    setActiveLang(lang);
    localStorage.setItem("lang", lang);
    console.log("Backend'e gönderilecek dil:", lang);
  };

  const toggleDropdown = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleMobileLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* STICKY NAVBAR */}
      <header className="w-full sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-[85px] flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="Kurum Logosu" className="h-14 w-auto" />
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button className="text-sm font-medium text-gray-700 hover:text-[#1c2b4a]">
                    {item.label}
                  </button>

                  <div className="absolute top-full mt-5 w-48 bg-white shadow-xl rounded-xl border border-gray-200 p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    {/* Görünmez köprü (hover kaybolmasını önler) */}

                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block py-2 text-sm text-gray-600 hover:text-[#1c2b4a] hover:bg-slate-200 rounded-lg px-2"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-[#1c2b4a]"
                >
                  {item.label}
                </a>
              )
            )}

            {/* Dil Seçimi (Desktop) */}
            <div className="flex items-center bg-gray-100 rounded-full px-1 py-1 text-sm font-medium">
              <button
                onClick={() => changeLanguage("TR")}
                className={`px-3 py-1 rounded-full transition ${activeLang === "TR"
                  ? "bg-mavi shadow text-white"
                  : "text-gray-500"
                  }`}
              >
                TR
              </button>
              <button
                onClick={() => changeLanguage("EN")}
                className={`px-3 py-1 rounded-full transition ${activeLang === "EN"
                  ? "bg-mavi shadow text-white"
                  : "text-gray-500"
                  }`}
              >
                EN
              </button>
            </div>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-gray-700"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>






      {/* FULLSCREEN MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-white z-[60] flex flex-col transform transition-transform duration-300 ${menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        {/* Mobil Menü Üst Kısım (Sabit) */}
        <div className="flex justify-between items-center p-6 border-b shrink-0">
          <img src={logo} alt="Logo" className="h-10" />
          <button onClick={() => setMenuOpen(false)} className="text-gray-700">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobil Menü İçerik Kısmı (Kaydırılabilir) */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-lg pb-24">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className="w-full flex justify-between font-semibold text-koyu"
                >
                  {item.label}
                  <span className="text-gray-500 text-2xl font-light">
                    {activeDropdown === item.label ? "-" : "+"}
                  </span>
                </button>

                {/* Dropdown Açıldığında */}
                {activeDropdown === item.label && (
                  <div className="mt-4 ml-4 space-y-4 text-base text-gray-600 border-l-[0.5px] border-gray-400 pl-4">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={handleMobileLinkClick}
                        className="block hover:text-[#1c2b4a]"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={handleMobileLinkClick}
                className="block font-semibold text-koyu hover:text-[#1c2b4a]"
              >
                {item.label}
              </a>
            )
          )}

          {/* Mobil İletişim Butonu (Eksikti, Eklendi) */}
          <div className="pt-4">
            <a
              href="/iletisim"
              onClick={handleMobileLinkClick}
              className="block w-full text-center px-5 py-3 rounded-lg bg-[#1c2b4a] text-white font-semibold hover:bg-[#162238] transition"
            >
              İletişime Geçin
            </a>
          </div>

          {/* Mobile Language */}
          <div className="p-2 border flex items-center justify-center gap-4 bg-gray-50 rounded-xl mt-4">
            <button
              onClick={() => changeLanguage("TR")}
              className={`flex-1 py-2 rounded-lg font-medium transition ${activeLang === "TR" ? "bg-white shadow-lg text-[#1c2b4a]" : "text-gray-500"
                }`}
            >
              TR
            </button>
            <button
              onClick={() => changeLanguage("EN")}
              className={`flex-1 py-2 rounded-lg font-medium transition ${activeLang === "EN" ? "bg-white shadow-lg text-[#1c2b4a]" : "text-gray-500"
                }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </>
  );
}