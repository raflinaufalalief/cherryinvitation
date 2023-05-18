import React from "react";
import logo from "../assets/People.png";
import Card from "./Card";
import Slider from "react-slick";
import { data } from "../utils/data";

const Priview = () => {
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
    <>
      <div className="w-full px-4 py-16 bg-white">
        <div className="md:max-w-[1240px] m-auto grid md:grid-cols-2 max-w-[600px] px-4 md:px-0">
          <img src={logo} alt="" className="w-[85%] mx-auto my-4" />
          <div className="flex flex-col justify-center">
            <h1 className="py-2 text-2xl font-bold md:text-4xl sm:text-3xl">
              <span className="text-secondary">2.700</span> Undangan Aktif
            </h1>
            <p className="text-slate-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error,
              aliquam.
            </p>
            <Slider {...settings}>
              {data.map((data) => (
                <Card data={data} />
              ))}
            </Slider>
            <div className="py-8 bg-white ">
              <button className="bg-secondary text-200 w-[325px] md:w-[250px] rounded-xl font-medium my-3 mx-auto md:mx-0 py-3 ">
                get started
              </button>
              <button className="bg-secondary text-200 w-[325px] md:w-[250px] rounded-xl font-medium my-3 mx-auto md:mx-8 py-3 ">
                get started
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center my-4 after:border-t after:flex-1 after:border-primary">
          <hr />
        </div>
      </div>
    </>
  );
};

export default Priview;
