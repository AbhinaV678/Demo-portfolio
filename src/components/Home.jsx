/* eslint-disable react/no-unescaped-entities */
// to_do: Theming  , Resume download button, Feedback form, hamburger menu , Footer with media handles and add media queries.

import { profilePic } from "../assets";
import ResumeViewButton from "./ResumeViewButton";
import HamburgerMenu from "./HamburgerMenu";
import ThemeContext from "../utils/ThemeContext";
import { useContext } from "react";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`bg-black h-screen  home ${theme}`}>
      <HamburgerMenu />

      <div className="p-4 flex items-center justify-center">
        <img
          src={profilePic}
          className="rounded-full lg:h-[300px] md:h-[200px] max-sm:h-[150px] h-[150px] border-4 border-fuchsia-300 m-10"
        />
      </div>
      <p
        className={`lg:text-2xl md:text-xl max-sm:text-lg text-fuchsia-300 para ${theme} flex items-center justify-center px-10`}
      >
        𝓗𝓲! 𝓜𝔂 𝓷𝓪𝓶𝓮 𝓲𝓼 𝓐𝓫𝓱𝓲𝓷𝓪𝓿 𝓚𝓾𝓶𝓪𝓻 𝓓𝓮𝓫. 𝓘 𝓪𝓶 𝓪 𝓕𝓻𝓸𝓷𝓽𝓮𝓷𝓭 𝓭𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓻. 𝓦𝓮𝓵𝓬𝓸𝓶𝓮 𝓽𝓸
        𝓶𝔂 𝓹𝓸𝓻𝓽𝓯𝓸𝓵𝓲𝓸.
      </p>
      <div className="pt-10 flex justify-center items-center w-full">
        <ResumeViewButton />
      </div>
    </div>
  );
};

export default Home;
