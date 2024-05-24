import { useRoutes } from "react-router-dom";

import Home from "../../pages/Home";
import Projects from "../../pages/Projects";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/projects", element: <Projects /> },
  ]);
  return routes;
};

export default function Routes() {
  return <AppRoutes />;
}
