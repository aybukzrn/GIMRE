export default function Profile() {
    return (
        <div className=" mx-auto bg-white rounded-2xl overflow-hidden shadow-xl mt-10 flex flex-col lg:flex-row border-l-4 border-r-4 border-mavi
        max-w-7xl">

            <div className="lg:w-1/3 lg:bg-slate-50 text-koyu p-8 flex flex-col items-center text-center">
                <img
                    src="/images/oktayalgin.jpg"
                    alt="Prof. Dr. Oktay Algın"
                    className="w-48 h-48 rounded-full object-cover border-4 border-white/20 mb-6 shadow-xl"
                />
                <h3 className="text-2xl font-bold">Prof. Dr. Oktay Algın</h3>
                <p className="text-sarı font-medium mb-6">GİMRE Müdürü</p>

                <div className="w-full space-y-3 text-sm text-gray-700">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                        <span>Uzmanlık:</span>
                        <span className="text-koyu font-medium text-right">Radyoloji Anabilim Dalı</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                        <span>SCI/SCI-E Yayın:</span>
                        <span className="text-koyu font-medium">100+</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                        <span>H-Index:</span>
                        <span className="text-koyu font-medium">25+</span>
                    </div>
                    <div className="flex justify-between pb-2">
                        <span>Atıf Sayısı:</span>
                        <span className="text-koyu font-medium">2000+</span>
                    </div>
                </div>
            </div>

            <div className="lg:w-0 w-full h-[0.5px] bg-slate-300"></div>

            <div className="lg:w-2/3 p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-[#1c2b4a] mb-6">Direktörün Mesajı</h2>
                <div className="prose max-w-none text-gray-600 mb-8 space-y-4">
                    <p>
                        "Değerli meslektaşlarım, araştırmacılar ve öğrenciler; bilimin sınırlarını zorlamak ve
                        insan sağlığına doğrudan dokunan teknolojiler üretmek en büyük motivasyonumuzdur.
                        Geliştirdiğimiz MR sekansları ve yapay zeka modelleri ile hastalıkların anatomisini
                        değil fonksiyonunu da anlıyoruz."
                    </p>
                    <p>
                        "Kapılarımız, merak eden, sorgulayan ve yenilikçi fikirleri olan tüm araştırmacılara sonuna
                        kadar açıktır. Birlikte, nöroradyolojinin geleceğini şekillendiriyoruz."
                    </p>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-4">Akademik Geçmiş & Üyelikler</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2 text-sm">
                    <li>Eskişehir Osmangazi Üniversitesi Tıp Fakültesi (Lisans 1995-2001)</li>
                    <li>Bursa Uludağ Üniversitesi Tıp Fakültesi (Uzmanlık 2003-2008)</li>
                    <li>Eskişehir Osmangazi Üniversitesi Tıp Fakültesi (Uzmanlık 2016-2020)</li>
                    {/* <li>Türk Radyoloji Derneği Üyesi</li> */}
                </ul>
            </div>
        </div>
    )
}