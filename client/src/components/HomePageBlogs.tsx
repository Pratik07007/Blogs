import { useEffect, useState } from "react";
import HomePageSingleBlog from "./HomePageSingleBlog";
import axios from "axios";
import BACKEND_URL from "../utils/Backend_Url";
import HomePageBlogCardSkleton from "./skeletons/HomePageBlogCardSkleton";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination"


const HomePageBlogs = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/blog/all`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setBlogs(res.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="w-[70vw] flex md:flex-row flex-col items-center  md:justify-center gap-4 flex-wrap  p-4">
      {isLoading ? (
        <>
          <HomePageBlogCardSkleton />
          <HomePageBlogCardSkleton />
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
      <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious size={undefined} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" size={undefined}>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" size={undefined} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
    </div>
  );
};

export default HomePageBlogs;
