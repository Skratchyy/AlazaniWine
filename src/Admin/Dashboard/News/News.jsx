import Modal from "react-modal";
import "./news.css";
import image from "../../../assets/about-us-image-main.png";
import { useState } from "react";
import NewsCard from "./newsCard.jsx";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function AdminNews() {
  const [modalIsOpen, setIsOpen] = useState(false);
  let subtitle;
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#000";
  }

  return (
    <div className="admin-about-us">
      <div className="admin-about-form">
        <button
          className="go_back_news"
          onClick={() => (window.location.pathname = "/admin-panelN3553")}
        >
          უკან დაბრუნება
        </button>
        <h1>სიახლეები</h1>
        <button onClick={openModal} className="add_news">
          სიახლის დამატება
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>სიახლის დამატება</h2>
          <button onClick={closeModal} className="close_modal">
            დახურვა
          </button>
          <div></div>
          <form style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="title-in-ge">სიახლის სათაური</label>
            <input name="title-in-ge" />
            <label htmlFor="title-in-en">სიახლის სათაური ინგლისურად</label>
            <input name="title-in-en" />
            <label htmlFor="shortDescription-in-ge">მოკლე აღწერა</label>
            <textarea name="shortDescription-in-ge" />
            <label htmlFor="shortDescription-in-en">
              მოკლე აღწერა ინგლისურად
            </label>
            <textarea name="shortDescription-in-en" />
            <label htmlFor="FullDescription-in-ge">სრული აღწერა</label>
            <textarea name="FullDescription-in-ge" />
            <label htmlFor="FullDescription-in-en">
              სრული აღწერა ინგლისურად
            </label>
            <textarea name="FullDescription-in-en" />
            <label htmlFor="title-in-en">ფოტო</label>
            <input type="file" name="title-in-en" />

            <button className="submit_btn">დამატება</button>
          </form>
        </Modal>

        <main>
          <NewsCard image={image}></NewsCard>
        </main>
      </div>
    </div>
  );
}

export default AdminNews;
