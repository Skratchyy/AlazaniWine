import { useLocation } from "react-router";

import "./Products.css";
function Products(props) {
  const CurrentLocation = useLocation().pathname;
  const renderKa = CurrentLocation[1] + CurrentLocation[2] == "ka";

  return (
    <>
      {renderKa ? (
        <div class="products" style={{ marginBottom: "5%" }}>
          <div class="title-img">
            <a
              //again link to whatever brand products should open

              href={`/ka/products/${props.productObj._id}`}
              style={{ textDecoration: "none", color: "#000" }}
            >
              <img
                // this must be a linl to brand image
                src={props.productObj.brandImageURL}
                alt=""
              />
            </a>
          </div>
          <a
            //   This must be a link to a brand products
            href={`/ka/products/${props.productObj._id}`}
            style={{ textDecoration: "none", color: "#000" }}
          >
            <div class="product-txt">
              <p>{props.productObj.description.ka}</p>
            </div>
            <img
              class="hg"
              //this must be a bottle picture link
              src={props.productObj.productImageURL}
              alt=""
            />
          </a>
        </div>
      ) : (
        <div class="products" style={{ marginBottom: "5%" }}>
          <div class="title-img">
            <a
              //again link to whatever brand products should open

              href={`/en/products/${props.productObj.id}`}
              style={{ textDecoration: "none", color: "#000" }}
            >
              <img
                // this must be a linl to brand image
                src={props.productObj.brandImageURL}
                alt=""
              />
            </a>
          </div>
          <a
            //   This must be a link to a brand products
            href={`/en/products/${props.productObj.id}`}
            style={{ textDecoration: "none", color: "#000" }}
          >
            <div class="product-txt">
              <p>{props.productObj.description.en}</p>
            </div>
            <img
              class="hg"
              //this must be a bottle picture link
              src={props.productObj.productImageURL}
              alt=""
            />
          </a>
        </div>
      )}
    </>
  );
}

export default Products;
