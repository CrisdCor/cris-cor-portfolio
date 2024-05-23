import { useState } from "react";

import ButtonContact from "../ButtonContact";
import "./styles.css";

export default function NavBarLinks() {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    setActive(index);
  };

  const navElements = [
    {
      name: "Proyecto",
    },
    {
      name: "Habilidades",
    },
    {
      name: "Acerca de mi",
    },
  ];

  return (
    <>
      {navElements.map((li, index) => (
        <li
          key={index}
          className="navbar__link"
          onClick={() => handleToggle(index)}
        >
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
        </li>
      ))}
      <ButtonContact />
    </>
  );
}
