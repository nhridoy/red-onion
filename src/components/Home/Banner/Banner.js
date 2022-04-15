import React from "react";
import banner from "../../../images/bannerbackground.png";

const Banner = () => {
  return (
    <div
      style={{
        background: `url(${banner})`,
        // backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="bg-cover h-96 flex flex-col justify-center items-center gap-10"
    >
      <h1 className="text-3xl text-center md:text-5xl">
        Best food waiting for your belly
      </h1>
      <div className="block relative">
        <input
          type="text"
          className="bg-white py-2 px-4 md:w-96 rounded-full focus:outline-none"
          placeholder="Search Food Items"
        />
        <button className="absolute focus:outline-none right-0 bg-rose-500 hover:bg-rose-700 text-white py-2 px-4 rounded-full">
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
