const stats = [
    { label: "Yayın Sayısı", value: "150+" },
    { label: "Proje Sayısı", value: "45" },
    { label: "Araştırmacı", value: "32" },
    { label: "İleri Teknoloji Cihaz", value: "12" }
];

export default function Statistics() {
    return(
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-mavi">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col">
                                <span className="text-4xl lg:text-5xl font-extrabold mb-2">{stat.value}</span>
                                <span className="text-gray-600 font-light">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
    )
}