import ImageUpload from "../../ComponentsForAdmin/ImageUpload";
import LongDescription from "../../ComponentsForAdmin/LongDescription";
import "./Abous-Us-Admin.css";
import { useState } from "react";
function WineMemoryAdmin() {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className="admin-about-us">
      <div className="admin-about-form">
        <h3>Wine Memory</h3>
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
          <img src={file} style={{ width: "100px" }} />
        </div>

        <div className="submit-ab-u">
          <button className="submit-ab-u-btn">დასრულება</button>
        </div>
      </div>
    </div>
  );
}

export default WineMemoryAdmin;
