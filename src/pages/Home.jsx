import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Invitation from "../components/Invitation";
import Invitation2 from "../components/Invitation2";
import Invitation3 from "../components/Invitation3";
import Options from "../components/Options";
import Fitur from "../components/Fitur";
import Teamplate from "../components/Teamplate";
import PriceList from "../components/PriceList";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Payment from "../components/Payment";
import Testimonials from "../components/Testimonials";
import Katalog from "../components/Katalog";

// import TopBar from "../components/TopBar";

const Home = () => {
  return (
    <div>
      {/* <TopBar /> */}
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
