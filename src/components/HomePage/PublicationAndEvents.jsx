const publications = [
    { title: "Advanced MRI Techniques in Neuroimaging: A Comprehensive Review", authors: "Algın O., et al.", journal: "Radiology", year: "2026" },
    { title: "AI-Driven Segmentation of Brain Tumors using Deep Learning", authors: "Yılmaz A., Algın O.", journal: "Medical Image Analysis", year: "2025" },
    { title: "Functional MRI Applications in Pre-Surgical Planning", authors: "Kaya B., et al.", journal: "NeuroImage", year: "2025" }
];

const events = [
    { title: "Uygulamalı fMRI Eğitimi (Workshop)", date: "24 MART 2026", time: "10:00 - 16:00", location: "Enstitü Ana Laboratuvarı" },
    { title: "Yapay Zeka ve Tıp Semineri", date: "12 NİSAN 2026", time: "14:00 - 15:30", location: "Online (Zoom)" }
];


export default function PublicationAndEvents() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Son yayınlar */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Son Yayınlar</h2>
                        <div className="w-24 h-[0.7px] bg-koyu mb-8"></div>
                        <div className="space-y-6">
                            {publications.map((pub, index) => (
                                <div key={index} className="flex flex-col pb-6 border-b border-gray-200 rounded-lg last:border-0 hover:bg-white p-3 transition duration-300 hover:shadow-lg">
                                    <h3 className="text-lg font-semibold text-[#1c2b4a] hover:text- cursor-pointer transition">{pub.title}</h3>
                                    <div className="text-sm text-gray-600 mt-2">
                                        <span className="font-medium text-gray-800">{pub.authors}</span> — <span className="italic">{pub.journal}</span> ({pub.year})
                                    </div>
                                </div>
                            ))}
                        </div>
                        <a href="/yayinlar" className="inline-block mt-6 text-red-600 font-semibold hover:underline">Tüm Yayınlar &rarr;</a>
                    </div>

                    {/* yaklaşan etkinlikler */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Yaklaşan Etkinlikler</h2>
                        <div className="w-24 h-[0.7px] bg-koyu mb-8"></div>
                        <div className="space-y-6">
                            {events.map((event, index) => (
                                <div key={index} className="flex gap-6 bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                                    {/* tarih kutusu */}
                                    <div className="flex flex-col items-center justify-center bg-blue-50 text-mavi min-w-[80px] h-[80px] rounded-md border border-blue-100">
                                        <span className="text-2xl font-bold leading-none">{event.date.split(" ")[0]}</span>
                                        <span className="text-xs uppercase font-semibold mt-1">{event.date.split(" ")[1]}</span>
                                    </div>
                                    {/* etkinlik detayı */}
                                    <div className="flex flex-col justify-center">
                                        <h3 className="text-lg font-bold text-gray-900">{event.title}</h3>
                                        <div className="text-sm text-gray-500 mt-3 flex items-center sm:flex-row divide-x divide-gray-400">

                                            <span className="flex items-center gap-2 pr-2">
                                                <img src="/images/clock.svg" alt="Saat" className="w-5 h-5 object-contain" />
                                                {event.time}
                                            </span>

                                            <span className="flex items-center gap-2 pl-2">
                                                <img src="/images/location.svg" alt="Saat" className="w-4 h-4 object-contain" />
                                                {event.location}
                                            </span>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
    )
}