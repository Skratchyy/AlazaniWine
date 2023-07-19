import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./FullNews.css";
import Header from "../../../Components/Header/Header";

import mainAlazaniText from "../../../assets/about-bg-writing.png";
function FullNews(props) {
  const { id } = useParams();
  const componentHeader = "სიახლე";

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function getData() {
    const data = await (
      await fetch(`https://testnode-c6yj.onrender.com/news/${id}`)
    ).json();
    setData(data);
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) return "Loading...";

  // Use the 'id' parameter in your component logic
  // ...

  return (
    <div className="FullNews-bg">
      <div className="emp"></div>
      <Header
        shouldRender={true}
        geLang={true}
        Location={componentHeader}
        Goto="/ka/news"
      />
      <div className="FullNews-alazani-text">
        <img src={mainAlazaniText} alt="" />
      </div>
      <div className="fullNews-fullContext">
        <div className="full-news-image">
          <img src={data.data.image} alt="" />
        </div>
        <div className="full-news-header">
          <p>{data.data.title}</p>
        </div>
        <div className="full-news-text">
          <p>{data.data.longDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default FullNews;
