import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo2.png";
import { BiMenuAltRight, BiCart } from "react-icons/bi";
import { CartCounterContext } from "../../../App";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { cartLength } = useContext(CartCounterContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center p-4">
      <div className="flex items-center justify-between">
        <div className="w-36">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="flex items-center gap-2 text-3xl md:hidden block relative">
          <Link to="/cart" className="cursor-pointer">
            <BiCart />
          </Link>
          <div className="w-5 h-5 absolute top-0 right-7 text-sm flex items-center justify-center bg-rose-600 text-white rounded-full">
            {cartLength}
          </div>
          <BiMenuAltRight onClick={toggleMenu} className="cursor-pointer" />
        </div>
      </div>
      <div
        className={`${
          isOpen ? "left-0" : "-left-[100vw]"
        } h-full w-full md:w-auto md:h-auto bg-white md:bg-transparent transition-all duration-300 ease-in-out flex flex-col md:flex-row items-center gap-8 fixed md:static top-0 z-10`}
      >
        <span className="flex md:hidden justify-between items-center p-4 text-xl w-full">
          <div className="w-36">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <span onClick={toggleMenu} className="p-2 cursor-pointer">
            ✖
          </span>
        </span>
        <div className="hidden md:block relative">
          <Link to="/cart" className="cursor-pointer text-3xl ">
            <BiCart />
          </Link>
          <div className="w-5 h-5 absolute top-0 -right-3 text-sm flex items-center justify-center bg-rose-600 text-white rounded-full">
            {cartLength}
          </div>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link
            className="bg-rose-600 px-6 py-2 text-white rounded-full"
            to="/register"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
