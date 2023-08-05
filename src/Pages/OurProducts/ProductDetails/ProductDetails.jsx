import Header from "../../../Components/Header/Header";
import "./ProductDetails.css";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import ActiveProductItem from "../Components/ActiveComponent";
import ActiveBrand from "../Components/ActiveBrand";
function ProductDetails(porps) {
  const currentPath = useLocation().pathname;
  const curentId = currentPath.split("/")[4];
  const idTorender = currentPath.split("/")[3];
  const currentLanguage = currentPath.split("/")[1];
  const [toRender, setTorender] = useState(null);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [brandName, setBrandName] = useState("");
  const [brands, setBrands] = useState("");
  ////////////////////////////////////// Current path filtered without product id //////////////////////////////////////
  let myString = currentPath;
  let parts = myString.split("/");
  parts.pop();
  let result = parts.join("/");
  ///////////////////////////////////// /////////////////////////////////// //////////////////////////////////
  const fetchToRender = async () => {
    const toRender = await (
      await fetch(
        `https://alazanibackend.onrender.com/brands/${idTorender}/products/${curentId}`
      )
    ).json();
    setTorender(toRender);
    setIsloading(false);
  };
  const getBrands = async () => {
    const brandsDetail = await (
      await fetch(`https://alazanibackend.onrender.com/brands/`)
    ).json();
    setBrands(brandsDetail);
  };
  const getBrandName = async () => {
    const name = (
      await (
        await fetch(`https://alazanibackend.onrender.com/brands/${idTorender}`)
      ).json()
    ).name[currentLanguage];

    setBrandName(name);
  };
  const fetchProducts = async () => {
    const product = await (
      await fetch(
        `https://alazanibackend.onrender.com/brands/${idTorender}/products`
      )
    ).json();
    setProducts(product);
    setIsloading(false);
  };
  useEffect(() => {
    fetchProducts();
    getBrandName();
    fetchToRender();
    getBrands();
  }, [currentPath]);
  console.log(brands);
  if (isLoading) return "Loading...";

  return (
    <>
      <div className="product-details__bg">
        <Header
          geLang={false}
          shouldRender={true}
          Location={brandName}
          Goto="/ka/products"
        />
        <div
          className="pr-alazani-text"
          style={{ right: 0, height: "58%", top: "23%", width: "17%" }}
        ></div>
        <div className="product-details__main">
          <div className="product-detail__wineList">
            <ul style={{ listStyleType: "disc" }}>
              {products.map((name) => {
                return (
                  <ActiveProductItem
                    key={name._id}
                    name={name}
                    result={result}
                    currentLanguage={currentLanguage}
                  />
                );
              })}
            </ul>
          </div>
          <div className="product-detail__wineImage">
            <img src={toRender.imageURL} alt="" />
          </div>
          <div className="product-detail__wineDescription">
            <div className="product-detail__header">
              <p>{toRender.name[currentLanguage]}</p>
            </div>
            <div className="product-detail__text_description">
              <p className="year">{toRender.year}</p>
              <p>{toRender.description[currentLanguage]}</p>
              <p className="tempToTry">დააგემოვნების ტემპერატურა - 10-12 C°.</p>
            </div>
            <div className="product-detail__Alcohol">Alc. 14% BY VOL</div>
          </div>
        </div>

        <div className="product-details__footer">
          {brands.map((brand) => {
            return (
              <ActiveBrand
                key={brand._id}
                name={brand}
                result={result}
                currentLanguage={currentLanguage}
              />
            );
          })}
        </div>
      </div>
      );
    </>
  );
}

export default ProductDetails;
