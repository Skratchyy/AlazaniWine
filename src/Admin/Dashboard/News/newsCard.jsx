import Modal from "react-modal";
import { useState } from "react";
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

const NewsCard = (props) => {
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
    <div className="container_news_card">
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
          <input name="title-in-ge" placeholder="" />
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
          <label htmlFor="FullDescription-in-en">სრული აღწერა ინგლისურად</label>
          <textarea name="FullDescription-in-en" />
          <label htmlFor="title-in-en">ფოტო</label>
          <input type="file" name="title-in-en" />

          <button className="submit_btn">შენახვა</button>
        </form>
      </Modal>

      <img src={props.image || "#"} alt="news" />
      <div className="details_news_card">
        <p>{props.name || "News Header"}</p>

        <div className="actions_news_card">
          <button onClick={openModal}>შეცვლა</button>
          <button>წაშლა</button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
