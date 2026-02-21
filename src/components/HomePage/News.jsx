const news = [
    { title: "Yeni TÜBİTAK Projemiz Onaylandı", date: "15 Şubat 2026", summary: "Yapay zeka destekli tümör segmentasyonu projemiz destek almaya hak kazandı." },
    { title: "Prof. Dr. Oktay Algın'dan Yeni Yayın", date: "10 Şubat 2026", summary: "İleri MR teknikleri üzerine yapılan son çalışmamız Radiology dergisinde yayımlandı." },
    { title: "Girişimsel Radyoloji Sempozyumu", date: "5 Şubat 2026", summary: "Enstitümüzün ev sahipliğinde gerçekleşen sempozyuma yoğun katılım sağlandı." }
];

export default function News() {
    return(
        <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Son Duyurular</h2>
                            <div className="w-24 h-[0.7px] bg-koyu"></div>
                        </div>
                        <a href="/duyurular" className="hidden md:block text-red-600 font-semibold hover:underline">Tümünü Gör &rarr;</a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {news.map((item, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition duration-300 flex flex-col">
                                <div className="p-6 flex-grow">
                                    <span className="text-xs font-semibold text-green-600 mb-2 block">{item.date}</span>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{item.summary}</p>
                                </div>
                                <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 mt-auto hover:bg-mavi transition duration-300 text-acikgri hover:text-white">
                                    <a href={`/duyurular/${index}`} className=" font-medium text-sm">Devamını Oku</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
    )
}