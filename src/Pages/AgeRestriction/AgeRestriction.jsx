import logo from "../../assets/logo.svg";
import logo_txt from "../../assets/bg-text-colorless.png";
import geFlagActive from "../../assets/flag-ge-active.svg";
import geFlag from "../../assets/flag-ge-bw.svg";
import enFlagActive from "../../assets/flag-en-active.svg";
import enFlag from "../../assets/flag-en-bw.svg";
import { Link, useLocation } from "react-router-dom";
import "./AgeRestriction.css";
function AgeRestriction() {
  const location = useLocation();
  const baseUrl = window.location.origin;
  const kaLangCheck = location.pathname == "/";
  console.log(kaLangCheck);
  const currentLocation = `${baseUrl}${location.pathname}`;
  const handleYes = () => {
    window.location.href = `${currentLocation}/home`;
  };
  const handleNo = () => {
    window.location.href = `${currentLocation}/404`;
  };
  const handleYesEn = () => {
    window.location.href = `${currentLocation}/home`;
  };
  const handleNoEn = () => {
    window.location.href = `${currentLocation}/404`;
  };

  return (
    <div className="res-bg">
      <div className="res-bg-text">
        <img src={logo_txt} alt="" />
      </div>
      <div className="res-content">
        <div className="res-logo">
          <div className="res-logo-image">
            <img src={logo} alt="" />
          </div>
          <div className="res-text">ალაზანი</div>
        </div>
        <div className="res-restriction">
          <div className="res-restriction-text">
            <p>ხართ თუ არა სრულწლოვანი?</p>
          </div>

          <div className="res-restriction-btn">
            <button className="res-restriction-btn-one" onClick={handleYes}>
              დიახ
            </button>
            <button className="res-restriction-btn-one" onClick={handleNo}>
              არა
            </button>
          </div>
        </div>

        <div className="res-language">
          <Link className="res-ka-flag" to="/">
            <img src={geFlagActive} alt="Flag" className="res-flag" />
          </Link>
          <Link className="res-en-flag" to={baseUrl + "/en"}>
            <img src={enFlag} alt="Flag" className="res-flag" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AgeRestriction;
