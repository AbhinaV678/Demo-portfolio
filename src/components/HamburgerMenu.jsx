import { useContext } from "react";
import MenuContext from "../utils/MenuContext";
import { Link } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";
import { LinkedInUrl } from "../constants";

const HamburgerMenu = () => {
  const { menuIsOpen } = useContext(MenuContext);

  return (
    <div className="absolute bg-lime-600 sm:hidden w-screen">
      {menuIsOpen && (
        <ul className="flex-col h-screen">
          <li className="py-10 px-10">
            <Link to={"/"} className="text-xl text-fuchsia-300">
              𝓗𝓸𝓶𝓮
            </Link>
          </li>
          <li className="py-10 px-10">
            <Link to={"/projects"} className="text-xl text-fuchsia-300">
              𝓟𝓻𝓸𝓳𝓮𝓬𝓽𝓼
            </Link>
          </li>
          <li className="py-10 px-10">
            <Link to={"/contact"} className="text-xl text-fuchsia-300">
              𝓒𝓸𝓷𝓽𝓪𝓬𝓽
            </Link>
          </li>
          <li className="py-10 px-10">
            <Link to={LinkedInUrl} className="text-xl text-fuchsia-300">
              𝓛𝓲𝓷𝓴𝓮𝓭𝓘𝓷
            </Link>
          </li>
          <li className="py-10 px-10">
            <ThemeSwitch />
          </li>
        </ul>
      )}
    </div>
  );
};

export default HamburgerMenu;
