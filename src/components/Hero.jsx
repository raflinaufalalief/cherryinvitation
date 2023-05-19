import React from "react";
import Logo from "../assets/HomePage.png";

const Hero = () => {
  return (
    <div className="w-full px-4 py-16">
      <div className="md:max-w-[1240px] m-auto grid md:grid-cols-2 max-w-[600px] px-4 md:px-0">
        <img className="w-[500px] mx-auto my-4" src={Logo} alt="/" />
        <div className="flex flex-col justify-center">
          <h1 className="py-2 text-2xl font-bold md:text-4xl sm:text-3xl">
            Website Undangan Pernikahan
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className="bg-secondary text-200 w-[325px] md:w-[300px] rounded-full font-medium my-3 mx-auto md:mx-0 py-3 ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
