import React from "react";
import mission from "../../assets/images/aboutUs/mission.svg";

const MissionSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white font-inter px-4 py-8 mx-20  md:px-8 md:py-12 gap-y-6">
      {/* Text Section */}
      <div className="flex-1 mb-6 md:mb-0 md:pr-8 text-center md:text-left">
        <h2 className="text-2xl font-bold text-cDarkBlue mb-4">OUR MISSION:</h2>
        <p className="text-base md:text-lg  text-left text-textGray leading-6">
          At <span className="font-semibold">ITSOLERA</span>, we strive to help
          companies leverage technology to grow and develop by providing them
          with the innovative solutions they need. Our mission is to deliver
          professional, client-specific IT solutions and professional
          development that enable clients to succeed in the modern digital
          environment. It is here that our priority is concentrated – safe,
          practically immortal, and environmentally sound solutions improving
          overall effectiveness and competitiveness.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src={mission}
          alt="Mission Visual"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
        />
      </div>
    </div>
  );
};

export default MissionSection;
