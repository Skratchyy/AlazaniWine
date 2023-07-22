import Modal from "react-modal";
import { useState } from "react";
import ReactDOM from "react-dom";
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
  function closeModal() {
    setIsOpen(false);
  }
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);
  function openModal2() {
    setIsOpen2(true);
  }
  function closeModal2() {
    setIsOpen2(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  return (
    <div className="admin-about-us">
      <div className="admin-about-form">
        <h1>News</h1>
        <button onClick={openModal}>სიახლის დამატება</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>სიახლე</h2>
          <button onClick={closeModal}>დახურვა</button>
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

            <button>დამატება</button>
          </form>
        </Modal>

        <button
          onClick={openModal2}
          style={{ marginBottom: "50px", marginTop: "50px" }}
        >
          სიახლის წაშლა
        </button>

        <Modal
          isOpen={modalIsOpen2}
          onRequestClose={closeModal2}
          style={customStyles}
          contentLabel="Example Modal"
        >
          Hi
        </Modal>
      </div>
    </div>
  );
}

export default AdminNews;
