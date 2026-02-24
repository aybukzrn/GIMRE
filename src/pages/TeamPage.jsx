import React, { useState, useMemo } from "react";
import { TEAM_DATA } from "../data/teamData";
import TeamFilter from "../components/TeamPage/TeamFilter";
import TeamList from "../components/TeamPage/TeamList";
import TeamModal from "../components/TeamPage/TeamModal";
import Hero from "../components/TeamPage/Hero";

export default function TeamPage() {
  const [filterCategory, setFilterCategory] = useState("Tümü");
  const [filterExpertise, setFilterExpertise] = useState("Tümü");
  const [selectedMember, setSelectedMember] = useState(null);

  const categories = ["Tümü", "Enstitü Direktörü", "Öğretim Üyeleri", "Araştırmacılar", "Teknik Personel", "Alumni"];
  
  const allExpertises = TEAM_DATA.flatMap(member => member.expertise);
  const expertises = ["Tümü", ...new Set(allExpertises)].sort();

  const filteredTeam = useMemo(() => {
    let result = TEAM_DATA.filter(member => {
      const matchCategory = filterCategory === "Tümü" || member.category === filterCategory;
      const matchExpertise = filterExpertise === "Tümü" || member.expertise.includes(filterExpertise);
      return matchCategory && matchExpertise;
    });

    return result.sort((a, b) => a.rank - b.rank);
  }, [filterCategory, filterExpertise]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        

        <Hero />

        {/* FİLTRELEME */}
        <TeamFilter 
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
          filterExpertise={filterExpertise}
          setFilterExpertise={setFilterExpertise}
          categories={categories}
          expertises={expertises}
        />

        {/* EKİP LİSTESİ */}
        <TeamList 
          teamMembers={filteredTeam}
          onSelectMember={setSelectedMember}
        />

      </div>

      {/* ARAŞTIRMACI DETAY MODALI */}
      <TeamModal 
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />

    </div>
  );
}