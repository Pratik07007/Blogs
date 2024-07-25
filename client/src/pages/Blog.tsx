import { useParams } from "react-router-dom";
import SinglePageBlogCard from "../components/SingleBlogcard";
import BACKEND_URL from "../utils/Backend_Url";
import { useEffect, useState } from "react";
import axios from "axios";

const Blog = () => {
  const [blog, setBlog] = useState({
    id: String,
    title: String,
    content: String,
    imageUrl: String,
    createdAt: String,
    author: {
      name: String,
      id: String,
    },
  });
  const { blogId } = useParams();

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/blog/single/${blogId}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.error("Error fetching blog:", err));
  }, [blogId]);

  return <SinglePageBlogCard />;
};

export default Blog;
