import "./brandAdmin.css";
import image from "../../../assets/about-us-image-main.png";
import ProductCard from "./ProductCard";
const ProductAdminComponent = () => {
  return (
    <>
      <section>
        <div className="brands_admin_options">
          <h1>პროდუქტები</h1>
          <ProductCard brand={"შეცვლა"} image={image} productName="ღვინო" />
          <ProductCard brand={"შეცვლა"} image={image} productName="ხვანჭკარა" />
          <ProductCard brand={"შეცვლა"} image={image} productName="Avanturi" />
        </div>
      </section>
    </>
  );
};

export default ProductAdminComponent;
