import "./AboutUs.css";
import StaffDescription from "./components/StaffDescription";
import Header from "../../Components/Header/Header";
import mainPic from "../../assets/about-us-image-main.png";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { useState, useEffect } from "react";

function AboutUs() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function get_data() {
    const data = await (
      await fetch("https://testnode-c6yj.onrender.com/about")
    ).json();
    setIsLoading(false);
    setData(data);
  }

  useEffect(() => {
    get_data();
  }, []);

  if (isLoading) return "Loading......";

  const componentHeader = "ჩვენს შესახებ";
  const fullName = "გუგა რამიშვილი";
  const position = "დირექტორი";

  // Description არის ტექსტი რომელიც უნდა განთავსდეს About-Us გვერდზე
  return (
    <div className="ab-about-us">
      <Header shouldRender={true} geLang={true} />
      <Link to="/ka/menu" className="ab-history">
        <FaAngleLeft id="ab-angleLeft" />
        <p id="ab-component-name">{componentHeader}</p>
      </Link>
      <div className="ab-alazani-text"></div>
      <div className="ab-empty"></div>
      <div className="ab-alazani-wrapper">
        <div className="ab-picture">
          <img src={mainPic} alt="Logo" className="ab-about-picture" />
        </div>
        <div className="ab-description">
          <div className="ab-main-text">
            <p className="ab-description-paragraph">{data.data}</p>
          </div>
        </div>
      </div>
      <div className="staff">
        <div className="staff-header">ჩვენი პერსონალი</div>
        <div className="staff-list">
          <StaffDescription fullName={fullName} jobTitle={position} />
          <StaffDescription fullName="ნიკა რამაზაშვილი" jobTitle="მენეჯერი" />
          <StaffDescription fullName="ლანა დათაია" jobTitle="ფინანსისტი" />
          <StaffDescription fullName="გიო მიქელაშვილი" jobTitle="მომწოდებელი" />
          <StaffDescription fullName="ნატა გაბუნია" jobTitle="პიარ მენეჯერი" />
          <StaffDescription fullName="ანი ტუღუში" jobTitle="დისტრიბუტორი" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
