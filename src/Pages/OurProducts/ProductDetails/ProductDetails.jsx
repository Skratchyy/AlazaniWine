import Header from "../../../Components/Header/Header";
import "./ProductDetails.css";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductDetails() {
  const [toRender, setTorender] = useState(null);
  const currentPath = useLocation().pathname;
  const lastSlashIndex = currentPath.lastIndexOf("/");
  const cutOffPath = currentPath.substring(0, lastSlashIndex + 1);

  const idTorender = currentPath.split("/")[3];

  const [products, setProducts] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const currentLanguage = currentPath.split("/")[1];

  const [brandName, setBrandName] = useState("");

  const getBrandName = async () => {
    const name = (
      await (
        await fetch(`https://alazanibackend.onrender.com/brands/${idTorender}`)
      ).json()
    ).name[currentLanguage];

    setBrandName(name);
  };

  const fetchToRender = async () => {
    const toRender = await (
      await fetch(
        `https://alazanibackend.onrender.com/brands${cutOffPath}${idTorender}`
      )
    ).json();
    setTorender(toRender);
    setIsloading(false);
  };
  useEffect(() => {
    fetchToRender();
  }, []);

  useEffect(() => {
    getBrandName();
  }, []);

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
  }, []);

  if (isLoading) return "Loading...";

  console.log(toRender);

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
              <li className="active-product">
                {toRender.name[currentLanguage]}
              </li>
              {products.map((name) => {
                return (
                  <li>
                    <Link
                      onClick={0}
                      style={{ color: "#021d49", textDecoration: "none" }}
                      to={cutOffPath + name.id}
                    >
                      {name.name[currentLanguage]}
                    </Link>
                  </li>
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
    </>
  );
}

export default ProductDetails;
