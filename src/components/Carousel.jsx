import React from "react";
import Card from "./Card";
import Slider from "react-slick";
import { data } from "../utils/data";

const Caraousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };

  return (
    <div className="w-full py-16 bg-white ">
      <div className="md:max-w-[1240px] m-auto max-w-[600px] ">
        <Slider {...settings}>
          {data.map((data) => (
            <Card data={data} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Caraousel;
