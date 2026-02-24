import React from "react";

export default function TeamCard({ member, onSelectMember }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col items-center text-center p-6">
      
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-gray-50 shadow-md group-hover:border-grimsi transition-colors">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <h3 className="text-xl font-bold text-[#1c2b4a] mb-1">{member.name}</h3>
      <p className="text-gray-500 text-sm font-normal mb-3">{member.role}</p>

      <div className="flex flex-wrap justify-center gap-2 mb-5">
        {member.expertise.slice(0, 2).map((exp, idx) => (
          <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md">
            {exp}
          </span>
        ))}
      </div>

      <div className="mt-auto w-full pt-4 border-t border-gray-100">
        <button 
          onClick={() => onSelectMember(member)}
          className="w-full py-2 bg-gray-50 hover:bg-mavi text-[#1c2b4a] hover:text-white rounded-lg font-semibold transition-colors text-sm"
        >
          Profili İncele
        </button>
      </div>
    </div>
  );
}