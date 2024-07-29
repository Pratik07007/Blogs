import { Link, useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import { VscThreeBars } from "react-icons/vsc";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import toast from "react-hot-toast";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className=" bg-black border-b-[0.2px] border-white px-10">
      <div className="max-w-screen-xl flex md:flex-row md:flex-wrap flex-col gap-3 items-center justify-between mx-auto p-4">
        <Link to={"/"}>
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            THE BLOG
          </span>
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={() => {
              if (localStorage.getItem("token")) {
                return navigate("/upload");
              }
              toast.error("Please login to continue");
              navigate("/signin");
            }}
            type="button"
            className="text-white outline-none hover:bg-blue:200 mr-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-4 py-2 text-center rounded-xl"
          >
            Create Blog
          </button>
          {localStorage.getItem("token") ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <Avatar size={4} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="rounded-2xl mt-8 hover:bg-blue-400 w-32 border-[0.2px] border-white text-center cursor-pointer duration-500">
                <DropdownMenuItem
                  onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/");
                  }}
                  className="text-xl py-2  "
                >
                  Log out ?
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : null}
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <VscThreeBars className="text-3xl cursor-pointer" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="border-white border rounded-2xl mt-8 hover:bg-blue-400 w-32  text-center cursor-pointer duration-500">
                <DropdownMenuItem
                  className="border-b px-2 py-1 "
                  onClick={() => navigate("/")}
                >
                  Home
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="border-b px-2 py-1 "
                  onClick={() => navigate("/contacts")}
                >
                  Contact us
                </DropdownMenuItem>
                <DropdownMenuItem
                  className=" px-2 py-1"
                  onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/");
                  }}
                >
                  Log out ?
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 cursor-pointer border-gray-700">
            <Link to={"/"}>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-white  rounded md:bg-transparent"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
            </Link>
            <Link to={"/contacts"}>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 rounded  text-white hover:text-white md:hover:bg-transparent border-gray-700"
                >
                  Contact
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
