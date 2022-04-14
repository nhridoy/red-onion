import React from "react";
import FoodCard from "../../common/FoodCard/FoodCard";

const All = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10 md:px-16">
      <FoodCard />
    </div>
  );
};

export default All;
