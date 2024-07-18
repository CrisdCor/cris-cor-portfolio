import "./styles.css";

import React from "react";

export const GridContainer = () => {
  return (
    <section className="grid-decoration">
      <div className="grid-line__h position__h-1 back-gray__h"></div>
      <div className="grid-line__h position__h-2 back-cyan__h"></div>
      <div className="grid-line__h position__h-3 back-gray__h"></div>
      <div className="grid-line__h position__h-4 back-gray__h"></div>
      <div className="grid-line__v position__v-1 back-gray__v"></div>
    </section>
  );
};
