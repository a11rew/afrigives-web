import React from "react";
import { FaAndroid } from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="w-full h-[616px] bg-[#111] px-[7.2%] pt-[124px] pb-12 flex flex-col justify-between">
      <div className="flex">
        <div className="w-1/2">
          <h1 className="text-5xl text-white leading-[56px]">
            Download the <br />{" "}
            <span className="text-[#006633]">Afrigives</span> mobile app
          </h1>
          <div className="flex gap-5 mt-12">
            <button className="flex bg-white items-center justify-center gap-[18px] outline outline-1 py-8 w-full">
              <FaAndroid size={24} />
              <p className="font-medium">Download on Playstore</p>
            </button>
            <button className="flex bg-white items-center justify-center gap-[18px] outline outline-1 py-8 w-full">
              <GrAppleAppStore size={24} />
              <p className="font-medium">Get on App Store</p>
            </button>
          </div>
        </div>
        <div className="flex justify-center w-1/2">
          <div>
            <h3 className="uppercase text-[#E8E8E8] opacity-[48%] mb-7">
              Useful links
            </h3>
            <div className="flex flex-col text-2xl underline gap-14">
              <a className="block text-white">View Code on GitHub</a>
              <a className="block text-white">Read Case Study on Medium</a>
              <a className="block text-white">See Dribbble Screens</a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between text-white">
        <div className="flex gap-16">
          <p className="text-[#E8E8E8] opacity-[48%]">2022</p>
          <div className="flex gap-8">
            <span>Designed by Eloke Ikiliagwu</span>
            <span>|</span>
            <span>Developed by Andrew Glago</span>
          </div>
        </div>
        <p className="text-[#E8E8E8] opacity-[48%]">Hobby Project</p>
      </div>
    </div>
  );
};

export default Footer;
