import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Gönderilen Veri:", formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold text-[#1c2b4a] mb-6">Bize Ulaşın</h2>
      <p className="text-gray-600 mb-8">
        Araştırmalarımız, projelerimiz veya enstitümüz hakkında detaylı bilgi almak için aşağıdaki formu doldurabilirsiniz.
      </p>

      {isSubmitted ? (
        <div className="bg-green-50 text-green-800 p-6 rounded-2xl flex flex-col items-center text-center border border-green-200 animate-fade-in-up">
          <svg className="w-16 h-16 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <h3 className="text-xl font-bold mb-2">Mesajınız Alındı!</h3>
          <p>En kısa sürede tarafınıza dönüş sağlanacaktır.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Adınız Soyadınız *</label>
              <input 
                type="text" name="name" required value={formData.name} onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1c2b4a] focus:border-transparent outline-none transition-all"
                placeholder="Örn: Oktay Algın"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">E-Posta Adresiniz *</label>
              <input 
                type="email" name="email" required value={formData.email} onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1c2b4a] focus:border-transparent outline-none transition-all"
                placeholder="Örn: mail@adres.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Konu *</label>
            <input 
              type="text" name="subject" required value={formData.subject} onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1c2b4a] focus:border-transparent outline-none transition-all"
              placeholder="Mesajınızın konusu"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Mesajınız *</label>
            <textarea 
              name="message" required rows="5" value={formData.message} onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1c2b4a] focus:border-transparent outline-none transition-all resize-none"
              placeholder="Lütfen mesajınızı buraya yazın..."
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-[#1c2b4a] hover:bg-opacity-90 text-white font-bold rounded-xl transition-all flex justify-center items-center gap-2"
          >
            Mesajı Gönder
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        </form>
      )}
    </div>
  );
}