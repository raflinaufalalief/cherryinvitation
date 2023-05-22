import React, { useEffect, useState } from "react";
// import data
import { header } from "../data";
// import icons
import { HiMenuAlt4, HiOutlineX } from "react-icons/hi";
// import components
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Navbar = () => {
  // mobile nav state
  const [mobileNav, setMobileNav] = useState(false);
  // dekstop nav state
  const [isActive, setIsActive] = useState(false);
  // destructure header data
  const { logo, btnText } = header;
  // scroll eventclassName="text-3xl text-accent"
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <>
      <nav
        className={`${
          isActive ? "lg:top-0 bg-primary shadow-md" : "lg:top-[20px]"
        } py-6 lg:py-4 fixed w-full transition-all z-10`}
      >
        <div className="container flex items-center justify-between mx-auto ">
          {/* logo */}
          <a href="/">
            <img src={logo} alt="" width={175} />
          </a>
          {/* nav - initially hidden - show on dekstop mode */}
          <div className="hidden lg:flex">
            <Nav />
          </div>
          {/* cta button - initially hidden - show on dekstoop mode */}
          <button className="hidden btn btn-sm btn-outline lg:flex">
            {btnText}
          </button>
          {/* mobile nav trigger btn - hidden on dekstop */}
          <button
            className="lg:hidden"
            onClick={() => setMobileNav(!mobileNav)}
          >
            {mobileNav ? (
              <HiOutlineX className="text-3xl text-secondary" />
            ) : (
              <HiMenuAlt4 className="text-3xl text-secondary" />
            )}
          </button>
          {/* mobile nav - hidden on dekstop */}
          <div
            className={`${
              mobileNav ? "left-0" : "-left-full"
            }   fixed top-0 bottom-0 w-[60vw] lg:hidden transition-all `}
          >
            <MobileNav />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
