import { useParams } from "react-router-dom";

const Blog = () => {
  const url = useParams();

  return <div>{JSON.stringify(url)}</div>; //gives back the url params
};

export default Blog;
