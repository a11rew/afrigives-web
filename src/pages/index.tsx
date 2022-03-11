import type { NextPage } from "next";

import Hero from "../components/Landing/Hero";
import ImageCarousel from "../components/Landing/ImageCarousel";

const Home: NextPage = () => {
  return (
    <div>
      <div className="flex justify-center mt-[120px]">
        <Hero />
      </div>
      <div className="mt-[120px]">
        <ImageCarousel />
      </div>
    </div>
  );
};

export default Home;
