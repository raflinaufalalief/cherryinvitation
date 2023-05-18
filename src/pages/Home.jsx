import React from "react";
import Hero from "../components/Hero";
import Platform from "../components/Platform";
import PriceList from "../components/PriceList";
import Caraousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import Priview from "../components/Priview";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Caraousel />
      <Platform />
      <Priview />
      {/* <PriceList /> */}
    </div>
  );
};

export default Home;
