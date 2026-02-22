export default function VisionAndMission() {
    return (
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-col gap-8">
            {/* Misyon */}
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-mavi text-white rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1c2b4a] mb-4">Misyonumuz</h3>
                <p className="text-gray-600 leading-relaxed">
                    Girişimsel MR Klinik AR-GE Enstitüsü (GİMRE); bilim, sağlık ve AR-GE çalışmalarını daimî olarak sürdürmeyi kendine misyon edinmiş bir ekibin kurduğu alanındaki ilk enstitüdür. <br /> <br />
                    
                    Türkiye’deki manyetik rezonans (MR) görüntüleme, inme veya girişimsel işlemler üzerine araştırma yapan akademisyen, mühendis, doktor ve diğer araştırmacıların AR-GE faaliyetlerini 
                    tek çatı altında yürütmelerine olanak sağlayan Girişimsel MR Klinik AR-GE Enstitüsü, ülkemizde bu alandaki yerli ve milli teknolojilerin geliştirilebilmesi ve klinik uygulamaların yapılabilmesi açısından kritik öneme sahiptir. <br /> <br />

                    Bünyesinde yürütülecek araştırmalarla hem üniversitemiz hem şehrimiz hem de ülkemizin gelişmesine katkı sağlamayı hedefleyen Girişimsel MR Klinik AR-GE Enstitüsü, alanında Türkiye’deki ilk enstitü olma sorumluluğu ile; ülkemizde ve dünyanın farklı ülkelerinde bu alanda araştırma yapan bilim insanlarına, hastalara ve alanda yetiştirilecek bilim insanı adaylarına hizmet vermeyi büyük bir sorumluluk bilinciyle görev edinmiştir. <br /> <br />

                    Enstitümüz, sahip olduğu tecrübe ve birikimini en son teknoloji ile birleştirip, sağlık hizmet sunucusu kimliği taşıyan bir sağlık tesisi olmayı hedeflemektedir.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-10">

            {/* Vizyon */}
            <div className="flex-1 bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-mavi text-white rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1c2b4a] mb-4">Vizyonumuz</h3>
                <p className="text-gray-600 leading-relaxed">
                    Nitelikli araştırmalar yapan, bilgi ve yeteneklerini insanlık ve ülke yararına kullanan, evrensel düzeyde fark yaratarak geleceğe yön veren yenilikçi bir enstitü olmaktır.
                </p>
            </div>

            {/* Değerler */}
            <div className="flex-1 bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-mavi text-white rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1c2b4a] mb-4">Değerlerimiz</h3>
                <ul className="text-gray-600 space-y-2 font-medium">
                    <li>✓ Bilimsel Etik ve Şeffaflık</li>
                    <li>✓ Multidisipliner İş Birliği</li>
                    <li>✓ İnovasyon ve Sürekli Gelişim</li>
                    <li>✓ Hasta Odaklılık</li>
                </ul>
            </div>
            </div>
        </div>
    )
}