import React from "react";

import help from "../../assets/images/contactUs/help.png";

const HelpSection = () => {
  return (
    <section className="flex flex-col-reverse  lg:flex-row  items-center justify-between px-6 sm:px-12 font-inter lg:px-24 py-12 bg-white">
      {/* Text Section */}
      <div className="text-center lg:text-left lg:max-w-md space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold ">
          How may We help <br />
          <span className="text-cDarkBlue ">You?</span>
        </h2>
        <p className="text-[#330C2F] text-base sm:text-lg">
          We’re available at all times to listen, guide, and support you in
          every step you take, guaranteeing a smooth experience from beginning
          to end.
        </p>
      </div>

      {/* Image Section */}
      <div className="mb-8 lg:mb-0 w-full lg:w-1/2 flex justify-center">
        <img
          src={help} // Replace with your image URL
          alt="Support team illustration"
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default HelpSection;
