import { Link } from "react-router-dom";
import { LOGO } from "../assets/index";
import ThemeSwitch from "./ThemeSwitch";
import { useContext } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import MenuContext from "../utils/MenuContext";
import { LinkedInUrl } from "../constants";

const Header = () => {
  const { menuIsOpen, setMenuIsOpen } = useContext(MenuContext);
  // Css to make header sticky - Classname = "sticky top-0"

  return (
    <div className="flex bg-yellow-100 w-full h-20 justify-between">
      <div>
        <img
          src={LOGO}
          className="h-10 max-sm:w-10  md:w-10 max-sm:pt-2 lg:w-16 lg:m-5  max-sm:m-4 md:m-4
        "
        />
      </div>

      <div className=" flex items-center sm:hidden max-sm:ml-12 md:ml-20 lg:ml-28">
        <button onClick={() => setMenuIsOpen(!menuIsOpen)} className="pr-8">
          {menuIsOpen ? (
            <RxCross2 className="size-8" />
          ) : (
            <IoMdMenu className="size-8" />
          )}
        </button>
      </div>

      <div className="flex items-center max-sm:hidden ml-20">
        <ul className="flex">
          <li className="px-10">
            <Link to={"/"} className="text-xl text-fuchsia-300">
              𝓗𝓸𝓶𝓮
            </Link>
          </li>
          <li className="px-10">
            <Link to={"/projects"} className="text-xl text-fuchsia-300">
              𝓟𝓻𝓸𝓳𝓮𝓬𝓽𝓼
            </Link>
          </li>
          <li className="px-10">
            <Link to={"/contact"} className="text-xl text-fuchsia-300">
              𝓒𝓸𝓷𝓽𝓪𝓬𝓽
            </Link>
          </li>
          <li className="px-10">
            <Link to={LinkedInUrl} className="text-xl text-fuchsia-300">
              𝓛𝓲𝓷𝓴𝓮𝓭𝓘𝓷
            </Link>
          </li>
          <li className="px-10">
            <ThemeSwitch />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
