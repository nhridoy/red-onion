import React from "react";
import useData from "../../../utils/useData";
import FoodCard from "../../common/FoodCard/FoodCard";

const Breakfast = () => {
  const { breakfast } = useData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10 md:px-16">
      {breakfast.map((item, index) => (
        <FoodCard
          key={item.id}
          id={item.id}
          type={item.type}
          name={item.name}
          info={item.info}
          image={item.image}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default Breakfast;
