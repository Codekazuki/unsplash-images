import React from "react";
import { useGlobalContext } from "./context";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const ThemeToggle = () => {
  return (
    <section className='toggle-container'>
      <button className='dark-toggle'>
        <CiLight className='toggle-icon' />
        <MdDarkMode className='toggle-icon' />
      </button>

      <h2>ThemeToggle</h2>
    </section>
  );
};

export default ThemeToggle;
