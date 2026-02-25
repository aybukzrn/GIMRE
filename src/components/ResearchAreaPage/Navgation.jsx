import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { RESEARCH_FIELDS } from "../../data/researchData";

export default function Navigation({ searchTerm }) {
    const { slug } = useParams();
    const activeData = RESEARCH_FIELDS.find((field) => field.slug === slug);
  
    if (!activeData && slug) {
      return <Navigate to="/arastirma/nororadyoloji" replace />;
    }

    const filteredFields = RESEARCH_FIELDS.filter(field => 
        field.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        field.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return(
        <aside className="lg:col-span-1 bg-white p-6 rounded-2xl h-min shadow-lg lg:sticky top-28">
            <h3 className="text-xl text-center mb-6 font-bold text-[#1c2b4a] uppercase tracking-wide">
              ÇALIŞMA ALANLARI
            </h3>
            
            <nav className="flex flex-col space-y-3">
              {filteredFields.length > 0 ? (
                filteredFields.map((field) => {
                  const isActive = field.slug === slug;

                  return (
                    <Link
                      key={field.slug}
                      to={`/arastirma/${field.slug}`}
                      className={`px-4 py-3 text-sm md:text-base rounded-2xl transition-all duration-300 flex items-center justify-between group
                        ${isActive
                          ? "bg-[#1c2b4a] text-white shadow-md translate-x-1"
                          : "text-gray-600 hover:bg-gray-50 hover:text-[#1c2b4a] border border-transparent hover:border-gray-100"
                        }`}
                    >
                      <span>{field.title}</span>
                      
                      {isActive && (
                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                      )}
                    </Link>
                  );
                })
              ) : (
                 <div className="text-center text-gray-500 py-6 text-sm bg-gray-50 rounded-xl">
                   Aradığınız kriterde bir araştırma alanı bulunamadı.
                 </div>
              )}
            </nav>
        </aside>
    )
}