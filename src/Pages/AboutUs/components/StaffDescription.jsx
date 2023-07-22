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
      <div className="staff-favWine">
        <p id="staff-favWine">ფავორიტი ღვინო{props.favWine}</p>
        <img
          src="https://alazaniwine.ge/images/b864b55d9d863ead2c95b805c5ea5ce5.png"
          alt=""
          style={{ width: "20px" }}
        />
      </div>
    </div>
  );
}

export default StaffDescription;
