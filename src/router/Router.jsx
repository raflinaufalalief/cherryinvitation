import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Design from "../pages/Design";
import Portfolio from "../pages/Portfolio";
// import SignIn from "../pages/SignIn";
// import SignUp from "../pages/SignUp";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<Design />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} /> */}
      </Routes>
    </>
  );
};

export default Router;
