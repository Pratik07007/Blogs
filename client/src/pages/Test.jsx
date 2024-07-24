import { useState } from "react";

const Test = () => {
  const [image, setImage] = useState([]);

  const handleFile = () => {
    const uploadPayload = new FormData();

    uploadPayload.append("file", image);
    uploadPayload.append("upload_preset", "pratik_blogs");
    uploadPayload.append("cloud_name", "delnndqb2");

    fetch("https://api.cloudinary.com/v1_1/delnndqb2/upload", {
      method:"post",
      body: uploadPayload,
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button className="bg-red-400" onClick={handleFile}>
        Submit
      </button>{" "}
      <br />
      <br />
      
    </>
  );
};

export default Test;
