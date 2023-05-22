import React, { useState } from "react";
// import data
import { pricing } from "../data";
// import icons
import { HiCheck, HiOutlineArrowNarrowRight } from "react-icons/hi";

const PriceList = () => {
  // index state
  const [index, setIndex] = useState(1);
  // destructure pricing
  const { title, subtitle, cards } = pricing;
  return (
    <section className="section ">
      <div className="container mx-auto">
        {/* title */}
        <h2
          className="mb-10 text-center h3 lg:mb-20"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {title}
        </h2>
        <p className="mb-10 text-center blue lg:mb-16">{subtitle}</p>
        {/* cards */}
        <div className="flex flex-col lg:flex-row lg:gap-x-[30px] gap-y-[30px] lg:gap-y-0 justify-center items-center">
          {cards.map((card, cardIndex) => {
            // destructure card
            const { icon, title, services, price, userAmount, btnText, delay } =
              card;
            // card
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={delay}
                data-aos-offset="300"
                key={cardIndex}
              >
                <div
                  onClick={() => setIndex(cardIndex)}
                  className={`${
                    cardIndex === index
                      ? "bg-white shadow-2xl"
                      : "border border-grey"
                  } w-[350px] h-[500px] rounded-[12px] p-[40px] cursor-pointer transition-all`}
                >
                  {/* card icon */}
                  <div className="mb-8">
                    <img src={icon} alt="" />
                  </div>
                  {/* card title */}
                  <div className="text-[32px] font-semibold mb-8"></div>
                  {/* card services */}
                  <div className="flex flex-col mb-6 gap-y-2">
                    {services.map((service, index) => {
                      // destructure service
                      const { name } = service;
                      return (
                        <div
                          className="flex items-center gap-x-[10px]"
                          key={index}
                        >
                          <HiCheck className="text-light" />
                          <div>{name}</div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mb-10">
                    <div>
                      <span className="text-2xl font-semibold">{price}/</span>
                      <span className="text-xl font-light text-light">
                        year
                      </span>
                    </div>
                    <div className="text-base text-light">{userAmount}</div>
                  </div>
                  {/* btn */}
                  <button
                    className={`${
                      cardIndex === index
                        ? "bg-secondary hover:bg-200 text-white"
                        : "border border-secondary text-secondary"
                    } btn btn-sm space-x-[14px]`}
                  >
                    <span>{btnText}</span>
                    <HiOutlineArrowNarrowRight />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PriceList;
