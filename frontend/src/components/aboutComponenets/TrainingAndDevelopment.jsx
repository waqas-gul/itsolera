import React from "react";
import Development from "../../assets/images/aboutUs/Development.png";

const TrainingAndDevelopment = () => {
  return (
    <div className="bg-gray-50 py-20 m-6 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        {/* Image with Gradient Background */}
        <div className="w-full lg:w-1/2 flex justify-center px-4 sm:px-6 lg:px-0 order-first lg:order-last">
          <div className="relative">
            {/* Image */}
            <img
              src={Development}
              alt="Training and Development"
              className="rounded-lg shadow-lg w-full sm:w-1/2 md:w-2/3 lg:max-w-xl"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center font-inter lg:text-left px-4 sm:px-6 lg:px-0 order-last lg:order-first">
          <h2 className="text-2xl sm:text-3xl font-bold text-cDarkBlue mb-4">
            Training and Development:
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
            Our vision is to be the world’s top-notch IT organization that
            enables the delivery of innovative solutions and services to the
            world. Our goal is to make a sustainable difference in the global
            society by making it more connected, secure, and smarter for a
            lifetime via our passion for delivering excellence and innovation in
            technology.
          </p>
          <button className="bg-gradient-to-r from-cDarkBlue to-CPurple text-cWhite font-medium py-2 mt-6 px-6 rounded shadow-lg hover:opacity-90">
            EXPLORE NOW →
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainingAndDevelopment;
