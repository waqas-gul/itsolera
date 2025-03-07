import React from "react";
import service from "../../assets/images/service/service.svg";

function CyberSecurityBanner() {
  return (
    <div className="relative w-full h-[400px] bg-gray-800 flex items-center font-inter">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${service})`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Text Section */}
      <div className="relative z-10 text-cWhite text-left ml-16 px-6 max-w-lg w-full">
        <h1 className="text-5xl font-bold mb-4">Cyber Security</h1>
        <p className="text-lg leading-relaxed">
          Protect your digital assets with our robust <br /> cybersecurity
          measures.
        </p>
      </div>
    </div>
  );
}

export default CyberSecurityBanner;
