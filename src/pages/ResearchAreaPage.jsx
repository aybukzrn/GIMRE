import Hero from "../components/ResearchAreaPage/Hero";
import Navigation from "../components/ResearchAreaPage/Navgation";
import Content from "../components/ResearchAreaPage/Content";

export default function ResearchAreaPage() {

  return (
    <section className="bg-white">
      <div className="">
        <Hero />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-10 px-4">
          <Navigation />
          <main className="lg:col-span-2">
            <Content />
          </main>
        </div>
      </div>
    </section>
  );
}