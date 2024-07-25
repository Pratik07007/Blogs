import Avatar from "../components/Avatar";

const SinglePageBlogCard = () => {
  return (
    <div className="h-screen w-screen ">
      <div className="h-1/2 w-1/2 border border-white">
        <div className="flex items-center gap-4">
          <Avatar name="Pratik" />
          <h1>Pratik Dhimal</h1>
          <h1>Uplaod Time</h1>
        </div>
        <div><h1>TITLE</h1></div>
        <div>
            Image
        </div>
        <div>
            Desc
        </div>
      </div>
    </div>
  );
};

export default SinglePageBlogCard;
