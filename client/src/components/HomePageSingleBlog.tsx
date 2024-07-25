import { useNavigate } from "react-router-dom";
import convertToLocalTime from "../utils/convertToLocalTime";

interface HomePageSingleBlogProps {
  id: string;
  imageUrl: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
}

const HomePageSingleBlog = ({
  id,
  imageUrl,
  title,
  content,
  createdAt,
  author,
}: HomePageSingleBlogProps) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/blog/${id}`)}
      className="md:max-w-[20vw] w-full md:h-[40vh]  border rounded-xl flex flex-col gap-3 p-5 justify-center"
    >
      <img
        className="rounded-xl h-36 w-[100%] cursor-pointer"
        src={imageUrl}
        alt="Blog Image"
      />
      <h1 className="break-words font-bold cursor-pointer">
        {title.length > 70 ? title.substring(0, 60) + " ......." : title}
      </h1>
      <h2 className="break-words cursor-pointer">
        {content.length > 20
          ? title.substring(0, 99) + " read more..."
          : content}
      </h2>
      <div>
        <h4 className="break-words font-bold cursor-pointer">{author}</h4>
        <h6 className="break-words mt-1 text-gray-500 cursor-pointer">
          {convertToLocalTime(createdAt)}
        </h6>
      </div>
    </div>
  );
};

export default HomePageSingleBlog;
