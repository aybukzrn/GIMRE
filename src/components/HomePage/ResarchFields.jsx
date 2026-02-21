const researchAreas = [
    {
        title: "Girişimsel Nöroradyoloji",
        iconSrc: "/images/brain.svg",
        desc: "Anevrizma ve inme tedavilerinde minimal invaziv yaklaşımlar."
    },
    {
        title: "İleri MR Görüntüleme",
        iconSrc: "/images/magnet.svg",
        desc: "fMRI, DTI ve perfüzyon teknikleriyle yüksek çözünürlüklü analizler."
    },
    {
        title: "Yapay Zeka & Tıbbi Görüntüleme",
        iconSrc: "/images/ai.svg",
        desc: "Derin öğrenme ile otomatik segmentasyon ve tanı destek sistemleri."
    },
    {
        title: "Translasyonel Araştırmalar",
        iconSrc: "/images/microscope.svg",
        desc: "Preklinik çalışmalardan doğrudan klinik uygulamalara geçiş."
    }
];

export default function ResearchFields() {
    return (
        <div className="">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-semibold text-koyumavi mb-4">Öne Çıkan Araştırma Alanları</h2>
                <div className="w-24 h-[0.7px] bg-koyu mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {researchAreas.map((area, index) => (
                    <div key={index} className="bg-white p-8 rounded-lg shadow-sm border flex flex-col items-center border-gray-100 hover:shadow-lg transition duration-300 text-center">
                        <div className="mb-6 w-16 h-16 flex items-center justify-center">
                            <img
                                src={area.iconSrc}
                                alt={`${area.title} ikonu`}
                                className="w-15 h-15"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-[#1c2b4a] mb-3">{area.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{area.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )

}