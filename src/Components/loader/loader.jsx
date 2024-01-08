import "./loader.css";
import loader_gif from "./Double Ring-1s-200px.gif";
function Loader() {
  return (
    <div className="loader">
      <img src={loader_gif} alt="loader" />
    </div>
  );
}

export default Loader;
