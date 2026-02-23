import React from "react";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="relative bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in-up">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition z-10"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative h-48 sm:h-64">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c2b4a] to-transparent opacity-90"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-2 py-0.5 rounded text-xs font-bold ${project.status === "Devam Ediyor" ? "bg-green-500" : "bg-gray-500"}`}>
                {project.status}
              </span>
              <span className="text-sarı text-sm font-semibold tracking-wide">
                {project.funding}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
              {project.title}
            </h2>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6 text-gray-700">
          <div>
            <h3 className="text-lg font-bold text-[#1c2b4a] mb-2">Proje Özeti</h3>
            <p className="leading-relaxed">{project.summary}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-xl border border-gray-100">
            <div>
              <h4 className="font-bold text-[#1c2b4a] text-sm uppercase mb-1">Proje Süresi</h4>
              <p>{project.duration}</p>
            </div>
            <div>
              <h4 className="font-bold text-[#1c2b4a] text-sm uppercase mb-1">Bütçe</h4>
              <p>{project.budget}</p>
            </div>
            <div>
              <h4 className="font-bold text-[#1c2b4a] text-sm uppercase mb-1">Araştırma Alanı</h4>
              <p>{project.area}</p>
            </div>
            <div>
              <h4 className="font-bold text-[#1c2b4a] text-sm uppercase mb-1">Proje Yılı</h4>
              <p>{project.year}</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#1c2b4a] mb-3">Proje Ekibi</h3>
            <div className="flex flex-wrap gap-3">
              {project.team.map((member, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-[#1c2b4a] rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {member.charAt(0)}
                  </div>
                  <span className="font-medium text-sm">{member}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#1c2b4a] mb-2">Sonuçlar ve Çıktılar</h3>
            <p className="leading-relaxed bg-green-50 text-green-800 p-4 rounded-lg border border-green-100">
              {project.outcomes}
            </p>
          </div>

          {project.publications.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-[#1c2b4a] mb-2">İlgili Yayınlar</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                {project.publications.map((pub, i) => (
                  <li key={i}>{pub}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}