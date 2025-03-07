import React from "react";
import { PiStudentFill } from "react-icons/pi";

function CourseBanner() {
  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center  flex items-center font-inter text-cWhite"
      style={{
        backgroundImage: "url('/images/enroll/enroll.svg')", // Replace with the actual path to your image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase">
          Our Courses
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
        Explore courses like AI, Digital Marketing, Web Development, and Cyber Security to enhance your skills and stay ahead in the digital era.
        </p>

      </div>
    </div>
  );
}

export default CourseBanner;
