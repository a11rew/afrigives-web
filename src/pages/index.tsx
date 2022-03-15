import type { NextPage } from "next";
import Head from "next/head";

import CallToAction from "../components/Landing/CallToAction";
import FeaturedOn from "../components/Landing/FeaturedOn";
import Hero from "../components/Landing/Hero";
import HowItWorks from "../components/Landing/HowItWorks";
import ImageCarousel from "../components/Landing/ImageCarousel";
import Footer from "../components/Footer";
import Blog from "../components/Landing/Blog";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Afrigives</title>
      </Head>
      <div className="flex justify-center mt-[56px] sm:mt-[120px] px-4">
        <Hero />
      </div>
      <div className="mt-[68px] sm:mt-[120px]">
        <ImageCarousel />
      </div>
      <div className="mt-20 sm:mt-[120px] px-4">
        <FeaturedOn />
      </div>
      <div className="mt-[120px] sm:mt-[269px] px-4">
        <CallToAction />
      </div>

      <div className="mt-[136px] sm:mt-[362px] px-4">
        <CallToAction reverse />
      </div>

      <div className="mt-[136px] sm:mt-[362px] px-4">
        <CallToAction />
      </div>

      <div className="mt-20 sm:mt-[289px] px-4">
        <HowItWorks />
      </div>

      <div className="mt-20 sm:mt-[289px] mb-20 sm:mb-[168px] px-4">
        <Blog />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
