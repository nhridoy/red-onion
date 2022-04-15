import React, { useContext, useState } from "react";
import { FoodContext } from "../../../App";
import FoodCard from "../../common/FoodCard/FoodCard";
import FoodModal from "../../common/FoodModal/FoodModal";

const Breakfast = () => {
  const { breakfast } = useContext(FoodContext);
  const [modal, setModal] = useState(false);
  const [id, setId] = useState(null);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10 md:px-16">
        {breakfast.map((item, index) => (
          <div className="" key={item.id} onClick={() => setId(index)}>
            <FoodCard
              customClickEvent={toggleModal}
              id={item.id}
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
        data={breakfast}
        id={id}
      />
    </>
  );
};

export default Breakfast;
