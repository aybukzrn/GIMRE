import React from "react";

export default function TeamFilter({ filterCategory, setFilterCategory, filterExpertise, setFilterExpertise, categories, expertises }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row mb-8 items-center justify-between gap-4">
      
      <div className="flex gap-1 rounded-lg overflow-x-auto w-full md:w-auto hide-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            className={`px-4 py-2 rounded-md text-sm font-semibold whitespace-nowrap transition-all ${
              filterCategory === cat 
                ? "bg-white text-[#1c2b4a] underline underline-offset-4 shadow-sm" 
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 w-full md:w-auto shrink-0">
        <span className="text-sm font-medium text-gray-500">Uzmanlık:</span>
        <select
          value={filterExpertise}
          onChange={(e) => setFilterExpertise(e.target.value)}
          className="w-full md:w-56 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:outline-none text-sm"
        >
          {expertises.map(exp => (
            <option key={exp} value={exp}>{exp}</option>
          ))}
        </select>
      </div>

    </div>
  );
}