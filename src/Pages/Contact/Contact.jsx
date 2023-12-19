import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";
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
const baseURL = "http://localhost:5000";
function Contact() {
  const [distributorClicked, setDistributorClicked] = useState(false);
  const [distributorInfo, setDistributorInfo] = useState(null);
  const [fetchedDistributors, setFetchedDistributors] = useState([]);
  const [socials, setSocials] = useState([]);
  useEffect(() => {
    axios.get(`${baseURL}/distributors`).then((response) => {
      setFetchedDistributors(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get(`${baseURL}/contact`).then((response) => {
      setSocials(response.data[0]);
    });
  }, []);

  const scrollToBottom = () => {
    window.scrollTo(0, document.documentElement.scrollHeight);
  };

  const distributorClickHandler = (e) => {
    // set the click handler fpr the styling purposes

    if (distributorInfo && distributorInfo._id === e) {
      setDistributorClicked(!distributorClicked);
    } else {
      setDistributorClicked(true);
    }

    // find the distributor that has clicked
    const details = fetchedDistributors.find(
      (distributor) => distributor._id === e
    );
    // update the distributor details
    setDistributorInfo(details);
    scrollToBottom();
  };

  const [useLocation, setLocation] = useState(officeLocation);

  const updateLocation = (e) => {
    if (e === "Office") {
      setLocation(officeLocation);
    } else if (e === "Factory") {
      setLocation(factoryLocation);
    } else {
      setLocation(shopLocation);
    }
  };

  let fbLink = "https://www.facebook.com/alazaniwine/";
  let igLink = "https://www.instagram.com/alazani_winery/";
  let email = "mailto://gabichvadzezura@gmail.com";
  let phoneNumber = "tel://+995557556555";
  const componentHeader = "კონტაქტი";
  const renderKa = true;
  return (
    <div className={!distributorClicked ? "ct-bg" : "ct-bg active"}>
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
              <button
                className="ct-location-name"
                onClick={() => updateLocation("Factory")}
              >
                ქარხანა
              </button>
            </div>
            <div id="ct-location">
              <span>
                <FaMapMarkerAlt />
              </span>
              <button
                className="ct-location-name"
                onClick={() => updateLocation("Office")}
              >
                ოფისი
              </button>
            </div>
            <div id="ct-location">
              <span>
                <FaMapMarkerAlt />
              </span>
              <button
                className="ct-location-name"
                onClick={() => updateLocation("Shop")}
              >
                მაღაზია
              </button>
            </div>
          </div>
          <div className="ct-socials">
            <div className="ct-fb">
              <Link
                className="ct-links"
                to={socials.facebook_page}
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
                to={socials.instagram_page}
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
                to={`mailto://${socials.company_email}`}
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
                to={`tel://${socials.company_number}`}
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
        <p className="ct-distributors-header">დისტრიბუტორები</p>
        <div className="ct-distributors-country">
          {fetchedDistributors.map((distributor) => {
            return (
              <div
                className={
                  !distributorClicked
                    ? "ct-distributor-russia"
                    : "ct-distributor-russia active"
                }
                onClick={() => distributorClickHandler(distributor._id)}
                key={distributor._id}
              >
                {distributor.country_ka}
              </div>
            );
          })}
        </div>
        {distributorClicked ? (
          <div className="dist-details">
            {distributorInfo.locations.map((loc) => {
              // console.log(loc);
              return <DistributorDetails obj={loc} key={loc._id} />;
            })}
            {/* {distributorInfo ? (
            <DistributorDetails obj={distributorInfo} />
          ) : (
            <></>
          )} */}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Contact;
