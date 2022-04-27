import React from "react";

const Answer = ({ image, icon, heading, message }) => {
  return (
    <div>
      <img loading="lazy" src={image} alt="Image" />
      <div className="grid grid-cols-6 p-6 gap-4">
        <img loading="lazy" src={icon} alt="Icon" className="col-span-1" />
        <div className="flex flex-col gap-4 col-span-5">
          <h3 className="text-xl">{heading}</h3>
          <p className="text-gray-500 text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Answer;
