import React from "react";
// import data
import { features } from "../data";

const Invitation = () => {
  // destructure features
  const { feature1 } = features;
  // destructure feature1
  const { pretitle, title, subtitle, btnLink, btnIcon, image } = feature1;
  return (
    <section className="section">
      <div className="container mx-auto">
        <h2 className="flex items-center justify-center py-3 h3 ">
          Kenapa Harus Punya Undangan Website?
        </h2>
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]">
          {/* text */}
          <div className="flex-1">
            <div className="pretitle">{pretitle}</div>
            <h2 className="h4">{title}</h2>
            <p className="blue">{subtitle}</p>
            <button className="flex items-center transition-all btn-link gap-x-3 hover:gap-x-5">
              {btnLink} <img src={btnIcon} alt="" />
            </button>
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

export default Invitation;
