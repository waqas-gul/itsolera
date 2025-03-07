import React, { useContext } from "react";
import { AiFillProduct } from "react-icons/ai";
import { Link } from "react-router-dom";

import { FaLaptopCode } from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";

const cards = [
  // Updated key here
  {
    id: 1,
    icon: <AiFillProduct />,
    title: "Our Products",
    description:
      "At ITSOLERA, we offer a suite of innovative products designed to streamline operations, enhance productivity, and drive digital transformation. From advanced software solutions to state-of-the-art IT tools, our products are built to meet the evolving needs of modern businesses, empowering them to achieve sustainable growth.",
    cta: "Learn More",
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    title: "Our Training Programs",
    description:
      "Our comprehensive training programs at ITSOLERA equip individuals and teams with the latest skills and knowledge in technology and innovation. Tailored to various expertise levels, our hands-on approach ensures participants stay ahead in the fast-paced digital world, unlocking new opportunities for career and business growth.",
    cta: "Learn More",
  },
  {
    id: 3,
    icon: <MdMedicalServices />,
    title: "Our Services",
    description:
      "ITSOLERA provides a wide range of IT services that cater to your business needs, from cloud computing and cybersecurity to system integration and digital transformation consulting. Our expert team is committed to delivering personalized solutions that optimize your business performance and ensure long-term success in the digital era.",
    cta: "Learn More",
  },
];

const Features = () => {
  return (
    <section className="bg-cDarkBlue text-white  py-8 px-4 sm:py-16 sm:px-8 lg:px-32 font-inter">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {cards.map((card, index) => (
          <Link
            key={index}
            to={card.link} // Use `to` for navigation with react-router-dom
            className="bg-cWhite text-cDarkBlue rounded-lg w-full shadow-lg  py-4 px-6 text-center transform transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-CPurple flex flex-col justify-between h-auto sm:h-[442px] no-underline"
          >
            <div>
              {/* Centering the Icon */}
              <div className="text-4xl sm:text-5xl mb-4 font-semibold flex items-center justify-center">
                {card.icon}
              </div>
              <h3 className="text-sm sm:text-base font-bold mb-4">
                {card.title}
              </h3>
              <p className="text-xs sm:text-base">{card.description}</p>
            </div>
            <div className="text-cDarkBlue mt-6 text-sm sm:text-base font-bold flex items-center justify-center gap-2 hover:text-CPurple">
              {card.cta} <span>→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Features;
