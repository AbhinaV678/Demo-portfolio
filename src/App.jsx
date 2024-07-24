import Home from "./components/Home";
import { useEffect, useState } from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Projects from "./components/Projects.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Status from "./components/Status.jsx";
import FormResponseContext from "./utils/FormResponseContext.jsx";
import ThemeContext from "./utils/ThemeContext.jsx";
import MenuContext from "./utils/MenuContext.jsx";

const App = () => {
  const [res, setRes] = useState(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  //implementation of persisting theme using localStorage
  const [theme, setTheme] = useState(() => {
    const initialTheme = localStorage.getItem("theme");
    return initialTheme ? initialTheme : "dark";
  });

  function getThemeFromLocalStorage() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }
  //theming for only light mode,dark theme hain hi...custom likhna chorde
  function toggleTheme() {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  }

  useEffect(() => {
    getThemeFromLocalStorage();
  }, [theme]);

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <MenuContext.Provider value={{ menuIsOpen, setMenuIsOpen }}>
          <Header />
          <FormResponseContext.Provider value={{ res, setRes }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/status" element={<Status />} />
              <Route path="/*" element={<Home />} />
            </Routes>
          </FormResponseContext.Provider>
        </MenuContext.Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
};
export default App;
