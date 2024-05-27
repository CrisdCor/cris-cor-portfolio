import LogoHeader from "../../components/LogoHeader";
import NavBar from "../../components/NavBar";

import "./styles.css";

const MyHeader = ({ toggleContact, openContact }) => {
  return (
    <header className="header">
      <LogoHeader />
      <NavBar toggleContact={toggleContact} openContact={openContact} />
    </header>
  );
};

export default MyHeader;
