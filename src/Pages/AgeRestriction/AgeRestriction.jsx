import logo from "../../assets/logo.svg";
import logo_txt from "../../assets/bg-text-colorless.png";
import geFlagActive from "../../assets/flag-ge-active.svg";
import enFlag from "../../assets/flag-en-bw.svg";
import { Link } from "react-router-dom";
import "./AgeRestriction.css";
function AgeRestriction() {
  const handleYes = () => {
    window.location.pathname = `/ka/home`;
  };
  const handleNo = () => {
    window.location.reload();
  };
  // const handleYesEn = () => {
  //   window.location.href = `/home`;
  // };
  // const handleNoEn = () => {
  //   window.location.href = `/en`;
  // };

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
          <Link className="res-en-flag" to={"/en"}>
            <img src={enFlag} alt="Flag" className="res-flag" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AgeRestriction;
