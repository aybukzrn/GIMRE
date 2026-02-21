import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// --- BİLEŞENLER (COMPONENTS) ---
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// --- SAYFALAR (PAGES) ---
import HomePage from './pages/HomePage';
// Aşağıdaki sayfaları oluşturdukça import edebilirsin. Şimdilik hata vermemesi için
// boş bir div döndüren geçici bileşenler olarak düşünebilirsin veya yorum satırına alabilirsin.
// import Hakkimizda from './pages/Hakkimizda'; 
// import ArastirmaAlanlari from './pages/ArastirmaAlanlari';
// import Yayinlar from './pages/Yayinlar';
// import Ekip from './pages/Ekip';
// import Iletisim from './pages/Iletisim';

function App() {
  return (
    // Router sarmalayıcısı tüm yönlendirme işlemlerini başlatır
    <Router>
      
      {/* Sayfanın tam ekran yüksekliğini (min-h-screen) almasını ve 
        Footer'ın her zaman en altta kalmasını sağlayan yapı 
      */}
      <div className="flex flex-col min-h-screen">
        
        {/* Navbar her sayfada en üstte sabit kalacak */}
        <Navbar />

        {/* Ana içerik alanı (flex-grow ile kalan boşluğu doldurur) */}
        <main className="flex-grow">
          <Routes>
            {/* Faz 1 - Temel Sayfalar (İhtiyaç Analizi MVP listesi) */}
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/hakkimizda" element={<Hakkimizda />} />
            <Route path="/arastirmalar" element={<ArastirmaAlanlari />} />
            <Route path="/yayinlar" element={<Yayinlar />} />
            <Route path="/ekip" element={<Ekip />} />
            <Route path="/iletisim" element={<Iletisim />} /> */}
            
            {/* 404 Sayfası (Kullanıcı olmayan bir linke giderse) */}
            <Route path="*" element={
              <div className="flex items-center justify-center h-full py-20">
                <h1 className="text-3xl font-bold text-gray-600">404 - Sayfa Bulunamadı</h1>
              </div>
            } />
          </Routes>
        </main>

        
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;