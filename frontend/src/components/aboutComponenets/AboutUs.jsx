import React from "react";
import Rectangle from "../../assets/images/aboutUs/Rectangle.svg"; // Adjust the path based on your folder structure

const AboutUs = () => {
  return (
    <div className="relative h-screen overflow-y-auto font-inter">
      {/* Header Image Section */}
      <div className="relative h-screen w-full">
        <img
          src={Rectangle}
          alt="Teamwork"
          className="w-full h-full object-cover"
        />
        <h1 className="absolute top-1/3 left-6 sm:left-12 md:left-56 text-2xl sm:text-4xl md:text-6xl font-bold text-cWhite">
          ABOUT US
        </h1>
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10 bg-white pt-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* About Us Section */}
          <div className="text-justify px-4 sm:px-8 md:text-left md:px-16 lg:px-32">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4">
              Welcome to ITSOLERA, where we redefine the future of technology
              with our cutting-edge solutions. Our name, "Innovative Technology
              Solutions," defines our mission to drive digital transformation
              through exceptional IT services, targeted training programs, and
              advanced products.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4">
              At ITSOLERA, we excel in delivering a broad spectrum of IT
              solutions, from <strong>Cybersecurity</strong> and{" "}
              <strong>Artificial Intelligence</strong> to{" "}
              <strong>Cloud Computing</strong> and <strong>Blockchain</strong>.
              Our expertise also spans Networking, Digital Marketing, Graphic
              Design, and Application & Web Development, addressing the evolving
              needs of our clients, empowering them to thrive in today’s digital
              landscape.
            </p>
          </div>

          {/* Video Section */}
          <div className="flex justify-center mt-8 mb-12">
            <iframe
              className="w-full sm:w-3/4 lg:w-[534px] aspect-video rounded-lg border-4"
              style={{ borderColor: "#3C4073" }} // Custom frame color
              src="https://www.youtube.com/embed/PCEnUSzPIlw"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
