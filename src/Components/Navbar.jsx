import { useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";
import { LOGO_TITLE } from "../assets/Data";
import { Link } from "react-router-dom";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isNavLinksActive, setIsNavLinksActive] = useState(false);

  return (
    <div
      className={`border-b border-slate-200 dark:border-gray-700 h-[var(--navHeight)] flex items-center justify-between dark:bg-[var(--darkBackground)] dark:text-[var(--lightColor)]`}
    >
      {/* Logo */}
      <Link to="/"><div className="cursor-pointer font-semibold text-3xl px-4 flex gap-2 items-center">
        <img src="/logo.avif" className="h-10 rounded" alt="" />
        {LOGO_TITLE}
      </div></Link>


      <div className="flex items-center gap-0 flex-row-reverse md:flex-row md:gap-10">
         {/* Mobile Navbar Toggle (Hamburger Menu) */}
      <div className="md:hidden flex items-center gap-3 pr-4">
        {/* Show Bars or Xmark based on isNavLinksActive state */}
        {!isNavLinksActive ? (
          <HiMiniBars3BottomRight
            className="h-[var(--iconFontSize)] w-[var(--iconFontSize)] cursor-pointer"
            onClick={() => setIsNavLinksActive(true)}
          />
        ) : (
          <HiOutlineXMark
            className="h-[var(--iconFontSize)] w-[var(--iconFontSize)] cursor-pointer"
            onClick={() => setIsNavLinksActive(false)}
          />
        )}
      </div>

      {/* Navbar Links - Hidden on mobile, shown on medium and larger screens */}
  <ul
    className={`${
      isNavLinksActive ? "block" : "hidden"
    } absolute top-[var(--navHeight)] left-0 px-4 text-lg py-8 gap-4 md:text-[1.1rem] flex flex-col w-full bg-[var(--lightBackground)] md:px-0 py-8 shadow-md dark:bg-[var(--darkBackground)] dark:text-[var(--lightColor)] dark:shadow-[rgb(30,30,30)] dark:shadow-md md:flex md:flex-row md:static md:w-auto md:gap-5 md:p-0 md:shadow-none`}
  >
    <Link to="/">
      <li className="cursor-pointer z-[879879898]" onClick={() => setIsNavLinksActive(false)}>Home</li>
    </Link>
    <Link to="/gallery">
      <li className="cursor-pointer z-[879879898]" onClick={() => setIsNavLinksActive(false)}>Gallery</li>
    </Link>
  </ul>


      {/* Dark/Light Mode Toggle */}
      <div className="flex items-center gap-3 px-4">
        <div className="h-[var(--iconFontSize)] w-[var(--iconFontSize)] cursor-pointer">
          {/* Show Light/Dark Mode icon based on isDarkMode state */}
          {!isDarkMode ? (
            <MdOutlineDarkMode
              className="h-full w-full"
              onClick={() => {
                setIsDarkMode(true);
                localStorage.setItem("darkMode", true);
              }}
            />
          ) : (
            <MdOutlineLightMode
              className="h-full w-full"
              onClick={() => {
                setIsDarkMode(false);
                localStorage.setItem("darkMode", false);
              }}
            />
          )}
        </div>
      </div>
      </div>
     
    </div>
  );
};

export default Navbar;
