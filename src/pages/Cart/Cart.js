import React, { useContext, useEffect, useState } from "react";
import { CartCounterContext, FoodContext } from "../../App";
import { getCart, updateFoodCart } from "../../utils/cartStorage";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const { data } = useContext(FoodContext);
  const { cart, cartLength, setCartLength } = useContext(CartCounterContext);
  // const cart = getCart();

  useEffect(() => {
    const items = data.filter((item) =>
      cart.some((cartItem) => cartItem.item === item.id)
    );
    setCartItems(items);
    // items?.map((item) => {
    //   cart.map((cartItem) => {
    //     if (cartItem.item === item.id) {
    //       setSubTotal((total) => total + item.price * cartItem.quantity);
    //     }
    //   });
    // });
    console.log("test");
    let price = 0;
    const prices = document.querySelectorAll(".prices");
    prices.forEach((price) => {
      price += parseFloat(price.innerText);
      console.log(price);
    });
    setSubTotal(price);
  }, [cart]);

  return (
    <div className="grid md:grid-cols-2 gap-10 container mx-auto p-10 md:p-20">
      <div className="flex flex-col gap-8 order-2 md:order-1">
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
      <div className="flex flex-col gap-8 order-1 md:order-2">
        <h3 className="border-b-[1px] border-rose-600 text-xl leading-10">
          Order Summary
        </h3>
        <div className="flex flex-col gap-4">
          {cartItems.map((item, index) => {
            const storageCart = cart.find(
              (cartItem) => cartItem.item === item.id
            );
            return (
              <div
                key={index}
                className="grid gap-2 grid-cols-5 bg-gray-100 p-4 items-center"
              >
                <img
                  loading="lazy"
                  src={item.image}
                  alt={item.name}
                  className="w-20 col-span-1"
                />
                <div className="flex flex-col gap-2 col-span-2 md:col-span-3">
                  <h3 className="text-sm">{item.name}</h3>
                  <p className="text-gray-600 ">
                    ${item.price} x {storageCart?.quantity}
                  </p>
                  <p className="text-rose-600 font-semibold">
                    $
                    <span className="prices">
                      {(item?.price * storageCart?.quantity).toFixed(2)}
                    </span>
                  </p>
                </div>

                <div className="flex col-span-2 md:col-span-1">
                  <div className="flex items-center">
                    <button
                      onClick={() => (
                        updateFoodCart(item.id, storageCart?.quantity - 1),
                        setCartLength(cartLength - 1)
                      )}
                      className="rounded-full bg-rose-600 hover:bg-rose-700 focus:outline-none text-white flex gap-2 items-center w-8 h-8 flex items-center justify-center"
                    >
                      -
                    </button>
                  </div>
                  <div className="flex items-center">
                    <span className="p-2">{storageCart?.quantity}</span>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => (
                        updateFoodCart(item.id, storageCart.quantity + 1),
                        setCartLength(cartLength + 1)
                      )}
                      className="rounded-full bg-rose-600 hover:bg-rose-700 focus:outline-none text-white flex gap-2 items-center w-8 h-8 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600 font-semibold">Subtotal</p>
          <p className="text-rose-600 font-semibold">${subTotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600 font-semibold">Tax</p>
          <p className="text-rose-600 font-semibold">$0.00</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600 font-semibold">Delivery</p>
          <p className="text-rose-600 font-semibold">$0.00</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600 font-semibold">Total</p>
          <p className="text-rose-600 font-semibold">${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
