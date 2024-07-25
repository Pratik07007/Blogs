import { useParams } from "react-router-dom";
import SinglePageBlogCard from "../components/SingleBlogcard";
import BACKEND_URL from "../utils/Backend_Url";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleBlogSkelton from "../components/skeletons/SingleBlogSkelton";

const Blog = () => {
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { blogId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BACKEND_URL}/blog/single/${blogId}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setBlog(res.data);
        setIsLoading(false)
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
