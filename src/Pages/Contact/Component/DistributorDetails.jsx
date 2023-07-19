import { FaEnvelope } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./DistributorDetails.css";
function DistributorDetails(props) {
  return (
    <div className="dist-det-div">
      <div className="distrubutor-detail-header">{props.obj.header}</div>
      <div className="distrubutor-detail-list">
        <div className="distrubutor-detail__">
          <span>
            <FaMapMarkerAlt />
          </span>
          <p className="distrubutor-detail-location-txt">
            {props.obj.location}
          </p>
        </div>
        <div className="distrubutor-detail__">
          <span>
            <FaPhoneSquareAlt />
          </span>{" "}
          <p className="distrubutor-detail-phone-txt">{props.obj.number}</p>
          {props.obj.link && (
            <a
              href={props.obj.link}
              className="distrubutor-detail-link"
              target="_blank"
            >
              {props.obj.link}
            </a>
          )}
        </div>
        <div className="distrubutor-detail__">
          <span>
            <FaEnvelope />
          </span>{" "}
          <p className="distrubutor-detail-mail-txt">{props.obj.mail}</p>
        </div>
      </div>
    </div>
  );
}

export default DistributorDetails;
