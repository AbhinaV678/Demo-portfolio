import ThemeContext from "../utils/ThemeContext";
import { useContext } from "react";

const ThemeSwitch = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <button
        onClick={toggleTheme}
        className="text-fuchsia-300 h-5 w-auto text-xl"
      >
        𝓢𝔀𝓲𝓽𝓬𝓱 𝓣𝓱𝓮𝓶𝓮
      </button>
    </div>
  );
};

export default ThemeSwitch;
