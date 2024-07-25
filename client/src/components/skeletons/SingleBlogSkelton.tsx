const SingleBlogSkelton = () => {
  return (
    <div className="flex justify-center items-center overflow-x-hidden px-8 w-full">
      <div className="w-[100%] md:w-2/3 border border-gray-200 p-4 mt-16 animate-pulse">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-gray-600 rounded-full h-10 w-96"></div>
        </div>
        <div className="bg-gray-600 h-8 mb-4"></div>
        <div className="bg-gray-600 h-96 w-full mb-10"></div>
        <div className="bg-gray-600 h-48 mb-4"></div>
      </div>
    </div>
  );
};

export default SingleBlogSkelton;
