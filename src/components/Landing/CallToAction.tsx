import React from "react";
import Image from "next/image";

import CTAStroke from "../../assets/sprites/CTAStroke.svg";
import PromoPhone from "../../assets/images/PromoPhone.png";

const CallToAction = ({ reverse }: { reverse?: boolean }) => {
  return (
    <div
      className={`flex flex-col md:flex-row justify-center w-[85.5%] m-auto ${
        reverse && "md:flex-row-reverse"
      }`}
    >
      <div className={`md:w-1/2 flex ${reverse ? "pl-5" : "justify-end"}`}>
        <div className="relative h-[344px] w-[606px] bg-gradient-to-b from-[#F5F5F5] ">
          <div
            className={`absolute hidden md:block ${
              reverse
                ? "-left-[110px] -scale-x-100 scale-y-100"
                : "-right-[110px]"
            } -top-7`}
          >
            <CTAStroke />
          </div>
          <div className="absolute -top-[35%] right-[20%]">
            <Image src={PromoPhone} alt="Screenshot of the Afrigives app" />
          </div>
        </div>
      </div>
      <div
        className={`md:w-1/2 flex items-center md:pl-28 ${
          reverse && "pl-0 md:pr-28 justify-end text-right"
        }`}
      >
        <div className="">
          <h3 className="max-w-[330px] mb-8 text-[#006633] text-[1.9rem] leading-[39.58px]">
            Find and donate clothes to causes you care about easily
          </h3>
          <div className={`flex ${reverse && "justify-end"}`}>
            <button className="md:max-w-[293px] flex items-center justify-center outline outline-1 py-8 w-full bg-[#006633] text-white">
              See Figma Prototype
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
