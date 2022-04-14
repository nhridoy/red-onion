import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo2.png";
import { BiMenuAltRight, BiCart } from "react-icons/bi";

const Header = () => {
  const toggleMenu = () => {
    const menu = document.querySelector("#menu");
    menu.classList.toggle("-translate-x-96");
  };
  return (
    <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center p-4">
      <div className="flex items-center justify-between">
        <div className="w-36">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="flex items-center gap-2 text-3xl md:hidden block">
          <Link to="/cart" className="cursor-pointer">
            <BiCart />
          </Link>
          <BiMenuAltRight onClick={toggleMenu} className="cursor-pointer" />
        </div>
      </div>
      <menu
        id="menu"
        className="-translate-x-96 md:transform-none z-10 h-full w-1/2 md:w-auto md:h-auto bg-white drop-shadow-lg md:drop-shadow-none md:bg-transparent absolute md:static transition-all translate-10 flex flex-col md:flex-row items-center gap-8"
      >
        <li>
          <Link to="/cart" className="cursor-pointer text-3xl hidden md:block">
            <BiCart />
          </Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link
            className="bg-rose-600 px-6 py-2 text-white rounded-full"
            to="/register"
          >
            Register
          </Link>
        </li>
      </menu>
    </div>
  );
};

export default Header;
