import React from "react";
import Router from "./router/Router";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className="bg-200">
        {/* <Navbar /> */}
        <Router />
      </div>
    </>
  );
};

export default App;
