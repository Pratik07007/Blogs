import { useNavigate } from "react-router-dom";
import { LandingPage } from "../components/LandingPage";

const Home = () => {
  const navigate = useNavigate();
  const words = [
    {
      text: "Unleash",
    },
    {
      text: "your",
    },
    {
      text: "Creativity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <p className="text-neutral-600 dark:text-neutral-200 text-2xl  mb-10">
        Your Ideas, Your Words, Your Blog.
      </p>
      <LandingPage words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button
          onClick={() => navigate("/signin")}
          className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm"
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default Home;
