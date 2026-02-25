import React from "react";
import { useParams } from "react-router-dom";
import { RESEARCH_FIELDS } from "../../data/researchData";

export default function Content() {
    const { slug } = useParams();
    const activeData = RESEARCH_FIELDS.find((field) => field.slug === slug);

    if (!activeData) return null;

    const subtopicsList = Array.isArray(activeData.subtopics) 
      ? activeData.subtopics 
      : activeData.subtopics?.split(',').map(s => s.trim()) || [];

    return(
        <article className="space-y-10 bg-white p-8 md:p-12 rounded-2xl shadow-lg animate-fade-in-up">

            <header className="border-b border-gray-100 pb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#1c2b4a] mb-6 leading-tight">
                {activeData.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg font-medium">
                {activeData.description}
              </p>
            </header>

            <section>
              <h3 className="text-xl font-bold text-gray-800 mb-5 flex items-center gap-3">
                 <span className="w-10 h-10 rounded-xl bg-yellow-50 text-sarı flex items-center justify-center shrink-0">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                 </span>
                 Araştırma Odakları
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {subtopicsList.map((topic, i) => (
                   <div key={i} className="flex items-center gap-3 bg-gray-50 border border-gray-100 px-5 py-4 rounded-xl text-gray-700 font-semibold hover:shadow-md transition">
                     <svg className="w-5 h-5 text-sarı shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                     {topic}
                   </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-br from-[#1c2b4a]/5 to-transparent p-6 md:p-8 rounded-2xl border border-[#1c2b4a]/10">
              <h3 className="text-xl font-bold text-[#1c2b4a] mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                Kullandığımız Yöntemler ve Altyapı
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {activeData.methods}
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                
                {/* Projeler */}
                <section className="bg-white border-r-4 border-sarı p-6 rounded-r-2xl shadow-sm border-y border-l  flex flex-col">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  Öne Çıkan Projeler
                  </h3>
                  <p className="text-gray-600 font-medium leading-relaxed flex-1">
                    {activeData.projects}
                  </p>
                </section>

                {/* Yayınlar */}
                <section className="bg-white border-r-4 border-sarı p-6 rounded-r-2xl shadow-sm border-y border-l flex flex-col">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    İlgili Yayınlar
                  </h3>
                  <p className="text-gray-600 font-medium italic leading-relaxed flex-1">
                    "{activeData.publications}"
                  </p>
                </section>

            </div>

        </article>
    )
}