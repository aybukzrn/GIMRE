const partners = [
    { name: "Sağlık Bakanlığı", logoSrc: "/images/bakanlık-logo.png" },
    { name: "TÜBİTAK", logoSrc: "/images/tubitak-logo.png" },
    { name: "Üniversite Hastanesi", logoSrc: "/images/tıp-logo.png" },
    { name: "Uluslararası MR Derneği", logoSrc: "/images/mr-logo.png" }
];

export default function Collobration() {
    return (
        <div className="">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center">
            <p className="text-md border-b py-2 font-semibold text-gray-500 uppercase tracking-widest mb-8">İş BİRLİĞİ Yapılan Kurumlar</p>
            <div className="flex flex-wrap justify-center items-center gap-12">
                {partners.map((partner, index) => (
                    <div
                        key={index} className="flex items-center gap-3 text-lg font-bold text-gray-800 opacity-90 grayscale hover:grayscale-0 hover:opacity-100 transition duration-500 cursor-pointer">
                        <img
                            src={partner.logoSrc}
                            alt={`${partner.name} Logosu`}
                            className="h-12 w-auto object-contain"
                        />
                        <span>{partner.name}</span>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}