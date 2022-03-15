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
    <div>
      <Head>
        <title>Afrigives</title>
      </Head>
      <div className="flex justify-center mt-[120px]">
        <Hero />
      </div>
      <div className="mt-[120px]">
        <ImageCarousel />
      </div>
      <div className="mt-[120px]">
        <FeaturedOn />
      </div>
      <div className="mt-[269px]">
        <CallToAction />
      </div>

      <div className="mt-[362px]">
        <CallToAction reverse />
      </div>

      <div className="mt-[362px]">
        <CallToAction />
      </div>

      <div className="mt-[289px]">
        <HowItWorks />
      </div>

      <div className="mt-[289px] mb-[168px]">
        <Blog />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
