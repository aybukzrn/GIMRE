import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// --- BİLEŞENLER (COMPONENTS) ---
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// --- SAYFALAR (PAGES) ---
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ResearchAreaPage from './pages/ResearchAreaPage';
import PublicationsPage from './pages/PublicationsPage';
import ProjectPage from './pages/ProjectsPage';

// import Ekip from './pages/Ekip';
// import Iletisim from './pages/Iletisim';

function App() {
  return (
    <Router>

      <div className="flex flex-col min-h-screen">

        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hakkimizda" element={<AboutUsPage />} />
            <Route path="/arastirma/:slug" element={<ResearchAreaPage />} />
            <Route path="/yayinlar" element={<PublicationsPage />} />
            <Route path="/projeler" element={<ProjectPage />} />


            {/* <Route path="/arastirmalar" element={<ArastirmaAlanlari />} />
            <Route path="/yayinlar" element={<Yayinlar />} />
            <Route path="/ekip" element={<Ekip />} />
            <Route path="/iletisim" element={<Iletisim />} />  */}

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