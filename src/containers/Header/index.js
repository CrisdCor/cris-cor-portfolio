import "./styles.css";

import LogoHeader from "../../components/LogoHeader";
import NavBar from "../../components/NavBar";
import ButtonContact from "../../components/ButtonContact";

const MyHeader = ({ toggleContact, openContact }) => {
  return (
    <header className="header">
      <LogoHeader />
      <div className="header__nav">
        <NavBar />
        <ButtonContact
          toggleContact={toggleContact}
          openContact={openContact}
        />
      </div>
    </header>
  );
};

export default MyHeader;
