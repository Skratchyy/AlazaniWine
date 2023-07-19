import Header from "../../Components/Header/Header";
import "./WineMemory.css";
import { useLocation } from "react-router-dom";
function WineMemory() {
  const location = useLocation();
  const currentLanguage = location.pathname[1] + location.pathname[2];
  const renderKa = currentLanguage ? true : false;
  const componentHeader = "ღვინის მეხსიერება";
  return (
    <div className="wm-about-us">
      <Header
        shouldRender={true}
        geLang={renderKa}
        Location={componentHeader}
      />

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
