import { Link } from "react-router-dom";
import { driveFolderUrl } from "../constants";

const ResumeViewButton = () => {
  return (
    <div>
      <Link to={driveFolderUrl}>
        <button className="text-fuchsia-300 bg-fuchsia-950 p-4 lg:text-xl text-sm rounded-lg">
          𝓥𝓲𝓮𝔀 𝓡𝓮𝓼𝓾𝓶𝓮
        </button>
      </Link>
    </div>
  );
};

export default ResumeViewButton;
