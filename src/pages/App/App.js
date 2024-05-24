import { BrowserRouter } from "react-router-dom";
import MyHeader from "../../containers/Header";
import AppRoutes from "../../containers/AppRoutes";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyHeader />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
