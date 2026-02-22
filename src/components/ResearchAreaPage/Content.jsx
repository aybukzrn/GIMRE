import React from "react";
import { useParams} from "react-router-dom";
import { RESEARCH_FIELDS } from "../../data/researchData";

export default function Content() {

    const { slug } = useParams();
    const activeData = RESEARCH_FIELDS.find((field) => field.slug === slug);

    return(
        <article className="space-y-12">

              <div>
                <h2 className="text-3xl font-semibold text-[#0f1e3a] mb-6">
                  {activeData.title}
                </h2>
              </div>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  1. Tanım ve Kapsam
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {activeData.description}
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  2. Alt Başlıklar
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {activeData.subtopics}
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  3. Yöntemsel Yaklaşım
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {activeData.methods}
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  4. Projeler
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {activeData.projects}
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  5. Yayınlar
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {activeData.publications}
                </p>
              </section>

            </article>
    )
}