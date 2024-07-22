import { useState } from "react";

export const useFilters = () => {
  // Listado tipo de Proyectos

  //   Manejador, estado de filtros

  const [filter, setFilter] = useState("");

  const handleButton = (name) => {
    setFilter(name);
    // console.log(name);
  };

  return {
    // Properties
    filter,

    // Methods
    handleButton,
  };
};
