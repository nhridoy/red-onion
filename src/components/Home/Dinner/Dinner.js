import React, { useContext, useState } from "react";
import { FoodContext } from "../../../App";
import FoodCard from "../../common/FoodCard/FoodCard";
import FoodModal from "../../common/FoodModal/FoodModal";

const Dinner = () => {
  const { dinner } = useContext(FoodContext);
  const [modal, setModal] = useState(false);
  const [id, setId] = useState(null);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10 md:px-16">
        {dinner.map((item, index) => (
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
      <FoodModal
        modal={modal}
        toggleModal={toggleModal}
        data={dinner}
        id={id}
      />
    </>
  );
};

export default Dinner;
