import { NavLink } from "react-router-dom";

import Logo from "../../assets/logo/logo.svg";
import "./styles.css";

const LogoHeader = () => {
  return (
    <NavLink className="header-logo" to="/">
      <img className="header-logo__img" src={Logo} alt="Logo CRISCOR" />;
    </NavLink>
  );
};

export default LogoHeader;
