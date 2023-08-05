import ProductDetails from "./ProductDetails";
import { useState, useEffect } from "react";
import { useLocation, Navigate } from "react-router";
export default function BrandDetails() {
  const location = useLocation().pathname;
  const currentLocation = location.split("/")[3];
  const currentLanguage = location.split("/")[1];

  const [brands, setBrands] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const fetchBrands = async () => {
    const brands = await (
      await fetch(
        `https://alazanibackend.onrender.com/brands/${currentLocation}/products`
      )
    ).json();
    setBrands(brands);
    setIsloading(false);
  };
  useEffect(() => {
    fetchBrands();
  }, []);
  if (isLoading) return "Loading...";
  const toNavigate = location + "/" + brands[0]._id;
  return <Navigate to={toNavigate} />;
}
