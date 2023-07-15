import Header from "../../Components/Header/Header";
import { FaAngleLeft } from "react-icons/fa";
import "./WineMemory.css";
import { Link, useLocation } from "react-router-dom";
function WineMemory() {
  const location = useLocation();
  const currentLanguage = location.pathname[1] + location.pathname[2];
  const renderKa = currentLanguage ? true : false;
  const componentHeader = "ღვინის მეხსიერება";
  return (
    <div className="wm-about-us">
      <Header shouldRender={true} geLang={renderKa} />
      <Link to="/menu" className="wm-history">
        <FaAngleLeft id="wm-angleLeft" />
        <p id="wm-component-name">{componentHeader}</p>
      </Link>
      <div className="wm-alazani-text"></div>
      <div className="wm-empty"></div>
      <div className="wm-alazani-wrapper">
        <div className="wm-description">
          <div className="wm-main-text"></div>
        </div>
      </div>
    </div>
  );
}

export default WineMemory;
