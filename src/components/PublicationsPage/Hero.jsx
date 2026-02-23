import { useMemo, useState } from 'react';
import { PUBLICATIONS_DATA } from '../../data/publicationsData';

export default function Hero() {

    //İSTATİSTİK HESAPLAMALARI
    const statsByYear = useMemo(() => {
        const counts = {};
        PUBLICATIONS_DATA.forEach(pub => {
            counts[pub.year] = (counts[pub.year] || 0) + 1;
        });
        return Object.entries(counts).sort(([yearA], [yearB]) => yearA - yearB);
    }, []);

    const maxPubCount = Math.max(...statsByYear.map(([_, count]) => count), 1);

    return (
        <div className="bg-[#1c2b4a] rounded-2xl p-8 text-white shadow-xl flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-3">Bilimsel Yayınlarımız</h1>
                <p className="text-gray-300 max-w-2xl text-lg">
                    Enstitümüz araştırmacıları tarafından literatüre kazandırılan makaleler, tezler ve bildiriler.
                </p>
            </div>

            {/* Mini Grafik  */}
            <div className="bg-white/10 p-5 rounded-xl backdrop-blur-sm w-full md:w-auto">
                <h3 className="text-sm font-semibold text-gray-300 mb-4 text-center uppercase tracking-wider">
                    Yıllara Göre Yayınlar
                </h3>
                
                <div className="flex items-end justify-center gap-3 h-24 mt-2">

                    {statsByYear.map(([year, count]) => {
                        const heightPercent = Math.max((count / maxPubCount) * 100, 15);

                        return (
                            <div key={year} className="flex flex-col justify-end items-center group relative h-full">

                                {/* Tooltip */}
                                <span className="absolute -top-10 bg-black/90 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                                    {count} Yayın
                                </span>


                                <div className="h-full flex items-end">
                                    <div
                                        className="w-8 sm:w-10 bg-sarı rounded-t-lg transition-all duration-500 group-hover:bg-amber-400 cursor-pointer shadow-lg border-none"
                                        style={{ height: `${heightPercent}%` }}
                                    ></div>
                                </div>


                                <span className="text-xs text-gray-300 mt-3 font-medium">{year}</span>
                            </div>
                        );
                    })}

                </div>
            </div>
        </div>
    )
}