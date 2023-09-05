import Header from "../../Components/Header/Header";
import NewsCard from "./Components/NewsCard";
import mainAlazaniText from "../../assets/about-bg-writing.png";
import "./News.css";
import { useState, useEffect } from "react";
import Loader from "../../Components/loader/loader";
const componentHeader = "სიახლეები";


function News() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function getData() {
    const data = await (
      await fetch("https://testnode-c6yj.onrender.com/news")
    ).json();
    setData(data);
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) return <Loader/>;

  return (
    <div className="News-bg">
      <Header shouldRender={true} geLang={true} Location={componentHeader} />

      <div className="news-alazani-text">
        <img src={mainAlazaniText} alt="" />
      </div>
      <div className="news-all-news">
        {data.data.map((res) => {
          return <NewsCard newsObj={res} />;
        })}
      </div>
    </div>
  );
}

export default News;
