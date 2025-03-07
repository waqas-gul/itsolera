import React from "react";
import { motion } from "framer-motion";
import {
  FaCogs,
  FaLaptopCode,
  FaLightbulb,
  FaChalkboardTeacher,
  FaCheckCircle,
  FaUserFriends,
} from "react-icons/fa";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      icon: <FaCogs size={40} />,
      title: "Industry Leadership",
      description:
        "ITSOLERA stands at the forefront  of IT solutions, driving innovation and shaping the global technology landscape with our cutting-edge expertise and forward-thinking strategies.",
    },
    {
      id: 2,
      icon: <FaLaptopCode size={40} />,
      title: "Comprehensive Services",
      description:
        "We provide a broad spectrum of IT services, including cybersecurity, AI, cloud computing, blockchain, networking, digital marketing, and graphic design, tailored to address the specific needs of each client.",
    },
    {
      id: 3,
      icon: <FaLightbulb size={40} />,
      title: "Innovative Products",
      description:
        "Discover our range of innovative products, from advanced software solutions to specialized tools, engineered to boost productivity and enhance security while aligning with our clients' business goals.",
    },
    {
      id: 4,
      icon: <FaChalkboardTeacher size={40} />,
      title: "Cutting-edge Training Programs",
      description:
        "Our expert-led training programs are designed to equip individuals and teams with the latest tools and techniques across various fields, fostering continuous growth and success in the digital age.",
    },
    {
      id: 5,
      icon: <FaCheckCircle size={40} />,
      title: "Quality Assurance",
      description:
        "We uphold the highest standards of quality in every service, ensuring a reliable, efficient, and prompt delivery, securing consistent satisfaction and trust from our clients.",
    },
    {
      id: 6,
      icon: <FaUserFriends size={40} />,
      title: "Customer Focus",
      description:
        "ITSOLERA places a strong emphasis on understanding and meeting client needs with precision while aligning our solutions with their strategic objectives.",
    },
  ];

  return (
    <section className="w-full  bg-cDarkBlue  text-white py-16 px-6 sm:px-10 lg:px-20 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="relative mb-12 text-center sm:text-left">
          <h2 className="text-sm uppercase text-cWhite font-normal tracking-wide mb-2">
            Why Choose Us
          </h2>
          <h1 className="text-2xl sm:text-3xl font-semibold text-cWhite leading-tight">
            Achievements for ITSOLERA:
          </h1>
          {/* Decorative Star */}
          <div className="absolute right-8 sm:right-48 top-8 transform translate-x-[50%] -translate-y-[20%] hidden sm:block">
            <span className="text-cWhite text-4xl">★</span>
          </div>
        </div>
        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
          {achievements.map(({ id, icon, title, description }) => (
            <motion.div
              key={id}
              className="bg-cDarkBlue text-white border border-[#464d7d] p-8 sm:p-10 rounded-lg relative shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 6px 9px blue",
              }}
            >
              {/* Icon */}
              <div className="absolute -top-8 left-4 sm:left-6 bg-cWhite p-3 rounded-full border shadow-lg shadow-CPurple border-[#464d7d]">
                <div className="text-cDarkBlue">{icon}</div>
              </div>
              {/* Title */}
              <h3 className="mt-8 text-lg sm:text-xl font-medium text-cWhite">
                {title}
              </h3>
              {/* Description */}
              <p className="text-sm text-[#c2c4d5] mt-4 leading-relaxed text-justify">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
