import { useFilters } from "../../hooks/useFilters";

import "./styles.css";

export const ButtonFilters = () => {
  const { filter, handleButton } = useFilters();

  const typeProjects = [
    { name: "academic", desc: "Proyectos Académicos", active: true },
    { name: "freelance", desc: "Proyectos Freelance", active: true },
    { name: "collaboration", desc: "Colaboraciones", active: true },
    { name: "all", desc: "Todos los proyectos", active: true },
  ];

  return (
    <>
      {typeProjects.map(
        (el) =>
          el.active && (
            <button
              key={el.name}
              onClick={() => handleButton(el.name)}
              className={`filter-toggle text-regular text-m ${
                filter === el.name ? "filter-toggle--active" : ""
              }`}
            >
              {el.desc}
            </button>
          )
      )}
    </>
  );
};
