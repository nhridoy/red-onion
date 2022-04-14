import React from "react";
import Answer from "../Answer/Answer";
import man from "../../../images/man.png";
import shef from "../../../images/shef.png";
import delivery from "../../../images/delivery.png";
import bus from "../../../images/icons/Group 204.png";
import car from "../../../images/icons/Group 245.png";
import bell from "../../../images/icons/Group 1133.png";

const Questions = () => {
  return (
    <div className="container mx-auto p-8 pt-4">
      <h1 className="text-3xl">Why Choose Us?</h1>
      <p className="text-gray-500 text-sm">
        We are a team of passionate food lovers who love to share our passion
        for food with you.
      </p>
      <div className="grid md:grid-cols-3 gap-5 my-4">
        <Answer
          image={man}
          icon={bus}
          heading={"Fast Delivery"}
          message={
            "We are a team of passionate food lovers who love to share our passion for food with you."
          }
        />
        <Answer
          image={shef}
          icon={car}
          heading={"Best Quality"}
          message={
            "We are a team of passionate food lovers who love to share our passion for food with you."
          }
        />
        <Answer
          image={delivery}
          icon={bell}
          heading={"Home Delivery"}
          message={
            "We are a team of passionate food lovers who love to share our passion for food with you."
          }
        />
      </div>
    </div>
  );
};

export default Questions;
