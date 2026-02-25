

export default function Hero() {
    return (
        <div className="">
            <div className="absolute inset-0 bg-black opacity-40"></div>

            <img src="/images/gimre-ekip.jpg" alt="" className="opacity-25 absolute inset-0 w-full h-full object-cover"/>

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
                <div className="mb-6">
                <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-2 [text-shadow:_2px_2px_4px_rgb(0_0_0_/_40%)]">
                    Prof. Dr. Oktay ALGIN ve Ekibi
                </h1>
                <p className="text-gray-300 [text-shadow:_2px_2px_4px_rgb(0_0_0_/_40%)]">Girişimsel MR Klinik AR-GE Enstitüsü Müdürü | Nöroradyoloji ve İleri MR Görüntüleme Uzmanı</p>


                </div>
                <p className="text-lg lg:text-xl text-gray-200 mb-10 max-w-3xl leading-relaxed">
                    Ben ve araştırma ekibim yenilikçi MR görüntüleme teknikleri ve girişimsel radyoloji alanında öncü araştırmalar yaparak tıp dünyasına yön veriyoruz. Amacımız, klinik uygulamalara doğrudan etki edecek bilimsel keşifleri hayata geçirmektir.
                </p>


                <div className="flex flex-col sm:flex-row gap-4">
                    <a href="/arastirma/nororadyoloji" className=" bg-red-600 hover:bg-red-900 text-white font-semibold py-3 px-8 rounded-md transition duration-300">
                        Araştırmalarımız
                    </a>
                    <a href="/ekip" className="bg-green-600 hover:bg-green-900 text-white font-semibold py-3 px-8 rounded-md transition duration-300">
                        Ekip
                    </a>
                    <a href="/iletisim" className="border-2 border-white hover:bg-white hover:text-[#1c2b4a] text-white font-semibold py-3 px-8 rounded-md transition duration-300">
                        İletişime Geçin
                    </a>
                </div>
            </div>
        </div>
    )
}