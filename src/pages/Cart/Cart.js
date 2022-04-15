import React from "react";
import { CartCounterContext } from "../../App";

const Cart = () => {
  const { cart } = React.useContext(CartCounterContext);
  console.log(cart);
  return (
    <div className="grid md:grid-cols-2 gap-10 container mx-auto p-20">
      <div className="flex flex-col gap-8">
        <h3 className="border-b-[1px] border-rose-600 text-xl leading-10">
          Enter Delivery Address
        </h3>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            name="house"
            id="house"
            placeholder="House No/Name"
            className="focus:outline-none bg-gray-200 border-2 border-gray-200  py-2 px-4 "
          />
          <input
            type="text"
            name="flat"
            id="flat"
            placeholder="Flat/Apartment No"
            className="focus:outline-none bg-gray-200 border-2 border-gray-200  py-2 px-4 "
          />
          <input
            type="text"
            name="road"
            id="road"
            placeholder="Road No/Name"
            className="focus:outline-none bg-gray-200 border-2 border-gray-200  py-2 px-4 "
          />
          <input
            type="text"
            name="village"
            id="village"
            placeholder="Villa/Town/City"
            className="focus:outline-none bg-gray-200 border-2 border-gray-200  py-2 px-4 "
          />
          <input
            type="text"
            name="district"
            id="district"
            placeholder="District"
            className="focus:outline-none bg-gray-200 border-2 border-gray-200  py-2 px-4 "
          />
          <textarea
            name="instruction"
            id="instruction"
            placeholder="Instruction"
            className="focus:outline-none bg-gray-200 border-2 border-gray-200  py-2 px-4 "
          />
          <button className="bg-rose-600 hover:bg-rose-700 focus:outline-none text-white flex gap-2 items-center py-2 px-4 flex items-center justify-center rounded-md ">
            Place Order
          </button>
        </form>
      </div>
      <div className="flex flex-col gap-8">
        <h3 className="border-b-[1px] border-rose-600 text-xl leading-10">
          Order Summary
        </h3>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3 bg-gray-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
