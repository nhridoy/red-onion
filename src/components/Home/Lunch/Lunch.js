import React, { useState } from "react";
import useData from "../../../hooks/useData";
import FoodCard from "../../common/FoodCard/FoodCard";
import FoodModal from "../../common/FoodModal/FoodModal";

const Lunch = () => {
  const { lunch } = useData();
  const [modal, setModal] = useState(false);
  const [id, setId] = useState(null);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10 md:px-16">
        {lunch.map((item, index) => (
          <div className="" key={item._id} onClick={() => setId(index)}>
            <FoodCard
              customClickEvent={toggleModal}
              id={item._id}
              type={item.type}
              name={item.name}
              info={item.info}
              image={item.image}
              price={item.price}
            />
          </div>
        ))}
      </div>
      <FoodModal modal={modal} toggleModal={toggleModal} data={lunch} id={id} />
    </>
  );
};

export default Lunch;
