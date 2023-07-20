import Header from "../../../Components/Header/Header";
import "./ProductDetails.css";
import { useLocation } from "react-router";

function ProductDetails() {
  const currentPath = useLocation();
  console.log(currentPath.pathname);
  const descrr = `
    2018
    

    ოქროსფერი შეფერილობისა და მომწვანო ჩალისფერი მბზინვარების მქონე ადგილწარმოშობის დასახელების თეთრი მშრალი ღვინო.
    აქვს ხილისა და ციტრუსის ხავერდოვანი გამოხატული არომატი.
    

    ყურძნის სახეობა: კახური მწვანე
    რეგიონი: კახეთი, მანავის მიკროზონა
    სასიამოვნო მისართმევია საცივთან, ფრინველის ხორცთან, სულგუნთან ან ტენილ ყველთან. 
    
    
    `;
  const componentName = "ალაზანი";
  return (
    <div className="product-details__bg">
      <Header
        geLang={true}
        shouldRender={true}
        Location={componentName}
        Goto="/ka/products"
      />
      <div
        className="pr-alazani-text"
        style={{ right: 0, height: "58%", top: "23%", width: "17%" }}
      ></div>
      <div className="product-details__main">
        <div className="product-detail__wineList">
          <ul style={{ listStyleType: "disc" }}>
            <li className="active-product">მანავის მწვანე</li>
            <li>მუკუზანი</li>
            <li>რქაწითელი</li>
            <li>რქაწითელი ქარვა</li>
          </ul>
        </div>
        <div className="product-detail__wineImage">
          <img
            src="https://alazaniwine.ge/images/144215af7dc079649af21f041ccd0d90.png"
            alt=""
          />
        </div>
        <div className="product-detail__wineDescription">
          <div className="product-detail__header">
            <p>მანავის მწვანე</p>
          </div>
          <div className="product-detail__text_description">
            <p className="year">2018</p>
            <p>{descrr}</p>
            <p className="tempToTry">დააგემოვნების ტემპერატურა - 10-12 C°.</p>
          </div>
          <div className="product-detail__Alcohol">Alc. 14% BY VOL</div>
        </div>
      </div>
      <div className="product-details__footer">
        <div className="active-brand">
          <img
            src="https://alazaniwine.ge/images/dcf1e82268db4a5fa71d141bc13e92ab.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://alazaniwine.ge/images/8974ab5e0bbbb4461cbabc18c1f49ba8.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://alazaniwine.ge/images/0193a72cd1e5c366adc9646e2828468c.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://alazaniwine.ge/images/cc123339dc8d2f8ea44caa827197c542.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
