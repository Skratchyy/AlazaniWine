import "./brandAdmin.css";
import image from "../../../assets/about-us-image-main.png";
import BrandCard from "./BrandCard";
const BrandAdmin = () => {
  return (
    <>
      <section>
        <div className="brands_admin_options">
          <h1>ბრენდები</h1>
          <BrandCard brand={"შეცვლა"} image={image} brandName="Avanturi" />
          <BrandCard brand={"შეცვლა"} image={image} brandName="Avanturi" />
          <BrandCard brand={"შეცვლა"} image={image} brandName="Avanturi" />
        </div>
      </section>
    </>
  );
};

export default BrandAdmin;
