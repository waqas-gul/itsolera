import React from "react";
import train from "../../assets/images/traning/train.svg";

function Train() {
  return (
    <div className="relative w-full h-[400px] bg-gray-800 flex items-center font-inter">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${train})`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Text Section */}
      <div className="relative z-10 text-cWhite text-left ml-10 px-6 max-w-lg w-full">
        <p className="text-lg leading-relaxed">Innovate Smarter with AI</p>
        <h1 className="text-4xl font-bold mb-4">
          Empowering Innovation with Smart Solutions
        </h1>
        <p className="text-lg leading-relaxed">
          Leading the way in Artificial <br /> Intelligence  
        </p>
      </div>
    </div>
  );
}

export default Train;
