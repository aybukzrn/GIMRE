import React from "react";

export default function ProjectCard({ project, onSelectProject }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white shadow-md ${
          project.status === "Devam Ediyor" ? "bg-green-500" : "bg-gray-500"
        }`}>
          {project.status}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="text-sarı text-xs font-bold uppercase tracking-wider mb-2">
          {project.area}
        </div>
        <h3 className="text-xl font-bold text-[#1c2b4a] mb-3 line-clamp-2">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
          {project.summary}
        </p>
        
        <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
          <div className="text-xs text-gray-500 font-medium flex flex-col">
            <span>Yürütücü:</span>
            <span className="text-gray-800">{project.team[0].split('(')[0]}</span>
          </div>
          
          <button 
            onClick={() => onSelectProject(project)}
            className="text-[#1c2b4a] font-semibold text-sm hover:text-sarı transition-colors flex items-center gap-1"
          >
            Detaylar
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}