import React from "react";
import { nav } from "../data";

const MobileNav = () => {
  return (
    <div className="w-full h-full bg-primary/95 ">
      <ul className="flex flex-col items-center justify-center h-full gap-y-8 ">
        {nav.map((item, index) => {
          // destructure item
          const { href, name, icon } = item;
          return (
            <li key={index}>
              <a className="text-xl text-300 link" href={href}>
                {name}
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileNav;
