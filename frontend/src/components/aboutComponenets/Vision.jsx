import React from "react";
import vision from "../../assets/images/aboutUs/vision.svg";

const Vision = () => {
  return (
    <div className="flex flex-col-reverse font-inter md:flex-row items-center bg-white px-4 py-8 lg-mx-20 sm:mx-8 md:px-8 md:py-12 gap-y-6">
      {/* Text Section */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src={vision}
          alt="Vision Visual"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
        />
      </div>
      <div className="flex-1 md:pr-8  mx-6 sm:text-left md:text-left ">
        <h2 className="text-2xl font-bold text-cDarkBlue mb-4">OUR VISION:</h2>
        <p className="text-base md:text-lg text-textGray leading-6">
          Our vision is to be the world’s top-notch IT organization that enables
          the delivery of innovative solutions and services to the world. Our
          goal is to make a sustainable difference in the global society by
          making it more connected, secure, and smarter for a lifetime via our
          passion for delivering excellence and innovation in technology.
        </p>
      </div>

      {/* Image Section */}
    </div>
  );
};

export default Vision;
