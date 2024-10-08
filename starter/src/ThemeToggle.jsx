import React from "react";
import { useGlobalContext } from "./context";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className='toggle-container'>
      <button className='dark-toggle' onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <CiLight className='toggle-icon-light dark-theme ' />
        ) : (
          <MdDarkMode className='toggle-icon-dark ' />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
