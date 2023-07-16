import "./StaffDescription.css";

function StaffDescription(props) {
  return (
    <div className="staff-wrapper">
      <div className="staff-title">
        <p id="staff-jobtitle">{props.jobTitle}</p>
      </div>
      <div className="staff-name">
        <p id="staff-fullname">{props.fullName}</p>
      </div>
    </div>
  );
}

export default StaffDescription;
