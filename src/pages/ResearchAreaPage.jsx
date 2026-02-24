import React, { useState } from "react";
import Hero from "../components/ResearchAreaPage/Hero";
import Navigation from "../components/ResearchAreaPage/Navgation";
import Content from "../components/ResearchAreaPage/Content";

export default function ResearchAreaPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <Hero />
        
        {/* Arama */}
        <div className="bg-white p-4 lg:mx-0 rounded-2xl shadow-sm border border-gray-100 flex items-center transition-shadow focus-within:shadow-md">
           <svg className="w-6 h-6 text-gray-400 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
           <input 
             type="text" 
             placeholder="Araştırma alanlarında ara (Örn: Yapay Zeka, Nöroradyoloji)..." 
             className="w-full bg-transparent outline-none text-gray-700 font-medium placeholder-gray-400"
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
           />
           {searchTerm && (
             <button onClick={() => setSearchTerm("")} className="text-gray-400 hover:text-red-500 transition-colors">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
             </button>
           )}
        </div>

        {/* content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 pb-10 lg:px-0 items-start">
          
          <Navigation searchTerm={searchTerm} />
          
          <main className="lg:col-span-2">
            <Content />
          </main>
          
        </div>
      </div>
    </section>
  );
}