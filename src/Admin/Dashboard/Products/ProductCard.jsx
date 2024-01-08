import { useState } from "react";
const ProductCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="brand_card_container">
        <img src={props.image} alt="Logo" />
        <h3>{props.productName}</h3>
        <div className="brand_controllers_admin">
          <button
            className="dropdown-toggle"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {!isOpen ? "შეცვლა" : "გაუქმება"}
          </button>
          <button>წაშლა</button>
        </div>
      </div>
      {isOpen && (
        <>
          <form action="update" method="patch">
            <label htmlFor="brandName">პროდუქტის სახელი</label>
            <input type="text" name="brandName" id="brandName" />
            <label htmlFor="brandName">პროდუქტის სახელი ინგლისურად</label>
            <input type="text" name="brandName" id="brandName" />
            <label htmlFor="brandName">პროდუქტის აღწერა</label>
            <textarea
              type="text"
              cols={50}
              rows={10}
              name="brandName"
              id="brandName"
            />
            <label htmlFor="brandName">პროდუქტის აღწერა ინგლისურად</label>
            <textarea
              type="text"
              cols={50}
              rows={10}
              name="brandName"
              id="brandName"
            />
            <label htmlFor="brandName">პროდუქტის ფოტო</label>
            <input type="file" name="brandName" id="brandProduct" />

            <button type="submit">შენახვა</button>
          </form>
        </>
      )}
    </>
  );
};

export default ProductCard;
