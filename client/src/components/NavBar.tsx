import { Link } from "react-router-dom";
import Avatar from "./Avatar";

const NavBar = () => {
  return (
    <div className="h-20 w-screen sm:flex sm:justify-between sm:items-center px-16 border-b-[0.5px] border-slate-400 hidden ">
      <Link to={"/"}>
        <div className="font-normal text-2xl cursor-pointer ">
          PRATIK DHIMAL
        </div>
      </Link>
      <div className="flex gap-5 items-center">
        <Link to={"/"}>
          <div className="font-thin text-2xl cursor-pointer ">Home</div>
        </Link>
        <Link to={"/blogs"}>
          <div className="font-thin text-2xl cursor-pointer ">Blogs</div>
        </Link>
        <Link to={"/contacts"}>
          <div className="font-thin text-2xl cursor-pointer ">Contact Us</div>
        </Link>
        <Avatar name={"Pratik"} />
      </div>
    </div>
  );
};

export default NavBar;
