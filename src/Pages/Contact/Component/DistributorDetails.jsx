import { FaEnvelope } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./DistributorDetails.css";
function DistributorDetails(props) {
  return (
    <div className="dist-det-div">
      <h6 className="distrubutor-detail-header">{props.obj.shop_name}</h6>
      <div className="distrubutor-detail-list">
        <div className="distrubutor-detail__">
          <span>
            <FaMapMarkerAlt />
          </span>
          <p className="distrubutor-detail-location-txt">{props.obj.address}</p>
        </div>
        <div className="distrubutor-detail__">
          <span>
            <FaPhoneSquareAlt />
          </span>{" "}
          <p className="distrubutor-detail-phone-txt">+{props.obj.number}</p>
          {props.obj.website && (
            <a href={props.website} className="distrubutor-detail-link">
              {props.obj.website}
            </a>
          )}
        </div>
        <div className="distrubutor-detail__">
          <span>
            <FaEnvelope />
          </span>{" "}
          <p className="distrubutor-detail-mail-txt">{props.obj.email}</p>
        </div>
      </div>
    </div>
  );
}

export default DistributorDetails;
