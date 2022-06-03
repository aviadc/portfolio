import React from "react";
import Intro from "./pages/Intro";
import "../index.css";
import About from "./pages/About";
import Navbar from "./Navbar";
import Work from "./pages/Work";

const App = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Work />
    </>
  );
};
export default App;
