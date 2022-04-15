import React, { useEffect, useState } from "react";
import { BiCart } from "react-icons/bi";

const FoodModal = ({ modal, toggleModal, data, id }) => {
  const [selected, setSelected] = useState();
  useEffect(() => {
    setSelected(id);
  }, [id]);

  const handleClick = (selectedId) => {
    setSelected(selectedId);
  };

  return (
    <div
      className={`${
        modal ? "top-0" : "-top-[70rem]"
      } h-full w-full bg-white fixed transition-all duration-700 ease-in-out left-0 z-20`}
    >
      <span className="flex justify-end text-xl">
        <span onClick={toggleModal} className="p-10 cursor-pointer">
          ✖
        </span>
      </span>
      <div className="grid md:grid-cols-2 gap-2 md:gap-4 px-8">
        <div className="flex flex-col justify-center items-center order-2 md:order-1 p-10">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl md:text-5xl font-semibold">
              {data[selected]?.name}
            </h2>
            <p className="text-gray-500 text-sm">{data[selected]?.info}</p>
            <div className="flex gap-4">
              <p className="text-4xl">${data[selected]?.price}</p>
              <div className="flex items-center text-xl gap-4 border rounded-full px-4">
                <div id="minus">-</div>
                <div id="count">1</div>
                <div id="plus" className="text-rose-600">
                  +
                </div>
              </div>
            </div>
            <div className="">
              <button className="bg-rose-600 text-white flex gap-2 items-center px-5 py-2 rounded-full">
                <BiCart className=" text-2xl" />
                <span>Add</span>
              </button>
            </div>
            <div className="flex gap-4">
              {[selected - 1] > -1 && (
                <img
                  onClick={() => handleClick(selected - 1)}
                  src={data[selected - 1]?.image}
                  alt={data[selected - 1]?.name}
                  className="w-1/4 cursor-pointer hover:drop-shadow-xl"
                />
              )}

              <img
                onClick={() => handleClick(selected)}
                src={data[selected]?.image}
                alt={data[selected]?.name}
                className="w-1/4 cursor-pointer hover:drop-shadow-xl border-[1px] border-rose-400"
              />
              {[selected + 1] < data?.length && (
                <img
                  onClick={() => handleClick(selected + 1)}
                  src={data[selected + 1]?.image}
                  alt={data[selected + 1]?.name}
                  className="w-1/4 cursor-pointer hover:drop-shadow-xl"
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center order-1 md:order-2">
          <img
            src={data[selected]?.image}
            alt={data[selected]?.name}
            className="w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default FoodModal;