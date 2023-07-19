import logo from "../../assets/logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";
import geFlagActive from "../../assets/flag-ge-active.svg";
import enFlagActive from "../../assets/flag-en-active.svg";
import { FaAngleLeft } from "react-icons/fa";
function Header({ shouldRender, geLang, Location, Goto }) {
  return (
    <div className="Header">
      <div className="logo-div">
        <Link className="Logo" to="/ka/home">
          <img id="logo-img" src={logo} alt="AlazaniWine Logo" />
        </Link>
        <Link to={Goto ? Goto : "/ka/home"} className="navigator">
          <FaAngleLeft id="ab-angleLeft" />
          <p id="ab-component-name">{Location}</p>
        </Link>
      </div>
      {shouldRender && (
        <div className="nav">
          <Link to="/ka/menu" className="Link">
            მენიუ
          </Link>
          {geLang ? (
            <div className="language">
              <Link className="ka-flag">
                <img src={geFlagActive} alt="Flag" className="flag" />
              </Link>
              <Link className="en-flag">
                <img src={enFlagActive} alt="Flag" className="flag" />
              </Link>
            </div>
          ) : (
            <div className="language">
              <Link className="ka-flag">
                <img src={enFlagActive} alt="Flag" className="flag" />
              </Link>
              <Link className="en-flag">
                <img src={geFlagActive} alt="Flag" className="flag" />
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
