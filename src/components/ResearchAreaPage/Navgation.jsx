import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { RESEARCH_FIELDS } from "../../data/researchData";

export default function Navigation() {

    const { slug } = useParams();
    const activeData = RESEARCH_FIELDS.find((field) => field.slug === slug);
  
    if (!activeData) {
      return <Navigate to="/arastirma/nororadyoloji" replace />;
    }

    return(
        <aside className="lg:col-span-1 lg:border-b-transparent border-b lg:border-r border-gray-200">
            <h3 className="text-xl text-center mb-5 font-semibold border-b-[0.5px] border-stone-400">Bilimsel Alanlar</h3>
            <nav className="flex flex-col space-y-5">
              {RESEARCH_FIELDS.map((field) => {
                const isActive = field.slug === slug;

                return (
                  <Link
                    key={field.slug}
                    to={`/arastirma/${field.slug}`}
                    className={`px-6 py-4 text-base transition-all duration-200 border-l-4
                      ${isActive
                        ? "border-sarı bg-gray-50 text-black font-medium"
                        : "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                  >
                    {field.title}
                  </Link>
                );
              })}
            </nav>
          </aside>
    )
}