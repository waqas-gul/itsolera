import React from "react";

export default function About() {
  return (
    <div className="relative bg-white px-6 lg:px-160 font-inter py-6 lg:py-[70px]">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Section: Text Content */}
        <div className="w-full lg:w-custom-544">
          <h3 className="font-normal uppercase tracking-wide text-sm lg:text-base text-cDarkBlue">
            About <span className="text-CPurple">ITSOLERA</span>
          </h3>
          <h2 className="text-2xl lg:text-3xl font-semibold leading-snug lg:leading-tight text-cDarkBlue mt-2">
            Company Info
          </h2>
          <p className="text-black text-sm lg:text-base leading-relaxed mt-3 lg:mt-4 pr-0 lg:pr-10 text-justify">
            Welcome to ITSOLERA, where we redefine the future of technology with
            our cutting-edge solutions. Our name, "Innovative Technology
            Solutions ERA," embodies our mission to drive digital transformation
            through exceptional IT services, targeted training programs, and
            advanced products.
          </p>
          <p className="text-black text-sm lg:text-base leading-relaxed mt-6 lg:mt-12 pr-0 lg:pr-10 text-justify">
            <span className="text-cDarkBlue font-normal">
              At ITSOLERA, we excel in delivering a broad spectrum of IT
              solutions, from <strong>Cybersecurity</strong> and{" "}
              <strong>Artificial Intelligence</strong> to{" "}
              <strong>Cloud Computing</strong> and <strong>Blockchain</strong>.
            </span>{" "}
            Our expertise also spans{" "}
            <strong>Networking, Digital Marketing, Graphic Design,</strong> and{" "}
            <strong>Application & Web Development</strong>. We are committed to
            crafting bespoke solutions that address the ever-evolving needs of
            our clients, empowering them to thrive in today’s digital landscape.
          </p>
        </div>

        {/* Right Section: Embedded YouTube Video */}
        <div className="flex justify-center lg:justify-end w-full lg:w-[534px]">
          <div className="video-container">
            <iframe
              className="video-frame"
              src="https://www.youtube.com/embed/PCEnUSzPIlw"
              title="ITSOLERA Team Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Responsive Styling */}
      <style>{`
        .video-container {
          width: 100%;
          height: auto;
          max-width: 534px;
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        }

        .video-frame {
          width: 100%;
          height: 300px;
        }

        @media (max-width: 1024px) {
          .video-frame {
            height: auto;
            aspect-ratio: 16 / 9;
          }
        }

        @media (min-width: 1025px) {
          .video-frame {
            height: 300px;
          }
        }

        @media (max-width: 768px) {
          .lg\\:flex-row {
            flex-direction: column;
          }
          .lg\\:w-custom-544 {
            width: 100%;
          }
          .lg\\:pr-10 {
            padding-right: 0;
          }
          .lg\\:leading-tight {
            line-height: 1.4;
          }
          .video-container {
            margin-top: -20px; /* Moves the video slightly upward */
          }
        }

        @media (max-width: 480px) {
          .video-container {
            margin-top: -30px; /* Further adjustment for very small screens */
          }
        }
      `}</style>
    </div>
  );
}
