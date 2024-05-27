import { NavLink } from "react-router-dom";
import { useState } from "react";

import ButtonContact from "../ButtonContact";
import "./styles.css";

export default function NavBar({ toggleContact, openContact }) {
  const [active, setActive] = useState(0);

  const handleToggle = (index) => {
    setActive(index);
  };

  const navElements = [
    {
      name: "Inicio",
      link: "/",
    },
    {
      name: "Proyectos",
      link: "/projects",
    },
    {
      name: "Habilidades",
      link: "/skills",
    },
    {
      name: "Acerca de mi",
      link: "/aboutme",
    },
  ];

  return (
    <ul className="navbar">
      {navElements.map((li, index) => (
        <li key={index} onClick={() => handleToggle(index)}>
          <NavLink className="navbar-link" to={li.link}>
            <p
              className={
                active === index
                  ? "text-m navbar-link__text text-active"
                  : "text-m navbar-link__text"
              }
            >
              {li.name}
            </p>
            <span
              className={
                active === index
                  ? "navbar-link__decoration decoration-active"
                  : "navbar-link__decoration"
              }
            ></span>
          </NavLink>
        </li>
      ))}
      <ButtonContact toggleContact={toggleContact} openContact={openContact} />
    </ul>
  );
}
