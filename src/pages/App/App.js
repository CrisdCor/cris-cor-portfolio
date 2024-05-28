import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

import MyHeader from "../../containers/Header";
import ContactModal from "../../containers/ContactModal";
import AppRoutes from "../../containers/AppRoutes";

import "./App.css";

function App() {
  const [openContact, setOpenContact] = useState(false);
  const toggleContact = () => {
    setOpenContact(!openContact);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <MyHeader toggleContact={toggleContact} openContact={openContact} />
        {/* {openContact && <ContactModal />} */}
        <ContactModal toggleContact={toggleContact} openContact={openContact} />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
