import { BrowserRouter } from "react-router-dom";
import MyHeader from "../../containers/Header";
import ContactModal from "../../containers/ContactModal";
import AppRoutes from "../../containers/AppRoutes";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyHeader />
        <ContactModal />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
