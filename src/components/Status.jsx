import { Link } from "react-router-dom";
import { useContext } from "react";
import FormResponseContext from "../utils/FormResponseContext";
import HamburgerMenu from "./HamburgerMenu";

const Status = () => {
  const { res } = useContext(FormResponseContext);

  if (res?.success == true) {
    return (
      <div
        className="
      flex  items-center justify-center h-screen bg-fuchsia-300"
      >
        <HamburgerMenu />

        <div className="flex-col">
          <p className="">Message has been delivered successfully.</p>
          <br />
          <Link to="/home">
            <button
              className="h-10 w-20 bg-orange-200 rounded-lg mx-24
            "
            >
              Home
            </button>
          </Link>
        </div>
      </div>
    );
  } else if (res?.success == false) {
    return (
      <div
        className="
      flex  items-center justify-center h-screen bg-fuchsia-300"
      >
        <HamburgerMenu />

        <div className="flex-col">
          <p className="">
            Message has not been delivered.
            <br />
            Kindly mail your message to abhinavdeb4@gmail.com.
          </p>
          <br />
          <Link to="/home">
            <button
              className="h-10 w-20 bg-orange-200 rounded-lg mx-24
            "
            >
              Home
            </button>
          </Link>
        </div>
      </div>
    );
  }
  //on Refresh res becomes null and show the below message
  return (
    <div
      className="
      flex items-center justify-center h-screen bg-fuchsia-300"
    >
      <HamburgerMenu />
      <div className="flex-col">
        <p className="">Please navigate to the Home page.</p>
        <br />
        <Link to="/home">
          <button
            className="h-10 w-20 bg-orange-200 rounded-lg mx-24
            "
          >
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Status;
