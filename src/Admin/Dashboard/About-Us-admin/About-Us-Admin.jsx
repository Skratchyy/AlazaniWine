import ImageUpload from "../../ComponentsForAdmin/ImageUpload";
import LongDescription from "../../ComponentsForAdmin/LongDescription";
import "./About-Us-Admin.css";
import { useState } from "react";
function AboutUsAdmin() {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const cancelHandler = () => {
    setFile("");
    window.location.replace("/admin-panelN3553");
  };

  console.log(file);
  return (
    <div className="admin-about-us">
      <div className="admin-about-form">
        <h3>About Us</h3>
        <LongDescription
          name="ab"
          id="ab-u"
          placeholder="ტესტი"
          title="მოკლე აღწერა ქართულად"
          cols="90"
          rows="7"
        />
        <LongDescription
          name="ab"
          id="ab-u"
          placeholder="test"
          title="მოკლე აღწერა ინგლისურად"
          cols="90"
          rows="7"
        />
        <LongDescription
          name="ab"
          id="ab-u"
          placeholder="ტესტი"
          title="სრული აღწერა ქართულად"
          cols="90"
          rows="7"
        />
        <LongDescription
          name="ab"
          id="ab-u"
          placeholder="test"
          title="სრული აღწერა ინგლისურად"
          cols="90"
          rows="7"
        />
        <div className="image-for-ab">
          <ImageUpload onChange={handleChange} />
        </div>

        <div className="submit-ab-u">
          <button className="submit-ab-u-btn">შენახვა</button>
          <button className="submit-ab-u-btn red" onClick={cancelHandler}>
            გაუქმება
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUsAdmin;
