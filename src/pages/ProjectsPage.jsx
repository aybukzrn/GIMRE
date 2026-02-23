import React, { useState, useMemo } from "react";
import { PROJECTS_DATA } from "../data/projectsData";
import ProjectFilter from "../components/ProjectsPage/ProjectFilter";
import ProjectList from "../components/ProjectsPage/ProjectList";
import ProjectModal from "../components/ProjectsPage/ProjectModal";
import Hero from "../components/ProjectsPage/Hero";

export default function ProjectsPage() {
  const [filterStatus, setFilterStatus] = useState("Tümü"); 
  const [filterArea, setFilterArea] = useState("Tümü");
  const [selectedProject, setSelectedProject] = useState(null);

  const areas = ["Tümü", ...new Set(PROJECTS_DATA.map(p => p.area))];

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter(project => {
      const matchStatus = filterStatus === "Tümü" || project.status === filterStatus;
      const matchArea = filterArea === "Tümü" || project.area === filterArea;
      return matchStatus && matchArea;
    });
  }, [filterStatus, filterArea]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        <Hero />

        <ProjectFilter 
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          filterArea={filterArea}
          setFilterArea={setFilterArea}
          areas={areas}
        />

        <ProjectList 
          projects={filteredProjects}
          onSelectProject={setSelectedProject}
        />

      </div>

      <ProjectModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      
    </div>
  );
}