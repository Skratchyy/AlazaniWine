import logo from "../../../assets/logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="Header">
      <Link className="Logo" to="/home">
        <img id="logo-img" src={logo} alt="AlazaniWine Logo" />
      </Link>
    </div>
  );
}

export default Header;
