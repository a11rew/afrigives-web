/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

import StockGirls from "../../assets/images/girls.jpg";
import StockKids from "../../assets/images/kids.jpg";
import StockTrad from "../../assets/images/trad.jpg";
import StockWomen from "../../assets/images/women.jpg";

const ImageCarousel = () => {
  return (
    <div className="flex overflow-x-auto gap-5 scrollbar-hide">
      <div>
        <img
          className="min-w-[27.5vw] h-[392px] object-cover"
          src={StockGirls.src}
          alt="Image of smiling kids"
        />
      </div>
      <div>
        <img
          className="min-w-[27.5vw] h-[392px] object-cover"
          src={StockKids.src}
          alt="Image of school kids in uniform"
        />
      </div>
      <div>
        <img
          className="min-w-[27.5vw] h-[392px] object-cover"
          src={StockTrad.src}
          alt="Image of celebrating women"
        />
      </div>
      <div>
        <img
          className="min-w-[27.5vw] h-[392px] object-cover"
          src={StockWomen.src}
          alt="Image of women in traditional garb"
        />
      </div>
    </div>
  );
};

export default ImageCarousel;
