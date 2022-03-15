import React from "react";

import { FaAndroid } from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";

const CallToAction = () => {
  return (
    <div className="max-w-[594px]">
      <h2 className="font-medium text-3xl md:text-5xl leading-[56px] text-center">
        Make cloth donations to{" "}
        <span className="text-[#346734]">anywhere in Africa</span> easily with
        Afrigives
      </h2>
      <div className="flex flex-col gap-5 mt-12 sm:flex-row">
        <button className="flex items-center justify-center gap-[18px] outline outline-1 py-8 w-full">
          <FaAndroid size={24} />
          <p className="font-medium">Download on Playstore</p>
        </button>
        <button className="flex items-center justify-center gap-[18px] outline outline-1 py-8 w-full">
          <GrAppleAppStore size={24} />
          <p className="font-medium">Get on App Store</p>
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
