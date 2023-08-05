import React from "react";
import { useResolvedPath, useMatch, useLocation } from "react-router";
import { Link } from "react-router-dom";

function ProductDetails({ name, result, currentLanguage }) {
  const currentPath = useLocation().pathname;
  const idTorender = currentPath.split("/")[3];
  const isActive = idTorender === name._id;

  return (
    <div className={isActive ? "active-brand" : ""}>
      <Link
        style={{ color: "#021d49", textDecoration: "none" }}
        to={`/ka/products/${name._id}`}
      >
        <img src={name.brandImageURL} />
      </Link>
    </div>
  );
}

export default ProductDetails;
