import { useState } from "react";
const BrandCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="brand_card_container">
        <img src={props.image} alt="Logo" />
        <h3>{props.brandName}</h3>
        <div className="brand_controllers_admin">
          <button
            className="dropdown-toggle"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {!isOpen ? "შეცვლა" : "გაუქმება"}
          </button>
          <button
            onClick={() =>
              (window.location.href = `${window.location.href}products`)
            }
          >
            პროდუქტები
          </button>
        </div>
      </div>
      {isOpen && (
        <>
          <form action="update" method="patch">
            <label htmlFor="brandName">ბრენდის სახელი</label>
            <input type="text" name="brandName" id="brandName" />
            <label htmlFor="brandName">ბრენდის სახელი ინგლისურად</label>
            <input type="text" name="brandName" id="brandName" />
            <label htmlFor="brandName">ბრენდის აღწერა</label>
            <textarea
              type="text"
              cols={50}
              rows={10}
              name="brandName"
              id="brandName"
            />
            <label htmlFor="brandName">ბრენდის აღწერა ინგლისურად</label>
            <textarea
              type="text"
              cols={50}
              rows={10}
              name="brandName"
              id="brandName"
            />
            <label htmlFor="brandName">ბრენდის ლოგო</label>
            <input type="file" name="brandName" id="brandLogo" />
            <label htmlFor="brandName">ბრენდის ერთ-ერთი პროდუქტის ფოტო</label>
            <input type="file" name="brandName" id="brandProduct" />

            <button type="submit">შენახვა</button>
          </form>
        </>
      )}
    </>
  );
};

export default BrandCard;
