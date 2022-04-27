import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="container mx-auto grid gap-10 md:grid-cols-4 p-4">
        <div className="col-span-2">
          <img loading="lazy" src={logo} alt="Logo" className="w-36" />
        </div>
        <div className="col-span-1">
          <h3 className="text-xl">About</h3>
          <ul className="list-disc list-inside">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms of Use</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="text-xl">Account</h3>
          <ul className="list-disc list-inside">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
