import React from "react";

// Zaman çizelgesi verilerini burada tutuyoruz. Yeni tarih eklemek çok kolay!
const TIMELINE_DATA = [
    {
        year: "2018",
        title: "Temellerin Atılması",
        description: "Girişimsel nöroradyoloji ve ileri MR görüntüleme alanlarında ilk multidisipliner araştırma grubumun oluşturulması ve çekirdek çalışmaların başlaması."
    },
    {
        year: "2021",
        title: "İleri MR Altyapısının Kurulması",
        description: "Nörolojik araştırmalara özel, yüksek çözünürlüklü ve ileri teknoloji MR cihazlarının GİMRE ile birlikte üniversite altyapısına kazandırılması."
    },
    {
        year: "2023",
        title: "GİMRE'nin Resmi Kuruluşu",
        description: "Girişimsel Nöroradyoloji, İleri MR ve Yapay Zeka Uygulamaları ve Araştırma Merkezi'nin (GİMRE) resmi olarak faaliyetlerine başlaması."
    },
    {
        year: "2024",
        title: "Yapay Zeka Laboratuvarı & Projeler",
        description: "TÜBİTAK ve ulusal/uluslararası destekli projeler kapsamında, hastalıkların teşhisinde yapay zeka ve derin öğrenme algoritmalarının entegrasyonu."
    }
];

export default function Timeline() {
    return (
        <div className="py-12">
            <h2 className="text-3xl font-bold text-center text-[#1c2b4a] mb-12">
                Kilometre Taşlarımız
            </h2>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent max-w-5xl mx-auto px-4">

                {TIMELINE_DATA.map((item, index) => (
                    <div 
                        key={index} 
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                    >
                        {/* Ortadaki Yuvarlak Nokta */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#1c2b4a] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10 transition-transform duration-300 group-hover:scale-110"></div>
                        
                        {/* İçerik Kartı */}
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                            <div className="font-bold text-sarı mb-1 text-xl">{item.year}</div>
                            <h4 className="text-lg font-bold text-gray-800">{item.title}</h4>
                            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}