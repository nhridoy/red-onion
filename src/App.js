import React, { createContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/common/Footer/Footer";
import Header from "./components/common/Header/Header";
import All from "./components/Home/All/All";
import Breakfast from "./components/Home/Breakfast/Breakfast";
import Dinner from "./components/Home/Dinner/Dinner";
import Lunch from "./components/Home/Lunch/Lunch";
import useData from "./hooks/useData";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { getCart } from "./utils/cartStorage";

export const CartCounterContext = createContext({});
export const FoodContext = createContext({});

function App() {
  const { data, breakfast, lunch, dinner } = useData();
  const cart = getCart();
  const [cartLength, setCartLength] = React.useState(0);
  let count = 0;
  cart.forEach((item) => {
    count += item.quantity;
  });
  useEffect(() => {
    setCartLength(count);
  }, [count]);
  return (
    <CartCounterContext.Provider value={{ cart, cartLength, setCartLength }}>
      <FoodContext.Provider value={{ data, breakfast, lunch, dinner }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<All />} />
            <Route path="/breakfast" element={<Breakfast />} />
            <Route path="/lunch" element={<Lunch />} />
            <Route path="/dinner" element={<Dinner />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </FoodContext.Provider>
    </CartCounterContext.Provider>
  );
}

export default App;
