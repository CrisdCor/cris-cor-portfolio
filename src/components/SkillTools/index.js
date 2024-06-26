import { useState, useEffect } from "react";

import IconHtml from "../../assets/icons/html.svg";
import IconCss from "../../assets/icons/css.svg";
import IconJavaScript from "../../assets/icons/javascript.svg";
import IconReact from "../../assets/icons/react.svg";
import IconGithub from "../../assets/icons/github.svg";
import IconFigma from "../../assets/icons/figma.svg";
import IconPowerBi from "../../assets/icons/power-bi.svg";
import IconExcel from "../../assets/icons/excel.svg";

import "./styles.css";

export default function SkillTools() {
  const [randomIndex, setRandomIndex] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const skillsList = [
    { name: "HTML", icon: IconHtml },
    { name: "CSS", icon: IconCss },
    { name: "JavaScript", icon: IconJavaScript },
    { name: "React", icon: IconReact },
    { name: "Github", icon: IconGithub },
    { name: "Figma", icon: IconFigma },
    { name: "Power BI", icon: IconPowerBi },
    { name: "Excel", icon: IconExcel },
  ];

  function getRandomIndex(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  useEffect(() => {
    const indices = skillsList.map((_, index) => index);
    const interval = setInterval(() => {
      setRandomIndex(getRandomIndex(indices));
    }, 2000);

    return () => clearInterval(interval);
  }, [skillsList]);

  return (
    <section className="skills-tools">
      <div className="tools__shadow tools__shadow--left"></div>

      {skillsList.map((el, index) => (
        <div
          key={el.index}
          className={`tools__element ${
            randomIndex === index ? "tools__element--animation" : ""
          }`}
        >
          <img className="tools__element-icon" src={el.icon} alt={el.name} />
          <p className="tools__element-text text-l text-center">{el.name}</p>
        </div>
      ))}
      <div className="tools__shadow tools__shadow--right"></div>
    </section>
  );
}
