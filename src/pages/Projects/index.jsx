import CardProject from "../../components/CardProject";
import { CustomFooter } from "../../components/CustomFooter";
import { ButtonFilters } from "../../components/ButtonFilter";

import { useProjects } from "../../hooks/useProjects";

import "./styles.css";

export default function Projects() {
  const { listProjects } = useProjects();

  return (
    <main className="page-container">
      <section className="projects-container">
        <h2 className="text-title">PROYECTOS</h2>

        <hr />

        <div className="projects__filter">
          <ButtonFilters />
        </div>

        <hr />

        <div className="projects-grid">
          {/* <CardProject listProjects={listProjects} /> */}
          <CardProject listProjects={listProjects} />
        </div>
      </section>
      <CustomFooter />
    </main>
  );
}
