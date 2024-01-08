import "./AboutUs.css";
import StaffDescription from "./components/StaffDescription";
import Header from "../../Components/Header/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../../Components/loader/loader";
function AboutUs() {
  const [data, setData] = useState(null);
  const base_Url = "http://localhost:5000";

  useEffect(() => {
    axios
      .get(`${base_Url}/about`)
      .then((res) => setData(res.data[0]))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!data) return <Loader />;

  const componentHeader = "ჩვენს შესახებ";
  const fullName = "გუგა რამიშვილი";
  const position = "დირექტორი";
  const Image = `${base_Url}/assets/about/${data.image}`;

  // Description არის ტექსტი რომელიც უნდა განთავსდეს About-Us გვერდზე
  return (
    <div className="ab-about-us">
      <Header
        shouldRender={true}
        geLang={true}
        Location={componentHeader}
        Goto={"/ka/menu"}
      />

      <div className="ab-alazani-text"></div>
      <div className="ab-empty"></div>
      <div className="ab-alazani-wrapper">
        <div className="ab-picture">
          <img src={Image} alt="Logo" className="ab-about-picture" />
        </div>
        <div className="ab-description">
          <div className="ab-main-text">
            <p className="ab-description-paragraph">
              {data ? data.description_ka : "1"}
            </p>
          </div>
        </div>
      </div>
      <div className="staff">
        <div className="staff-header">ჩვენი პერსონალი</div>
        <div className="staff-secondary-header">და მათი რჩეული ღვინოები</div>
        <hr id="staff-hr" />
        <div className="staff-list">
          <StaffDescription fullName={fullName} jobTitle={position} />
          <StaffDescription
            fullName="ნიკა რამაზაშვილი"
            jobTitle="მენეჯერი"
            email="Example@gmail.com"
          />
          <StaffDescription fullName="ლანა დათაია" jobTitle="ფინანსისტი" />
          <StaffDescription fullName="გიო მიქელაშვილი" jobTitle="მომწოდებელი" />
          <StaffDescription
            fullName="ნატა გაბუნია"
            jobTitle="პიარ&nbsp;მენეჯერი"
          />
          <StaffDescription fullName="ანი ტუღუში" jobTitle="დისტრიბუტორი" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
