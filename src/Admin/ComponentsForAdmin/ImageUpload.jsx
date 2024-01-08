import React from "react";
import { useState } from "react";
import image from "../../assets/about-us-image-main.png";
export function ImageUpload(props) {
  const [file, setFile] = useState();
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check if the selected file type is allowed
      if (isValidFileType(file.type)) {
        setFile(file);
      } else {
        alert(`ფაილის ფორმატი მიუღებელია, მიიღება მხოლოდ ფოტოები ფორმატით: "image/jpeg",
        "image/png",
        "image/pdf",
        "image/apng",
        "image/avif",
        "image/gif",
        "image/svg",`);
        // Clear the input field
        e.target.value = null;
      }
    }
  };

  console.log(file);
  const isValidFileType = (fileType) => {
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/pdf",
      "image/apng",
      "image/avif",
      "image/gif",
      "image/svg",
    ];
    return allowedTypes.includes(fileType);
  };
  return (
    <div className="img-upload-admin" style={{ width: "40%", height: "200px" }}>
      <p>ფოტო</p>
      <img
        src={image} // image to take from server
        alt="Currently Uploaded"
        style={{ width: "140%", height: "100%" }}
      />
      <input type="file" accept="image/*" onChange={handleFileChange} />
    </div>
  );
}

export default ImageUpload;
