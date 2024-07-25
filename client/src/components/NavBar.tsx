import { Link, useNavigate } from "react-router-dom";
import Avatar from "./Avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[10vh] w-screen sm:flex sm:justify-between sm:items-center px-16 border-b-[0.1px] border-white hidden ">
      <Link to={"/"}>
        <div className="font-normal text-2xl cursor-pointer ">THE BLOG</div>
      </Link>
      <div className="flex gap-5 items-center">
        <Link to={"/"}>
          <div className="font-thin text-2xl cursor-pointer ">Home</div>
        </Link>
        <Link to={"/contacts"}>
          <div className="font-thin text-2xl cursor-pointer ">Contact Us</div>
        </Link>
        {localStorage.getItem("token") ? (
          <Link to={"/upload"}>
            <div className=" px-3 py-2 rounded-2xl bg-green-400  text-2xl text-black font-medium cursor-pointer ">
              Create Blog
            </div>
          </Link>
        ) : (
          <Link to={"/signin"}>
            <div className=" px-3 py-2 rounded-2xl bg-green-400  text-2xl text-black font-medium cursor-pointer ">
              Sign in to create blog
            </div>
          </Link>
        )}

        <div>
          {localStorage.getItem("token") ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <Avatar size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="rounded-2xl mt-3 hover:bg-blue-400 duration-500">
                <DropdownMenuItem
                  onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/");
                  }}
                  className="text-xl py-2  "
                >
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Avatar size={16} />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
