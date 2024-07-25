interface HomePageSingleBlogProps {
  imageUrl: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
}

const HomePageSingleBlog = ({
  imageUrl,
  title,
  content,
  createdAt,
  author,
}: HomePageSingleBlogProps) => {
  return (
    <div className="md:w-[22%] w-full md:h-96  p-3 border rounded-xl flex flex-col gap-3">
      <img className="rounded-xl h-36 w-[100%]" src={imageUrl} alt="Blog Image" />
      <h1 className="break-words font-bold">{title}</h1>
      <h2 className="break-words">{content}</h2>
      <div>
        <h4 className="break-words font-bold">{author}</h4>
        <h6 className="break-words mt-1 text-gray-500">{createdAt}</h6>
      </div>
    </div>
  );
};

export default HomePageSingleBlog;
