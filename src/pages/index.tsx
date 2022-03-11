import type { NextPage } from "next";

import Hero from "../components/Landing/Hero";

const Home: NextPage = () => {
  return (
    <div>
      <div className="flex justify-center mt-[120px]">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
