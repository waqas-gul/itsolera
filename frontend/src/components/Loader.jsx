import React from "react";
import logo from "../assets/images/Itsolera.svg";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-cWhite z-50 font-inter">
      <div className="relative w-[200px] h-[200px]">
        {/* Outer Spinning Circle */}
        <div className="absolute inset-0 w-full h-full border-2 border-transparent border-l-cDarkBlue border-b-cWhite border-r-CPurple border-t-cWhite rounded-full animate-spin"></div>

        {/* Inner Circle with cWhite Background */}
        <div className="absolute inset-2 w-3/4 h-3/4 bg-cWhite rounded-full flex items-center justify-center">
          {/* Logo Image */}
          <img
            src={logo}
            alt="Logo"
            className="w-3/4 h-3/4 object-contain animate-bounce"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
