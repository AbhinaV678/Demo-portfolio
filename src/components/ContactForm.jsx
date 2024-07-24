import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import FormResponseContext from "../utils/FormResponseContext";
import HamburgerMenu from "./HamburgerMenu";
//import { toast } from "react-toastify";

const ContactForm = () => {
  const { res, setRes } = useContext(FormResponseContext);
  const [submit, setSubmit] = useState(false);

  //console.log(res);

  const navigate = useNavigate();
  //toast.info("hello", { position: "bottom-right" });

  useEffect(() => {
    if (res != null) {
      navigate("/status", { replace: true });
      //window.location.reload();
    }
  }, [navigate, res]);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_Web3FormsAPIkey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log(`Error: ${err}`);
      });

    setRes(response);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <HamburgerMenu />
      <form onSubmit={onSubmit} className="flex flex-col">
        <input
          type="text"
          name="name"
          className=" h-10 max-sm:w-60 md:w-80 lg:w-96 p-4 m-5 bg-purple-200 border-2 border-black"
          placeholder="Your name"
          autoComplete="off"
        />
        <input
          type="email"
          name="email"
          className="h-10 max-sm:w-60 md:w-80 lg:w-96 p-4 m-5 bg-purple-200 border-2 border-black"
          placeholder="Your email"
          autoComplete="off"
        />
        <textarea
          name="message"
          className="h-80 max-sm:w-60 md:w-80 lg:w-96 p-4 m-5 bg-purple-200 border-2 border-black"
          placeholder="Your message"
          autoComplete="off"
        ></textarea>
        {submit ? (
          <button className="bg-orange-100 h-10 mx-20 max-sm:mx-20 md:mx-28 lg:mx-40  border-2 border-black  rounded-lg p-2 ">
            Submitting..
          </button>
        ) : (
          <button
            type="submit"
            className="bg-orange-200 h-10 mx-20 max-sm:mx-20 md:mx-28 lg:mx-40  border-2 border-black  rounded-lg "
            onClick={() => setSubmit(true)}
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
