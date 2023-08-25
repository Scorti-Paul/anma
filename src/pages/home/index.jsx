import React from "react";
import Showcase from "./components/showcase";
import About from "./components/about";

const Home = () => {
  return (
    <main className="px-2 md:px-16">
      <Showcase />
      <div className="px-4 md:px-12 mx-auto w-full">
        <About />
      </div>
    </main>
  );
};

export default Home;
