import React from "react";
import Intro from "./pages/Intro";
import "../index.css";
import About from "./pages/About";
import Navbar from "./Navbar";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Intro />
      <Navbar />
      <About />
      <Work />
      <Contact />
    </>
  );
};
export default App;
