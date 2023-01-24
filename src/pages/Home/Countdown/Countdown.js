import React from "react";

const Countdown = () => {
  return (
    <div className="p-2 bg-base-200 mb-5 ml-2 mr-2">
      <div className="p-3">
        <div className="text-center">
          <p className="text-2xl font-bold text-orange-600 mb-2">
            20% Discount's Time!
          </p>
        </div>
        <div className="grid grid-flow-col gap-5 auto-cols-max text-center mt-4 justify-around">
          <div className="flex flex-col p-2 rounded-box text-neutral-content bg-primary">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": 15 }}></span>
            </span>
            days
          </div>
          <div className="flex flex-col p-2 rounded-box text-neutral-content bg-primary">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": 10 }}></span>
            </span>
            hours
          </div>
          <div className="flex flex-col p-2 rounded-box text-neutral-content bg-primary">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": 24 }}></span>
            </span>
            min
          </div>
          <div className="flex flex-col p-2  rounded-box text-neutral-content bg-primary">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": 53 }}></span>
            </span>
            sec
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
