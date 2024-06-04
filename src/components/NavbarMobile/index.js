import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import "./styles.css";

import HomeIcon from "../../assets/icons/home-icon.svg";
import ProjectIcon from "../../assets/icons/project-icon.svg";
import SkillsIcon from "../../assets/icons/skills-icon.svg";
import AboutIcon from "../../assets/icons/about-icon.svg";

export default function NavbarMobile() {
  const [active, setActive] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const handleToggle = (path) => {
    setActive(path);
  };

  const mobileNavIcon = [
    { path: "/", text: "Inicio", img: HomeIcon },
    { path: "/projects", text: "Proyectos", img: ProjectIcon },
    { path: "/skills", text: "Habilidades", img: SkillsIcon },
    { path: "/aboutme", text: "Sobre mi", img: AboutIcon },
  ];

  return (
    <nav className="mobile-nav">
      <ul className="nav-container">
        {mobileNavIcon.map((navItem) => (
          <li
            key={navItem.path}
            className="nav-element"
            onClick={() => handleToggle(navItem.path)}
          >
            <NavLink className="nav-element__link" to={navItem.path}>
              <img src={navItem.img} alt={navItem.text} />
              <p
                className={
                  active === navItem.path
                    ? "text-center active-text"
                    : "text-center"
                }
              >
                {navItem.text}
              </p>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
