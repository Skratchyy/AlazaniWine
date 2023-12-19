import Header from "../../Components/Header/Header";
import "./OurProducts.css";
import { useState, useEffect } from "react";
import Products from "./Components/Producs";
import Loader from "../../Components/loader/loader";
import { useLocation } from "react-router";
function News() {
  const isLocation = useLocation().pathname;
  const renderKa = isLocation[1] + isLocation[2] === "ka";

  const [brands, setBrands] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const fetchBrands = async () => {
    const brands = await (
      await fetch("https://alazanibackend.onrender.com/brands/")
    ).json();
    setBrands(brands);
    setIsloading(false);
  };
  useEffect(() => {
    fetchBrands();
  }, []);

  if (isLoading) return <Loader />;

  const currentLocation = "ბრენდები";
  const currentLocationEn = "Brands";

  return (
    <>
      {renderKa ? (
        <div className="products-bg">
          <Header
            geLang={true}
            shouldRender={true}
            Location={currentLocation}
          />
          <div className="empty"></div>
          {brands.map((eachBrand) => {
            return <Products productObj={eachBrand} />;
          })}
          <div className="pr-alazani-text"></div>
        </div>
      ) : (
        <div className="products-bg">
          <Header
            geLang={false}
            shouldRender={true}
            Location={currentLocationEn}
          />
          <div className="empty"></div>
          {brands.map((eachBrand) => {
            return <Products productObj={eachBrand} />;
          })}
          <div className="pr-alazani-text"></div>
        </div>
      )}
    </>
  );
}

export default News;
