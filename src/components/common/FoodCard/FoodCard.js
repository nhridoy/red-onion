import React from "react";
import logo from "../../../images/Group 1152.png";

const FoodCard = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center rounded-xl py-10 bg-white hover:drop-shadow-xl">
      <img src={logo} alt="" className="w-1/2" />
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-semibold">Food Name</h2>
        <p className="text-gray-500 text-sm">Food Informations</p>
        <p className="text-2xl">$9.99</p>
      </div>
    </div>
  );
};

export default FoodCard;
