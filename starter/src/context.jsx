import { useContext, createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);

    setSearch("");
  };
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme", newDarkTheme);
  };
  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, search, setSearch, handleSubmit }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
