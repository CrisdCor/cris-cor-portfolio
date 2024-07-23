import CardProject from "../../components/CardProject";
import { ButtonFilters } from "../../components/ButtonFilter";

import { useProjects } from "../../hooks/useProjects";
import { useFilters } from "../../hooks/useFilters";

import "./styles.css";

export default function Projects() {
  const { typeProjects, handleButton, filter } = useFilters();
  const { listProjects } = useProjects();

  const filterProjects = listProjects.filter(
    (project) => project.type === filter
  );

  return (
    <main className="page-container">
      <section className="projects-container">
        <h2 className="text-title">PROYECTOS</h2>

        <hr />

        <div className="projects__filter">
          {typeProjects.map(
            (el) =>
              el.active && (
                <ButtonFilters
                  key={el.name}
                  onClick={() => handleButton(el.name)}
                  className={`filter-toggle text-regular text-m ${
                    filter === el.name ? "filter-toggle--active" : ""
                  }`}
                  label={el.desc}
                />
              )
          )}
        </div>

        <hr />

        <div className="projects-grid">
          <CardProject
            listProjects={filter === "all" ? listProjects : filterProjects}
          />
        </div>
      </section>
    </main>
  );
}
