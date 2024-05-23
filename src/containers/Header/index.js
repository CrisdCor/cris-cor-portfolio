import LogoHeader from "../../components/LogoHeader";
import NavBar from "../../components/NavBar";

import "./styles.css";

const MyHeader = () => {
  return (
    <header className="header">
      <LogoHeader />
      <NavBar />
    </header>
  );
};

export default MyHeader;
