import React from "react";

import { FaPython } from "react-icons/fa6";
import { GiLevelFourAdvanced } from "react-icons/gi";
import { MdDataThresholding } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { SiRescript } from "react-icons/si";
import { VscProject } from "react-icons/vsc";

const PythonServiceData = [
  {
    title: "Introduction to Python Programming:",
    description:
      "Begin your Python journey by exploring it’s fundamentals. Learn basic syntax, data types, and control structures. Discover how Python’s automation capabilities can streamline repetitive tasks and get inspired to build efficient, scalable applications from scratch.",
    icon: <FaPython />,
  },
  {
    title: "Advanced Python Concepts:",
    description:
      "Dive deeper into advanced Python features, including object-oriented programming, decorators, and generators, understand how to leverage Python’s capabilities to automate complex processes and enhance your coding efficiency. Gain inspiration to create robust and innovative solutions.",
    icon: <GiLevelFourAdvanced />,
  },
  {
    title: "Data Handling and Analysis:",
    description:
      "Learn to handle and analyze data using Python libraries like Pandas and NumPy. Automate data processing tasks and gain insights from data visualization tools. Discover how to use Python to inspire data-driven decisions and build powerful analytical applications.",
    icon: <MdDataThresholding />,
  },
  {
    title: "Web Development with Python:",
    description:
      "Explore Web Development frameworks such as Django and Flask . Learn to build dynamic web applications, automate backend processes, and integrate with databases. Find inspiration in developing scalable web solutions that meet user needs effectively.",
    icon: <CgWebsite />,
  },
  {
    title: "Automation and Scripting:",
    description:
      "Master Python’s automation and scripting capabilities efficient workflows. Use Python to streamline your processes and get inspired by innovative ways to enhance productivity.",
    icon: <SiRescript />,
  },
  {
    title: "Project Development & Best Practices:",
    description:
      "Apply your Python skills to real-world projects incorporating best practices in code quality and project management Learn to automate testing, deployment, and project tracking. Build a portfolio of impactful projects that showcase your ability to develop and inspire solutions.",
    icon: <VscProject />,
  },
];

const PythonService = () => {
  return (
    <div className="bg-[#0A1424] py-10 px-4 md:px-8 lg:px-16 font-inter">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-bold text-cWhite mb-4">
          "Your AI Journey Starts with Python"
        </h2>
        <p className="text-base md:text-lg   text-cWhite">
          Find the Right Python Course for You – AI Development, Data Science,
          and Beyond."
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        {PythonServiceData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-6 text-center shadow-sm transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer hover:border-cDarkBlue duration-300"
            style={{ backgroundColor: "#ffffff" }}
          >
            {/* Icon */}
            <div className="flex justify-center items-center text-5xl mb-4 text-cBrown">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-cDarkBlue mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-cDarkBlue">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Centered Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-gradient-to-r from-cDarkBlue to-CPurple text-cWhite font-medium py-2 px-6 rounded shadow-lg hover:opacity-90">
          ENROLL NOW →
        </button>
      </div>
    </div>
  );
};

export default PythonService;
