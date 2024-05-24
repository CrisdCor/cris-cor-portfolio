import { NavLink } from "react-router-dom";
import { useState } from "react";

import ButtonContact from "../ButtonContact";
import "./styles.css";

export default function NavBar() {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    setActive(index);
  };

  const navElements = [
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
        <li
          key={index}
          // className="navbar__link"
          onClick={() => handleToggle(index)}
        >
          <NavLink className="navbar__link" to={li.link}>
            <span
              className={
                active === index
                  ? "navbar__link--decoration span-active"
                  : "navbar__link--decoration"
              }
            ></span>
            <p
              className={
                active === index
                  ? "text-m navbar__link--text text-active"
                  : "text-m navbar__link--text"
              }
            >
              {li.name}
            </p>
          </NavLink>
        </li>
      ))}
      <ButtonContact />
    </ul>
  );
}
