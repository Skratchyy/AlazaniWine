import "./NewsCard.css";
import { Link } from "react-router-dom";

function NewsCard(props) {
  return (
    <>
      <Link className="news-card" to={"/ka/news/" + props.newsObj.id}>
        <div className="news-card-context">
          <div className="news-card-header">
            <p>{props.newsObj.title}</p>

            <hr className="news-card-hr" />
          </div>

          <div className="news-card-description">
            <p>{props.newsObj.shortDescription}</p>
          </div>
        </div>
        <div className="news-card-picture">
          <img src={props.newsObj.image} alt="" />
        </div>
      </Link>
    </>
  );
}

export default NewsCard;
