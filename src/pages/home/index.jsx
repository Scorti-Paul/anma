import React from "react";
import Showcase from "./components/showcase";
import About from "./components/about";

const Home = () => {
  return (
    <main className="px-6 md:px-16">
      <Showcase />
      <div className="md:px-12 mx-auto w-full">
        <About />
      </div>
    </main>
  );
};

export default Home;
