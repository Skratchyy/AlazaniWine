import "./Products.css";
function Products(props) {
  return (
    <div class="products" style={{ marginBottom: "5%" }}>
      <div class="title-img">
        <a
          //again link to whatever brand products should open

          href={`/ka/products/${props.productObj.id}`}
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
        href={`/ka/products/${props.productObj.id}`}
        style={{ textDecoration: "none", color: "#000" }}
      >
        <div class="product-txt">
          <p>{props.productObj.brandDescription}</p>
        </div>
        <img
          class="hg"
          //this must be a bottle picture link
          src={props.productObj.productImageURL}
          alt=""
        />
      </a>
    </div>
  );
}

export default Products;
