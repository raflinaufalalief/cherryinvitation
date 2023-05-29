import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Invitation from "../components/Invitation";
import Fitur from "../components/Fitur";
import PriceList from "../components/PriceList";
import Faq from "../components/Faq";
import Payment from "../components/Payment";
import Testimonials from "../components/Testimonials";
import Katalog from "../components/Katalog";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Invitation />
      <Katalog />
      <PriceList />
      <Fitur />
      <Testimonials />
      <Faq />
      <Payment />
    </div>
  );
};

export default Home;
