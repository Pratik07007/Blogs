import { useState } from "react";
import toast from "react-hot-toast";
import useUploadBlog from "../hooks/useUploadBlog";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = () => {
    if (!image) {
      toast.error("Please select an image");
      return;
    }

    const uploadPayload = new FormData();
    uploadPayload.append("file", image);
    uploadPayload.append("upload_preset", "pratik_blogs");
    uploadPayload.append("cloud_name", "delnndqb2");

    fetch("https://api.cloudinary.com/v1_1/delnndqb2/upload", {
      method: "post",
      body: uploadPayload,
    })
      .then((res) => res.json())
      .then((res) => {
        toast.success("Upload successful:");
        const imageUrl = res.url;
        //handel backend upload task here !
        useUploadBlog({ title, content, imageUrl });
        console.log(res);
        console.log(title);
        console.log(content);
        // Handle response as needed (e.g., save URL to state, database, etc.)
      })
      .catch(() => {
        toast.error("Error uploading image:");
      });
  };

  return (
    <div className="flex items-center flex-col gap-5 mt-20">
      <h1 className="capitalize">Publish your content</h1>
      <div className="flex items-start w-1/2">
        <label htmlFor="title">Title</label>
      </div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg outline-none block w-1/2 p-2.5"
        placeholder="Title"
      />
      <div className="flex items-start w-1/2">
        <label htmlFor="content">Content</label>
      </div>
      <textarea
        rows={15}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg outline-none block w-1/2 p-2.5"
        placeholder="Content"
      />
      <div className="flex items-start w-1/2">
        <label htmlFor="image">Upload Image here</label>
      </div>
      <div className="flex items-center w-1/2">
        <input onChange={(e: any) => setImage(e.target.files[0])} type="file" />
        <button
          onClick={handleSubmit}
          className="w-full border border-white hover:bg-blue-400 duration-500 rounded-2xl px-3 py-2 mt-4"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default AddBlog;
