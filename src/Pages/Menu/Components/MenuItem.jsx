import "./MenuItem.css";
import { Link } from "react-router-dom";
function MenuItem(props) {
  return (
    <div className={props.className}>
      <div className="image_wrapper">
        <img src={props.txt} alt="" />
        {props.children}
      </div>
    </div>
  );
}

export default MenuItem;
