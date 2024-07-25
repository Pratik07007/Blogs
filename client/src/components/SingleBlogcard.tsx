import Avatar from "./Avatar";

const SinglePageBlogCard = ({ blog }: any) => {
  const convertToLocalTime = (dbLocalTime: string) => {
    var date = new Date(dbLocalTime);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="flex justify-center items-center overflow-x-hidden">
      <div className="w-[80%] md:w-2/3 border border-gray-200 p-4 mt-16">
        <div className="flex items-center gap-4 mb-4">
          <Avatar name={blog?.author?.name} size={4} />
          <div>
            <h1 className="text-xl font-bold">{blog?.author?.name}</h1>
            <p className="text-gray-500">
              {convertToLocalTime(blog?.createdAt)}
            </p>
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-2 break-words">{blog?.title}</h1>
        <img
          src={blog?.imageUrl}
          alt={blog?.title}
          className="w-full h-auto mb-10 mt-10"
        />
        <p className="text-lg break-words">{blog?.content}</p>
      </div>
    </div>
  );
};

export default SinglePageBlogCard;




