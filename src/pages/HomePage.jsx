import React from 'react';
import Collobration from '../components/HomePage/Collobration';
import PublicationAndEvents from '../components/HomePage/PublicationAndEvents';
import News from '../components/HomePage/News';
import ResearchFields from '../components/HomePage/ResarchFields';
import Hero from '../components/HomePage/Hero';
import Statistics from '../components/HomePage/Statistics';


const HomePage = () => {
    return (
        <main className="w-full bg-slate-50 font-sans">

            {/* 1. Bölüm */}
            <section className="relative bg-mavi text-white py-24 px-6 lg:px-20 overflow-hidden">
                <Hero />
            </section>

            {/* 2. bölüm */}
            <section className="bg-grimsi py-12">
                <Statistics />
            </section>

            {/* 3. bölüm */}
            <section className="py-20 px-6 lg:px-20 max-w-7xl mx-auto">
                <ResearchFields />
            </section>

            {/* 4. bölüm */}
            <section className="bg-gray-100 py-20 px-6 lg:px-20">
                <News />
            </section>

            {/* 5. bölüm */}
            <section className="py-20 px-6 lg:px-20 max-w-7xl mx-auto">
                <PublicationAndEvents />
            </section>

            {/* 6. bölüm */}
            <section className="bg-white py-14 border-t border-gray-200">
                <Collobration />
            </section>

        </main >
    );
};

export default HomePage;