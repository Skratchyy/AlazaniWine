import MenuItem from "./Components/MenuItem";
import Header from "../../Components/Header/Header";
import "./Menu.css";
import textOne from "../../assets/txt1.svg";
import textTwo from "../../assets/txt2.svg";
import textThree from "../../assets/txt3.svg";
import textFour from "../../assets/txt4.svg";
import textFive from "../../assets/txt5.svg";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <Header></Header>
      <div className="menu-item-wrapper">
        <Link className="menu-items" to="/ka/wine-memory">
          <MenuItem className="one" txt={textOne}></MenuItem>
        </Link>
        <Link className="menu-items" to="/ka/about-us">
          <MenuItem className="two" txt={textTwo}></MenuItem>
        </Link>
        <Link className="menu-items" to="/ka/news">
          <MenuItem className="three" txt={textThree}></MenuItem>
        </Link>
        <Link className="menu-items" to="/ka/products">
          <MenuItem className="four" txt={textFour}></MenuItem>
        </Link>
        <Link className="menu-items" to="/ka/contact">
          <MenuItem className="five" txt={textFive}></MenuItem>
        </Link>
      </div>
    </div>
  );
}

export default Menu;

/** <div style={{ display: "flex" }}>
 */
