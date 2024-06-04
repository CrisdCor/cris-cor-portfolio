import { useRoutes } from "react-router-dom";

import Home from "../../pages/Home";
import Projects from "../../pages/Projects";
import Skills from "../../pages/Skills";
import AboutMe from "../../pages/Aboutme";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/projects", element: <Projects /> },
    { path: "/skills", element: <Skills /> },
    { path: "/aboutme", element: <AboutMe /> },
  ]);
  return routes;
};

export default function Routes() {
  return <AppRoutes />;
}
