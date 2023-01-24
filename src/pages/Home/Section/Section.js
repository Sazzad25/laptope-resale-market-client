import React from "react";
import laptop3 from "../../../assets/images/laptop2.jpg";

const Section = () => {
  return (
    <div className="p-2">
      <div className="hero bg-base-200 mt-8 mb-8 h-full">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={laptop3}
            className="rounded-lg lg:w-1/2 shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">Services We Provide!</h1>
            <p className="py-6">
              Although the number of laptop users has increased in the current
              world, the price of laptops has not decreased much. So a new
              laptop is not possible for everyone. Keeping that in mind, we have
              created this website,
              <br /> so that people can buy used laptops at low prices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
