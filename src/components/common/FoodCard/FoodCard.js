import React from "react";
import logo from "../../../images/Group 1152.png";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";

const FoodCard = ({ id, type, name, info, image, price }) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center rounded-xl py-10 bg-white hover:drop-shadow-xl">
      <img src={image} alt={name} className="w-1/2" />
      <div className="flex flex-col justify-center items-center">
        <Link to={`item/${id}`} className="font-semibold text-rose-500">
          {name}
        </Link>
        <p className="text-gray-500 text-sm">{info}</p>
        <p className="text-2xl">${price}</p>
        <BiCart className="text-2xl cursor-pointer m-4" title="Add to Cart" />
      </div>
    </div>
  );
};

export default FoodCard;
