import { useEffect, useState } from "react";
import HomePageSingleBlog from "./HomePageSingleBlog";
import axios from "axios";
import BACKEND_URL from "../utils/Backend_Url";
import HomePageBlogCardSkleton from "./skeletons/HomePageBlogCardSkleton";
import Spinner from "./Spinner";

const HomePageBlogs = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [pageNo] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/blog/all?pageNo=${pageNo}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setBlogs((prev) => [...prev, ...res.data]);
        setIsLoading(false);
      });
  }, [pageNo]);

  return (
    <div className="w-full flex flex-col">
      <div className="w-[70vw] flex md:flex-row flex-col items-center  md:justify-center gap-4 flex-wrap  p-4">
        {isLoading ? (
          <>
            <HomePageBlogCardSkleton />
            <HomePageBlogCardSkleton />
            <HomePageBlogCardSkleton />
            <HomePageBlogCardSkleton />
            <HomePageBlogCardSkleton />
            <HomePageBlogCardSkleton />
          </>
        ) : (
          blogs.map((blog) => {
            return (
              <HomePageSingleBlog
                key={blog?.id}
                id={blog?.id}
                imageUrl={blog?.imageUrl}
                title={blog?.title}
                content={blog?.content}
                author={blog?.author?.name}
                createdAt={blog?.createdAt}
              />
            );
          })
        )}
      </div>
      {isLoading ? (
        <div className="w-full  flex justify-center items-center mt-4">
          <Spinner />
        </div>
      ) : null}
    </div>
  );
};

export default HomePageBlogs;
