import Logo from "../../assets/logo/logo.svg";
import "./styles.css";

const LogoHeader = () => {
  return (
    <a href="/">
      <img className="header__logo" src={Logo} alt="Logo CRISCOR" />;
    </a>
  );
};

export default LogoHeader;
