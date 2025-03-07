import React from "react";

import { IoWarningOutline } from "react-icons/io5";
import { FaBahai } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa";
import { FcDataProtection } from "react-icons/fc";
import { PiTelevisionDuotone } from "react-icons/pi";

const AiTrainingData = [
  {
    title: "Artificial Intelligence:",
    description:
      "This course is designed to equip participants with the knowledge and skills to understand, develop, and implement AI systems. Participants will learn about key AI concepts, algorithms, and techniques that allow machines to simulate human intelligence, solve complex problems, and adapt to different scenarios in real-world applications.",
    icon: <IoWarningOutline />,
  },
  {
    title: "Generative AI:",
    description:
      "This course aims to provide participants with an understanding of generative AI models, which create new content such as images, text, and music. Participants will explore advanced techniques like GANs and autoregressive models, learning how to generate creative outputs and apply these models to practical scenarios in design, entertainment, and beyond.",
    icon: <FaBahai />,
  },
  {
    title: "Machine Learning:",
    description:
      "This course focuses on providing participants with the skills to create machine learning models capable of analyzing data, recognizing patterns, and making predictions. Participants will explore various algorithms, learn to build models, and apply them to solve problems in fields such as finance, healthcare, and marketing.",
    icon: <FaUserLock />,
  },
  {
    title: "Deep Learning:",
    description:
      "Participants in this course will delve into deep learning, a subset of AI that focuses on using neural networks to model complex data patterns. Participants will gain hands-on experience in training deep learning models for applications like image recognition, natural language processing, and predictive analytics, applying these methods in various industries.",
    icon: <IoWarningOutline />,
  },
  {
    title: "NLP:",
    description:
      "This course is designed to teach participants the fundamentals of NLP, enabling them to process and analyze human language. Participants will gain skills in understanding text and speech, building applications such as chatbots and sentiment analysis, and applying these techniques to real-world tasks involving human-computer interaction.",
    icon: <FcDataProtection />,
  },
  {
    title: "Computer Vision:",
    description:
      "This course is designed to give participants the tools to understand and implement computer vision techniques, enabling machines to interpret and analyze visual information. Participants will learn to develop models that detect, classify, and track objects in images and video, applying these skills in fields like autonomous vehicles, healthcare, and security.",
    icon: <PiTelevisionDuotone />,
  },
];

const AiTraining = () => {
  return (
    <div className="bg-[#0B5B60] py-10 px-4 md:px-8 lg:px-16 font-inter">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-bold text-cWhite mb-4">
          Artificial Intelligence <span className="text-black">Training</span>
        </h2>
        <p className="text-base md:text-lg text-justify pr-20 pl-20 text-cWhite">
          Discover AI with our immersive training program. Gain practical
          experience developing and implementing AI solutions that drive
          real-world results.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        {AiTrainingData.map((item, index) => (
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

export default AiTraining;
