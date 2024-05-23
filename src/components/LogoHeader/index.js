import Logo from "../../assets/logo/logo.svg";
import "./styles.css";

const LogoHeader = () => {
  return (
    <a href="/" className="header-logo">
      <img className="header-logo__img" src={Logo} alt="Logo CRISCOR" />;
    </a>
  );
};

export default LogoHeader;
