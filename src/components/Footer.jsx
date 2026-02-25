import React from 'react';
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-white text-koyu py-12 lg:py-16 border-t-4 border-sarı mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">

        <div className="grid grid-cols-1 text-center lg:grid-cols-4 gap-12 mb-12">

          {/* 1. bölüm*/}
          <div className="flex flex-col">

            {/* <a href="/" className="flex flex-col items-center gap-3 mt-2 mb-6">
              <img src="/images/logo.jpg" alt="Enstitü Logo" className="h-12 w-28 rounded-8  bg-white p-1" />
              <span className="font-medium text-lg text-koyu leading-tight text-center">
                Girişimsel MR <br /> Klinik AR-GE Enstitüsü
              </span>
            </a> */}

            <a href="/" className="flex items-center justify-center">
              <div className="font-sansation text-center">
                <h1 className="font-bold text-2xl text-mavi">Prof. Dr. Oktay ALGIN</h1>
                <p className="text-gray-600">GİMRE Müdürü</p>
              </div>
            </a>



            <h2 className='text-koyu text-center mb-2 mt-4'>Bize buralardan ulaşabilirsiniz</h2>
            <div className="flex gap-4 items-center justify-center">

              <a href="#" className="w-12 h-8 flex items-center p-2 hover:shadow-md rounded-lg">
                <span><img src="images/linkedin.svg" /></span>
              </a>
              <a href="#" className="w-12 h-8 flex items-center p-2 hover:shadow-md rounded-lg">
                <span><img src="images/youtube.svg" /></span>
              </a>
              <a href="#" className="w-8 h-8 flex items-center p-2 hover:shadow-md rounded-lg">
                <span><BsTwitterX /></span>
              </a>
              <a href="#" className="w-10 h-10 flex items-center p-2 hover:shadow-md rounded-lg">
                <span><img src="images/ResearchGate.png" alt="" /></span>
              </a>

            </div>


          </div>

          {/* 2. Site Haritası*/}
          <div>
            <h3 className="text-koyu font-medium  tracking-wide text-lg mb-6 relative inline-block">
              Site Haritası
              <div className='w-full h-[0.5px] bg-gray-400 mt-1'></div>
            </h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-sm hover:underline hover:translate-x-1 inline-block transition transform">Ana Sayfa</a></li>
              <li><a href="/hakkimizda" className="text-sm hover:underline hover:translate-x-1 inline-block transition transform">Enstitü Hakkında</a></li>
              <li><a href="/arastirmalar" className="text-sm hover:underline hover:translate-x-1 inline-block transition transform">Araştırma Alanları</a></li>
              <li><a href="/ekip" className="text-sm hover:underline hover:translate-x-1 inline-block transition transform">Ekip & Araştırmacılar</a></li>
              <li><a href="/yayinlar" className="text-sm hover:underline hover:translate-x-1 inline-block transition transform">Bilimsel Yayınlar</a></li>
            </ul>
          </div>

          {/* 3. Sütun: Odak Alanlarımız */}
          <div>
            <h3 className="text-koyu font-medium tracking-wide text-lg mb-6 relative inline-block">
              Odak Alanlarımız
              <div className='w-full h-[0.5px] bg-gray-400 mt-1'></div>
            </h3>
            <ul className="space-y-3">
              <li><a href="/arastirma/nororadyoloji" className="text-sm hover:underline hover:translate-x-1 inline-block transition transform">Girişimsel Nöroradyoloji</a></li>
              <li><a href="/arastirma/mr" className="text-sm hover:underline hover:translate-x-1 inline-block transition transform">İleri MR Görüntüleme</a></li>
              <li><a href="/arastirma/yapay-zeka" className="text-sm hover:underline hover:translate-x-1 inline-block transition transform">Yapay Zeka & Görüntüleme</a></li>
              <li><a href="/arastirma/translasyonel" className="text-sm hover:underline hover:translate-x-1 inline-block transition transform">Translasyonel Araştırmalar</a></li>
            </ul>
          </div>

          {/* 4. Sütun: İletişim */}
          <div>
            <h3 className="text-koyu font-medium tracking-wide text-center  text-lg mb-6 relative inline-block">
              İletişim
              <div className='w-full h-[0.5px] bg-gray-400 mt-1'></div>
            </h3>
            <ul className="space-y-4 text-center">
              <li className="flex items-center justify-center gap-3">
                <span className="mt-1 w-8 h-8 lg:w-14 lg:h-14 ml-5"><img src="images/location1.svg" /></span>
                <a href="map:" className="text-sm hover:underline transition me-8">Üniversite Hastanesi Kampüsü, MR Araştırma Merkezi<br />
                  06000, Ankara / Türkiye</a>
              </li>
              <li className="flex items-center justify-center gap-3">
                <span className="mt-1 w-6 h-6"><img src="images/phone.svg" /></span>
                <a href="tel:+903120000000" className="text-sm hover:underline transition">+90 (312) 000 00 00</a>
              </li>
              <li className="flex items-center justify-center gap-3">
                <span className="mt-1 w-7 h-7"><img src="images/mail.svg" /></span>
                <a href="mailto:info@girisimselmr.edu.tr" className="text-sm hover:underline transition">info@girisimselmr.edu.tr</a>
              </li>
            </ul>
          </div>

        </div>


        <div className="border-t border-gray-200 pt-8 flex md:flex-row justify-between lg:items-center gap-6 flex-col-reverse">
          <p className="text-xs text-gray-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} Girişimsel MR Klinik AR-GE Enstitüsü. Tüm hakları saklıdır.
          </p>
          <div className="flex flex-col lg:flex-row lg:gap-4 text-xs text-gray-500">
            <a href="/gizlilik" className="hover:underline transition">Gizlilik Politikası</a>
            <span className="opacity-0 lg:opacity-100">|</span>
            <a href="/kullanim-kosullari" className="hover:underline transition">Kullanım Koşulları</a>
            <span className="opacity-0 lg:opacity-100">|</span>
            <a href="/kvkk" className="hover:underline transition">KVKK Aydınlatma Metni</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;