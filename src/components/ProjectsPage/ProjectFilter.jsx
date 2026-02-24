import React from "react";

export default function ProjectFilter({ 
  filterStatus, setFilterStatus, 
  filterArea, setFilterArea, 
  areas 
}) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
      <div className="flex bg-gray-100 p-1 rounded-lg">
        {["Tümü", "Devam Ediyor", "Tamamlandı"].map((status) => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${
              filterStatus === status 
                ? "bg-white text-[#1c2b4a] shadow-sm" 
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 w-full md:w-auto">
        <span className="text-sm font-medium text-gray-500 whitespace-nowrap">Araştırma Alanı:</span>
        <select
          value={filterArea}
          onChange={(e) => setFilterArea(e.target.value)}
          className="w-full md:w-64 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:outline-none"
        >
          {areas.map(area => (
            <option key={area} value={area}>{area}</option>
          ))}
        </select>
      </div>
    </div>
  );
}