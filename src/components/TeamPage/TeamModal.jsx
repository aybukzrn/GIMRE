import React from "react";

export default function TeamModal({ member, onClose }) {
  if (!member) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      <div className="relative bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden shadow-2xl animate-fade-in-up">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white md:bg-gray-100 rounded-full hover:bg-gray-200 transition z-20 shadow-sm"
        >
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="md:w-1/3 bg-[#1c2b4a] text-white p-8 flex flex-col items-center text-center">
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-20 h-20 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-white/20 shadow-lg mb-6"
          />
          <h2 className="text-lg lg:text-2xl font-bold mb-1">{member.name}</h2>
          <p className="text-sarı font-semibold text-sm mb-2 lg:mb-6">{member.role}</p>
          
          <a href={`mailto:${member.email}`} className="text-gray-300 hover:text-white text-sm mb-6 flex items-center gap-2 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            {member.email}
          </a>

          <div className="flex gap-3 mt-auto">
            {member.socials.orcid && (
              <a href={member.socials.orcid} target="_blank" rel="noreferrer" className="bg-white/10 p-[5px] lg:p-2 rounded-full w-10 lg:rounded-lg hover:bg-white/20 transition-colors" title="ORCID">
                <span className="text-xs font-bold">iD</span>
              </a>
            )}
            {member.socials.scholar && (
              <a href={member.socials.scholar} target="_blank" rel="noreferrer" className="bg-white/10 p-[5px] lg:p-2 rounded-full w-10 lg:rounded-lg hover:bg-white/20 transition-colors" title="Google Scholar">
                <span className="text-xs font-bold">GS</span>
              </a>
            )}
            {member.socials.researchGate && (
              <a href={member.socials.researchGate} target="_blank" rel="noreferrer" className="bg-white/10 p-[5px] lg:p-2 rounded-full w-10 lg:rounded-lg hover:bg-white/20 transition-colors" title="ResearchGate">
                <span className="text-xs font-bold">RG</span>
              </a>
            )}
          </div>
        </div>

        <div className="md:w-2/3 p-8 overflow-y-auto hide-scrollbar">
          
          <div className="mb-8">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Uzmanlık Alanları</h3>
            <div className="flex flex-wrap gap-2">
              {member.expertise.map((exp, i) => (
                <span key={i} className="bg-blue-50 text-mavi border border-blue-100 text-xs px-3 py-1.5 rounded-full font-medium">
                  {exp}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-8 text-gray-700">
            <div>
              <h3 className="text-lg font-bold text-[#1c2b4a] mb-2 border-b pb-2">Hakkında</h3>
              <p className="text-sm leading-relaxed text-gray-600">{member.bio}</p>
            </div>

            {member.ongoing && (
              <div>
                <h3 className="text-lg font-bold text-[#1c2b4a] mb-2 border-b pb-2">Devam Eden Çalışmalar</h3>
                <p className="text-sm text-gray-600 italic bg-gray-50 p-3 rounded-lg border-l-4 border-sarı">
                  {member.ongoing}
                </p>
              </div>
            )}

            {member.projects.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-[#1c2b4a] mb-2 border-b pb-2">Dahil Olduğu Projeler</h3>
                <ul className="list-decimal pl-5 space-y-1 text-sm text-gray-600">
                  {member.projects.map((proj, i) => <li key={i}>{proj}</li>)}
                </ul>
              </div>
            )}

            {member.publications.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-[#1c2b4a] mb-2 border-b pb-2">Önemli Yayınları</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {member.publications.map((pub, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <svg className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                      {pub}
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}