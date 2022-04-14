import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="p-16">
      <div className="flex justify-center font-semibold gap-10">
        <NavLink to="/">All</NavLink>
        <NavLink to="/breakfast">Breakfast</NavLink>
        <NavLink to="/lunch">Lunch</NavLink>
        <NavLink to="/dinner">Dinner</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Body;
