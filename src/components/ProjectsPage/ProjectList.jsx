import React from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectList({ projects, onSelectProject }) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
        <p className="text-gray-500 text-lg">Seçilen kriterlere uygun proje bulunamadı.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          onSelectProject={onSelectProject} 
        />
      ))}
    </div>
  );
}