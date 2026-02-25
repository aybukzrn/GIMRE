import React from "react";

export default function SearchBar({
    searchTerm, setSearchTerm,
    selectedType, setSelectedType,
    selectedYear, setSelectedYear,
    sortBy, setSortBy,
    availableYears
}) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-4 mb-8">
            {/* Arama Çubuğu */}
            <div className="flex-1 relative">
                <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                <input
                    type="text"
                    placeholder="Başlık, yazar veya anahtar kelime ara..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl  focus:border-transparent outline-none transition-all"
                />
            </div>

            {/* Filtreler */}
            <div className="flex flex-wrap md:flex-nowrap gap-4">
                <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none font-medium text-gray-700 cursor-pointer"
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
                    className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none font-medium text-gray-700 cursor-pointer"
                >
                    <option value="Tümü">Tüm Yıllar</option>
                    {availableYears.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>

                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none font-medium text-gray-700 cursor-pointer"
                >
                    <option value="yearDesc">En Yeni</option>
                    <option value="yearAsc">En Eski</option>
                    <option value="citationDesc">En Çok Atıf</option>
                    <option value="titleAsc">Alfabetik (A-Z)</option>
                </select>
            </div>
        </div>
    );
}