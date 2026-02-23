import Hero from "../components/PublicationsPage/Hero";
import React, { useState, useMemo } from 'react';
import { PUBLICATIONS_DATA } from '../data/publicationsData';
import SearchBar from '../components/PublicationsPage/SearchBar';
import PublicationsList from '../components/PublicationsPage/PublicationsList';

export default function PublicationsPage() {

    // 1. STATE'LER (Artık burada!)
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedType, setSelectedType] = useState("Tümü");
    const [selectedYear, setSelectedYear] = useState("Tümü");
    const [sortBy, setSortBy] = useState("yearDesc");

    // 2. YARDIMCI VERİLER
    const availableYears = [...new Set(PUBLICATIONS_DATA.map(p => p.year))].sort((a, b) => b - a);

    const resetFilters = () => {
        setSearchTerm("");
        setSelectedType("Tümü");
        setSelectedYear("Tümü");
        setSortBy("yearDesc");
    };

    // 3. FİLTRELEME MANTIĞI (Burada hesaplanıp aşağıya gönderilecek)
    const filteredPublications = useMemo(() => {
        let result = PUBLICATIONS_DATA;

        if (searchTerm) {
            const lowerSearch = searchTerm.toLowerCase();
            result = result.filter(pub =>
                pub.title.toLowerCase().includes(lowerSearch) ||
                pub.authors.toLowerCase().includes(lowerSearch) ||
                pub.keywords.some(k => k.toLowerCase().includes(lowerSearch))
            );
        }

        if (selectedType !== "Tümü") {
            result = result.filter(pub => pub.type === selectedType);
        }

        if (selectedYear !== "Tümü") {
            result = result.filter(pub => pub.year.toString() === selectedYear);
        }

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

                <Hero />

                {/* Arama Çubuğuna state'leri ve değiştirme fonksiyonlarını yolluyoruz */}
                <SearchBar 
                    searchTerm={searchTerm} setSearchTerm={setSearchTerm}
                    selectedType={selectedType} setSelectedType={setSelectedType}
                    selectedYear={selectedYear} setSelectedYear={setSelectedYear}
                    sortBy={sortBy} setSortBy={setSortBy}
                    availableYears={availableYears}
                />

                {/* Sonuç Sayısı */}
                <div className="text-gray-500 font-medium px-2 mb-4">
                    {filteredPublications.length} sonuç bulundu
                </div>

                {/* Listeye sadece filtrelenmiş veriyi yolluyoruz */}
                <PublicationsList 
                    publications={filteredPublications} 
                    resetFilters={resetFilters} 
                />

            </div>
        </div>
    );
}

