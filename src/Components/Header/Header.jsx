import logo from "../../assets/logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";
import geFlagActive from "../../assets/flag-ge-active.svg";
import enFlagActive from "../../assets/flag-en-active.svg";
import { FaAngleLeft } from "react-icons/fa";
import { useLocation } from "react-router-dom";
function Header({ shouldRender, geLang, Location, Goto }) {
  const CurrentLocation = useLocation().pathname;
  const renderKa = CurrentLocation[1] + CurrentLocation[2] === "ka";

  return (
    <>
      {renderKa ? (
        <div className="Header">
          <div className="logo-div">
            <Link className="Logo" to="/ka/home">
              <img id="logo-img" src={logo} alt="AlazaniWine Logo" />
            </Link>
            {Location ? (
              <Link to={Goto ? Goto : "/ka/menu"} className="navigator">
                <FaAngleLeft id="ab-angleLeft" />
                <p id="ab-component-name">{Location}</p>
              </Link>
            ) : (
              ""
            )}
          </div>
          {shouldRender && (
            <div className="nav">
              <Link to="/ka/menu" className="Link">
                მენიუ
              </Link>

              <div className="language">
                <Link className="ka-flag">
                  <img src={geFlagActive} alt="Flag" className="flag" />
                </Link>
                <Link
                  className="en-flag"
                  to={"/en/" + CurrentLocation.split("/")[2]}
                >
                  <img src={enFlagActive} alt="Flag" className="flag" />
                </Link>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="Header">
          <div className="logo-div">
            <Link className="Logo" to="/en/home">
              <img id="logo-img" src={logo} alt="AlazaniWine Logo" />
            </Link>
            <Link to={Goto ? Goto : "/en/menu"} className="navigator">
              <FaAngleLeft id="ab-angleLeft" />
              <p id="ab-component-name">{Location}</p>
            </Link>
          </div>
          {shouldRender && (
            <div className="nav">
              <Link to="/en/menu" className="Link">
                Menu
              </Link>

              <div className="language">
                <Link className="ka-flag">
                  <img src={enFlagActive} alt="Flag" className="flag" />
                </Link>
                <Link
                  className="en-flag"
                  to={"/ka/" + CurrentLocation.split("/")[2]}
                >
                  <img src={geFlagActive} alt="Flag" className="flag" />
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Header;
