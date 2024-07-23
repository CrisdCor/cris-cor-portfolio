import IconHtml from "../assets/icons/html.svg";
import IconCss from "../assets/icons/css.svg";
import IconJavaScript from "../assets/icons/javascript.svg";
import IconReact from "../assets/icons/react.svg";
import IconGithub from "../assets/icons/github.svg";
import IconFigma from "../assets/icons/figma.svg";
import IconPowerBi from "../assets/icons/power-bi.svg";
import IconExcel from "../assets/icons/excel.svg";

export const useStackList = () => {
  const stackList = [
    { name: "HTML", icon: IconHtml },
    { name: "CSS", icon: IconCss },
    { name: "JavaScript", icon: IconJavaScript },
    { name: "React", icon: IconReact },
    { name: "Github", icon: IconGithub },
    { name: "Figma", icon: IconFigma },
    { name: "Power BI", icon: IconPowerBi },
    { name: "Excel", icon: IconExcel },
  ];

  return {
    // Properties
    stackList,
    // Methods
  };
};
