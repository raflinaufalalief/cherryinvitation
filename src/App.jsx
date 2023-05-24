import React from "react";
import Router from "./router/Router";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Navbar />
        <Router />
      </div>
    </>
  );
};

export default App;
