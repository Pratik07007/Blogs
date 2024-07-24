import { useState } from "react";
import toast from "react-hot-toast";
import useUploadBlog from "../hooks/useUploadBlog";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const AddBlog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
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
    setIsLoading(true);
    fetch("https://api.cloudinary.com/v1_1/delnndqb2/upload", {
      method: "post",
      body: uploadPayload,
    })
      .then((res) => res.json())
      .then((res) => {
        const imageUrl = res.url;
        useUploadBlog({ title, content, imageUrl }).then((res) => {
          if (res.data.succes) {
            toast.success(res.data.msg);
            navigate(`/blog/${res.data.id}`);
          } else {
            toast.error(res.data.msg);
            setIsLoading(false);
          }
        });
      })
      .catch(() => {
        toast.error("Error uploading the blog");
        setIsLoading(false);
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
      </div>
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="w-1/2 border border-white hover:bg-blue-400 duration-500 rounded-2xl px-3 py-2 mt-4"
      >
        {isLoading ? (
          <div className="flex gap-5 items-center">
            <Spinner />
            <h1 className="text-xl">Loading....</h1>
          </div>
        ) : (
          "Upload"
        )}
      </button>
    </div>
  );
};

export default AddBlog;
