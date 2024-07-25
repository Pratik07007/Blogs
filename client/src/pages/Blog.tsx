import { useParams } from "react-router-dom";
import SinglePageBlogCard from "../components/SingleBlogcard";
import BACKEND_URL from "../utils/Backend_Url";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleBlogSkelton from "../components/skeletons/SingleBlogSkelton";

const Blog = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [blog, setBlog] = useState({
    id: "",
    title: "",
    content: "",
    imageUrl: "",
    createdAt: "",
    author: {
      name: "",
      id: "",
    },
  });
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
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blog:", err);
      });
  }, [blogId]);

  return (
    <>
      {isLoading ? <SingleBlogSkelton /> : <SinglePageBlogCard blog={blog} />}
    </>
  );
};

export default Blog;
