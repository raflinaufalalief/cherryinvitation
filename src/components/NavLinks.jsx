import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

const Links = [
  {
    name: "Design",
    link: "/design",
    icon: <AiOutlineDown />,
  },
  {
    name: "Portfolio",
    link: "/portfolio",
    icon: <AiOutlineDown />,
  },
];

function DesktopNav() {
  const [about, setAbout] = useState(false);
  return (
    <>
      <div className="flex">
        <div className="flex items-center mr-6 gap-x-7">
          {Links.map((index) => (
            <li
              key={index}
              className="flex items-center cursor-pointer hover:text-secondary/95"
            >
              <a href={index.link}>{index.name}</a>
            </li>
          ))}
          <div className="relative">
            <li
              onClick={() => setAbout((prev) => !prev)}
              className="relative flex items-center cursor-pointer gap-x-2"
            >
              <div href="">About</div>
              <AiOutlineDown />
            </li>
            <nav
              className={`absolute flex flex-col bg-primary px-[1rem] py-[1rem] text-black/75 top-12 rounded-lg ${
                about ? "block" : "hidden"
              }`}
            >
              <a href="">dkjshajdh</a>
              <a href="">dkjshajdh</a>
              <a href="">dkjshajdh</a>
            </nav>
          </div>
        </div>
        <div className="space-x-4">
          <button
            type="button"
            className="bg-secondary text-200 px-[1.4rem] rounded-full hover:bg-secondary/95 py-[.7rem]"
          >
            SignIn
          </button>
          <button
            type="button"
            className=" border-2 border-secondary px-[1.4rem] text-secondary py-[.7rem] rounded-full"
          >
            SignUp
          </button>
        </div>
      </div>
    </>
  );
}

export const NavLinks = () => {
  return <DesktopNav />;
};
