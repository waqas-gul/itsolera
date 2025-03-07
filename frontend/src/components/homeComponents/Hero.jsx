import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-white w-full h-auto py-16 font-inter px-6  sm:px-10 lg:px-16 xl:px-32 mt-4">
      <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center justify-between">
        {/* Right Section - Hero Image */}
        <div className="w-full lg:max-w-md mb-8 lg:mb-0">
          <img
            src="/images/hero.svg"
            alt="Hero Illustration"
            className="w-full max-w-[200px] sm:max-w-[400px] lg:max-w-full h-auto mx-auto"
          />
        </div>

        {/* Left Section - Text Content */}
        <div className="text-center lg:text-left lg:max-w-lg">
          <h1 className="text-gray-800 font-medium text-lg sm:text-xl lg:text-2xl">
            Welcome to <span className="text-primary">ITSOLERA</span>
          </h1>
          <h2 className="text-gray-800 font-bold text-3xl sm:text-4xl lg:text-4xl mb-6 leading-snug">
            Your Gateway to Innovative Technology Solutions
          </h2>
          <p className="text-black text-base sm:text-lg lg:text-xl font-medium mb-8 lg:mb-12 leading-relaxed text-justify">
            At ITSolera, we are not just driving digital transformation—we are
            redefining how individuals and businesses thrive in today’s
            fast-evolving tech landscape. Through our dynamic training programs,
            cutting-edge solutions, and innovative products, we empower you to
            harness the full potential of technology, unlocking endless
            opportunities for growth, innovation, and success. Let’s shape the
            future together and turn challenges into breakthroughs!
          </p>
          {/* New Enroll Now Button */}
          <Link to={"/enroll"}>
            <button
              type="button"
              className="bg-gradient-to-r from-cDarkBlue to-CPurple border border-CPurple text-cWhite ml-4 py-2 px-4 rounded-lg font-semibold cursor-pointer transition duration-300 ease-in-out hover:from-CPurple hover:to-cDarkBlue hover:border-cDarkBlue"
            >
              ENROLL NOW →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
