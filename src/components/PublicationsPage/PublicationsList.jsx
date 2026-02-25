import React, { useState } from 'react';

export default function PublicationsList({ publications, resetFilters }) {
  const [expandedAbstracts, setExpandedAbstracts] = useState({});

  const toggleAbstract = (id) => {
    setExpandedAbstracts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const exportBibTeX = (pub) => {
    const bibtex = `@article{${pub.authors.split(',')[0].split(' ')[0]}${pub.year},
      title={${pub.title}},
      author={${pub.authors}},
      journal={${pub.journal}},
      year={${pub.year}},
      volume={${pub.volume || ''}},
      pages={${pub.pages || ''}},
      doi={${pub.doi || ''}}
    }`;
    navigator.clipboard.writeText(bibtex);
    alert("BibTeX formatı panoya kopyalandı!");
  };

  return (
    <div className="space-y-6">
      {publications && publications.length > 0 ? (
        publications.map((pub) => (
          <div key={pub.id} className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">

            {/* Üst Kısım: Rozetler */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-[#1c2b4a]/10 text-[#1c2b4a] rounded-full text-sm font-bold tracking-wide">
                  {pub.type}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-semibold">
                  {pub.year}
                </span>
              </div>
              {pub.citations > 0 && (
                <div className="flex items-center gap-1 text-sarı font-bold text-sm bg-yellow-50 px-3 py-1 rounded-full border border-yellow-100">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  {pub.citations} Atıf
                </div>
              )}
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 group-hover:text-[#1c2b4a] transition-colors">
              {pub.title}
            </h2>
            <p className="text-gray-700 font-medium mb-1">{pub.authors}</p>
            <p className="text-gray-500 text-sm italic mb-4">
              {pub.journal}, {pub.volume ? `Vol. ${pub.volume}, ` : ''}{pub.pages ? `pp. ${pub.pages}` : ''}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {pub.keywords?.map((kw, i) => (
                <span key={i} className="text-xs font-medium text-gray-500 bg-gray-50 border border-gray-200 px-2 py-1 rounded">
                  #{kw}
                </span>
              ))}
            </div>

            {expandedAbstracts[pub.id] && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg text-gray-700 text-sm leading-relaxed border-l-4 border-[#1c2b4a] animate-fade-in-down">
                <strong className="block mb-2 text-[#1c2b4a]">Özet / Abstract:</strong>
                {pub.abstract}
              </div>
            )}

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-100">
              <button
                onClick={() => toggleAbstract(pub.id)}
                className="text-sm font-semibold text-[#1c2b4a] hover:text-sarı transition-colors flex items-center gap-1"
              >
                {expandedAbstracts[pub.id] ? 'Özeti Gizle' : 'Özeti Oku'}
                <svg className={`w-4 h-4 transition-transform ${expandedAbstracts[pub.id] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </button>

              <div className="w-px h-4 bg-gray-300 mx-2 hidden sm:block"></div>

              {pub.doi && (
                <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1">
                  DOI Bağlantısı
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              )}

              {pub.pdf && (
                <a href={pub.pdf} className="text-sm font-semibold text-red-600 hover:underline flex items-center gap-1">
                  PDF İndir
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </a>
              )}

              <div className="flex-1"></div>

              <button
                onClick={() => exportBibTeX(pub)}
                className="px-3 py-1.5 text-xs font-semibold border border-gray-300 rounded hover:bg-gray-50 transition-colors text-gray-600 flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                BibTeX
              </button>
            </div>

          </div>
        ))
      ) : (
        <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 text-center">
          <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <h3 className="text-xl font-bold text-gray-700 mb-2">Yayın Bulunamadı</h3>
          <p className="text-gray-500">Arama kriterlerinize uygun bir sonuç bulamadık. Lütfen filtreleri temizleyip tekrar deneyin.</p>
          <button
            onClick={resetFilters}
            className="mt-4 px-6 py-2 bg-[#1c2b4a] text-white rounded-lg hover:bg-opacity-90 transition-colors font-medium"
          >
            Filtreleri Temizle
          </button>
        </div>
      )}
    </div>
  );
}