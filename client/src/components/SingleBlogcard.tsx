import Avatar from "../components/Avatar";

const SinglePageBlogCard = () => {
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
  console.log(convertToLocalTime("2024-07-25T08:09:03.011Z"));
  return (
    <div className="h-screen w-screen ">
      <div className="h-1/2 w-1/2 border border-white">
        <div className="flex items-center gap-4">
          <Avatar name="Pratik" size={30} />
          <h1>Pratik Dhimal</h1>
          <h1>Uplaod Time</h1>
        </div>
        <div>
          <h1>TITLE</h1>
        </div>
        <div>Image</div>
        <div>Desc</div>
      </div>
    </div>
  );
};

export default SinglePageBlogCard;
