import Avatar from "./Avatar"; // Import Avatar component if needed

const SinglePageBlogCard = ({ blog }: any) => {
  const convertToLocalTime = (dbLocalTime: string) => {
    var date = new Date(dbLocalTime);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="w-1/2 border border-gray-200 p-4">
        <div className="flex items-center gap-4 mb-4">
          <Avatar name={blog?.author?.name} size={30} />
          <div>
            <h1 className="text-xl font-bold">{blog?.author?.name}</h1>
            <p className="text-gray-500">{convertToLocalTime(blog?.createdAt)}</p>
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-2">{blog?.title}</h1>
        <img src={blog?.imageUrl} alt={blog?.title} className="w-full h-auto mb-4" />
        <p className="text-lg">{blog?.content}</p>
      </div>
    </div>
  );
};

export default SinglePageBlogCard;
