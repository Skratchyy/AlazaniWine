import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { shopLocation, factoryLocation, officeLocation } from "./locations";
import { FaAngleRight } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { useState } from "react";
import { china, czech, rusia, poland } from "./distrubutorContacts";
import "./Contact.css";
import DistributorDetails from "./Component/DistributorDetails";
function Contact() {
  const [distributorInfo, setDistributorInfo] = useState(null);

  const setChina = (e) => {
    setDistributorInfo(china);
  };

  const setRussia = (e) => {
    setDistributorInfo(rusia);
  };

  const setCzech = (e) => {
    setDistributorInfo(czech);
  };

  const setPoland = (e) => {
    setDistributorInfo(poland);
  };

  const [useLocation, setLocation] = useState(officeLocation);

  const setOffice = (e) => {
    setLocation(officeLocation);
  };

  const setFactory = (e) => {
    setLocation(factoryLocation);
  };

  const setShop = (e) => {
    setLocation(shopLocation);
  };

  let fbLink = "https://www.facebook.com/alazaniwine/";
  let igLink = "https://www.instagram.com/alazani_winery/";
  let email = "mailto://gabichvadzezura@gmail.com";
  let phoneNumber = "tel://+995557556555";
  const componentHeader = "კონტაქტი";
  const renderKa = true;
  return (
    <div className="ct-bg">
      <Header
        shouldRender={true}
        geLang={renderKa}
        Location={componentHeader}
        Goto={"/ka/menu"}
      />

      <div className="empty"></div>
      <div className="ct-information">
        <div className="ct-description">
          <p id="ct-alazani">ალაზანი</p>
          <div className="ct-all-locations">
            <div id="ct-location">
              <span>
                <FaMapMarkerAlt />
              </span>
              <button className="ct-location-name" onClick={setFactory}>
                ქარხანა
              </button>
            </div>
            <div id="ct-location">
              <span>
                <FaMapMarkerAlt />
              </span>
              <button className="ct-location-name" onClick={setOffice}>
                ოფისი
              </button>
            </div>
            <div id="ct-location">
              <span>
                <FaMapMarkerAlt />
              </span>
              <button className="ct-location-name" onClick={setShop}>
                მაღაზია
              </button>
            </div>
          </div>
          <div className="ct-socials">
            <div className="ct-fb">
              <Link
                className="ct-links"
                to={fbLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FaFacebookSquare />
                </span>
              </Link>
            </div>
            <div className="ct-fb">
              <Link
                className="ct-links"
                to={igLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FaInstagram />
                </span>
              </Link>
            </div>
            <div className="ct-fb">
              <Link
                className="ct-links"
                to={email}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FaEnvelope />
                </span>
              </Link>
            </div>
            <div className="ct-fb">
              <Link
                className="ct-links"
                to={phoneNumber}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FaPhoneSquareAlt />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="ct-map">{useLocation}</div>
      </div>
      <div className="ct-distributors">
        <div className="ct-distributors-header">დისტრიბუტორები</div>
        <div className="ct-distributors-country">
          <div className="ct-distributor-china" onClick={setChina}>
            <p>ჩინეთი</p>
            <FaAngleRight className="ct-angle-left" />
            <div className="ct-distributor-china-hidden">
              <p>ჩინეთი</p>
              <div className="distributor-details">
                <span></span>
                <p></p>
              </div>
            </div>
          </div>
          <div className="ct-distributor-russia" onClick={setRussia}>
            <p>რუსეთი</p>
            <FaAngleRight className="ct-angle-left" />
          </div>
          <div className="ct-distributor-czech " onClick={setCzech}>
            <p>ჩეხეთი</p>
            <FaAngleRight className="ct-angle-left" />
          </div>
          <div className="ct-distributor-poland" onClick={setPoland}>
            <p>პოლონეთი</p>
            <FaAngleRight className="ct-angle-left" />
          </div>
        </div>

        <div className="dist-details">
          {distributorInfo ? (
            distributorInfo.map((info) => {
              return <DistributorDetails obj={info} />;
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
