import Header from "../../Components/Header/Header";
import video from "../../assets/background-video.mp4";
import "./HomePage.css";
import winePic from "../../assets/about-us-image.png";
import bgWriting from "../../assets/agestyle.png";
import bgWritingVertical from "../../assets/about-bg-writing.png";
import winePic2 from "../../assets/home/IMG_2167.png";
import winePic3 from "../../assets/home/_MG_8192.jpg";
import winePic4 from "../../assets/dcf1e82268db4a5fa71d141bc13e92ab.png";
import StaffDescription from "../AboutUs/components/StaffDescription";
function HomePage() {
  return (
    <div className="home-page__container">
      <div className="home-page__video">
        <Header geLang={false} shouldRender={true} />
        <video autoPlay muted loop id="home_bg_video">
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="home-page__content">
        <div className="home-page__bgPics">
          <img src={bgWriting} alt="" id="home_bg1" />
          <img src={bgWritingVertical} alt="" id="home_bg2" />
          <img src={bgWriting} alt="" id="home_bg3" />
        </div>
        <div className="content_actual">
          <div className="home-page__memory">
            <div className="home__img_memory">
              <img src={winePic} alt="" />
            </div>
            <div className="home-page__memory_desc home_descr">
              <div className="home-page__header">
                <p className="bold__header">ღვინის</p>
                <p className="italic__header">მეხსიერება</p>
              </div>
              <hr id="home_hr_txt" />
              <div className="home-page__description">
                <p>
                  ალაზნის ღვინის მეხსიერება მოდის რამოდენიმე ათწლეული და მას
                  აქვს დიდი ისტორია, რომელიც შენარჩუნებული იქნა მთელი ეს დრო.
                </p>
              </div>
              <div className="home-page__button">
                <button>წაკითხვა</button>
              </div>
            </div>
          </div>
          <div className="home-page__about">
            <div className="home-page__about_desc home_descr">
              <div className="home-page__header" style={{ marginTop: "-40px" }}>
                <p className="bold__header">ჩვენ</p>
                <p className="italic__header">შესახებ</p>
              </div>
              <hr id="home_hr_txt" />
              <div className="home-page__description about__home__txt">
                <p>
                  “ალაზანი” მდებარეობს ქართული მეღვინეობისთვის ერთ-ერთ გამორჩეულ
                  ადგილას - სოფელ კარდენახში. გადმოცემის მიხედვით, ამ სოფელში
                  ყოველ კარზე ვენახი იყო და მისი სახელწოდებაც აქედან მოდის -
                  “კარი” და “ვენახი” - “კარდენახი”.
                  <br />
                  <br /> ამ ქარხანამ ჯერ კიდევ 1970 წელს მიიღო კავკასიის
                  რეგიონის უმსხვილესი ღვინის საწარმოს წოდება.
                </p>
              </div>
              <div className="home-page__button" style={{ marginTop: "40px" }}>
                <button>წაკითხვა</button>
              </div>
            </div>
            <div className="home__img_ab">
              <img src={winePic2} alt="" />
            </div>
          </div>
          <div className="home-page__news">
            <div className="home__img_new">
              <img src={winePic3} alt="" />
            </div>
            <div className="home-page__new_desc home_descr">
              <div className="home-page__header">
                <p className="bold__header">სიახლეები</p>
              </div>
              <hr id="home_hr_txt" />
              <div className="home-page__description">
                <p>
                  ალაზნის ღვინის მეხსიერება მოდის რამოდენიმე ათწლეული და მას
                  აქვს დიდი ისტორია, რომელიც შენარჩუნებული იქნა მთელი ეს დრო.
                </p>
              </div>
              <div className="home-page__button">
                <button>წაკითხვა</button>
              </div>
            </div>
          </div>
          <div className="home-page__products">
            <div className="home__img_pro">
              <img
                src="https://alazaniwine.ge/images/our_products_ka.svg"
                alt=""
              />
            </div>
            <div
              className="home-page__pro_desc home_descr"
              style={{
                background: "white",
                width: "100%",
                height: "100%",
              }}
            >
              <div className="home_transparent_description">
                <img src={winePic4} alt="" />
                <p>
                  ,,ვაინერის” ღვინო დაწურულია უმაღლესი ხარისხის ყურძნისგან. ამ
                  ბრენდის ქვეშ გაერთიანებულია, როგორც ადგილწარმოშობისა და კასრში
                  დაძველებული, ასევე სუფრის ღვინოები.
                </p>
              </div>
            </div>
          </div>
          <div className="home-page__staff">
            <div className="staff">
              <div className="staff-header">ჩვენი პერსონალი</div>

              <div className="staff-secondary-header">
                და მათი რჩეული ღვინოები
              </div>
              <hr id="staff-hr" />
              <div className="staff-list">
                <StaffDescription
                  fullName="ნიკა რამაზაშვილი"
                  jobTitle="მენეჯერი"
                />
                <StaffDescription
                  fullName="ლანა დათაია"
                  jobTitle="ფინანსისტი"
                />
                <StaffDescription
                  fullName="გიო მიქელაშვილი"
                  jobTitle="მომწოდებელი"
                />
                <StaffDescription
                  fullName="ნატა გაბუნია"
                  jobTitle="პიარ&nbsp;მენეჯერი"
                />
                <StaffDescription
                  fullName="ანი ტუღუში"
                  jobTitle="დისტრიბუტორი"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
