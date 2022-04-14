import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo2.png";
import { BsCart2 } from "react-icons/bs";

const Header = () => {
  return (
    <div className="container mx-auto flex justify-between items-center p-4">
      <div className="w-36">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <menu className="flex items-center gap-8">
        <li>
          <Link to="/cart">
            <BsCart2 />
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
