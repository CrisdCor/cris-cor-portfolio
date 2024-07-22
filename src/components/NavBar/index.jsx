import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import "./styles.css";

export default function NavBar() {
  const [active, setActive] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const handleToggle = (path) => {
    setActive(path);
  };

  const navElements = [
    {
      name: "Inicio",
      path: "/",
    },
    {
      name: "Proyectos",
      path: "/projects",
    },
    {
      name: "Habilidades",
      path: "/skills",
    },
    {
      name: "Acerca de mi",
      path: "/aboutme",
    },
  ];

  return (
    <ul className="navbar">
      {navElements.map((li) => (
        <li key={li.path} onClick={() => handleToggle(li.path)}>
          <NavLink className="navbar-link" to={li.path}>
            <p
              className={
                active !== li.path
                  ? "text-m navbar-link__text"
                  : "text-m navbar-link__text text-active"
              }
            >
              {li.name}
            </p>
            <span
              className={
                active !== li.path
                  ? "navbar-link__decoration"
                  : "navbar-link__decoration decoration-active"
              }
            ></span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
