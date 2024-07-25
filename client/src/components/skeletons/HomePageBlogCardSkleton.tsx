const HomePageBlogCardSkleton = () => {
  return (
    <div className="md:max-w-[20vw] w-full md:h-[40vh] border rounded-xl flex flex-col gap-3 p-5 justify-center animate-pulse">
      <div className="rounded-xl h-36 w-full bg-gray-300"></div>{" "}
      {/* Image Placeholder */}
      <div className="break-words font-bold cursor-pointer bg-gray-300 h-6 w-3/4"></div>{" "}
      {/* Title Placeholder */}
      <div className="break-words cursor-pointer bg-gray-300 h-12 w-full"></div>{" "}
      {/* Content Placeholder */}
      <div className="flex flex-col">
        <div className="break-words font-bold cursor-pointer bg-gray-300 h-6 w-1/2"></div>{" "}
        {/* Author Placeholder */}
        <div className="break-words mt-1 text-gray-500 cursor-pointer bg-gray-300 h-4 w-1/4"></div>{" "}
        {/* Created At Placeholder */}
      </div>
    </div>
  );
};

export default HomePageBlogCardSkleton;
