import React from "react";
// import data
import { hero } from "../data";
// import icons
import { HiOutlineChevronDown } from "react-icons/hi";

const Hero = () => {
  // destructure hero data
  const { title, subtitle, btnText, image } = hero;
  return (
    <section className="section bg-primary ">
      <div className="container flex items-center justify-center pt-20 mx-auto">
        <div className="flex flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-center text-center lg:text-left">
          {/* text */}
          <div className="flex-1">
            <h1 className="mb-2 title lg:mb-5">{title}</h1>
            <p className="mb-5 blue lg:mb-10">{subtitle}</p>
            {/* btn & comp text */}
            <div className="flex items-center max-w-sm mx-auto lg:max-w-full lg:mx-0 gap-x-2 lg:gap-x-6">
              <button className="flex items-center justify-center btn btn-md lg:btn-lg btn-accent lg:gap-x-4">
                {btnText}
                <HiOutlineChevronDown />
              </button>
            </div>
          </div>
          {/* image */}
          <div className="flex-1">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
