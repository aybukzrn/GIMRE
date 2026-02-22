import React, { useState, useMemo } from "react";

const PUBLICATIONS_DATA = [
    {
        id: "pub-001",
        type: "SCI",
        title: "Advanced diffusion tensor imaging in neurodegenerative diseases",
        authors: "Algın O., Zeren A., Yılmaz M.",
        journal: "European Radiology",
        year: 2024,
        volume: "34(2)",
        pages: "123-134",
        doi: "10.1007/s00330-023-10000-x",
        pdf: "#",
        abstract: "Bu çalışma, nörodejeneratif hastalıklarda ileri difüzyon tensör görüntüleme (DTI) tekniklerinin erken teşhisteki rolünü araştırmaktadır...",
        keywords: ["MRI", "DTI", "Neurodegeneration", "Deep Learning"],
        citations: 45
    },
    {
        id: "pub-002",
        type: "Ulusal",
        title: "Akut İskemik İnmede Mekanik Trombektomi Sonuçlarımız",
        authors: "Algın O., Demir C.",
        journal: "Türk Nöroloji Dergisi",
        year: 2023,
        volume: "29(4)",
        pages: "210-218",
        doi: "10.4274/tnd.2023.0000",
        pdf: "#",
        abstract: "Kliniğimizde son 5 yılda uygulanan mekanik trombektomi vakalarının retrospektif analizi sunulmuştur...",
        keywords: ["İnme", "Trombektomi", "Nöroradyoloji"],
        citations: 12
    },
    {
        id: "pub-003",
        type: "Bildiri",
        title: "Automated Brain Tumor Segmentation using U-Net",
        authors: "Zeren A., Algın O.",
        journal: "International Conference on Medical Image Computing",
        year: 2024,
        volume: "12",
        pages: "45-50",
        doi: "10.1109/ICMIC.2024.0000",
        pdf: null,
        abstract: "Bu bildiride, MR görüntülerinden beyin tümörlerinin otomatik olarak bölütlenmesi için geliştirilen optimize edilmiş U-Net modeli tanıtılmaktadır.",
        keywords: ["AI", "Segmentation", "Brain Tumor", "U-Net"],
        citations: 8
    },
    {
        id: "pub-004",
        type: "Tez",
        title: "Yapay Zeka Destekli MR Görüntüleme Protokollerinin Optimizasyonu",
        authors: "Yılmaz M. (Danışman: Algın O.)",
        journal: "Ankara Üniversitesi Sağlık Bilimleri Enstitüsü",
        year: 2022,
        volume: null,
        pages: "1-120",
        doi: null,
        pdf: "#",
        abstract: "Doktora tezi çalışması. MR cihazlarında çekim süresini kısaltırken görüntü kalitesini artıran AI tabanlı rekonstrüksiyon algoritmaları geliştirilmiştir.",
        keywords: ["MRG", "Yapay Zeka", "Optimizasyon"],
        citations: 3
    }
];

export default function PublicationsPage() {
    
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedType, setSelectedType] = useState("Tümü");
    const [selectedYear, setSelectedYear] = useState("Tümü");
    const [sortBy, setSortBy] = useState("yearDesc"); 
    const [expandedAbstracts, setExpandedAbstracts] = useState({});

    const toggleAbstract = (id) => {
        setExpandedAbstracts(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const filteredPublications = useMemo(() => {
        let result = PUBLICATIONS_DATA;

        // Arama (Başlık, Yazar veya Anahtar Kelime)
        if (searchTerm) {
            const lowerSearch = searchTerm.toLowerCase();
            result = result.filter(pub =>
                pub.title.toLowerCase().includes(lowerSearch) ||
                pub.authors.toLowerCase().includes(lowerSearch) ||
                pub.keywords.some(k => k.toLowerCase().includes(lowerSearch))
            );
        }

        // Tür Filtresi
        if (selectedType !== "Tümü") {
            result = result.filter(pub => pub.type === selectedType);
        }

        // Yıl Filtresi
        if (selectedYear !== "Tümü") {
            result = result.filter(pub => pub.year.toString() === selectedYear);
        }

        // Sıralama
        result = [...result].sort((a, b) => {
            switch (sortBy) {
                case "yearDesc": return b.year - a.year;
                case "yearAsc": return a.year - b.year;
                case "citationDesc": return b.citations - a.citations;
                case "titleAsc": return a.title.localeCompare(b.title);
                default: return 0;
            }
        });

        return result;
    }, [searchTerm, selectedType, selectedYear, sortBy]);

    //İSTATİSTİK HESAPLAMALARI
    const statsByYear = useMemo(() => {
        const counts = {};
        PUBLICATIONS_DATA.forEach(pub => {
            counts[pub.year] = (counts[pub.year] || 0) + 1;
        });
        return Object.entries(counts).sort(([yearA], [yearB]) => yearA - yearB); 
    }, []);

    const maxPubCount = Math.max(...statsByYear.map(([_, count]) => count), 1);

    // BibTeX Export Fonksiyonu (Örnek) (bakmam lazım buna)
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
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-8">

                
                <div className="bg-[#1c2b4a] rounded-3xl p-8 text-white shadow-xl flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-3">Bilimsel Yayınlarımız</h1>
                        <p className="text-gray-300 max-w-2xl text-lg">
                            Enstitümüz araştırmacıları tarafından literatüre kazandırılan makaleler, tezler ve bildiriler.
                        </p>
                    </div>

                    {/* Mini Grafik  */}
                    <div className="bg-white/10 p-5 rounded-xl backdrop-blur-sm w-full md:w-auto">
                        <h3 className="text-sm font-semibold text-gray-300 mb-4 text-center uppercase tracking-wider">
                            Yıllara Göre Yayınlar
                        </h3>

                       
                        <div className="flex items-end justify-center gap-3 h-24 mt-2">

                            {statsByYear.map(([year, count]) => {
                                const heightPercent = Math.max((count / maxPubCount) * 100, 15);

                                return (
                                    <div key={year} className="flex flex-col justify-end items-center group relative h-full">

                                        {/* Tooltip */}
                                        <span className="absolute -top-10 bg-black/90 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                                            {count} Yayın
                                        </span>

                                        
                                        <div className="h-full flex items-end">
                                            <div
                                                className="w-8 sm:w-10 bg-yellow-500 rounded-t-md transition-all duration-500 group-hover:bg-yellow-400 cursor-pointer shadow-lg"
                                                style={{ height: `${heightPercent}%` }}
                                            ></div>
                                        </div>

                                      
                                        <span className="text-xs text-gray-300 mt-3 font-medium">{year}</span>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </div>

             
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-4">

                    {/* Arama Çubuğu */}
                    <div className="flex-1 relative">
                        <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        <input
                            type="text"
                            placeholder="Başlık, yazar veya anahtar kelime ara..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1c2b4a] focus:border-transparent outline-none transition-all"
                        />
                    </div>

                    {/* Filtreler */}
                    <div className="flex flex-wrap md:flex-nowrap gap-4">
                        <select
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                            className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#1c2b4a] font-medium text-gray-700 cursor-pointer"
                        >
                            <option value="Tümü">Tüm Türler</option>
                            <option value="SCI">SCI/SCI-E</option>
                            <option value="Ulusal">Ulusal Makale</option>
                            <option value="Bildiri">Bildiri</option>
                            <option value="Tez">Tez</option>
                        </select>

                        <select
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                            className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#1c2b4a] font-medium text-gray-700 cursor-pointer"
                        >
                            <option value="Tümü">Tüm Yıllar</option>
                            {[...new Set(PUBLICATIONS_DATA.map(p => p.year))].sort((a, b) => b - a).map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>

                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#1c2b4a] font-medium text-gray-700 cursor-pointer"
                        >
                            <option value="yearDesc">En Yeni</option>
                            <option value="yearAsc">En Eski</option>
                            <option value="citationDesc">En Çok Atıf</option>
                            <option value="titleAsc">Alfabetik (A-Z)</option>
                        </select>
                    </div>
                </div>

                {/* Sonuç Sayısı */}
                <div className="text-gray-500 font-medium px-2">
                    {filteredPublications.length} sonuç bulundu
                </div>

                {/* Yayınlar Listesi */}
                <div className="space-y-6">
                    {filteredPublications.length > 0 ? (
                        filteredPublications.map((pub) => (
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

                                {/* İçerik */}
                                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 group-hover:text-[#1c2b4a] transition-colors">
                                    {pub.title}
                                </h2>
                                <p className="text-gray-700 font-medium mb-1">{pub.authors}</p>
                                <p className="text-gray-500 text-sm italic mb-4">
                                    {pub.journal}, {pub.volume ? `Vol. ${pub.volume}, ` : ''}{pub.pages ? `pp. ${pub.pages}` : ''}
                                </p>

                                {/* Anahtar Kelimeler */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {pub.keywords.map((kw, i) => (
                                        <span key={i} className="text-xs font-medium text-gray-500 bg-gray-50 border border-gray-200 px-2 py-1 rounded">
                                            #{kw}
                                        </span>
                                    ))}
                                </div>

                                {/* Akordeon Özet (Abstract) */}
                                {expandedAbstracts[pub.id] && (
                                    <div className="mb-6 p-4 bg-gray-50 rounded-lg text-gray-700 text-sm leading-relaxed border-l-4 border-[#1c2b4a] animate-fade-in-down">
                                        <strong className="block mb-2 text-[#1c2b4a]">Özet / Abstract:</strong>
                                        {pub.abstract}
                                    </div>
                                )}

                                {/* Alt Kısım: Aksiyon Butonları */}
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

                                    {/* Export Butonları */}
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
                                onClick={() => { setSearchTerm(""); setSelectedType("Tümü"); setSelectedYear("Tümü"); }}
                                className="mt-4 px-6 py-2 bg-[#1c2b4a] text-white rounded-lg hover:bg-opacity-90 transition-colors font-medium"
                            >
                                Filtreleri Temizle
                            </button>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}