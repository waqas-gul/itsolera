import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import Itsolera from "../assets/images/Itsolera.png";
import Itsolera from "../../assets/images/Itsolera.png";

const TrainingPrograms = () => {
  return (
    <div className="bg-cgray py-16 px-4 font-inter">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-sm font-medium text-cDarkBlue mb-4 uppercase tracking-wide">
          Our Trainings
        </h2>
        <h3 className="text-[28px] md:text-[34px] font-bold text-cDarkBlue mb-6">
          Comprehensive Training Programs
        </h3>
        <p className="text-base md:text-lg text-cDarkBlue max-w-3xl mx-auto">
          At ITSOLERA, we are committed to empowering both individuals and
          organizations with the skills and knowledge needed to excel in today's
          fast-evolving IT landscape. Our comprehensive training programs cover
          a wide range of topics, providing hands-on experience and practical
          insights to drive career growth and organizational success.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 md:px-16 lg:px-24 mt-[40px]">
        {/* Card 1 */}
        <Link
          to="/ai-training"
          className="bg-cWhite shadow-lg rounded-lg hover:shadow-CPurple p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <img
            src={Itsolera}
            alt="ITSOLERA Logo"
            className="mx-auto mb-6 w-28 sm:w-32 md:w-36"
          />
          <h4 className="text-xl md:text-2xl font-semibold text-cDarkBlue mb-2">
            Artificial Intelligence
          </h4>
          <h5 className="text-base font-semibold text-cDarkBlue mb-4">
            Artificial Intelligence Training
          </h5>
          <p className="text-sm md:text-base text-textGray mb-6">
            Discover AI with our immersive training program. Gain practical
            experience developing and implementing AI solutions that drive
            real-world results.
          </p>
          <div className="flex justify-center items-center">
            <div className="bg-gradient-to-r from-cDarkBlue to-CPurple rounded w-[154px] p-[2px] shadow-lg  transition-all duration-300 group hover:scale-105">
              <button className="bg-cWhite text-gray-800 font-medium py-2 px-6 rounded w-full h-full transition duration-300 ease-in-out group-hover:bg-gradient-to-r group-hover:from-cDarkBlue group-hover:to-CPurple group-hover:text-cWhite">
                Explore More
              </button>
            </div>
          </div>
        </Link>

        {/* Card 2 */}
        <Link
          to="/cyber-security-training"
          className="bg-cWhite shadow-lg hover:shadow-CPurple rounded-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <img
            src={Itsolera}
            alt="ITSOLERA Logo"
            className="mx-auto mb-6 w-28 sm:w-32 md:w-36"
          />
          <h4 className="text-xl md:text-2xl font-semibold text-cDarkBlue mb-2">
            Cyber Security
          </h4>
          <h5 className="text-base font-semibold text-cDarkBlue mb-4">
            Cyber Security Training
          </h5>
          <p className="text-sm md:text-base text-textGray mb-6">
            Master the skills to safeguard digital systems and tackle cyber
            threats with practical, expert-led training and real-world
            experience.
          </p>
          <div className="flex justify-center items-center">
            <div className="bg-gradient-to-r from-cDarkBlue to-CPurple rounded w-[154px] p-[2px] shadow-lg transition-all duration-300 group hover:scale-105">
              <button className="bg-cWhite text-gray-800 font-medium py-2 px-6 rounded w-full h-full transition duration-300 ease-in-out group-hover:bg-gradient-to-r group-hover:from-cDarkBlue group-hover:to-CPurple group-hover:text-cWhite">
                Explore More
              </button>
            </div>
          </div>
        </Link>

        {/* Card 3 */}
        <Link
          to="/iot-training"
          className="bg-cWhite shadow-lg hover:shadow-CPurple rounded-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <img
            src={Itsolera}
            alt="ITSOLERA Logo"
            className="mx-auto mb-6 w-28 sm:w-32 md:w-36"
          />
          <h4 className="text-xl md:text-2xl font-semibold text-cDarkBlue mb-2">
            Internet of Things
          </h4>
          <h5 className="text-base font-semibold text-cDarkBlue mb-4">
            Internet of Things Training
          </h5>
          <p className="text-sm md:text-base text-textGray mb-6">
            Master IoT fundamentals with our practical training. Learn to design
            and manage smart interconnected systems that boost innovation and
            efficiency.
          </p>
          <div className="flex justify-center items-center">
            <div className="bg-gradient-to-r from-cDarkBlue to-CPurple rounded w-[154px] p-[2px] shadow-lg transition-all duration-300 group hover:scale-105">
              <button className="bg-cWhite text-gray-800 font-medium py-2 px-6 rounded w-full h-full transition duration-300 ease-in-out group-hover:bg-gradient-to-r group-hover:from-cDarkBlue group-hover:to-CPurple group-hover:text-cWhite">
                Explore More
              </button>
            </div>
          </div>
        </Link>
      </div>

      {/* Centered Enroll Now button */}
      <div className="flex justify-center mt-[40px] md:mt-[56px]">
        <Link to="/enroll">
          <button className="bg-gradient-to-r from-cDarkBlue to-CPurple text-cWhite font-medium py-2 px-6 rounded shadow-lg hover:opacity-90 transition duration-300 ease-in-out">
            Enroll Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TrainingPrograms;
