import { useEffect, useState } from "react";
import HomePageSingleBlog from "./HomePageSingleBlog";
import axios from "axios";
import BACKEND_URL from "../utils/Backend_Url";

const HomePageBlogs = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/blog/all`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => setBlogs(res.data));
  }, []);

  console.log(blogs);
  return (
    <div className="w-[70vw] border flex md:flex-row flex-col items-center  md:justify-center gap-4 flex-wrap border-white border-solid p-4 rounded-xl">
      {blogs.map((blog) => {
        return (
          <HomePageSingleBlog
            key={blog?.id}
            imageUrl={blog?.imageUrl}
            title={blog?.title}
            content={blog?.content}
            author={blog?.author?.name}
            createdAt={blog?.createdAt}
          />
        );
      })}
    </div>
  );
};

export default HomePageBlogs;
