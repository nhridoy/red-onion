import React, { createContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/common/Footer/Footer";
import Header from "./components/common/Header/Header";
import All from "./components/Home/All/All";
import Breakfast from "./components/Home/Breakfast/Breakfast";
import Dinner from "./components/Home/Dinner/Dinner";
import Lunch from "./components/Home/Lunch/Lunch";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { getCart } from "./utils/cartStorage";

export const CartCounter = createContext(0);

function App() {
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
    <CartCounter.Provider value={{ cartLength, setCartLength }}>
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
    </CartCounter.Provider>
  );
}

export default App;
