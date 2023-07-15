import logo from "../../assets/logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";
import geFlagActive from "../../assets/flag-ge-active.svg";
import enFlagActive from "../../assets/flag-en-active.svg";
function Header({ shouldRender, geLang }) {
  return (
    <div className="Header">
      <Link className="Logo" to="/home">
        <img id="logo-img" src={logo} alt="AlazaniWine Logo" />
      </Link>
      {shouldRender && (
        <div className="nav">
          <Link to="/menu" className="Link">
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
