import React from "react";

function HeroSection() {
  return (
    <section className="bg-gray-950 text-white h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Welcome to <span className="text-indigo-500">Gopa's World</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Build stunning interfaces with React and Tailwind CSS. Fast. Elegant.
          Responsive.
        </p>
        <div className="flex justify-center gap-6">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
            Get Started
          </button>
          <button className="border border-indigo-500 hover:bg-indigo-600 hover:text-white text-indigo-400 font-semibold py-3 px-6 rounded-lg transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
