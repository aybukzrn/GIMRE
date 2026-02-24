import React from "react";
import TeamCard from "./TeamCard";

export default function TeamList({ teamMembers, onSelectMember }) {
  if (teamMembers.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
        <p className="text-gray-500 text-lg">Seçilen kriterlere uygun araştırmacı bulunamadı.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {teamMembers.map((member) => (
        <TeamCard 
          key={member.id} 
          member={member} 
          onSelectMember={onSelectMember} 
        />
      ))}
    </div>
  );
}