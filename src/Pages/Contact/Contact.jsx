import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { useState } from "react";
import "./Contact.css";
function Contact() {
  const officeLocation = (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5959.766110741176!2d44.870395!3d41.679869!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440dd107a20453%3A0x6627aec999218ba!2s25%20Moscow%20Ave%2C%20T&#39;bilisi!5e0!3m2!1sen!2sge!4v1689517067796!5m2!1sen!2sge"
      width="600"
      height="450"
      style={{ border: 0, width: "100%" }}
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );
  const factoryLocation = (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d23837.54075012992!2d45.890328!3d41.683982!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sat!4v1689516031946!5m2!1sen!2sat"
      width="600"
      height="450"
      style={{ border: 0, width: "100%" }}
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );

  const shopLocation = (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5957.85720375434!2d44.795505!3d41.700477!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cdd6db54483%3A0x8ba27a44c7197e13!2s26%20Shota%20Rustaveli%20Ave%2C%20T&#39;bilisi!5e0!3m2!1sen!2sge!4v1689507881235!5m2!1sen!2sge"
      width="600"
      height="450"
      style={{ border: 0, width: "100%" }}
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );

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
      <Header shouldRender={true} geLang={renderKa} />
      <Link to="/ka/menu" className="ab-history">
        <FaAngleLeft id="ab-angleLeft" />
        <p id="ab-component-name">{componentHeader}</p>
      </Link>
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
          <div className="ct-distributor-china">
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
          <div className="ct-distributor-russia">
            <p>რუსეთი</p>
            <FaAngleRight className="ct-angle-left" />
          </div>
          <div className="ct-distributor-czech">
            <p>ჩეხეთი</p>
            <FaAngleRight className="ct-angle-left" />
          </div>
          <div className="ct-distributor-poland">
            <p>პოლონეთი</p>
            <FaAngleRight className="ct-angle-left" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
