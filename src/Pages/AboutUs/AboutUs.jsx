import "./AboutUs.css";
import Header from "../../Components/Header/Header";
import mainPic from "../../assets/about-us-image-main.png";
import { Link, useLocation } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
function AboutUs() {
  const componentHeader = "ჩვენს შესახებ";

  const location = useLocation();
  const currentLanguage = location.pathname[1] + location.pathname[2];
  const renderKa = currentLanguage ? true : false;
  // Description არის ტექსტი რომელიც უნდა განთავსდეს About-Us გვერდზე
  const Description = `“ალაზანი” მდებარეობს ქართული მეღვინეობისთვის ერთ-ერთ გამორჩეულ ადგილას - სოფელ კარდენახში. გადმოცემის მიხედვით, ამ სოფელში ყოველ კარზე ვენახი იყო და მისი სახელწოდებაც აქედან მოდის - “კარი” და “ვენახი” - “კარდენახი”.

  ამ ქარხანამ ჯერ კიდევ 1970 წელს მიიღო კავკასიის რეგიონის უმსხვილესი ღვინის საწარმოს წოდება.
  
  კომპანიას 2016 წელს ახალი სიცოცხლე შთაებერა - გადამზადდა კადრები, აღიჭურვა ახალი დანადგარებით და დაინერგა ახალი ტექნოლოგიები, რომელიც საშუალებას იძლევა ღვინო დამზადდეს როგორც ტრადიციული ქართული, ასევე თანამედროვე ევროპული ტექნოლოგიებით.
  
  “ალაზანი” განსაკუთრებული პასუხისმგებლობით ეკიდება ქართული ღვინის ისტორიას და დღემდე “ტრადიციულს ვამზადებთ ტრადიციულად” - ქვევრის ღვინო მზადდება ბარონ დე ბაასის ჩანაწერებში აღწერილი მეთოდოლოგიის მიხედვით.
  
  8000 წლის მანძილზე ქართულმა ღვინომ მრავალი ცვლილება განიცადა - ვითარდებოდა როგორც ვენახის გაშენების, ასევე დადუღებისა და ჩამოსხმის ტექნოლოგიები. სწორედ ამიტომ, “ალაზანი” ცდილობს სიახლეები შემოიტანოს ქართულ მეღვინეობაში და თანამედროვე ტექნოლოგიების ჩართულობითა და ტრადიციული მიმართულების საუკეთესო კომბინაციით ხელი შეუწყოს ქართული ღვინის განვითარებას.
  
  “ალაზანის” საწარმოში მრავალი სახეობის ღვინო იწურება, იქნება ეს ადგილწარმოშობის სახეობებისა თუ კასრისა და ქვევრის დამზადების ტექნოლოგიების მიხედვით. აქ რთველის დროს ნახავთ ყურძნის ისეთ ჯიშებს, როგორებიცაა საფერავი, რქაწითელი, ციცქა, ცოლიკოური, წარაფი, თავკვერი, კრახუნა, ქისი, ჩინური, კახურის მწვანე და სხვ. ხოლო წარაფის ზონაში მდებარე ვენახებზე მოყვანილი ყურძნით მზადდება პრემიუმ კლასის და ზოგიერთი ქვევრის ღვინო.
  
  ამ ეტაპზე “ალაზანი” ექსპორტზე გადის 3 კონტინენტზე (ევროპა, აზია, ჩრდილოეთ ამერიკა) და უცხოელებს სთავაზობს 34 სახეობის ქართული ღვინის დაგემოვნებას და ამით, ქართველების და ქართული ისტორიის გაცნობას. `;

  return (
    <div className="ab-about-us">
      <Header shouldRender={true} geLang={renderKa} />
      <Link to="/menu" className="ab-history">
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
            <p className="ab-description-paragraph">{Description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
