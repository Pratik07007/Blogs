import { useParams } from "react-router-dom";
import SinglePageBlogCard from "../components/SingleBlogcard";
import BACKEND_URL from "../utils/Backend_Url";
import { useEffect, useState } from "react";
import axios from "axios";

const Blog = () => {
  const [blog, setBlog] = useState(null);

  const { blogId } = useParams();

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/blog/single/${blogId}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setBlog(res.data);
      })
      .catch((err) => {
        console.error("Error fetching blog:", err);
      });
  }, [blogId]);

  return (
    <div className="flex items-center justify-center">
      <SinglePageBlogCard blog={blog} />
    </div>
  );
};

export default Blog;
