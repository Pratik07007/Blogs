import axios from "axios";
import BACKEND_URL from "../utils/Backend_Url";

interface blogUploadProps {
  title: string;
  content: string;
  imageUrl?: string;
}
const useUploadBlog = async ({
  title,
  content,
  imageUrl = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",
}: blogUploadProps) => {
  const response = await axios.post(
    `${BACKEND_URL}/blog`,
    {
      title,
      content,
      imageUrl,
    },
    {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }
  );
  return response;
};

export default useUploadBlog;
