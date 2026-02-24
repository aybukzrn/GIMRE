import React from "react";
import video from "../../public/video/GIMRE-1.1.mp4";

import Hero from "../components/AboutUsPage/Hero";
import FoundingStory from "../components/AboutUsPage/FoundingStory";
import VisionAndMission from "../components/AboutUsPage/VisionAndMission";
import Timeline from "../components/AboutUsPage/Timeline";
import Profile from "../components/AboutUsPage/Profile";


export default function AboutUsPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">

            <section className="max-w-7xl mx-auto">
                <Hero />
            </section>

            <section className="py-10 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-2xl shadow-lg transition-shadow mb-10 mt-10">
                <FoundingStory />

                <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg relative">
                    <video
                        src={video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        poster="/images/logo.jpg"
                    >
                        Tarayıcınız video etiketini desteklemiyor.
                    </video>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
                </div>
            </section>

            <div className="w-full h-[0.5px] bg-gray-300 mb-10"></div>

            <section>
                <VisionAndMission />
            </section>

            <div className="w-full h-[0.5px] bg-gray-300 mt-10"></div>

            <section className="py-16 px-6 max-w-4xl mx-auto">
                <Timeline />
            </section>

            <div className="w-full h-[0.5px] bg-gray-300 mb-10"></div>

            <section className="">
                <Profile />
            </section>

            {/* eklersek olur eklemezsek olmaz */}
            <section className="py-12 px-6 max-w-7xl mx-auto text-center border-t border-gray-200">
                <h3 className="text-gray-500 font-medium uppercase tracking-wider text-sm mb-6">
                    Sertifikalar ve Akreditasyonlar
                </h3>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
                    <div className="text-xl font-bold">ISO 9001</div>
                    <div className="text-xl font-bold">TÜRKAK</div>
                    <div className="text-xl font-bold">JCI Accredited</div>
                </div>
            </section>

        </div>
    );
}