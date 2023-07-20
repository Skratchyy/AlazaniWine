import Header from "../../Components/Header/Header";
import "./OurProducts.css";
import { useState, useEffect } from "react";
import Products from "./Components/Producs";
function News() {
  const [brands, setBrands] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const fetchBrands = async () => {
    const brands = await (
      await fetch("https://testnode-c6yj.onrender.com/brands")
    ).json();
    setBrands(brands);
    setIsloading(false);
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  if (isLoading) return "Loading...";

  const currentLocation = "ჩვენი პროდუქტები";
  return (
    <div className="products-bg">
      <Header geLang={true} shouldRender={true} Location={currentLocation} />
      <div className="empty"></div>
      {brands.data.map((eachBrand) => {
        return <Products productObj={eachBrand} />;
      })}
      <div className="pr-alazani-text"></div>
    </div>
  );
}

export default News;
