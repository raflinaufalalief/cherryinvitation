import React from "react";
// import data
import { product } from "../data";
// import components
import Cards from "./Cards";

const Fitur = () => {
  // destructure product data
  const { title, subtitle } = product;
  return (
    <section className="section">
      <div className="mx-auto ">
        {/* title & subtitle */}

        <h2
          className="flex items-center justify-center mb-2 font-bold uppercase text-400 lg:leading-6 lg:mb-5"
          data-aos="fade-up"
          data-aos-offset="400"
          data-aos-delay="300"
        >
          {title}
        </h2>
        <p
          className="mb-2 text-center title lg:mb-7 lg:text-[35px] lg:leading-[42px]"
          data-aos="fade-up"
          data-aos-offset="400"
          data-aos-delay="400"
        >
          {subtitle}
        </p>

        {/* cards */}

        <Cards />
      </div>
    </section>
  );
};

export default Fitur;
