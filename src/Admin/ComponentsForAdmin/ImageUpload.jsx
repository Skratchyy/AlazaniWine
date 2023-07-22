import React from "react";
import { useState } from "react";

export function ImageUpload(props) {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className="img-upload-admin" style={{ width: "40%", height: "75px" }}>
      <p>Image Upload</p>

      <input type="file" onChange={props.onChange} />
    </div>
  );
}

export default ImageUpload;
