import React from "react";
import Logo from "../assets/logo.png";
import { NavLinks } from "./NavLinks";

const Navbar = () => {
  return (
    <div className="w-full bg-white">
      <div className="flex items-center justify-between px-[7rem] py-6 font-medium">
        <div className="flex items-center">
          <img src={Logo} alt="logo" className="md:cursor-pointer w-[75px]" />
          <h1 className="text-2xl">Cherry Invitation</h1>
        </div>
        <ul>
          <li>
            <NavLinks />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
