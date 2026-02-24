import React from "react";
import { CONTACT_DATA } from "../data/contactData";
import ContactForm from "../components/ContactPage/ContactForm";
import ContactInfo from "../components/ContactPage/ContactInfo";
import Hero from "../components/ContactPage/Hero";
import ContactMap from "../components/ContactPage/ContactMap";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Sayfa Başlığı */}
                <Hero />

                {/* Ana İçerik Izgarası (Grid) */}
                <div className="flex flex-col gap-8 lg:gap-12">

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 h-full">

                        {/* Sağ Taraf: İletişim Bilgileri ve Harita */}
                        <div className="flex-1">
                            <ContactInfo data={CONTACT_DATA} />
                        </div>

                        {/* Sol Taraf: İletişim Formu */}
                        <div className="flex-1">
                            <ContactForm />
                        </div>

                    </div>

                    <div className="w-full">
                        <ContactMap />
                    </div>

                </div>

            </div>
        </div>
    );
}