import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const ActiveProductItem = ({ name, result, currentLanguage }) => {
  const location = useLocation();
  const currentId = location.pathname.split("/").pop();
  const isActive = currentId === name._id;
  return (
    <li className={isActive ? "active-product" : ""}>
      <Link
        style={{ color: "#021d49", textDecoration: "none" }}
        to={result + "/" + name._id}
      >
        {name.name[currentLanguage]}
      </Link>
    </li>
  );
};

export default ActiveProductItem;
