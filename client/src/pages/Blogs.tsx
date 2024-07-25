import HomePageBlogs from "../components/HomePageBlogs";

const Blogs = () => {
  return (
    <div className="flex flex-col gap-20 items-center ">
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center w-[70vw] h-[20vh] border-b mt-10 ">
          <h1 className=" text-[10vw] font-semibold">THE BLOG</h1>
        </div>
      </div>
      <div className="flex items-start">
        <HomePageBlogs />
      </div>
    </div>
  );
};

export default Blogs;
