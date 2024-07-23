import { useState } from "react";

export const useFilters = () => {
  const typeProjects = [
    { name: "all", desc: "Todos los proyectos", active: true },
    { name: "academic", desc: "Proyectos Académicos", active: true },
    { name: "freelance", desc: "Proyectos Freelance", active: true },
    { name: "collaboration", desc: "Colaboraciones", active: true },
  ];

  const [filter, setFilter] = useState("all");

  const handleButton = (name) => {
    setFilter(name);
  };

  return {
    // Properties
    typeProjects,
    filter,
    // Methods
    handleButton,
  };
};
