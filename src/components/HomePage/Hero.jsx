export default function Hero() {
    return (
        <div className="">
            <div className="absolute inset-0 bg-black opacity-40"></div>

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                    Girişimsel MR Klinik AR-GE Enstitüsü
                </h1>
                <p className="text-lg lg:text-xl text-gray-200 mb-10 max-w-3xl leading-relaxed">
                    Yenilikçi MR görüntüleme teknikleri ve girişimsel radyoloji alanında öncü araştırmalar yaparak tıp dünyasına yön veriyoruz. Amacımız, klinik uygulamalara doğrudan etki edecek bilimsel keşifleri hayata geçirmektir.
                </p>


                <div className="flex flex-col sm:flex-row gap-4">
                    <a href="/arastirmalar" className=" bg-red-600 hover:bg-red-900 text-white font-semibold py-3 px-8 rounded-md transition duration-300">
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