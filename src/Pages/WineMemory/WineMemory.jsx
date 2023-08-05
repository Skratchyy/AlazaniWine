import Header from "../../Components/Header/Header";
import "./WineMemory.css";
import { useLocation } from "react-router-dom";
function WineMemory() {
  const location = useLocation();
  const currentLanguage = location.pathname[1] + location.pathname[2];
  const renderKa = currentLanguage ? true : false;
  const componentHeader = "ღვინის მეხსიერება";
  return (
    <div className="wm-about-us">
      <Header
        shouldRender={true}
        geLang={renderKa}
        Location={componentHeader}
      />

      <div className="wm-alazani-text"></div>
      <div className="wm-empty"></div>
      <div className="wm-alazani-wrapper">
        {" "}
        <div className="wm-img">
          <img
            src="https://alazaniwine.ge/images/92c1ef9a040c0ed852a9e0f8a17d0dea.png"
            alt=""
          />
        </div>
        <div className="wm-description">
          <div className="wm-main-text">
            <p>
              ცნობილი ფაქტია, რომ გვერდის წაკითხვად შიგთავსს შეუძლია მკითხველის
              ყურადღება მიიზიდოს და დიზაინის აღქმაში ხელი შეუშალოს. Lorem
              Ipsum-ის გამოყენებით ვღებულობთ იმაზე მეტ-ნაკლებად სწორი
              გადანაწილების ტექსტს, ვიდრე ერთიდაიგივე გამეორებადი სიტყვებია
              ხოლმე. შედეგად, ტექსტი ჩვეულებრივ ინგლისურს გავს, მისი წაითხვა კი
              შეუძლებელია. დღეს უამრავი პერსონალური საგამომცემლო პროგრამა და
              ვებგვერდი იყენებს Lorem Ipsum-ს, როგორც დროებით ტექსტს წყობის
              შესავსებად; Lorem Ipsum-ის მოძებნისას კი საძიებო სისტემები ბევრ
              დაუსრულებელ გვერდს გვიჩვენებენ. წლების მანძილზე ამ ტექსტის უამრავი
              ვერსია გამოჩნდა, ზოგი შემთხვევით დაშვებული შეცდომის გამო, ზოგი კი
              — განზრახ, ხუმრობით.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WineMemory;
